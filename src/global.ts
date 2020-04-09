import { IRefMap, IDefinitionMap, IDiscriminatorMap, IRequestMap, IProjectRequesterMap } from 'src/interface'

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
