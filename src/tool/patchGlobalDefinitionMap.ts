import type { DefinitionMap } from '../type'

/**
 * add a new type definition to definitionMap
 * */
export const patchGlobalDefinitionMap = ({
  typeName,
  definitionMap,
  alias = 'any',
  originalName,
}: {
  typeName: string
  definitionMap: DefinitionMap
  alias?: string
  originalName?: string
}) => {
  if (!(typeName in definitionMap)) {
    definitionMap[typeName] = {
      originalName,
      typeName,
      typescriptContent: `export type ${typeName} = ${alias}`,
    }
    const originalDefinitionName = Object.getOwnPropertyNames(definitionMap).find(
      name => definitionMap[name].typeName === typeName,
    )
    if (originalDefinitionName && definitionMap[originalDefinitionName]) {
      definitionMap[typeName].schema = definitionMap[originalDefinitionName].schema
    }
  }
}
