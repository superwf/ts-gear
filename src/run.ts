import * as step from './step'
import { restore } from './projectGlobalVariable'
import { IProject } from './interface'

export const processProject = async (project: IProject, tsGearConfigPath: string): Promise<void> => {
  step.prepareProjectDirectory(project, tsGearConfigPath)
  const spec = await step.fetchSwagger(project, tsGearConfigPath)

  if (project.translationEngine) {
    await step.translateSchema(spec, project.translationEngine)
  }
  const keepGeneric = project.keepGeneric !== false
  step.cleanRefAndDefinitionName(spec, keepGeneric)
  step.assembleSchemaToGlobal(spec, project)
  if (keepGeneric) {
    step.parseGenericType(project)
  }
  step.collectRefsInRequestAndPatchDefinition(project)
  step.generateDefinitionContent(project)
  step.generateRequestContent(spec, project)
  step.writeProject(project, tsGearConfigPath)

  restore(project)
}

/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
export const run = async (): Promise<void> => {
  const { projects, tsGearConfigPath } = await step.getUserConfig()
  projects.forEach(project => processProject(project, tsGearConfigPath))
}
