/** Don`t modify this file, it will be overwriten next time execute the `tsg` command. */
import { interceptRequest, interceptResponse } from './interceptor'
import { ReplyVOInt } from './definitions'

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
  option.method = deleteApiDataboardBoardEs.method
  return fetch(url, option).then<ReplyVOInt>(interceptResponse)
}

deleteApiDataboardBoardEs.method = 'delete'
