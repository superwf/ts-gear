import { join } from 'path'
import { writeFileSync, existsSync } from 'fs'

import * as prompts from 'prompts'

import { IProject } from '../../interface'
import { configFileName } from '../../constant'
import { initConfig } from '../../content/initConfig'
import { warn } from '../../tool/log'

import { getCliOption } from './cliOption'

/** get user config
 * filter if any cli option
 * return project mapped by name
 * */
export const getUserConfig = async () => {
  const cwd = process.cwd()
  const cliOption = getCliOption()
  if (cliOption.init) {
    const configFilePath = join(cwd, `${configFileName}.ts`)
    if (existsSync(configFilePath)) {
      const { overwrite } = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: `${configFilePath} already exist, overwrite?`,
        initial: true,
      })
      if (overwrite) {
        writeFileSync(configFilePath, initConfig)
      }
    } else {
      writeFileSync(configFilePath, initConfig)
    }
    return []
  }
  const tsGearConfigPath = join(cwd, configFileName)
  /* eslint-disable */
  const config = require(tsGearConfigPath)
  /* eslint-enable */
  let projects = (config.default ? config.default : config) as IProject[]
  const projectNamesFromCommandLine = cliOption.names
  if (projectNamesFromCommandLine.length > 0) {
    projects = projects.filter((project) => {
      return projectNamesFromCommandLine.some((name) => name === project.name)
    })
    if (projects.length === 0) {
      warn(`your input names "${cliOption.names.join(', ')}" match 0 projects, checkout and retry.`)
    }
    return projects
  }
  return projects
}
