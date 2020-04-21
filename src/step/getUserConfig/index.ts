import { join } from 'path'
import { writeFileSync } from 'fs'

import { IProject } from '../../interface'
import { initConfig } from '../../content/initConfig'

import { getCliOption } from './cliOption'

/** get user config
 * filter if any cli option
 * return project mapped by name
 * */
export const getUserConfig = (): IProject[] => {
  const cwd = process.cwd()
  const cliOption = getCliOption()
  if (cliOption.init) {
    writeFileSync(join(cwd, 'ts-gear.ts'), initConfig)
    return []
  }
  const tsGearConfigPath = join(cwd, 'ts-gear')
  /* eslint-disable */
  const config = require(tsGearConfigPath)
  /* eslint-enable */
  const projects = (config.default ? config.default : config) as IProject[]
  const projectNamesFromCommandLine = cliOption.names
  if (projectNamesFromCommandLine.length > 0) {
    return projects.filter(project => {
      return projectNamesFromCommandLine.some(name => name === project.name)
    })
  }
  return projects
}
