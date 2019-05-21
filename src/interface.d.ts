import { JSONSchema4 } from 'json-schema'

export type JSONSchema = JSONSchema4

// add title to definition
export interface IDefinition extends JSONSchema {
  title: string
}
export interface IDefinitions {
  [k: string]: IDefinition
}

export type HttpMethods = 'get' | 'post' | 'delete' | 'put'

export interface IParameter {
  name: string
  in: 'query' | 'body' | 'path'
  description: string
  required: boolean
  type: string
  items?: JSONSchema
  format?: string
  schema?: JSONSchema
}

interface IResponseSchema extends JSONSchema {
  title?: string
}

interface IResponse {
  200?: {
    description: string
    schema: IResponseSchema
  }
  [key: string]: {
    description: string
    schema?: JSONSchema
  }
}

/** swagger paths内每个http请求详情对应的结构 */
export interface IRequestDetail {
  parameters?: IParameter[]
  summary: string
  operationId?: string
  produces: string[]
  tags: string[]
  responses: IResponse
  security?: any
  deprecated: boolean
}

interface IRequest {
  /** http method */
  [k: string]: IRequestDetail
}

/** swagger "paths" */
interface IPaths {
  /** api url path */
  [k: string]: IRequest
}

/** 每个请求的json schema定义的parameters的住装数据结构 */
interface IParameterSchema {
  query?: JSONSchema
  body?: JSONSchema
  path?: JSONSchema
}

/** 用户配置文件定义 */
export interface IUserConfig {
  /** 项目输出文件夹，会在该文件夹下建立以每个项目名建立独立的文件夹
   * 默认为 './service'
   * */
  dest: string

  projects: Array<{
    /** 项目名字，会在dest文件夹中创建该项目名称的目录 */
    name: string
    /** 读取swagger配置的路径，可以是本地json文件或远程swagger地址
     * http开头的为远程地址
     * 否则按本地文件读取
     * */
    source: string
    /** 需要验证参数在这里添加 */
    fetchOption?: RequestInit
  }>
}
