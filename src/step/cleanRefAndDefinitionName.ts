import type { Spec } from 'swagger-schema-official'

import { traverseSchema } from '../tool/traverseSchema'
import { cleanName } from '../tool/cleanName'
import { getDefinition } from '../tool/getDefinition'

/** use cleanName for all "$ref" and "definitions" names
 * mutate the spec data
 * */
export const cleanRefAndDefinitionName = (spec: Spec, keepGeneric: boolean) => {
  const definitions = getDefinition(spec)
  Object.getOwnPropertyNames(definitions).forEach(name => {
    const cleanedName = cleanName(name, keepGeneric)
    if (cleanedName !== name) {
      const origin = definitions[name]
      delete definitions[name]
      definitions[cleanedName] = origin
    }
  })
  traverseSchema(spec, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      parent.$ref = cleanName(value, keepGeneric)
    }
  })
}
