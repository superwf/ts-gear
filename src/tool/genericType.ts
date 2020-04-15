import { isEqual } from 'lodash'

import { ISwaggerDefinition } from 'src/interface'

export const hasGenericSymbol = (name: string) => {
  return name.includes('<')
}

export const removeGenericSymbol = (name: string) => name.replace(/<|>|,/g, '')

/** process only one level generic type
 * A<B,C> => {parent: 'A', children: ['B', 'C']}
 * A<B<C>> => {parent: 'A', children: ['B<C>']}
 * */
export const parseGenericNames = (name: string) => {
  const parent = name.replace(/<.+$/i, '')
  const children = name.replace(/(^.+?<)|(>$)/gi, '')
  return {
    parent,
    children: children.split(','),
  }
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
