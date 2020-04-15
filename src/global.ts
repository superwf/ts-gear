import { IProjectGlobalMap, IProject, HttpMethod } from 'src/interface'
import { clearObject } from 'src/tool/clearObject'

const projectGlobal: IProjectGlobalMap = {}

export const getGlobal = (project: IProject) => {
  if (!projectGlobal[project.name]) {
    projectGlobal[project.name] = {
      definitionMap: {},
      refMap: {},
      requestMap: {},
      requestRefMap: {},
      requestRefs: new Set(),
    }
  }
  return projectGlobal[project.name]
}

export const restore = (project: IProject) => {
  const g = projectGlobal[project.name]
  clearObject(g.definitionMap)
  clearObject(g.refMap)
  clearObject(g.requestMap)
  g.requestRefs.clear()
}

export const httpMethods: HttpMethod[] = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']
