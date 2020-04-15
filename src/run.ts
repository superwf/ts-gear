import * as step from './step'

import { restore } from 'src/global'

/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
export const run = () => {
  const projects = step.getUserConfig()
  projects.forEach(async project => {
    step.prepareProjectDirectory(project)
    const spec = await step.fetchSwagger(project)

    if (project.translationEngine) {
      await step.translateSchema(spec, project.translationEngine)
    }
    const keepGeneric = Boolean(project.keepGeneric)
    step.cleanRefAndDefinitionName(spec, keepGeneric)
    step.assembleSchemaToGlobal(spec, project)
    if (project.keepGeneric) {
      step.parseGenericType(project)
    }
    step.patchDefinitionMap(keepGeneric)
    // step.assembleRefsInPath(spec, keepGeneric)
    step.generateDefinitionContent(project)
    step.generateRequestContent(spec, project)
    step.writeProject(project)

    restore(project)
  })
}
