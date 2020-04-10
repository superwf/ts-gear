import { IRefMap, IDefinitionMap, IRequestMap, IProjectRequesterMap, HttpMethod } from 'src/interface'

export let definitionMap: IDefinitionMap = {}
export let refMap: IRefMap = {}
export let requestMap: IRequestMap = {}
export let projectRequesterMap: IProjectRequesterMap = {}

export const restore = () => {
  definitionMap = {}
  refMap = {}
  requestMap = {}
  projectRequesterMap = {}
}

export const httpMethods: HttpMethod[] = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']
