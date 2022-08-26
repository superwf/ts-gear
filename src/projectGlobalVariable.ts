import type { ProjectGlobalMap, Project } from './type'
import { clearObject } from './tool/clearObject'

const projectGlobal: ProjectGlobalMap = {}

// let currentProject: Project | undefined

export const getGlobal = (project: Project) => {
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

export const restore = (project: Project) => {
  const g = projectGlobal[project.name]
  clearObject(g.definitionMap)
  clearObject(g.requestMap)
  clearObject(g.enumMap)
  g.requestRefSet.clear()
  g.requestEnumSet.clear()
}
