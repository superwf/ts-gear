import type { FunctionDeclarationStructure, OptionalKind, VariableDeclarationKind } from 'ts-morph'
import type { Spec } from 'swagger-schema-official'
import * as join from 'url-join'
import type { Project } from '../../type'
import { sow, harvest } from '../../source'
import { transformSwaggerPathToRouterPath } from '../../tool/transformSwaggerPathToRouterPath'
import { getGlobal } from '../../projectGlobalVariable'
import { assembleDoc } from '../../tool/assembleDoc'
import { config } from '../../constant'
import { shouldKeepRequest } from '../../tool/shouldKeepRequest'
import { generateResponseType } from './generateResponseType'
import { generateRequestOptionType } from './generateRequestOptionType'

/** from swagger spec paths assemble request functions */
export const generateRequestContent = (spec: Spec, project: Project) => {
  const { apiFilter, withBasePath, withHost, simplifyRequestOption, requestOptionUnionType } = project
  const { requestMap } = getGlobal(project)
  const { EOL } = config

  const { generateRequestFunction } = project

  const resultContent: string[] = []
  Object.getOwnPropertyNames(requestMap).forEach(requestFunctionName => {
    const requestTypeScriptContent: string[] = []
    const request = requestMap[requestFunctionName]
    const { httpMethod } = request
    if (!shouldKeepRequest(request, apiFilter)) {
      return
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
      if (simplifyRequestOption && positionSet.size === 1 && !requestOptionUnionType) {
        let position = Array.from(positionSet)[0]
        if (position === 'formData') {
          position = 'body'
        }
        simpleOption = `${position}: option`
      }
    }
    const requesterStatment = `return requester(request.url, {${[
      withHost && spec.host ? `host: '${spec.host}'` : '',
      withBasePath && spec.basePath ? `basePath: '${spec.basePath}'` : '',
      'method: request.method',
      simpleOption || (parameterTypeName || requestOptionUnionType ? '...option' : ''),
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
      const type = requestOptionUnionType ? `${parameterTypeName} & ${requestOptionUnionType}` : parameterTypeName
      functionData.parameters.push({
        hasQuestionToken: !parameterRequired,
        name: 'option',
        type,
      })
    } else if (requestOptionUnionType) {
      functionData.parameters.push({
        hasQuestionToken: true,
        name: 'option',
        type: requestOptionUnionType,
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
                simpleOption,
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
