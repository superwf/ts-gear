import type { Project } from '../type'
import { renameImportStatementToRequester } from '../tool/renameImportStatementToRequester'

/** get tsg.config.ts file relative path to import in request
 * */
export const requester = (project: Project) => {
  if (project.importRequesterStatement) {
    const importStatement = renameImportStatementToRequester(project.importRequesterStatement)
    if (!importStatement) {
      throw new Error(
        `project: ${project.name} importRequesterStatement parse error, your statement is ${project.importRequesterStatement}, try to update to a "default import" or a "named import" statement with correct syntax`,
      )
    }
    return {
      import: importStatement,
      code: '',
    }
  }

  throw new Error(`project: ${project.name} missing "importRequesterStatement" config`)
}
