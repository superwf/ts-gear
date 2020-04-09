import { traverseSchema } from 'src/tool/traverseSchema'
import { definitionMap } from 'src/global'
import { hasGenericSymbol, removeGenericSymbol } from 'src/tool/genericType'
// import { sow, harvest } from 'src/source'

/** check generic type
 * support one level, as A<B> or A<B,C>
 * not support nesting level, as A<B<C>>, in this situation, "B<C>" will be treated as a whole type.
 *
 * if the type parameter does not exist in the definition schema, convert the name to normal type, remove all "<" and ">".
 * */
export const checkAndUpdateDefinitionTypeName = (definitionName: string) => {
  if (hasGenericSymbol(definitionName)) {
    const definition = definitionMap[definitionName]
    /** generac type */
    const [typeName, ...typeParameters] = definitionName.split(/<|>/).filter(Boolean)
    // const typeParameters = definitionName.replace(/(^[^<]+<)|(>$)/, '').split(',')
    if (definition.schema) {
      const allSubTypeInSchema = typeParameters.every(subTypeName => {
        let inSchema = false
        traverseSchema(definition.schema!, ({ value, key }) => {
          if (key === '$ref' && value === subTypeName) {
            inSchema = true
          }
        })
        return inSchema
      })
      if (!allSubTypeInSchema) {
        definition.typeName = removeGenericSymbol(definitionName)
      } else {
        definition.typeName = typeName
        definition.typeParameters = typeParameters
      }
    }
  }
}

export const parseGenericType = () => {
  for (const originName in definitionMap) {
    checkAndUpdateDefinitionTypeName(originName)
  }
}
