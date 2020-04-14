import * as step from './step'

import { restore } from 'src/global'

/**
 * run step by step
 * */
export const run = async () => {
  const projects = step.getUserConfig()
  for (const name in projects) {
    const project = projects[name]
    step.prepareProjectDirectory(project)
    const spec = await step.fetchSwagger(project)

    if (project.translationEngine) {
      await step.translateSchema(spec, project.translationEngine)
    }
    step.cleanRefAndDefinitionName(spec, project.keepGeneric)
    step.assembleSchemaToGlobal(spec)
    step.parseGenericType()
    step.assembleRefsInPath(spec)
    step.polyfillRefToDefinition()
    step.generateDefinitionContent(project)
    step.generateRequestContent(spec, project)
    step.writeProject(project)

    restore()
  }
}
