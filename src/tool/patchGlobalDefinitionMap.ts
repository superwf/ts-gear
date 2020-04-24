import { IDefinitionMap } from '../interface'

/**
 * add a new type definition to definitionMap
 * */
export const patchGlobalDefinitionMap = (typeName: string, definitionMap: IDefinitionMap, alias = 'any') => {
  if (!(typeName in definitionMap)) {
    definitionMap[typeName] = {
      typeName,
      typescriptContent: `export type ${typeName} = ${alias}`,
    }
  }
}
