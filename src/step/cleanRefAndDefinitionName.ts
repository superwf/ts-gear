import { Spec } from 'swagger-schema-official'

import { traverseSchema } from 'src/tool/traverseSchema'
import { cleanName } from 'src/tool/cleanName'
import { getDefinition } from 'src/tool/getDefinition'

/** use cleanName for all "$ref" and "definitions" names
 * */
export const cleanRefAndDefinitionName = (spec: Spec, keepGeneric: boolean) => {
  const definitions = getDefinition(spec)
  Object.getOwnPropertyNames(definitions).forEach(name => {
    const newName = cleanName(name, keepGeneric)
    if (newName !== name) {
      const origin = definitions[name]
      delete definitions[name]
      definitions[newName] = origin
    }
  })
  traverseSchema(spec, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      parent.$ref = cleanName(value, keepGeneric)
    }
  })
}
