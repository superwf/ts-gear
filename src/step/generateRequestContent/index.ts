import { EOL } from 'os'

import type { FunctionDeclarationStructure, OptionalKind, VariableDeclarationKind } from 'ts-morph'
import type { Spec } from 'swagger-schema-official'
import * as join from 'url-join'

import type { Project } from '../../type'
import { sow, harvest } from '../../source'
import { transformSwaggerPathToRouterPath } from '../../tool/transformSwaggerPathToRouterPath'
import { getGlobal } from '../../projectGlobalVariable'
import { assembleDoc } from '../../tool/assembleDoc'
import { defaultShouldMockResponseStatement } from '../../constant'

import { generateMockData } from './generateMockData'
import { generateResponseType } from './generateResponseType'
import { generateParameterType } from './generateParameterType'

/** from swagger spec paths assemble request functions */
export const generateRequestContent = (spec: Spec, project: Project) => {
  const { apiFilter, withBasePath, withHost } = project
  const { requestMap, definitionMap, enumMap } = getGlobal(project)

  const shouldMockResponseStatement = project.shouldMockResponseStatement || defaultShouldMockResponseStatement

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
      const parameterType = generateParameterType(requestFunctionName, request.parameters)
      parameterTypeName = parameterType.parameterTypeName
      parameterRequired = parameterType.parameterRequired
      requestTypeScriptContent.push(parameterType.parameterTypeContent)
    }
    const responseType = generateResponseType(requestFunctionName, request.responses)
    requestTypeScriptContent.push(responseType.responseTypeContent)
    requestTypeScriptContent.push(responseType.successTypeContent)
    const urlPath = join(spec.basePath || '', transformSwaggerPathToRouterPath(String(request.pathname)))
    const source = sow()
    const requestFunctionSource = sow()
    const requesterStatment = `return requester(url, {${withHost ? `, host: '${spec.host}'` : ''}${
      withBasePath ? `, basePath: '${spec.basePath}'` : ''
    }method${parameterTypeName ? ', ...option' : ''}}) as Promise<${responseType.successTypeName}>`
    const functionStatment = `if (${shouldMockResponseStatement}) {
      return Promise.resolve(${requestFunctionName}MockData)

    }
    ${requesterStatment}`
    const functionData: OptionalKind<FunctionDeclarationStructure> = {
      name: requestFunctionName,
      isExported: false,
      returnType: `Promise<${responseType.successTypeName}>`,
      statements: functionStatment,
      // docs: assembleDoc(request.schema),
    }
    functionData.parameters = []
    if (parameterTypeName) {
      functionData.parameters.push({
        hasQuestionToken: !parameterRequired,
        name: 'option',
        type: parameterTypeName,
      })
    }
    const mockStatment = `export const ${requestFunctionName}MockData = (${JSON.stringify(
      generateMockData(request, definitionMap, enumMap),
    )} as unknown as ${responseType.successTypeName})`
    source.addStatements(mockStatment)
    requestFunctionSource.addFunction(functionData)
    source.addVariableStatement({
      declarationKind: 'const' as VariableDeclarationKind.Const,
      docs: assembleDoc(request.schema),
      isExported: true,
      declarations: [
        {
          name: requestFunctionName,
          initializer: `/* #__PURE__ */ (() => {
            const method = '${httpMethod}'
            const url = '${urlPath}'
${harvest(requestFunctionSource)}
${requestFunctionName}.method = method
${requestFunctionName}.url = url
return ${requestFunctionName}
                         })()
`,
        },
      ],
    })
    // source.addStatements(`
    // export const ${requestFunctionName}Method = '${httpMethod}'
    // export const ${requestFunctionName}Url = '${urlPath}'
    // `)
    requestTypeScriptContent.push(harvest(source))
    /** store typescript content to requestMap */
    request.typescriptContent = requestTypeScriptContent.join(EOL)
    resultContent.push(request.typescriptContent)
  })

  /** return value only for test and debug */
  return resultContent.join(EOL)
}
