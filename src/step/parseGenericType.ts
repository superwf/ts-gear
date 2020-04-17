import { traverseSchema } from 'src/tool/traverseSchema'
import { getGlobal } from 'src/global'
import { hasGenericSymbol, removeGenericSymbol, parseGenericNames } from 'src/tool/genericType'
// import { cleanName } from 'src/tool/cleanName'
import { IProject, IProjectGlobal } from 'src/interface'
// import { sow, harvest } from 'src/source'

/** check generic type
 * support one level, as A<B> or A<B,C>
 * not support nesting level, as A<B<C>>, in this situation, "B<C>" will be treated as a whole type.
 *
 * if the type parameter does not exist in the definition schema, convert the name to normal type, remove all "<" and ">".
 * */
export const checkAndUpdateDefinitionTypeName = (projectGlobal: IProjectGlobal) => {
  const { definitionMap } = projectGlobal
  Object.getOwnPropertyNames(projectGlobal.definitionMap).forEach(definitionName => {
    const definition = definitionMap[definitionName]
    if (hasGenericSymbol(definition.typeName)) {
      /** generac type */
      const { parent: typeName, children: typeParameters, childMap } = parseGenericNames(definitionName)
      // console.log(typeName, typeParameters)
      // const typeParameters = definitionName.replace(/(^[^<]+<)|(>$)/, '').split(',')
      if (definition.schema) {
        const inSelfMap = typeParameters.reduce<{ [subTypeName: string]: boolean }>((r, v) => {
          r[v] = false
          return r
        }, {})
        typeParameters.forEach(subTypeName => {
          traverseSchema(definition.schema!, ({ value, key, parent }) => {
            if (key === '$ref' && value === childMap[subTypeName]) {
              // anyway, remove all sub type name generic symbol
              parent.$ref = subTypeName
              inSelfMap[subTypeName] = true
            }
          })
        })
        if (Object.values(inSelfMap).every(Boolean)) {
          definition.typeName = typeName
          definition.typeParameters = typeParameters
          /**
           * and create a new definition with the typeName as key
           * */
          definitionMap[typeName] = {
            ...definition,
          }
        } else {
          definition.typeName = removeGenericSymbol(definitionName)
        }
      }
    }
  })
}

export const checkAndUpdateRequestRef = (projectGlobal: IProjectGlobal) => {
  const { definitionMap, requestMap, requestRefs } = projectGlobal
  Object.values(requestMap).forEach(request => {
    traverseSchema(request.schema, ({ value, key }) => {
      if (key === '$ref' && typeof value === 'string') {
        if (!definitionMap[value]) {
          if (hasGenericSymbol(value)) {
            const { parent, children } = parseGenericNames(value)
          } else {
            definitionMap[value] = {
              typeName: value,
              typescriptContent: `type ${value} = any`,
            }
          }
        }
        // refMap[value] = definitionMap[value]
      }
    })
  })
}

export const parseGenericType = (project: IProject) => {
  const projectGlobal = getGlobal(project)
  checkAndUpdateDefinitionTypeName(projectGlobal)
  // checkAndUpdateRequestRef(projectGlobal)
}
