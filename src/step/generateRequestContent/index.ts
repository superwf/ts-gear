import type { FunctionDeclarationStructure, OptionalKind, VariableDeclarationKind } from 'ts-morph'
import type { Spec } from 'swagger-schema-official'
import * as join from 'url-join'
import type { Project } from '../../type'
import { sow, harvest } from '../../source'
import { transformSwaggerPathToRouterPath } from '../../tool/transformSwaggerPathToRouterPath'
import { getGlobal } from '../../projectGlobalVariable'
import { assembleDoc } from '../../tool/assembleDoc'
import { config } from '../../constant'
import { generateResponseType } from './generateResponseType'
import { generateRequestOptionType } from './generateRequestOptionType'

/** from swagger spec paths assemble request functions */
export const generateRequestContent = (spec: Spec, project: Project) => {
  const { apiFilter, withBasePath, withHost } = project
  const { requestMap } = getGlobal(project)
  const { EOL } = config

  const { generateRequestFunction } = project

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
    const basePath = project.withBasePath ? spec.basePath : null
    const urlPath = join(basePath || '/', transformSwaggerPathToRouterPath(String(request.pathname)))
    const source = sow()
    const requestFunctionSource = sow()
    let simpleOption = ''
    if (request.parameters) {
      const positionSet = new Set(request.parameters.map((p: any) => p.in))
      if (project.simplifyRequestOption && request.parameters && positionSet.size === 1) {
        simpleOption = `${Array.from(positionSet)[0]}: option`
      }
    }
    const requesterStatment = `return requester(url, {${[
      withHost ? `host: '${spec.host}'` : '',
      withBasePath ? `basePath: '${spec.basePath}'` : '',
      'method',
      simpleOption || (parameterTypeName ? '...option' : ''),
    ]
      .filter(Boolean)
      .join(',')}}) as unknown as Promise<${responseType.successTypeName}>`
    /** 生成mock data */
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
    const sourceContent = `/* #__PURE__ */ (() => {
       const method = '${httpMethod}'
       const url = '${urlPath}'
       ${harvest(requestFunctionSource)}
       /** http method */
       request.method = method
       /** request url */
       request.url = url
       return request
    })()`
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
                originSource: sourceContent,
                project,
                parameterRequired,
                parameterTypeName,
                responseSuccessTypeName: responseType.successTypeName,
              })
            : sourceContent,
        },
      ],
    })
    requestTypeScriptContent.push(harvest(source))
    /** store typescript content to requestMap */
    request.typescriptContent = requestTypeScriptContent.join(EOL)
    resultContent.push(request.typescriptContent)
  })

  /** return value only for test and debug */
  // return resultContent.join(EOL)
}

export * from './generateMockRequestContent'
