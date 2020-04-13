import { join } from 'path'

import { getProjectsFromCommmandLine } from './cliOption'

import { IProjectMap } from 'src/interface'

/***/
export const getUserConfig = (): IProjectMap => {
  const cwd = process.cwd()
  const tsGearConfigPath = join(cwd, 'ts-gear')
  /* eslint-disable @typescript-eslint/no-var-requires */
  const config = require(tsGearConfigPath)
  /* eslint-enable @typescript-eslint/no-var-requires */
  let projects = (config.default ? config.default : config) as IProjectMap
  const projectNamesFromCommandLine = getProjectsFromCommmandLine()
  for (const name in projects) {
    projects[name].name = name
  }
  if (projectNamesFromCommandLine.length > 0) {
    projects = projectNamesFromCommandLine.reduce<IProjectMap>((r, v) => {
      if (v in projects) {
        r[v] = projects[v]
      }
      return r
    }, {})
  }
  return projects
}
