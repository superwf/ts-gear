import { EOL } from 'os'
import path from 'path'

import join from 'url-join'
import { camelCase, forEach, get, isEmpty, upperFirst } from 'lodash'
import { FunctionDeclarationStructure, OptionalKind } from 'ts-morph'

import { assembleRequestParam } from './assembleRequestParam'
import { generateMockData } from './mock'

import { IPaths, JSONSchema, IProject } from 'src/interface'
import { compile } from 'src/source'
import { transformSwaggerPropertyToTsType } from 'src/tool/transformSwaggerPropertyToTsType'
import { transformSwaggerPathToRouterPath } from 'src/tool/transformSwaggerPathToRouterPath'
import { requestMap } from 'src/global'

/** 将paths里的各种请求参数组装成IProperty的数据结构 */
export const generateRequestFileContent = (project: IProject) => {
  const { pathMatcher } = project

  for (const functionName in requestMap) {
    const request = requestMap[functionName]
    if (request.deprecated) {
      continue
    }
    if (pathMatcher) {
      if (typeof pathMatcher === 'function') {
        if (!pathMatcher(request.path, request.httpMethod)) {
          continue
        }
      } else if (!pathMatcher.test(request.path)) {
        continue
      }
    }

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
                type: transformSwaggerPropertyToTsType(property.properties[key]),
                hasQuestionToken: !property.required || property.required.length === 0,
              })
            }
          } else {
            inter.addProperty({
              name,
              type: transformSwaggerPropertyToTsType(property),
              hasQuestionToken: !property.required || property.required.length === 0,
            })
          }
        })
      })
      tsContent.push(paramDefTsContent)
      mockTsContent.push(paramDefTsContent)
    }

      let responseType = 'any'
      let mockResponseValue: any

      // 如果有200存在的$ref定义，则直接返回该$ref对应的type
      const response200$ref = get(request.responses, '200.schema.$ref', null)
      if (response200$ref) {
        responseType = transformSwaggerPropertyToTsType(request.responses[200]!)
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
          const responseTsContent = `type ${responseType} = ${transformSwaggerPropertyToTsType(response200)}`
          tsContent.push(responseTsContent)
          mockTsContent.push(responseTsContent)
          mockResponseValue = generateMockData(response200 as JSONSchema, schema.definitions as JSONSchema)
        }
      }

      // 在window上会出现\，过滤换
      const urlPath = join(basePath, transformSwaggerPathToRouterPath(String(url))).replace(/\\/g, '')
      const functionTsContent = await compile(source => {
        const functionData: OptionalKind<FunctionDeclarationStructure> = {
          name: functionName,
          isExported: true,
          returnType: `Promise<${responseType}>`,
          // 把basePath加上
          // 但是host没加，应该大多数情况都会在生产环境通过代理跨域，host不会是swagger里定义的host
          // 如果需要加在interceptor里每个项目自行处理添加
          statements: paramInterfaceName
            ? `return requester('${urlPath}', {...option, method: '${action}'})`
            : `return requester('${urlPath}', {method: '${action}'})`,
        }
        functionData.parameters = []
        if (paramInterfaceName) {
          functionData.parameters.push({
            name: 'option',
            type: paramInterfaceName,
          })
        }
        if (request.summary || request.description) {
          functionData.docs = [[request.summary || '', request.description || ''].filter(Boolean).join('\n')]
        }
        source.addFunction(functionData)
      })

      tsContent.push(functionTsContent)
      tsContent.push(`${functionName}.method = '${action}'\n`)

      const mockFunctionTsContent = await compile(source => {
        let returnStatement = 'return Promise.resolve('
        if (mockResponseValue) {
          returnStatement += JSON.stringify(mockResponseValue)
        } else {
          returnStatement += '{}'
        }
        returnStatement += ')'
        const functionData: OptionalKind<FunctionDeclarationStructure> = {
          name: functionName,
          isExported: true,
          returnType: `Promise<${responseType}>`,
          // 把basePath加上
          // 但是host没加，应该大多数情况都会在生产环境通过代理跨域，host不会是swagger里定义的host
          // 如果需要加在interceptor里每个项目自行处理添加
          statements: `
            info('mock fetch: ${urlPath} with ${action} http method'${
            paramInterfaceName ? ", 'fetch param:', param" : ''
          })
            ${returnStatement}
          `,
        }
        functionData.parameters = []
        if (paramInterfaceName) {
          functionData.parameters.push({
            name: 'param',
            type: paramInterfaceName,
          })
        }
        if (request.summary || request.description) {
          functionData.docs = [[request.summary || '', request.description || ''].filter(Boolean).join(EOL)]
        }
        source.addFunction(functionData)
      })
      // mockTsContent.push(mockFunctionTsContent)
      // mockTsContent.push(`${functionName}.method = '${action}'\n`)
    }
  }

  // 生成paths文件需要的一些依赖
  const importTsContent = await compile(source => {
    source.addStatements(
      [
        `const project = projects.find(p => p.name === '${project.name}')!`,
        `if (!project) { throw new Error('project ${project.name} not found, check project name in your "ts-gear.ts"') }`,
        `const { requester } = project${EOL}`,
      ].join(EOL),
    )
    // 添加interptor拦截器依赖
    source.addImportDeclarations([
      {
        defaultImport: 'projects',
        moduleSpecifier: path.join(path.relative(path.join(project.dest, project.name), ''), 'ts-gear'),
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

  const mockImportTsContent = await compile(source => {
    // 导入definitions中的依赖
    source.addImportDeclarations([
      {
        namedImports: $RefsInPaths,
        moduleSpecifier: './definitions',
      },
    ])
  })
  mockTsContent.unshift(mockImportTsContent)
  return {
    requestsContent: tsContent.join(EOL),
    mockRequestsContent: mockTsContent.join(EOL),
  }
}
