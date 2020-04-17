import { traverseSchema } from 'src/tool/traverseSchema'
import { getGlobal } from 'src/global'
import { hasGenericSymbol, removeGenericSymbol, parseGenericNames, getGenericNameFromNode } from 'src/tool/genericType'
// import { cleanName } from 'src/tool/cleanName'
import { IProject, IProjectGlobal, ISwaggerDefinition, IGenericNameNode, IDefinitionMap } from 'src/interface'
import { exportAnyType } from 'src/tool/exportAnyType'
// import { sow, harvest } from 'src/source'

/** check generic type
 * support nest level, as A<B> or A<B,C<D>>
 * if the type parameter does not exist in the definition schema, convert the name to normal type, remove all "<" and ">".
 * */
export const checkAndUpdateDefinitionTypeName = (projectGlobal: IProjectGlobal) => {
  const { definitionMap } = projectGlobal
  /** record */
  const parseFailedDefinitions: ISwaggerDefinition[] = []
  Object.getOwnPropertyNames(projectGlobal.definitionMap).forEach(definitionName => {
    const definition = definitionMap[definitionName]
    if (hasGenericSymbol(definitionName)) {
      /** generac type */
      const [parentNode] = parseGenericNames(definitionName)
      const typeParameters = parentNode.children!.map(node => getGenericNameFromNode(node))
      if (definition.schema) {
        const refNames: string[] = []
        traverseSchema(definition.schema!, ({ value, key }) => {
          if (key === '$ref' && typeof value === 'string') {
            refNames.push(value)
          }
        })
        // console.log(typeParameters)
        const allTypeParametersInSchemaRef = typeParameters.every(typeName => refNames.includes(typeName))
        if (allTypeParametersInSchemaRef) {
          definition.typeName = parentNode.name
          definition.typeParameters = typeParameters.map(subTypeName => {
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
          }
        } else {
          parseFailedDefinitions.push(definition)
        }
      }
    }
  })
  if (parseFailedDefinitions.length > 0) {
    /** 处理解析失败的定义
     * 在definitionMap添加新类型
     * */
    parseFailedDefinitions.forEach(definition => {
      definition.typeName = removeGenericSymbol(definition.typeName)
      traverseSchema(definition.schema!, ({ value, key, parent }) => {
        if (key === '$ref' && hasGenericSymbol(value)) {
          const nodes = parseGenericNames(value)
          if (!nodes.every(node => node.name in definitionMap)) {
            const name = removeGenericSymbol(value)
            parent.$ref = name
            definitionMap[name] = {
              typeName: name,
              typescriptContent: exportAnyType(name),
            }
          }
        }
      })
    })
  }
}

/** try hard to keep every nest level generic name
 * if exist in definitionMap keep it
 * else remove generic symbol: <>
 * */
export const guessGenericTypeName = (node: IGenericNameNode, definitionMap: IDefinitionMap): string => {
  const name = getGenericNameFromNode(node)
  if (!(node.name in definitionMap)) {
    return removeGenericSymbol(name)
  }
  if (!node.children) {
    return node.name
  }
  return `${node.name}<${node.children.map(c => guessGenericTypeName(c, definitionMap)).join(',')}>`
}

export const checkAndUpdateRequestRef = (projectGlobal: IProjectGlobal) => {
  const { definitionMap, requestMap, requestRefMap } = projectGlobal
  Object.values(requestMap).forEach(request => {
    traverseSchema(request.schema, ({ value, key, parent }) => {
      if (key === '$ref' && typeof value === 'string') {
        if (value in definitionMap) {
          requestRefMap[value] = definitionMap[value]
        } else if (hasGenericSymbol(value)) {
          const nodes = parseGenericNames(value)
          const allExistInDefinitionMap = nodes.every(node => {
            if (node.children) {
              return node.children.every(c => c.name)
            }
            return node.name in definitionMap
          })
          if (!allExistInDefinitionMap) {
            const name = guessGenericTypeName(nodes[0], definitionMap)
            parent.$ref = name
            name
              .split(/<|>|,/g)
              .filter(Boolean)
              .forEach(n => {
                if (!(n in definitionMap)) {
                  definitionMap[n] = {
                    typeName: n,
                    typescriptContent: exportAnyType(n),
                  }
                  requestRefMap[n] = definitionMap[n]
                }
              })
          }
        } else {
          definitionMap[value] = {
            typeName: value,
            typescriptContent: exportAnyType(value),
          }
          requestRefMap[value] = definitionMap[value]
        }
      }
    })
  })
}

export const parseGenericType = (project: IProject) => {
  const projectGlobal = getGlobal(project)
  // process definition must run first
  checkAndUpdateDefinitionTypeName(projectGlobal)
  // then process $ref in requestMap
  checkAndUpdateRequestRef(projectGlobal)
}
