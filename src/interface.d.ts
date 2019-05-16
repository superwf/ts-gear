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
