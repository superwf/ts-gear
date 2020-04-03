import { traverseSchema } from './traverseSchema'
import { cleanName } from './cleanName'
import { translateSchema } from './translate'
import { simplifyGenericNameInSchema } from './parseGenericType'

import { JSONSchema, IProject } from 'src/interface'

/** remove all "#/definitions/" prefix in "$ref"
 * remove all space in "$ref" and "definitions" names
 * replace all "«" to "<", "»" to ">"
 * */
export const cleanRefAndDefinitionNameInSchema = (schema: JSONSchema) => {
  traverseSchema(schema, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      value = cleanName(value)
      parent.$ref = cleanName(value)
    }
    if (key === 'definitions') {
      Object.keys(value).forEach(k => {
        const newKey = cleanName(k)
        if (newKey !== k) {
          const origin = value[k]
          delete value[k]
          value[cleanName(k)] = origin
        }
      })
    }
  })
}

export const collectRefInSchema = (schema: JSONSchema) => {
  // 所有没有在definitions定义的$ref，都转换成type any
  const $refsNotInDefinitions: Set<string> = new Set()
  // 所有paths中的$ref
  const $refsInPaths: Set<string> = new Set()
  const definitions = schema.definitions!
  traverseSchema(schema, ({ value, parent, key, path }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (!Reflect.has(definitions, parent.$ref)) {
        $refsNotInDefinitions.add(parent.$ref)
      }
      if (path[0] === 'paths') {
        $refsInPaths.add(parent.$ref)
      }
    }
  })

  return {
    $refsNotInDefinitions: Array.from($refsNotInDefinitions),
    $refsInPaths: Array.from($refsInPaths),
  }
}

/**
 * step1 deal with all $ref and keys in definitions
 * step2 translate unregular words
 * */
export const initializeSchema = async (schema: JSONSchema, project: IProject) => {
  cleanRefAndDefinitionNameInSchema(schema)
  if (project.translationEngine) {
    await translateSchema(schema, project.translationEngine)
  }
  simplifyGenericNameInSchema(schema)
  // console.log(schema)
}
