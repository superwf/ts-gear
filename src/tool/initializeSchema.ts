import { EOL } from 'os'

import { forEach, upperFirst, camelCase } from 'lodash'

import { traverseSchema } from './traverseSchema'
import { cleanName } from './cleanName'
import { translateSchema } from './translate'
import { simplifyGenericNameInSchema } from './parseGenericType'

import { refMap, definitionMap, discriminatorMap } from 'src/global'
import { HttpMethod, JSONSchema, IProject, ISwaggerDefinition, ISwaggerRequest } from 'src/interface'

/** remove all "#/definitions/" prefix in "$ref"
 * remove all space in "$ref" and "definitions" names
 * replace all "«" to "<", "»" to ">"
 * save all cleaned name in global var refMap and definitionMap
 * */
export const cleanRefAndDefinitionNameInSchema = (schema: JSONSchema) => {
  traverseSchema(schema, ({ value, key }) => {
    if (key === 'discriminator' && value.propertyName) {
      discriminatorMap[value.propertyName] = value.propertyName
    }
    if (key === '$ref' && typeof value === 'string') {
      refMap[value] = cleanName(value)
      // value = cleanName(value)
      // parent.$ref = cleanName(value)
    }
    if (key === 'definitions') {
      Object.keys(value).forEach(k => {
        definitionMap[k] = cleanName(k)
        // if (newKey !== k) {
        //   const origin = value[k]
        //   delete value[k]
        //   value[cleanName(k)] = origin
        // }
      })
    }
  })
}

export const collect = (schema: JSONSchema) => {
  const swaggerDefinitionMap: { [name: string]: ISwaggerDefinition } = {}
  const swaggerRequestMap: { [request: string]: ISwaggerRequest } = {}
  traverseSchema(schema, ({ value, key }) => {
    if (key === 'paths') {
      forEach(value, (pathSchema: JSONSchema, path: string) => {
        forEach(pathSchema, (requestSchema: JSONSchema, httpMethod: string) => {
          swaggerRequestMap[`${httpMethod}${upperFirst(camelCase(path))}`] = {
            path,
            httpMethod: httpMethod as HttpMethod,
            schema: requestSchema,
            typescriptContent: '',
            deprecated: requestSchema.deprecated,
            doc: [...requestSchema.tags, requestSchema.summary, requestSchema.description].filter(Boolean).join(EOL),
            // responses: IResponse
            // parameters: [],
          }
        })
      })
    }
  })
  return {
    swaggerDefinitionMap,
    swaggerRequestMap,
  }
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
  if (project.translationEngine) {
    await translateSchema(schema, project.translationEngine)
  }
  cleanRefAndDefinitionNameInSchema(schema)
  simplifyGenericNameInSchema(schema)
  // console.log(schema)
}
