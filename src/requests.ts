import join from 'url-join'
import { camelCase, forEach, get, isEmpty, remove, upperFirst } from 'lodash'
import { FunctionDeclarationStructure, OptionalKind } from 'ts-morph'

import { assembleRequestParam } from './assembleRequestParam'
import { interceptRequest, interceptResponse } from './interceptor'
import { IPaths, JSONSchema, TPathMatcherFunction } from './interface'
import { compile } from './source'
import { transformPathParameters, transformProperty } from './util'
import { generateMockData } from './generateMockData'

/** 将paths里的各种请求参数组装成IProperty的数据结构 */
export const generateRequests = async (
  schema: JSONSchema,
  $RefsInPaths: string[],
  pathMatcher?: TPathMatcherFunction,
) => {
  const paths = schema.paths as IPaths
  const { basePath } = schema

  let url: keyof IPaths
  const tsContent: string[] = []
  const mockTsContent: string[] = [
    `const { info } = console
  if (process && process.env && process.env.NODE_ENV === 'production') {
    throw new Error('mockRequest only used in dev mode')
  }
`,
  ]
  for (url of Object.getOwnPropertyNames(paths)) {
    const path = paths[url]
    if (pathMatcher) {
      if (typeof pathMatcher === 'function') {
        if (!pathMatcher(url)) {
          continue
        }
      } else if (!pathMatcher.test(url)) {
        continue
      }
    }
    // action is http method, like get, post ...
    for (const action in path) {
      if (!path.hasOwnProperty(action) || path[action].deprecated) {
        continue
      }

      const request = path[action]

      const functionName = `${action}${upperFirst(camelCase(url))}`
      let paramInterfaceName = ''
      if (request.parameters && request.parameters.length > 0) {
        const parameterSchema = assembleRequestParam(request.parameters)
        paramInterfaceName = `I${upperFirst(functionName)}Param`
        const paramDefTsContent = await compile(source => {
          const inter = source.addInterface({
            isExported: true,
            name: paramInterfaceName,
          })
          forEach<JSONSchema>(parameterSchema, (property, name) => {
            // 当参数为请求体body时，会额外包裹一层
            // 应去掉这一层的属性
            if (name === 'body' && !isEmpty(property.properties)) {
              const keys = Object.getOwnPropertyNames(property.properties)
              if (keys.length > 0) {
                const key = keys[0]
                inter.addProperty({
                  name,
                  type: transformProperty(property.properties[key]),
                  hasQuestionToken: !property.required || property.required.length === 0,
                })
              }
            } else {
              inter.addProperty({
                name,
                type: transformProperty(property),
                hasQuestionToken: !property.required || property.required.length === 0,
              })
            }
          })
        })
        tsContent.push(paramDefTsContent)
        mockTsContent.push(paramDefTsContent)
      }

      let responseType = ''
      let mockResponseValue: any

      // 如果有200存在的$ref定义，则直接返回该$ref对应的type
      const response200$ref = get(request.responses, '200.schema.$ref', null)
      if (response200$ref) {
        responseType = transformProperty(request.responses[200]!)
        mockResponseValue = generateMockData(
          get(request.responses, '200.schema', null) as JSONSchema,
          schema.definitions as JSONSchema,
        )
        // 否则可能是response中行内定义的数据结构
        // 再单独生成一个type
      } else {
        const response200 = get(request.responses, '200', null)
        if (response200) {
          responseType = `${upperFirst(functionName)}Response`
          const responseTsContent = `type ${responseType} = ${transformProperty(response200)}`
          tsContent.push(responseTsContent)
          mockTsContent.push(responseTsContent)
          mockResponseValue = generateMockData(response200 as JSONSchema, schema.definitions as JSONSchema)
        }
      }

      // 在window上会出现\，过滤换
      const urlPath = join(basePath, transformPathParameters(String(url))).replace(/\\/g, '')
      const functionTsContent = await compile(source => {
        const functionData: OptionalKind<FunctionDeclarationStructure> = {
          name: functionName,
          isExported: true,
          // 把basePath加上
          // 但是host没加，应该大多数情况都会在生产环境通过代理跨域，host不会是swagger里定义的host
          // 如果需要加在interceptor里每个项目自行处理添加
          statements: `
            const [ url, option ] = ${interceptRequest.name}('${urlPath}'${paramInterfaceName ? ', param' : ''})
            option.method = '${action}'
            return fetch(url, option).then${responseType ? '<' + responseType + '>' : ''}(${interceptResponse.name})
          `,
        }
        if (paramInterfaceName) {
          functionData.parameters = [
            {
              name: 'param',
              type: paramInterfaceName,
            },
          ]
        }
        if (request.summary || request.description) {
          functionData.docs = [remove<string>([request.summary || '', request.description || ''], s => !!s).join('\n')]
        }
        source.addFunction(functionData)
      })

      tsContent.push(functionTsContent)

      const mockFunctionTsContent = await compile(source => {
        let returnStatement = ''
        if (mockResponseValue) {
          returnStatement = `Promise.resolve(new Response('${JSON.stringify(mockResponseValue)}', {
          headers: { 'Content-Type' : 'application/json' }
        })).then${responseType ? '<' + responseType + '>' : ''}(${interceptResponse.name})`
          // if (responseType) {
          //   returnStatement = `${returnStatement} as unknown as Promise<${responseType}>`
          // }
        } else {
          returnStatement = 'Promise.resolve(new Response())'
        }
        const functionData: OptionalKind<FunctionDeclarationStructure> = {
          name: functionName,
          isExported: true,
          // 把basePath加上
          // 但是host没加，应该大多数情况都会在生产环境通过代理跨域，host不会是swagger里定义的host
          // 如果需要加在interceptor里每个项目自行处理添加
          statements: `
            const [ url, option ] = ${interceptRequest.name}('${urlPath}'${paramInterfaceName ? ', param' : ''})
            info('mock fetch: ', url, 'fetch param: ', ${paramInterfaceName ? 'param' : 'undefined'})
            option.method = '${action}'
            return ${returnStatement}
          `,
        }
        if (paramInterfaceName) {
          functionData.parameters = [
            {
              name: 'param',
              type: paramInterfaceName,
            },
          ]
        }
        if (request.summary || request.description) {
          functionData.docs = [remove<string>([request.summary || '', request.description || ''], s => !!s).join('\n')]
        }
        source.addFunction(functionData)
      })
      mockTsContent.push(mockFunctionTsContent)
    }
  }

  // 生成paths文件需要的一些依赖
  const importTsContent = await compile(source => {
    // 添加interptor拦截器依赖
    source.addImportDeclarations([
      {
        namedImports: [
          {
            name: interceptRequest.name,
          },
          {
            name: interceptResponse.name,
          },
        ],
        moduleSpecifier: './interceptor',
      },
    ])
    // 导入definitions中的依赖
    source.addImportDeclarations([
      {
        namedImports: $RefsInPaths,
        moduleSpecifier: './definitions',
      },
    ])
  })
  tsContent.unshift(importTsContent)
  mockTsContent.unshift(importTsContent)
  return {
    requestsContent: tsContent.join('\n'),
    mockRequestsContent: mockTsContent.join('\n'),
  }
}
