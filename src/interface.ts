import { JSONSchema4 } from 'json-schema'

export type JSONSchema = JSONSchema4

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

/** 每个请求的json schema定义的parameters的住装数据结构 */
export interface IParameterSchema {
  query?: JSONSchema
  body?: JSONSchema
  path?: JSONSchema
  formData?: JSONSchema
  header?: JSONSchema
}

export type TPathMatcherFunction = RegExp | ((url: string) => boolean)

export interface IProject {
  /** 项目名字，会在dest文件夹中创建该项目名称的目录 */
  name: string
  /** 读取swagger配置的路径，可以是本地json文件或远程swagger地址
   * http开头的为远程地址
   * 否则按本地文件读取
   * */
  source: string
  /** 需要验证参数在这里添加 */
  fetchOption?: RequestInit
  /** 过滤需要的请求路径
   * 有些项目其中掺杂了很多无用的api，过滤掉可减少文件体积，加速运行
   * */
  pathMatcher?: TPathMatcherFunction
}

/** 用户配置文件定义 */
export interface IUserConfig {
  /** 项目输出文件夹，会在该文件夹下建立以每个项目名建立独立的文件夹
   * 默认为 './service'
   * */
  dest: string

  projects: IProject[]
}
