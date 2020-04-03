import { traverseSchema } from './traverseSchema'

import { IGenericType, JSONSchema } from 'src/interface'

const hasGenericSymbol = (name: string) => {
  return name.includes('<')
}

export const parseGenericType = (ref: string): IGenericType => {
  const left = '<'
  // const right = '>'
  if (ref.startsWith(left)) {
    throw new Error(`${ref} shoud not starts with ${left}`)
  }
  if (ref.includes(left)) {
    const name = ref.match(/^[^<]+/)![0]
    if (name) {
      /** "abc«def»" => def */
      const otherName = ref.slice(name.length + 1, ref.length - 1)
      if (otherName.includes(',')) {
        return {
          name,
          children: otherName.split(',').map(n => parseGenericType(n)),
        }
      }
      if (otherName.includes(left)) {
        return {
          name,
          children: [...([parseGenericType(otherName)] || ([] as IGenericType[]))],
        }
      }
      return {
        name,
        children: [
          {
            name: otherName,
          },
        ],
      }
    }
  }
  return {
    name: ref,
  }
}

const isDefinedGeneric = (name: string, schema: JSONSchema) => {
  const definitions = schema.definitions!
  return name
    .split(/<|>/)
    .filter(Boolean)
    .every(n => n in definitions)
}

const removeGenericSymbol = (name: string) => name.replace(/<|>/g, '')

/**
 * trim any not defined generic name to normal variable name
 * remove all "<" and ">" in name
 * */
export const simplifyGenericNameInSchema = (schema: JSONSchema) => {
  // if (hasGenericSymbol(name)) {
  //   const gName = parseGenericType(name)
  //   traverse(gName).forEach(function(value) {
  //     if (value.name && value.name in schema.definitions!) {
  //       value.hasDefinition = true
  //     }
  //   })
  // }
  const definitions = schema.definitions!
  Object.keys(definitions).forEach(name => {
    if (hasGenericSymbol(name)) {
      if (!isDefinedGeneric(name, schema)) {
        const origin = definitions[name]
        definitions[removeGenericSymbol(name)] = origin
        delete definitions[name]
      }
    }
  })
  traverseSchema(schema, ({ value, key, parent }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (hasGenericSymbol(value)) {
        console.log(value, hasGenericSymbol(value), isDefinedGeneric(value, schema))
        if (!isDefinedGeneric(value, schema)) {
          parent.$ref = removeGenericSymbol(value)
          console.log(parent.$ref)
        }
      }
    }
  })
}
