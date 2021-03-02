import type { FunctionDeclarationStructure, OptionalKind, VariableDeclarationKind } from 'ts-morph'
import type { Spec } from 'swagger-schema-official'
import * as join from 'url-join'
import type { Project } from '../../type'
import { sow, harvest } from '../../source'
import { transformSwaggerPathToRouterPath } from '../../tool/transformSwaggerPathToRouterPath'
import { getGlobal } from '../../projectGlobalVariable'
import { assembleDoc } from '../../tool/assembleDoc'
import { defaultUseMockResponseStatement } from '../../constant'
import { generateMockData } from './generateMockData'
import { generateResponseType } from './generateResponseType'
import { generateRequestOptionType } from './generateRequestOptionType'

/** from swagger spec paths assemble request functions */
export const generateRequestContent = (spec: Spec, project: Project) => {
  const { apiFilter, withBasePath, withHost, EOL } = project
  const { requestMap, definitionMap, enumMap } = getGlobal(project)

  const { shouldGenerateMock, generateRequestFunction } = project

  const resultContent: string[] = []
  Object.getOwnPropertyNames(requestMap).forEach(requestFunctionName => {
    const requestTypeScriptContent: string[] = []
    const request = requestMap[requestFunctionName]
    const { httpMethod } = request
    if (apiFilter) {
      if (typeof apiFilter === 'function') {
        if (!apiFilter(request)) {
          return
        }
      } else if (!apiFilter.test(request.pathname)) {
        return
      }
    }

    let parameterTypeName = ''
    let parameterRequired = false
    if (request.parameters && request.parameters.length > 0) {
      const parameterType = generateRequestOptionType(requestFunctionName, request.parameters, project)
      parameterTypeName = parameterType.parameterTypeName
      parameterRequired = parameterType.parameterRequired
      requestTypeScriptContent.push(parameterType.parameterTypeContent)
    }
    const responseType = generateResponseType(requestFunctionName, request.responses, project)
    requestTypeScriptContent.push(responseType.responseTypeContent)
    requestTypeScriptContent.push(responseType.successTypeContent)
    const urlPath = join(spec.basePath || '/', transformSwaggerPathToRouterPath(String(request.pathname)))
    const source = sow()
    const requestFunctionSource = sow()
    const requesterStatment = `return requester(url, {${withHost ? `, host: '${spec.host}'` : ''}${
      withBasePath ? `, basePath: '${spec.basePath}'` : ''
    }method${parameterTypeName ? ', ...option' : ''}}) as Promise<${responseType.successTypeName}>`
    /** 生成mock data */
    let mockFunctionContent = ''
    if (shouldGenerateMock) {
      const mockRequestFunctionSource = sow()
      const useMockResponseStatement = project.useMockResponseStatement || defaultUseMockResponseStatement
      const functionStatment = `return Promise.resolve(mockData)`
      const functionData: OptionalKind<FunctionDeclarationStructure> = {
        isExported: false,
        returnType: `Promise<${responseType.successTypeName}>`,
        statements: functionStatment,
      }
      functionData.parameters = []
      if (parameterTypeName) {
        functionData.parameters.push({
          hasQuestionToken: !parameterRequired,
          name: 'option',
          type: parameterTypeName,
        })
      }
      const mockFunctionSource = sow()
      mockRequestFunctionSource.addFunction(functionData)
      mockFunctionSource.addVariableStatement({
        declarationKind: 'const' as VariableDeclarationKind.Const,
        declarations: [
          {
            name: 'mockRequest',
            initializer(writter) {
              writter.write(harvest(mockRequestFunctionSource))
            },
          },
        ],
      })
      mockFunctionContent = `if (${useMockResponseStatement}) {
        const mockData = (${JSON.stringify(generateMockData(request, definitionMap, enumMap))} as unknown as ${
        responseType.successTypeName
      })
        ${harvest(mockFunctionSource)}
        mockRequest.method = method
        mockRequest.url = url
        mockRequest.mockData = mockData
        return mockRequest
      }`
    }
    const functionStatment = requesterStatment
    const functionData: OptionalKind<FunctionDeclarationStructure> = {
      name: 'request',
      isExported: false,
      returnType: `Promise<${responseType.successTypeName}>`,
      statements: functionStatment,
    }
    functionData.parameters = []
    if (parameterTypeName) {
      functionData.parameters.push({
        hasQuestionToken: !parameterRequired,
        name: 'option',
        type: parameterTypeName,
      })
    }
    requestFunctionSource.addFunction(functionData)
    source.addVariableStatement({
      declarationKind: 'const' as VariableDeclarationKind.Const,
      docs: assembleDoc(request.schema),
      isExported: true,
      declarations: [
        {
          name: requestFunctionName,
          initializer: generateRequestFunction
            ? generateRequestFunction({
                httpMethod,
                pathname: request.pathname,
                schema: spec,
              })
            : `/* #__PURE__ */ (() => {
            const method = '${httpMethod}'
            const url = '${urlPath}'
            ${mockFunctionContent}
            ${harvest(requestFunctionSource)}
            request.method = method
            request.url = url
            ${shouldGenerateMock ? 'request.mockData = undefined as unknown as any' : ''}
            return request
         })()`,
        },
      ],
    })
    requestTypeScriptContent.push(harvest(source))
    /** store typescript content to requestMap */
    request.typescriptContent = requestTypeScriptContent.join(EOL)
    resultContent.push(request.typescriptContent)
  })

  /** return value only for test and debug */
  return resultContent.join(EOL)
}
