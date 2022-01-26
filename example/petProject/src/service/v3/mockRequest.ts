/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from 'fffxx'
import type {
  ReplyVOPageVOFieldDefListVO,
  ReplyVOFieldDefShowVO,
  ReplyVO,
  FieldDefAddDTO,
} from './definition'

/** @description request parameter type for getApiDatamapFieldDef */
export interface GetApiDatamapFieldDefOption {
  /**
   * @description
   *   创建人
   */
  query?: {
    /**
        @description
          创建人 */
    createdBy?: string
    /**
        @description
          创建时间 */
    createdTimeEnd?: string
    /**
        @description
          创建时间 */
    createdTimeStart?: string
    /**
        @description
          是否删除：0-否，1-是 */
    deleted?: boolean
    /**
        @description
          字段描述 */
    description?: string
    endIndex?: number
    /**
        @description
          字段Id：table_id+field_name */
    fieldId?: string
    /**
        @description
          字段名称 */
    fieldName?: string
    /**
        @description
          修改人 */
    operatedBy?: string
    /**
        @description
          修改时间 */
    operatedTimeEnd?: string
    /**
        @description
          修改时间 */
    operatedTimeStart?: string
    /**
        @description
          分页参数，第几页 */
    pageNo?: number
    /**
        @description
          分页参数，每页的条数 */
    pageSize?: number
    startIndex?: number
    /**
        @description
          关联table_defination表 */
    tableId?: string
    /**
        @description
          字段类型：boolean,long,double,string,date */
    type?: string
  }
}

/** @description response type for getApiDatamapFieldDef */
export interface GetApiDatamapFieldDefResponse {
  /**
   * @description
   *   OK
   */
  200: ReplyVOPageVOFieldDefListVO
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

export type GetApiDatamapFieldDefResponseSuccess =
  GetApiDatamapFieldDefResponse[200]
/**
 * @description
 *   分页查询【表字段信息】
 * @tags 【表字段信息】API
 */
export const getApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'get'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = '' as unknown as GetApiDatamapFieldDefResponseSuccess
  const mockRequest = function (
    option?: GetApiDatamapFieldDefOption,
  ): Promise<GetApiDatamapFieldDefResponseSuccess> {
    return Promise.resolve(mockData)
  }
  mockRequest.method = method
  mockRequest.url = url
  mockRequest.mockData = mockData
  return mockRequest
})()

/** @description request parameter type for putApiDatamapFieldDef */
export interface PutApiDatamapFieldDefOption {
  body?: string
}

/** @description response type for putApiDatamapFieldDef */
export interface PutApiDatamapFieldDefResponse {
  /**
   * @description
   *   OK
   */
  200: ReplyVOFieldDefShowVO
  /**
   * @description
   *   Created
   */
  201: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

export type PutApiDatamapFieldDefResponseSuccess =
  PutApiDatamapFieldDefResponse[200]
/**
 * @description
 *   修改
 * @tags API
 */
export const putApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'put'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = '' as unknown as PutApiDatamapFieldDefResponseSuccess
  const mockRequest = function (
    option?: PutApiDatamapFieldDefOption,
  ): Promise<PutApiDatamapFieldDefResponseSuccess> {
    return Promise.resolve(mockData)
  }
  mockRequest.method = method
  mockRequest.url = url
  mockRequest.mockData = mockData
  return mockRequest
})()

/** @description request parameter type for postApiDatamapFieldDef */
export interface PostApiDatamapFieldDefOption {
  body?: string
}

/** @description response type for postApiDatamapFieldDef */
export interface PostApiDatamapFieldDefResponse {
  /**
   * @description
   *   Created
   */
  201: ReplyVO
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
  /**
   * @description
   *   Not Found
   */
  404: any
}

export type PostApiDatamapFieldDefResponseSuccess =
  PostApiDatamapFieldDefResponse[201]
/**
 * @description
 *   新增
 * @tags 表字段信息
 * @x-mysql {"xxx业务表":"mysql_xxx_xxx","xxx业务表2":"mysql_xxx_xxx2"}
 * @x-jimbd {"xxx业务表":"jjjjj_table"}
 */
export const postApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'post'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = '' as unknown as PostApiDatamapFieldDefResponseSuccess
  const mockRequest = function (
    option?: PostApiDatamapFieldDefOption,
  ): Promise<PostApiDatamapFieldDefResponseSuccess> {
    return Promise.resolve(mockData)
  }
  mockRequest.method = method
  mockRequest.url = url
  mockRequest.mockData = mockData
  return mockRequest
})()

/** @description request parameter type for deleteApiDatamapFieldDef */
export interface DeleteApiDatamapFieldDefOption {
  body?: string
}

/** @description response type for deleteApiDatamapFieldDef */
export interface DeleteApiDatamapFieldDefResponse {
  /**
   * @description
   *   OK
   */
  200: FieldDefAddDTO
  /**
   * @description
   *   No Content
   */
  204: any
  /**
   * @description
   *   Unauthorized
   */
  401: any
  /**
   * @description
   *   Forbidden
   */
  403: any
}

export type DeleteApiDatamapFieldDefResponseSuccess =
  DeleteApiDatamapFieldDefResponse[200]
/**
 * @description
 *   批量删除
 * @tags API
 */
export const deleteApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'delete'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = {
    description: 'string',
    fieldId: 'string',
    fieldName: 'name1',
    tableId: 'string',
    type: 'string',
  } as unknown as DeleteApiDatamapFieldDefResponseSuccess
  const mockRequest = function (
    option?: DeleteApiDatamapFieldDefOption,
  ): Promise<DeleteApiDatamapFieldDefResponseSuccess> {
    return Promise.resolve(mockData)
  }
  mockRequest.method = method
  mockRequest.url = url
  mockRequest.mockData = mockData
  return mockRequest
})()
