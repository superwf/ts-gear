import * as step from './step'
import { restore } from './projectGlobalVariable'
import { IProject } from './interface'

export const processProject = async (project: IProject) => {
  step.prepareProjectDirectory(project)
  const spec = await step.fetchSwagger(project)

  if (project.translationEngine) {
    await step.translateSchema(spec, project.translationEngine)
  }
  const keepGeneric = project.keepGeneric === undefined || project.keepGeneric
  step.cleanRefAndDefinitionName(spec, keepGeneric)
  step.assembleSchemaToGlobal(spec, project)
  if (keepGeneric) {
    step.parseGenericType(project)
  }
  step.collectRefsInRequestAndPatchDefinition(project)
  step.generateDefinitionContent(project)
  step.generateRequestContent(spec, project)
  step.writeProject(project)

  restore(project)
}

/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
export const run = async () => {
  const projects = await step.getUserConfig()
  projects.forEach(processProject)
}
