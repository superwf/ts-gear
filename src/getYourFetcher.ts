import { IProject } from './interface'

export const getYourFetcher = (project: IProject) => {
  return project.fetcher
}
