import { IRefMap, IDefinitionMap, IRequestMap, IProjectRequesterMap, HttpMethod } from 'src/interface'

export let definitionMap: IDefinitionMap = {}
/** all Reference $ref name use this map
 * key is original ref name
 * value is clean ref name, may be from A<B> to AB
 * */
export let refMap: IRefMap = {}
export let requestMap: IRequestMap = {}
export let projectRequesterMap: IProjectRequesterMap = {}
export let requestRefs: Set<string> = new Set()

export const restore = () => {
  definitionMap = {}
  refMap = {}
  requestMap = {}
  projectRequesterMap = {}
  requestRefs = new Set()
}

export const httpMethods: HttpMethod[] = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch']
