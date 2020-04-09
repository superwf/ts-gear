import { cleanRefAndDefinitionName } from './cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from './assembleSchemaToGlobal'
import { translateSchema } from './translateSchema'
import { parseGenericType } from './parseGenericType'
import { polyfillRefToDefinition } from './polyfillRefToDefinition'
import { generateDefinitionContent } from './generateDefinitionContent'

import { JSONSchema, IProject } from 'src/interface'

/**
 * 1. translate if transate engine is assigned.
 * 2. format unregular charators in $ref and definitions.
 * 3. process generic type names.
 * 4. assemble requests and definitions to global map variables.
 */
export const step = async (schema: JSONSchema, project: IProject) => {
  if (project.translationEngine) {
    await translateSchema(schema, project.translationEngine)
  }
  cleanRefAndDefinitionName(schema)
  assembleSchemaToGlobal(schema)
  parseGenericType()
  polyfillRefToDefinition()
  generateDefinitionContent(project)
}
