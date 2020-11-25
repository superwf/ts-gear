/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { PropertyType } from 'ts-gear'
import { requester } from 'fffxx'
import type { ReplyVOInt } from './definition'

/** request parameter type for deleteApiDataboardBoardEs */
export interface DeleteApiDataboardBoardEsOption {
  /** 索引数组 */
  body?: Array<string>
}

export interface DeleteApiDataboardBoardEsResponse {
  /** OK */
  200: ReplyVOInt
  /** No Content */
  204: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
}

export type DeleteApiDataboardBoardEsResponseSuccess = PropertyType<
  DeleteApiDataboardBoardEsResponse,
  200
>
/**
 * 删除索引
 * tags: Es
 * produces: *／*
 */
export function deleteApiDataboardBoardEs(
  option?: DeleteApiDataboardBoardEsOption,
): Promise<DeleteApiDataboardBoardEsResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(deleteApiDataboardBoardEs.mockData as any)
  }
  return requester('/api/databoard/board/es', {
    method: 'delete',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  deleteApiDataboardBoardEs.mockData = '' as any
}
deleteApiDataboardBoardEs.method = 'delete'
deleteApiDataboardBoardEs.url = '/api/databoard/board/es'
