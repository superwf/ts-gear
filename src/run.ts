import * as step from './step'
import { restore } from './projectGlobalVariable'
import type { Project } from './type'
import { info } from './tool/log'

export const processProject = async (project: Project, tsGearConfigPath: string): Promise<void> => {
  step.prepareProjectDirectory(project, tsGearConfigPath)
  const spec = await step.fetchSwagger(project, tsGearConfigPath)
  if (project.useCache && step.checkCache(project, tsGearConfigPath, spec)) {
    info(
      `cache hit, skip regenerate project(${project.name}), add "useCache: false" to your project in "tsg.config.ts" to disable cache`,
    )
    return
  }

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
  if (project.transformJS) {
    step.toJS(project, tsGearConfigPath)
  }

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
