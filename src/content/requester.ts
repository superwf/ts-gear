import { EOL } from 'os'
import * as path from 'path'

import { Project } from '../type'
import { configFileName } from '../constant'
import { renameImportStatementToRequester } from '../tool/renameImportStatementToRequester'

/** get tsg.config.ts file relative path to import in request
 * */
export const requester = (project: Project, tsGearConfigPath: string) => {
  const configFileRelativePath = path.relative(
    path.join(tsGearConfigPath, project.dest, project.name),
    tsGearConfigPath,
  )
  if (project.importRequesterStatement) {
    return {
      import: renameImportStatementToRequester(project.importRequesterStatement),
      code: '',
    }
  }
  return {
    import: `import projects from '${configFileRelativePath}/${configFileName}'`,
    code: [
      `const project = projects.find(p => p.name === '${project.name}')!`,
      `const requester = project.requester!`,
    ].join(EOL),
  }
}
