/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { requester as requester } from 'fffxx'
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
export const deleteApiDataboardBoardEsMockData = ('' as unknown) as DeleteApiDataboardBoardEsResponseSuccess
/**
 * 删除索引
 * tags: Es
 * produces: *／*
 */
export const deleteApiDataboardBoardEs = /* #__PURE__ */ (() => {
  const method = 'delete'
  const url = '/api/databoard/board/es'
  function deleteApiDataboardBoardEs(
    option?: DeleteApiDataboardBoardEsOption,
  ): Promise<DeleteApiDataboardBoardEsResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(deleteApiDataboardBoardEsMockData)
    }
    return requester(url, {
      method,
      ...option,
    }) as Promise<DeleteApiDataboardBoardEsResponseSuccess>
  }

  deleteApiDataboardBoardEs.method = method
  deleteApiDataboardBoardEs.url = url
  return deleteApiDataboardBoardEs
})()
