/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
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

export type DeleteApiDataboardBoardEsResponseSuccess = DeleteApiDataboardBoardEsResponse[200]
const deleteApiDataboardBoardEsMockData = '' as any

/**
 * 删除索引
 * tags: Es
 * produces: *／*
 */
export function deleteApiDataboardBoardEs(
  option?: DeleteApiDataboardBoardEsOption,
): Promise<DeleteApiDataboardBoardEsResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      deleteApiDataboardBoardEsMockData as DeleteApiDataboardBoardEsResponseSuccess,
    )
  }
  return requester('/api/databoard/board/es', {
    method: 'delete',
    ...option,
  }) as Promise<DeleteApiDataboardBoardEsResponseSuccess>
}

export const deleteApiDataboardBoardEsMethod = 'delete'
export const deleteApiDataboardBoardEsUrl = '/api/databoard/board/es'
