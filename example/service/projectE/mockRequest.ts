/** Don`t modify this file manually, its content will be overwriten next time execute the `tsg` command. */
import { ReplyVOint } from './definitions'

const { info } = console
if (process && process.env && process.env.NODE_ENV === 'production') {
  throw new Error('mockRequest only used in dev mode')
}

export interface IDeleteApiDataboardBoardEsParam {
  body?: Array<string>
}

/** 删除索引 */
export function deleteApiDataboardBoardEs(
  param: IDeleteApiDataboardBoardEsParam,
): Promise<ReplyVOint> {
  info(
    'mock fetch: /api/databoard/board/es with delete http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
}

deleteApiDataboardBoardEs.method = 'delete'
