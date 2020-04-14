import { join } from 'path'

import { getProjectsFromCommmandLine } from './cliOption'

import { IProject, IProjectMap } from 'src/interface'

/***/
export const getUserConfig = (): IProjectMap => {
  const cwd = process.cwd()
  const tsGearConfigPath = join(cwd, 'ts-gear')
  /* eslint-disable @typescript-eslint/no-var-requires */
  const config = require(tsGearConfigPath)
  /* eslint-enable @typescript-eslint/no-var-requires */
  const projects = (config.default ? config.default : config) as IProject[]
  const projectNamesFromCommandLine = getProjectsFromCommmandLine()
  // for (const name in projects) {
  //   projects[name].name = name
  // }
  const projectMap: IProjectMap = {}
  if (projectNamesFromCommandLine.length > 0) {
    projectNamesFromCommandLine.forEach((name: string) => {
      const project = projects.find(p => p.name === name)
      if (project) {
        projectMap[name] = project
      }
    })
  } else {
    projects.forEach(project => {
      projectMap[project.name] = project
    })
  }
  return projectMap
}
