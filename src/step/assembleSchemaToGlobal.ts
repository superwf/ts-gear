import { forEach, findKey } from 'lodash'
import type { Spec } from 'swagger-schema-official'
import type { OperationObject } from 'openapi3-ts'

import { traverseSchema } from '../tool/traverseSchema'
import { getDefinition } from '../tool/getDefinition'
import type { Project } from '../type'
import { httpMethods } from '../type'
import { getGlobal } from '../projectGlobalVariable'
import { generateEnumName, generateEnumTypescriptContent } from '../tool/enumType'
import { generateRequestFunctionName } from '../tool/generateRequestFunctionName'
import { getRefDeep } from '../tool/getRefDeep'

/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
export const assembleSchemaToGlobal = (spec: Spec, project: Project) => {
  const { definitionMap, requestMap, enumMap, requestEnumSet } = getGlobal(project)
  const definitions = getDefinition(spec)
  traverseSchema(spec, ({ value, key, path, parent }) => {
    if (key === 'enum' && value) {
      const name = generateEnumName(path, spec)
      const existEnumName = findKey(enumMap, ({ originalContent }) => originalContent === value)
      parent[key] = name
      if (path[0] === 'paths') {
        requestEnumSet.add(name)
      }
      // add enum type alias
      if (existEnumName) {
        enumMap[name] = {
          originalContent: value,
          typescriptContent: `export type ${name} = ${existEnumName}`,
        }
      } else {
        const tsContent = generateEnumTypescriptContent(value)
        enumMap[name] = {
          originalContent: value,
          typescriptContent: `export type ${name} = ${tsContent}`,
        }
      }
    }
  })
  Object.getOwnPropertyNames(definitions).forEach(name => {
    definitionMap[name] = {
      typeName: name,
      schema: definitions[name],
    }
  })
  forEach(spec.paths, (pathSchema /** Path */, pathName) => {
    const genFunctionName = project.generateRequestFunctionName || generateRequestFunctionName
    forEach(httpMethods, httpMethod => {
      const operation = pathSchema[httpMethod]
      if (operation && !operation.deprecated) {
        let { parameters } = operation
        /**
         * 兼容openapiv3，将requestBody格式组装成与v2相同的数据结构
         * 这段代码不应该放到这里，以后有空抽离出去单独测试，如果有空的话
         * */
        if ('requestBody' in operation) {
          const v3Parameters = [] as any[]
          const obj = (operation as any).requestBody.content
          /** 处理上传文件类型 */
          if (obj['multipart/form-data']?.schema?.properties) {
            const required = obj['multipart/form-data']?.schema?.required || []
            forEach(obj['multipart/form-data']?.schema.properties, (v, k) => {
              v3Parameters.push({
                name: k,
                in: 'formData',
                description: v.description,
                required: required.includes(k),
                type: v.format === 'binary' ? 'file' : 'string',
              })
            })
            /** 处理$ref引用类型 */
          } else if (obj?.['application/json']?.schema?.$ref) {
            const required = obj['application/json']?.schema?.required || false
            v3Parameters.push({
              in: 'body',
              name: 'body',
              required,
              schema: getRefDeep((operation as OperationObject).requestBody),
            })
            /** 处理内联类型 */
          } else if (obj?.['application/json']?.schema?.type) {
            const required = obj['application/json']?.schema?.required || []
            v3Parameters.push({
              in: 'body',
              name: 'body',
              required: required?.length > 0,
              schema: obj?.['application/json']?.schema,
            })
          }
          // console.log(v3Parameters[0])
          parameters = v3Parameters
        }
        requestMap[
          genFunctionName({
            httpMethod,
            pathName,
            schema: operation!,
          })
        ] = {
          pathName,
          httpMethod,
          schema: operation!,
          responses: operation.responses,
          parameters,
        }
      }
    })
  })
}
