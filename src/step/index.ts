import { Spec } from 'swagger-schema-official'

import { cleanRefAndDefinitionName } from './cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from './assembleSchemaToGlobal'
import { translateSchema } from './translateSchema'
import { parseGenericType } from './parseGenericType'
import { polyfillRefToDefinition } from './polyfillRefToDefinition'
import { generateDefinitionContent } from './generateDefinitionContent'
import { generateRequestContent } from './generateRequestContent'

import { IProject } from 'src/interface'

export * from './getUserConfig'
export * from './fetchSwagger'
export * from './prepareProjectDirectory'
export * from './translateSchema'
export * from './assembleSchemaToGlobal'
export * from './cleanRefAndDefinitionName'
export * from './parseGenericType'
export * from './assembleRefsInPath'
export * from './polyfillRefToDefinition'
export * from './generateDefinitionContent'
export * from './generateRequestContent'
export * from './writeProject'

/**
 * 1. translate if transate engine is assigned.
 * 2. format unregular charators in $ref and definitions.
 * 3. process generic type names.
 * 4. assemble requests and definitions to global map variables.
 */
export const step = async (spec: Spec, project: IProject) => {
  if (project.translationEngine) {
    await translateSchema(spec, project.translationEngine)
  }
  cleanRefAndDefinitionName(spec, project.keepGeneric)
  assembleSchemaToGlobal(spec)
  parseGenericType()
  polyfillRefToDefinition()
  generateDefinitionContent(project)
  generateRequestContent(spec, project)
}
