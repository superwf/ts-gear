import { forEach, findKey, isEqual } from 'lodash'
import type { Spec } from 'swagger-schema-official'
import { traverseSchema } from '../tool/traverseSchema'
import { getDefinition } from '../tool/getDefinition'
import type { Project } from '../type'
import { httpMethods } from '../type'
import { getGlobal } from '../projectGlobalVariable'
import { generateEnumName, generateEnumTypescriptContent } from '../tool/enumType'
import { generateRequestFunctionName } from '../tool/generateRequestFunctionName'
import { getSchemaDeep } from '../tool/getSchemaDeep'
import { getRequiredDeep } from '../tool/getRequiredDeep'
import { generateTypeAlias } from '../tool/generateTypeAlias'
// import type { OperationObject } from 'openapi3-ts'

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
      const existEnumName = findKey(enumMap, ({ originalContent }) => isEqual(originalContent, value))
      parent[key] = name
      if (path[0] === 'paths') {
        requestEnumSet.add(name)
      }
      // add enum type alias
      if (existEnumName) {
        enumMap[name] = {
          originalContent: value,
          typescriptContent: generateTypeAlias(name, existEnumName),
        }
      } else {
        const tsContent = generateEnumTypescriptContent(name, value)
        enumMap[name] = {
          originalContent: value,
          typescriptContent: tsContent,
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
  forEach(spec.paths, (pathSchema /** Path */, pathname) => {
    const genFunctionName = project.generateRequestFunctionName || generateRequestFunctionName
    forEach(httpMethods, httpMethod => {
      const operation: any = pathSchema[httpMethod]
      if (operation && !operation.deprecated) {
        // parameters 有可能为空
        let { parameters = [] } = operation
        /**
         * 兼容openapiv3，将requestBody格式组装成与v2相同的数据结构
         * 这段代码不应该放到这里，以后有空抽离出去单独测试，如果有空的话
         * */
        if ('requestBody' in operation) {
          const v3Parameters = [] as any[]
          const { requestBody } = operation
          const { content } = requestBody
          // openapi3 required in requestBody
          const required = 'required' in requestBody ? requestBody.required : getRequiredDeep(content)
          const schema = getSchemaDeep(content)
          v3Parameters.push({
            in: content['multipart/form-data'] ? 'formData' : 'body',
            name: 'body',
            required,
            schema,
          })
          // 合并v3参数
          parameters = parameters.concat(v3Parameters)
        }
        requestMap[
          genFunctionName({
            httpMethod,
            pathname,
            schema: spec,
          })
        ] = {
          pathname,
          httpMethod,
          schema: operation!,
          responses: operation.responses,
          parameters,
        }
      }
    })
  })
}
