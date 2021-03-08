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

/** request parameter type for getApiDatamapFieldDef */
interface GetApiDatamapFieldDefOption {
  /** 创建人 */
  query?: {
    /**
        创建人 */
    createdBy?: string
    /**
        创建时间 */
    createdTimeEnd?: string
    /**
        创建时间 */
    createdTimeStart?: string
    /**
        是否删除：0-否，1-是 */
    deleted?: boolean
    /**
        字段描述 */
    description?: string
    endIndex?: number
    /**
        字段Id：table_id+field_name */
    fieldId?: string
    /**
        字段名称 */
    fieldName?: string
    /**
        修改人 */
    operatedBy?: string
    /**
        修改时间 */
    operatedTimeEnd?: string
    /**
        修改时间 */
    operatedTimeStart?: string
    /**
        分页参数，第几页 */
    pageNo?: number
    /**
        分页参数，每页的条数 */
    pageSize?: number
    startIndex?: number
    /**
        关联table_defination表 */
    tableId?: string
    /**
        字段类型：boolean,long,double,string,date */
    type?: string
  }
}

interface GetApiDatamapFieldDefResponse {
  /** OK */
  200: ReplyVOPageVOFieldDefListVO
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type GetApiDatamapFieldDefResponseSuccess = GetApiDatamapFieldDefResponse[200]
/**
 * 分页查询【表字段信息】
 * tags: 【表字段信息】API
 */
export const getApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'get'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = ('' as unknown) as GetApiDatamapFieldDefResponseSuccess
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

/** request parameter type for putApiDatamapFieldDef */
interface PutApiDatamapFieldDefOption {
  body?: string
}

interface PutApiDatamapFieldDefResponse {
  /** OK */
  200: ReplyVOFieldDefShowVO
  /** Created */
  201: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type PutApiDatamapFieldDefResponseSuccess = PutApiDatamapFieldDefResponse[200]
/**
 * 修改
 * tags: API
 */
export const putApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'put'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = ('' as unknown) as PutApiDatamapFieldDefResponseSuccess
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

/** request parameter type for postApiDatamapFieldDef */
interface PostApiDatamapFieldDefOption {
  body?: string
}

interface PostApiDatamapFieldDefResponse {
  /** Created */
  201: ReplyVO
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type PostApiDatamapFieldDefResponseSuccess = PostApiDatamapFieldDefResponse[201]
/**
 * 新增
 * tags: 表字段信息
 */
export const postApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'post'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = ('' as unknown) as PostApiDatamapFieldDefResponseSuccess
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

/** request parameter type for deleteApiDatamapFieldDef */
interface DeleteApiDatamapFieldDefOption {
  body?: string
}

interface DeleteApiDatamapFieldDefResponse {
  /** OK */
  200: FieldDefAddDTO
  /** No Content */
  204: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
}

type DeleteApiDatamapFieldDefResponseSuccess = DeleteApiDatamapFieldDefResponse[200]
/**
 * 批量删除
 * tags: API
 */
export const deleteApiDatamapFieldDef = /* #__PURE__ */ (() => {
  /** http method */
  const method = 'delete'
  /** request url */
  const url = '/api/datamap/fieldDef'
  const mockData = ({
    description: 'string',
    fieldId: 'string',
    fieldName: 'name1',
    tableId: 'string',
    type: 'string',
  } as unknown) as DeleteApiDatamapFieldDefResponseSuccess
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
