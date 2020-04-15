import { refMap, definitionMap } from 'src/global'
import { hasGenericSymbol, parseGenericNames, removeGenericSymbol } from 'src/tool/genericType'

/** check any ref, if not exist in definition
 * add it to definitionMap, treat as any
 * if has type with no generic type and type with generic type
 * use the one has generic type
 * remove the one has no generic type
 * */
export const patchDefinitionMap = (keepGeneric: boolean) => {
  const definitions = Object.values(definitionMap)
  for (const ref in refMap) {
    if (!(ref in definitionMap)) {
      const typeName = removeGenericSymbol(ref)
      if (!definitions.some(d => d.typeName === typeName)) {
        definitionMap[ref] = {
          typeName,
          typescriptContent: `export type ${typeName} = any`,
        }
        refMap[ref] = typeName
      }
    }
  }
}
