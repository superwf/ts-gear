import { refMap, definitionMap } from 'src/global'
import { removeGenericSymbol } from 'src/tool/genericType'

/** check any ref, if not exist in definition
 * add it to definitionMap, treat as any
 * */
export const polyfillRefToDefinition = () => {
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
