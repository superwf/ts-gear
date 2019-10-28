import { interceptRequest, interceptResponse } from './interceptor'
import { ReplyVOInt } from './definitions'

const { info } = console
if (process && process.env && process.env.NODE_ENV === 'production') {
  throw new Error('mockRequest only used in dev mode')
}

export interface IDeleteApiDataboardBoardEsParam {
  body?: Array<string>
}

/**
 * 删除索引
 */
export function deleteApiDataboardBoardEs(
  param: IDeleteApiDataboardBoardEsParam,
) {
  const [url, option] = interceptRequest('/api/databoard/board/es', param)
  info('mock fetch: ', url, 'fetch param: ', param)
  option.method = 'delete'
  return Promise.resolve(new Response())
}
