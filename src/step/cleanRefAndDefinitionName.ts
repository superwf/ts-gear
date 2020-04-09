import { traverseSchema } from 'src/tool/traverseSchema'
import { cleanName } from 'src/tool/cleanName'
import { getDefinition } from 'src/tool/getDefinition'
import { JSONSchema } from 'src/interface'

/** use cleanName for all "$ref" and "definitions" names
 * */
export const cleanRefAndDefinitionName = (schema: JSONSchema) => {
  const definitions = getDefinition(schema)
  Object.getOwnPropertyNames(definitions).forEach(name => {
    const newName = cleanName(name)
    if (newName !== name) {
      const origin = definitions[name]
      delete definitions[name]
      definitions[newName] = origin
    }
  })
  traverseSchema(schema, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      value = cleanName(value)
      parent.$ref = cleanName(value)
    }
  })
}
