/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { PropertyType } from 'ts-gear'
import projects from '../../tsg.config'
import { ReplyVO, Int } from './definition'
const project = projects.find((p) => p.name === 'projectE')!
const { requester } = project
/** request parameter type for deleteApiDataboardBoardEs */
export interface IDeleteApiDataboardBoardEsOption {
  /** 索引数组 */
  body?: Array<string>
}

export interface IDeleteApiDataboardBoardEsResponse {
  /** OK */
  200: ReplyVO<Int>
  /** No Content */
  204: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
}

export type IDeleteApiDataboardBoardEsResponseSuccess = PropertyType<
  IDeleteApiDataboardBoardEsResponse,
  200
>
/**
 * 删除索引
 * tags: Es
 * produces: *／*
 */
export function deleteApiDataboardBoardEs(
  option: IDeleteApiDataboardBoardEsOption,
): Promise<IDeleteApiDataboardBoardEsResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve('' as any)
  }
  return requester('/api/databoard/board/es', {
    method: 'delete',
    ...option,
  }) as Promise<any>
}
