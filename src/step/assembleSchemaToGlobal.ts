import { forEach, findKey } from 'lodash'
import { Spec } from 'swagger-schema-official'
import { OperationObject } from 'openapi3-ts'

import { traverseSchema } from '../tool/traverseSchema'
import { getDefinition } from '../tool/getDefinition'
import { httpMethods, IProject } from '../interface'
import { getGlobal } from '../projectGlobalVariable'
import { generateEnumName, generateEnumTypescriptContent } from '../tool/enumType'
import { generateRequestFunctionName } from '../tool/generateRequestFunctionName'
import { getRefDeep } from '../tool/getRefDeep'

/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
export const assembleSchemaToGlobal = (spec: Spec, project: IProject) => {
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
        /** 兼容openapiv3，将requestBody格式组装成与v2相同的数据结构 */
        if ('requestBody' in operation) {
          parameters = [
            {
              in: 'body',
              name: 'body',
              required: true,
              schema: getRefDeep((operation as OperationObject).requestBody),
            },
          ]
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
