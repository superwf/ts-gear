import { JSONSchema4 } from 'json-schema'
import * as translation from 'translation.js'

export type TranslationEngine = keyof typeof translation

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options'

export type JSONSchema = JSONSchema4

/** url param in path
 * e.g. /api/abc/:id
 * */
export interface IPath {
  [k: string]: string | number | undefined
}

/** url query */
export interface IQuery {
  [k: string]: any
}

/** your fetch function signature */
export type Requester = (url: string, param: IRequestParameter) => Promise<any>

/** request parameter option */
export interface IRequestParameter {
  query?: IQuery
  body?: any
  path?: IPath
  formData?: any
  header?: any
  method: HttpMethod
}

/** json schema traverse datatype */
export interface ITraverseSchemaNode {
  value: any
  key: string
  parent: any
  path: string[]
}

/** generial request parameter */
export interface IParameter {
  name: string
  in: keyof IParameterSchema
  description: string
  required: boolean
  type: string
  items?: JSONSchema
  format?: string
  schema?: JSONSchema
}

interface IResponse {
  // '200'?: {
  //   description: string
  //   schema: IResponseSchema
  // }
  [key: string]: {
    description: string
    schema?: JSONSchema
  }
}

/** swagger "paths" http request type */
export interface IRequestDetail {
  parameters?: IParameter[]
  summary?: string
  description?: string
  operationId?: string
  produces: string[]
  tags: string[]
  responses: IResponse
  security?: any
  deprecated: boolean
}

interface IRequest {
  /** http method */
  [path: string]: IRequestDetail
}

/** swagger "paths" */
export interface IPaths {
  /** api url path */
  [k: string]: IRequest
}

/** general request parameters defined in json schema
 **/
export interface IParameterSchema {
  query?: JSONSchema
  body?: JSONSchema
  path?: JSONSchema
  formData?: JSONSchema
  header?: JSONSchema
}

export type TPathMatcherFunction = RegExp | ((url: string) => boolean)

export interface IProject {
  /** the api files will be generated to
   * @default './service'
   * */
  dest: string
  /** project name，will be used to create dir in the dir defined in "dest" */
  name: string
  /** swagger doc path
   * could be remote or local json file
   * starts with "http" is remote
   * others are dealed local json file
   * */
  source: string
  /** the param for fetch swagger doc */
  fetchSwaggerDocOption?: RequestInit
  /** filter api path
   * some project mix too mach useless api
   * use this option could avoid those to be written in your api file
   * */
  pathMatcher?: TPathMatcherFunction
  requester: Requester

  withHost?: boolean
  withBasePath?: boolean

  /** if your swagger doc has non english word defined,
   * choose one engine try transate those words to english
   * this is not for human reading, is for program variable name
   * because translation depend on ouside network, it is not stable, you may need to retry many times to translate successfuly.
   * when you generate your api, then change the engine and regenerate new api, the translate output will definitely be different, so the api will be different too.
   *
   * most case you don`t need this option, try to persuade your teammate to correct the swagger doc to english is a better way.
   * if there are unregular charator, and you can not fix it.
   * try to use an engine provided by "translation.js"
   * */
  translationEngine?: TranslationEngine
}

/** generic type */
export interface IGenericType {
  name: string
  children?: IGenericType[]
  hasDefinition?: boolean
}
