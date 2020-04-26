import { IProjectGlobalMap, IProject } from './interface'
import { clearObject } from './tool/clearObject'

const projectGlobal: IProjectGlobalMap = {}

export const getGlobal = (project: IProject) => {
  if (!projectGlobal[project.name]) {
    projectGlobal[project.name] = {
      definitionMap: {},
      requestMap: {},
      requestRefSet: new Set(),
      requestEnumSet: new Set(),
      enumMap: {},
    }
  }
  return projectGlobal[project.name]
}

export const restore = (project: IProject) => {
  const g = projectGlobal[project.name]
  clearObject(g.definitionMap)
  clearObject(g.requestMap)
  clearObject(g.enumMap)
  g.requestRefSet.clear()
  g.requestEnumSet.clear()
}
