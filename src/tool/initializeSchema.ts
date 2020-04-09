import { EOL } from 'os'

import { forEach, upperFirst, camelCase } from 'lodash'

import { traverseSchema } from './traverseSchema'
import { cleanName } from './cleanName'
import { translateSchema } from './translate'
// import { simplifyGenericNameInSchema } from './parseGenericType'
import { getDefinition } from './getDefinition'

import { refMap, definitionMap, requestMap } from 'src/global'
import { HttpMethod, JSONSchema, IProject } from 'src/interface'

/** use cleanName for all "$ref" and "definitions" names
 * */
export const cleanRefAndDefinitionNameInSchema = (schema: JSONSchema) => {
  const definitions = getDefinition(schema)
  Object.getOwnPropertyNames(definitions).forEach(name => {
    const newName = cleanName(name)
    if (newName !== name) {
      const origin = definitions[name]
      delete definitions[name]
      definitions[newName] = origin
    }
  })
  traverseSchema(schema, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      value = cleanName(value)
      parent.$ref = cleanName(value)
    }
  })
}

// export const collectRefInSchema = (schema: JSONSchema) => {
//   // 所有没有在definitions定义的$ref，都转换成type any
//   const $refsNotInDefinitions: Set<string> = new Set()
//   // 所有paths中的$ref
//   const $refsInPaths: Set<string> = new Set()
//   const definitions = schema.definitions!
//   traverseSchema(schema, ({ value, parent, key, path }) => {
//     if (key === '$ref' && typeof value === 'string') {
//       if (!Reflect.has(definitions, parent.$ref)) {
//         $refsNotInDefinitions.add(parent.$ref)
//       }
//       if (path[0] === 'paths') {
//         $refsInPaths.add(parent.$ref)
//       }
//     }
//   })

//   return {
//     $refsNotInDefinitions: Array.from($refsNotInDefinitions),
//     $refsInPaths: Array.from($refsInPaths),
//   }
// }

/**
 * step1 deal with all $ref and keys in definitions
 * step2 translate unregular words
 * */
export const initializeSchema = async (schema: JSONSchema, project: IProject) => {
  if (project.translationEngine) {
    await translateSchema(schema, project.translationEngine)
  }
  cleanRefAndDefinitionNameInSchema(schema)
}
