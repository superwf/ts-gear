import { JSONSchema4TypeName } from 'json-schema'
import { compile } from 'json-schema-to-typescript'
import { isEmpty, upperFirst } from 'lodash'
import { format } from 'prettier'
import { IParameter, IRequestMethod, JSONSchema } from '../interface'
import { getFunctionName, transformPathParameters } from '../util'

// type requestPath = string

interface IRequest {
  /** http method */
  get?: IRequestMethod
  post?: IRequestMethod
  delete?: IRequestMethod
  put?: IRequestMethod
}

/** the swagger "paths" interface */
interface IPath {
  /** api url path */
  [k: string]: IRequest
}

export const generateParameters = async (parameters: IParameter[]) => {
  const paths = schema.paths as IPath

  let url: keyof IPath
  const interfaces: string[] = []
  const requestFunctions: string[] = []
  // console.log(paths)
  const path = paths[url]
  const querySchema: JSONSchema = {
    name: 'query',
    type: 'object',
    required: [],
    properties: {},
    additionalProperties: false,
  }
  const bodySchema: JSONSchema = {
    name: 'query',
    type: 'object',
    required: [],
    properties: {},
    additionalProperties: false,
  }
  const pathSchema: JSONSchema = {
    name: 'query',
    type: 'object',
    required: [],
    properties: {},
    additionalProperties: false,
  }
  if (path.get && path.get.parameters) {
    // if (path.get.deprecated) {
    //   continue
    // }

    const functionName = `get${upperFirst(getFunctionName(url))}`
    const params = path.get.parameters
    params.forEach(param => {
      if (param.in === 'query') {
        const property: JSONSchema = {
          type: param.type as JSONSchema4TypeName,
          description: param.description,
        }
        if (param.type === 'array') {
          property.items = param.items as JSONSchema
        }
        querySchema.properties![param.name] = property
        if (param.required) {
          ;(querySchema.required as string[]).push(param.name)
        }
      }

      if (param.in === 'body') {
        const property: JSONSchema = {
          type: param.type as JSONSchema4TypeName,
          description: param.description,
        }
        if (param.type === 'array') {
          property.items = param.items as JSONSchema
        }
        bodySchema.properties![param.name] = property
        if (param.required) {
          ;(bodySchema.required as string[]).push(param.name)
        }
      }
      if (param.in === 'path') {
        const property: JSONSchema = {
          type: param.type as JSONSchema4TypeName,
          description: param.description,
        }
        if (param.type === 'array') {
          property.items = param.items as JSONSchema
        }
        pathSchema.properties![param.name] = property
        if (param.required) {
          ;(pathSchema.required as string[]).push(param.name)
        }
      }
    })

    let paramString = ''
    const requestParamSchema: JSONSchema = {
      type: 'object',
      properties: {},
      required: [],
      additionalProperties: false,
    }
    const paramInterfaceName = `I${upperFirst(functionName)}Param`
    if (!isEmpty(querySchema.properties)) {
      requestParamSchema.properties!.query = querySchema
      if (
        querySchema.required === true ||
        (Array.isArray(querySchema.required) && querySchema.required.length > 0)
      ) {
        ;(requestParamSchema.required as string[]).push('query')
      }
    }
    if (!isEmpty(bodySchema.properties)) {
      requestParamSchema.properties!.body = bodySchema
      if (
        bodySchema.required === true ||
        (Array.isArray(bodySchema.required) && bodySchema.required.length > 0)
      ) {
        ;(requestParamSchema.required as string[]).push('body')
      }
    }
    if (!isEmpty(pathSchema.properties)) {
      requestParamSchema.properties!.path = pathSchema
      if (
        pathSchema.required === true ||
        (Array.isArray(pathSchema.required) && pathSchema.required.length > 0)
      ) {
        ;(requestParamSchema.required as string[]).push('path')
      }
    }

    if (!isEmpty(requestParamSchema.properties)) {
      interfaces.push(
        await compile(requestParamSchema, paramInterfaceName, {
          bannerComment: `\n/** get \`${url}\` parameters */`,
        }),
      )
      paramString = `param: ${paramInterfaceName}`
    }
    // console.log(interfaces.join(''))

    const tsFunction = `
      /** ${path.get.summary} */
      export const ${functionName} = (${paramString}) => {
        return fetch(interceptRequest('${transformPathParameters(url)}'${
      paramString ? ', param' : ''
    })).then(interceptResponse)
      }`

    requestFunctions.push(tsFunction)

    console.log(tsFunction)
  }

  return format(`
  import { interceptRequest, interceptResponse } from './fetchInterceptor'

  ${interfaces.join('')}${requestFunctions.join('')}`)
}
