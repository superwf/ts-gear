import { JSONSchema4 } from 'json-schema'

export type HttpMethod = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options'

export type JSONSchema = JSONSchema4

/** url param in path
 * 例如/api/abc/:id
 * 如果是/:ids数组的情况
 * 应先手动转成string再带入
 * */
export interface IPath {
  [k: string]: string | number | undefined
}

/** url query
 * 只支持一维结构的键值对或数组
 * */
export interface IQuery {
  [k: string]: any
}

/** your fetch function */
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

/** json schema每个节点traverse结构 */
export interface ISchemaNode {
  value: any
  key: string
  parent: any
  path: string[]
}

/** 每个请求参数的原始schema结构 */
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

// interface IResponseSchema extends JSONSchema {
//   title?: string
// }

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

/** swagger paths内每个http请求详情对应的结构 */
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
}
