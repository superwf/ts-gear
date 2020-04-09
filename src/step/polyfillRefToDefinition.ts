import { refMap, definitionMap } from 'src/global'
import { removeGenericSymbol } from 'src/tool/genericType'

/** check any ref, if not exist in definition
 * add it to definitionMap, treat as any
 * */
export const polyfillRefToDefinition = () => {
  for (const ref in refMap) {
    if (!(ref in definitionMap)) {
      const name = removeGenericSymbol(ref)
      definitionMap[ref] = {
        definitionName: name,
        typeName: name,
        typescriptContent: `export type ${name} = any`,
      }
    }
  }
}
