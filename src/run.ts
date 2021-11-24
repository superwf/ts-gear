import * as step from './step'
import { restore } from './projectGlobalVariable'
import type { Project } from './type'
import { info } from './tool/log'

export const processProject = async (project: Project, tsGearConfigPath: string): Promise<void> => {
  step.processEOL(project)
  step.prepareProjectDirectory(project, tsGearConfigPath)
  const spec = await step.fetchOpenapiData(project, tsGearConfigPath)
  if (project.useCache && step.checkCache(project, tsGearConfigPath, spec)) {
    info(
      `cache hit, skip regenerate project(${project.name}), add "useCache: false" to your project in "tsg.config.ts" to disable cache`,
    )
    return
  }

  if (project.translationEngine) {
    await step.translateSchema(spec, project)
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
  if (project.shouldGenerateMock) {
    step.generateMockRequestContent(spec, project)
  }
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
export const runByCommand = async (): Promise<void> => {
  const { projects, tsGearConfigPath } = await step.getUserConfig()
  await Promise.all(projects.map(project => processProject(project, tsGearConfigPath)))
}

/**
 * same as runByCommand
 * should be used by nodejs env call
 * */
export const run = async ({ projects, appPath }: { projects: Project[]; appPath: string }): Promise<void> => {
  await Promise.all(projects.map(project => processProject(project, appPath)))
}
