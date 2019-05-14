import { JSONSchema4TypeName } from 'json-schema'
import { compile } from 'json-schema-to-typescript'
import { camelCase, isEmpty, upperFirst } from 'lodash'
import { format } from 'prettier'
import { IRequestMethod, JSONSchema } from '../interface'
import { transformPathParameters } from '../util'
import { generateResponseSchema } from './responseSchema'

interface IRequest {
  /** http method */
  [k: string]: IRequestMethod
}

/** the swagger "paths" interface */
interface IPath {
  /** api url path */
  [k: string]: IRequest
}

export const generatePaths = async (schema: JSONSchema) => {
  const paths = schema.paths as IPath

  let url: keyof IPath
  const interfaces: string[] = []
  const requestFunctions: string[] = []
  // console.log(paths)
  for (url in paths) {
    if (!paths.hasOwnProperty(url)) {
      continue
    }
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
    for (const k in path) {
      if (!path.hasOwnProperty(k)) {
        continue
      }
      // console.log(k)
      // }
      // if (path.get && path.get.parameters) {
      // if (path.get.deprecated) {
      //   continue
      // }

      const request = path[k]

      const functionName = `${k}${upperFirst(camelCase(url))}`
      // console.log(getInterfaceName(request.responses[200].schema.title))
      if (request.parameters) {
        request.parameters.forEach(param => {
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
      }

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
          (Array.isArray(querySchema.required) &&
            querySchema.required.length > 0)
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
            bannerComment: `\n/** ${k} \`${url}\` parameters */`,
          }),
        )
        paramString = `param: ${paramInterfaceName}`
      }
      // console.log(interfaces.join(''))

      let responseSchema = await generateResponseSchema(request.responses)
      if (responseSchema) {
        responseSchema = `<${responseSchema}>`
      }
      // if (request.responses[200] && request.responses[200].schema) {
      //   console.log(request.responses[200])
      //   responseSchema = `<${upperFirst(
      //     request.responses[200].schema.title.replace(/[^a-z\d]/gi, ''),
      //   )}>`
      // }

      const tsFunction = `
      /** ${request.summary} */
      export const ${functionName} = (${paramString}) => {
        const [ url, option ] = interceptRequest('${transformPathParameters(
          url,
        )}'${paramString ? ', param' : ''})
        option.method = '${k}'
        return fetch(url, option).then${responseSchema}(interceptResponse)
      }`

      requestFunctions.push(tsFunction)

      // console.log(tsFunction)
    }
  }
  const definitionKeys = Object.keys(
    schema.definitions ? schema.definitions : {},
  )
  const definitionImports = definitionKeys.map(d => {
    if (d.endsWith('[]')) {
      return ''
    }
    return upperFirst(camelCase(d))
  })

  return format(
    `
  import { ${definitionImports.join(',')} } from './definitions'
  import { interceptRequest, interceptResponse } from './fetchInterceptor'

  ${interfaces.join('')}${requestFunctions.join('')}`,
    { parser: 'typescript' },
  )
}
