import { EOL } from 'os'
import type { Project } from '../type'
import { config } from '../constant'

/** 将换行符号写入一个全局变量中存放 */
export const processEOL = (project: Project) => {
  if (project.EOL === 'auto') {
    config.EOL = EOL
  }
}
