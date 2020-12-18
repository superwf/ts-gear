/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { requester } from 'fffxx'
import type {
  ReplyVOPageVOFieldDefListVO,
  ReplyVOFieldDefShowVO,
  ReplyVO,
  FieldDefAddDTO,
} from './definition'

/** request parameter type for getApiDatamapFieldDef */
export interface GetApiDatamapFieldDefOption {
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

export interface GetApiDatamapFieldDefResponse {
  /** OK */
  200: ReplyVOPageVOFieldDefListVO
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

export type GetApiDatamapFieldDefResponseSuccess = GetApiDatamapFieldDefResponse[200]
const getApiDatamapFieldDefMockData = '' as any

/**
 * 分页查询【表字段信息】
 * tags: 【表字段信息】API
 */
export function getApiDatamapFieldDef(
  option?: GetApiDatamapFieldDefOption,
): Promise<GetApiDatamapFieldDefResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      getApiDatamapFieldDefMockData as GetApiDatamapFieldDefResponseSuccess,
    )
  }
  return requester('api/datamap/fieldDef', {
    method: 'get',
    ...option,
  }) as Promise<GetApiDatamapFieldDefResponseSuccess>
}

export const getApiDatamapFieldDefMethod = 'get'
export const getApiDatamapFieldDefUrl = 'api/datamap/fieldDef'

/** request parameter type for putApiDatamapFieldDef */
export interface PutApiDatamapFieldDefOption {
  /** file */
  formData: {
    /**
        file */
    file: File
  }
}

export interface PutApiDatamapFieldDefResponse {
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

export type PutApiDatamapFieldDefResponseSuccess = PutApiDatamapFieldDefResponse[200]
const putApiDatamapFieldDefMockData = '' as any

/**
 * 修改
 * tags: API
 */
export function putApiDatamapFieldDef(
  option: PutApiDatamapFieldDefOption,
): Promise<PutApiDatamapFieldDefResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      putApiDatamapFieldDefMockData as PutApiDatamapFieldDefResponseSuccess,
    )
  }
  return requester('api/datamap/fieldDef', {
    method: 'put',
    ...option,
  }) as Promise<PutApiDatamapFieldDefResponseSuccess>
}

export const putApiDatamapFieldDefMethod = 'put'
export const putApiDatamapFieldDefUrl = 'api/datamap/fieldDef'

/** request parameter type for postApiDatamapFieldDef */
export interface PostApiDatamapFieldDefOption {
  body?: string
}

export interface PostApiDatamapFieldDefResponse {
  /** Created */
  201: ReplyVO
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

export type PostApiDatamapFieldDefResponseSuccess = PostApiDatamapFieldDefResponse[201]
const postApiDatamapFieldDefMockData = '' as any

/**
 * 新增
 * tags: 表字段信息
 */
export function postApiDatamapFieldDef(
  option?: PostApiDatamapFieldDefOption,
): Promise<PostApiDatamapFieldDefResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      postApiDatamapFieldDefMockData as PostApiDatamapFieldDefResponseSuccess,
    )
  }
  return requester('api/datamap/fieldDef', {
    method: 'post',
    ...option,
  }) as Promise<PostApiDatamapFieldDefResponseSuccess>
}

export const postApiDatamapFieldDefMethod = 'post'
export const postApiDatamapFieldDefUrl = 'api/datamap/fieldDef'

/** request parameter type for deleteApiDatamapFieldDef */
export interface DeleteApiDatamapFieldDefOption {
  body?: string
}

export interface DeleteApiDatamapFieldDefResponse {
  /** OK */
  200: FieldDefAddDTO
  /** No Content */
  204: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
}

export type DeleteApiDatamapFieldDefResponseSuccess = DeleteApiDatamapFieldDefResponse[200]
const deleteApiDatamapFieldDefMockData = {
  description: 'string',
  fieldId: 'string',
  fieldName: 'name1',
  tableId: 'string',
  type: 'string',
} as any

/**
 * 批量删除
 * tags: API
 */
export function deleteApiDatamapFieldDef(
  option?: DeleteApiDatamapFieldDefOption,
): Promise<DeleteApiDatamapFieldDefResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      deleteApiDatamapFieldDefMockData as DeleteApiDatamapFieldDefResponseSuccess,
    )
  }
  return requester('api/datamap/fieldDef', {
    method: 'delete',
    ...option,
  }) as Promise<DeleteApiDatamapFieldDefResponseSuccess>
}

export const deleteApiDatamapFieldDefMethod = 'delete'
export const deleteApiDatamapFieldDefUrl = 'api/datamap/fieldDef'
