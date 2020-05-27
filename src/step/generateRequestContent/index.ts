import { EOL } from 'os'

import { FunctionDeclarationStructure, OptionalKind } from 'ts-morph'
import { Spec } from 'swagger-schema-official'

import { IProject } from '../../interface'
import { sow, harvest } from '../../source'
import { transformSwaggerPathToRouterPath } from '../../tool/transformSwaggerPathToRouterPath'
import { getGlobal } from '../../projectGlobalVariable'
import { assembleDoc } from '../../tool/assembleDoc'
import { defaultShouldMockResponseStatement } from '../../constant'

import { generateMockData } from './generateMockData'
import { generateResponseType } from './generateResponseType'
import { generateParameterType } from './generateParameterType'

import join = require('url-join')

/** from swagger spec paths assemble request functions */
export const generateRequestContent = (spec: Spec, project: IProject) => {
  const { pathMatcher, withBasePath, withHost } = project
  const { requestMap, definitionMap, enumMap } = getGlobal(project)

  const shouldMockResponseStatement = project.shouldMockResponseStatement || defaultShouldMockResponseStatement

  const resultContent: string[] = []
  Object.getOwnPropertyNames(requestMap).forEach((requestFunctionName) => {
    const requestTypeScriptContent: string[] = []
    const request = requestMap[requestFunctionName]
    const { httpMethod } = request
    if (pathMatcher) {
      if (typeof pathMatcher === 'function') {
        if (!pathMatcher(request.pathName, httpMethod)) {
          return
        }
      } else if (!pathMatcher.test(request.pathName)) {
        return
      }
    }

    let parameterTypeName = ''
    let parameterRequired = false
    if (request.parameters && request.parameters.length > 0) {
      const parameterType = generateParameterType(requestFunctionName, request.parameters)
      parameterTypeName = parameterType.parameterTypeName
      parameterRequired = parameterType.parameterRequired
      requestTypeScriptContent.push(parameterType.parameterTypeContent)
    }
    const responseType = generateResponseType(requestFunctionName, request.responses)
    requestTypeScriptContent.push(responseType.responseTypeContent)
    requestTypeScriptContent.push(responseType.successTypeContent)
    const urlPath = join(spec.basePath || '', transformSwaggerPathToRouterPath(String(request.pathName)))
    const source = sow()
    const requesterStatment = `return requester('${urlPath}', {${withHost ? `, host: '${spec.host}'` : ''}${
      withBasePath ? `, basePath: '${spec.basePath}'` : ''
    }method: '${httpMethod}'${parameterTypeName ? ', ...option' : ''}}) as Promise<any>`
    const functionStatment = `if (${shouldMockResponseStatement}) {
      return Promise.resolve(${requestFunctionName}.mockData as any)
    }
    ${requesterStatment}`
    const functionData: OptionalKind<FunctionDeclarationStructure> = {
      name: requestFunctionName,
      isExported: true,
      returnType: `Promise<${responseType.successTypeName}>`,
      statements: functionStatment,
      docs: assembleDoc(request.schema),
    }
    functionData.parameters = []
    if (parameterTypeName) {
      functionData.parameters.push({
        hasQuestionToken: !parameterRequired,
        name: 'option',
        type: parameterTypeName,
      })
    }
    source.addFunction(functionData)
    const mockStatment = `${requestFunctionName}.mockData = (${JSON.stringify(
      generateMockData(request, definitionMap, enumMap),
    )} as any)`
    source.addStatements(`
if (${shouldMockResponseStatement}) {
  ${mockStatment}
}
${requestFunctionName}.method = '${httpMethod}'
`)
    requestTypeScriptContent.push(harvest(source))
    /** store typescript content to requestMap */
    request.typescriptContent = requestTypeScriptContent.join(EOL)
    resultContent.push(request.typescriptContent)
  })

  /** return value only for test and debug */
  return resultContent.join(EOL)
}
