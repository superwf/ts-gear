import { EOL } from 'os'
import { join } from 'path'

import { getGlobal } from '../projectGlobalVariable'
import { prettierWrite } from '../tool/prettierWrite'
import type { Project } from '../type'
import { warningComment } from '../content/warningComment'
import { projectIndex } from '../content/projectIndex'
import { requester } from '../content/requester'
import { targetFileNames } from '../constant'

import { importAllDefinition } from './importAllDefinition'

/** gather global typescript content
 * write to project dir */
export const writeProject = (project: Project, tsGearConfigPath: string) => {
  const { definitionMap, requestMap, enumMap } = getGlobal(project)
  const dest = join(tsGearConfigPath, project.dest, project.name)

  const definitionTypeNameSet = new Set<string>()
  const definitionContent = Object.getOwnPropertyNames(definitionMap)
    .map(name => {
      // prevent repeat definition
      const typeName = definitionMap[name].typeName!
      if (definitionTypeNameSet.has(typeName!)) {
        return ''
      }
      definitionTypeNameSet.add(typeName)
      return definitionMap[name].typescriptContent
    })
    .join(EOL)
  const enumContent = Object.values(enumMap)
    .map(({ typescriptContent }) => typescriptContent)
    .join(EOL)
  prettierWrite(
    [warningComment, enumContent, definitionContent].join(EOL),
    join(dest, targetFileNames.definition),
    project.prettierConfig,
  )

  const requestContent = Object.getOwnPropertyNames(requestMap)
    .map(name => {
      return requestMap[name].typescriptContent
    })
    .join(EOL)
  const requesterResult = requester(project, tsGearConfigPath)
  prettierWrite(
    [warningComment, requesterResult.import, importAllDefinition(project), requesterResult.code, requestContent].join(
      EOL,
    ),
    join(dest, targetFileNames.request),
    project.prettierConfig,
  )

  prettierWrite([warningComment, projectIndex].join(EOL), join(dest, targetFileNames.index), project.prettierConfig)
}
