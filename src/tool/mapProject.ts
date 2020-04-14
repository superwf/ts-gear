import { IProject } from 'src/interface'

export const mapProject = (projects: IProject[]) => {
  return projects.reduce<{ [name: string]: IProject }>((r, v) => {
    r[v.name] = v
    return r
  }, {})
}
