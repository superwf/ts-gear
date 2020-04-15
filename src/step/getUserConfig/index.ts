import { join } from 'path'

import { getProjectNamesFromCommmandLine } from './cliOption'

import { IProject } from 'src/interface'

/** get user config
 * filter if any cli option
 * return project mapped by name
 * */
export const getUserConfig = (): IProject[] => {
  const cwd = process.cwd()
  const tsGearConfigPath = join(cwd, 'ts-gear')
  /* eslint-disable */
  const config = require(tsGearConfigPath)
  /* eslint-enable */
  const projects = (config.default ? config.default : config) as IProject[]
  const projectNamesFromCommandLine = getProjectNamesFromCommmandLine()
  if (projectNamesFromCommandLine.length > 0) {
    return projects.filter(project => {
      return projectNamesFromCommandLine.some(name => name === project.name)
    })
  }
  return projects
}
