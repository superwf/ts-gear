import { traverseSchema, traverse$Ref } from '../tool/traverseSchema'
import { getGlobal } from '../projectGlobalVariable'
import {
  hasGenericSymbol,
  removeGenericSymbol,
  parseGenericNames,
  getGenericNameFromNode,
  guessGenericTypeName,
} from '../tool/genericType'
import { IProject, IProjectGlobal, ISwaggerDefinition } from '../interface'
import { patchGlobalDefinitionMap } from '../tool/patchGlobalDefinitionMap'

/** check generic type
 * support nest level, as A<B> or A<B,C<D>>
 * if the type parameter does not exist in the definition schema, convert the name to normal type, remove all "<" and ">".
 * */
export const checkAndUpdateDefinitionTypeName = (projectGlobal: IProjectGlobal) => {
  const { definitionMap } = projectGlobal
  /** store parse failed definitions
   * e.g.
   * name is PageVO<List<User>>，but "List" or "User" does not exist in schema $ref, then it is a failed one.
   * */
  const parseFailedDefinitions: ISwaggerDefinition[] = []
  Object.getOwnPropertyNames(projectGlobal.definitionMap).forEach((definitionName) => {
    const definition = definitionMap[definitionName]
    if (hasGenericSymbol(definitionName)) {
      if (definition.schema) {
        const [parentNode] = parseGenericNames(definitionName)
        if (parentNode.name in definition) {
          return
        }
        const typeParameters = parentNode.children!.map((node) => getGenericNameFromNode(node))
        const refNames = new Set<string>()
        traverse$Ref(definition.schema!, (value) => {
          refNames.add(value)
        })
        // console.log(typeParameters)
        const allTypeParametersInSchemaRef = typeParameters.every((typeName) => refNames.has(typeName))
        if (allTypeParametersInSchemaRef) {
          definition.typeParameters = typeParameters.map((subTypeName) => {
            traverseSchema(definition.schema!, ({ value, key, parent }) => {
              if (key === '$ref' && value === subTypeName) {
                parent.$ref = removeGenericSymbol(subTypeName)
              }
            })
            return removeGenericSymbol(subTypeName)
          })
          /**
           * add an alias definition with the typeName as key
           * no schema, no typescriptcontent
           * */
          definitionMap[parentNode.name] = {
            typeName: parentNode.name,
            schema: definition.schema,
            typeParameters: definition.typeParameters,
          }
          // add an alias for original generic type name
          definition.typescriptContent = `export type ${removeGenericSymbol(definitionName)} = ${
            parentNode.name
          }<${typeParameters.join(',')}>`
          // typeParameters name may be nest generic type
          // e.g A<B<C>>
          typeParameters.forEach((typeName) => {
            if (!(typeName in definitionMap)) {
              const nodes = parseGenericNames(typeName)
              nodes.forEach((node) => {
                patchGlobalDefinitionMap({ typeName: node.name, definitionMap })
              })
            }
          })
        } else {
          parseFailedDefinitions.push(definition)
        }
      }
    }
  })
  if (parseFailedDefinitions.length > 0) {
    /** process the failed definition
     * add to definitionMap an "any" alias.
     * */
    parseFailedDefinitions.forEach((definition) => {
      definition.typeName = removeGenericSymbol(definition.typeName)
      traverseSchema(definition.schema!, ({ value, key, parent }) => {
        if (key === '$ref' && !(value in definitionMap)) {
          if (hasGenericSymbol(value)) {
            const nodes = parseGenericNames(value)
            if (!nodes.every((node) => node.name in definitionMap)) {
              const name = guessGenericTypeName(nodes[0], definitionMap)
              parent.$ref = name
              name
                .split(/<|>|,/g)
                .filter(Boolean)
                .forEach((n) => {
                  if (!(n in definitionMap)) {
                    patchGlobalDefinitionMap({ typeName: n, definitionMap })
                  }
                })
            }
          } else {
            patchGlobalDefinitionMap({ typeName: value, definitionMap })
          }
        }
      })
    })
  }
  // after all definition typeName processed
  // some definitionMap key and typeName are different
  // this step sync each $ref with its definitionMap typeName
  traverseSchema(definitionMap, ({ value, key, parent }) => {
    if (key === '$ref' && hasGenericSymbol(value) && value in definitionMap) {
      parent[key] = definitionMap[value].typeName
    }
  })
}

export const checkAndUpdateRequestRef = (projectGlobal: IProjectGlobal) => {
  const { definitionMap, requestMap } = projectGlobal
  Object.values(requestMap).forEach((request) => {
    traverseSchema(request.schema, ({ value, key, parent }) => {
      if (key === '$ref' && typeof value === 'string') {
        if (value in definitionMap) {
          parent.$ref = definitionMap[value].typeName
        } else if (hasGenericSymbol(value)) {
          const nodes = parseGenericNames(value)
          const allExistInDefinitionMap = nodes.every((node) => {
            return node.name in definitionMap
          })
          if (!allExistInDefinitionMap) {
            const name = guessGenericTypeName(nodes[0], definitionMap)
            parent.$ref = name
            name
              .split(/<|>|,/g)
              .filter(Boolean)
              .forEach((n) => {
                if (!(n in definitionMap)) {
                  patchGlobalDefinitionMap({ typeName: n, definitionMap })
                }
              })
          }
        } else {
          patchGlobalDefinitionMap({ typeName: value, definitionMap })
        }
      }
    })
  })
}

export const parseGenericType = (project: IProject) => {
  const projectGlobal = getGlobal(project)
  // first process definition
  checkAndUpdateDefinitionTypeName(projectGlobal)
  // then process $ref in requestMap
  checkAndUpdateRequestRef(projectGlobal)
}
