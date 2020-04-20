import { isEqual } from 'lodash'

import { ISwaggerDefinition, IGenericNameNode, IDefinitionMap } from 'src/interface'

export const hasGenericSymbol = (name: string) => {
  return name.includes('<')
}

export const removeGenericSymbol = (name: string) => name.replace(/<|>|,/g, '')

/** process generic type name */
export const parseGenericNames = (name: string) => {
  let currentNode: IGenericNameNode = { name: '', level: 0 }
  let parentNode: IGenericNameNode | undefined = currentNode
  let nestLevel = 0
  const result: IGenericNameNode[] = [currentNode]
  for (let i = 0; i < name.length; i += 1) {
    const c = name[i]
    if (c === '<') {
      currentNode.level = nestLevel
      parentNode = currentNode
      currentNode = { name: '', level: nestLevel, parent: parentNode }
      parentNode.children = parentNode.children || []
      parentNode.children.push(currentNode)
      nestLevel += 1
      result.push(currentNode)
    } else if (c === '>') {
      parentNode = parentNode!.parent
      if (currentNode.name) {
        currentNode.level = nestLevel
        currentNode = { name: '', level: nestLevel, parent: parentNode }
      }
      nestLevel -= 1
    } else if (c === ',') {
      currentNode = { name: '', level: nestLevel, parent: parentNode }
      parentNode!.children!.push(currentNode)
      result.push(currentNode)
    } else {
      currentNode.name += c
    }
  }
  return result
}

/** from generic name node to name string
 * reverse of parseGenericNames
 * */
export const getGenericNameFromNode = (node: IGenericNameNode): string => {
  const { name, children } = node
  if (!children) {
    return name
  }
  return `${name}<${children.map(c => getGenericNameFromNode(c)).join(',')}>`
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

export const isSameGenericType = (definition1: ISwaggerDefinition, definition2: ISwaggerDefinition) => {
  return isEqual(
    {
      typeName: definition1.typeName,
      typeParameterSize: definition1.typeParameters ? definition1.typeParameters.length : 0,
    },
    {
      typeName: definition2.typeName,
      typeParameterSize: definition2.typeParameters ? definition2.typeParameters.length : 0,
    },
  )
}
