/** Don`t modify this file manually, its content will be overwriten next time execute the `tsg` command. */
import projects from '../../ts-gear'
import { ReplyVOInt } from './definitions'

const project = projects.find(p => p.name === 'projectE')!
if (!project) {
  throw new Error(
    'project projectE not found, check project name in your "ts-gear.ts"',
  )
}
const { requester } = project

export interface IDeleteApiDataboardBoardEsParam {
  body?: Array<string>
}

/** 删除索引 */
export function deleteApiDataboardBoardEs(
  option: IDeleteApiDataboardBoardEsParam,
): Promise<ReplyVOInt> {
  return requester('/api/databoard/board/es', { ...option, method: 'delete' })
}

deleteApiDataboardBoardEs.method = 'delete'
