import { join } from 'path'
import { getGlobal } from '../projectGlobalVariable'
import { prettierWrite } from '../tool/prettierWrite'
import type { Project } from '../type'
import { warningComment } from '../content/warningComment'
import { projectIndex } from '../content/projectIndex'
import { requester } from '../content/requester'
import { targetFileNames, config } from '../constant'
import { importAllDefinition } from './importAllDefinition'

/** gather global typescript content
 * write to project dir */
export const writeProject = (project: Project, tsGearConfigPath: string) => {
  const { definitionMap, requestMap, enumMap } = getGlobal(project)
  const { EOL } = config
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
    [warningComment(EOL as string), enumContent, definitionContent].join(EOL),
    join(dest, targetFileNames.definition),
    project.prettierConfig,
  )

  const requestContent = Object.getOwnPropertyNames(requestMap)
    .map(name => {
      return requestMap[name].typescriptContent
    })
    .join(EOL)
  const requesterResult = requester(project)
  prettierWrite(
    [
      warningComment(EOL as string),
      requesterResult.import,
      importAllDefinition(project),
      requesterResult.code,
      requestContent,
    ].join(EOL),
    join(dest, targetFileNames.request),
    project.prettierConfig,
  )
  if (project.shouldGenerateMock) {
    const mockRequestContent = Object.getOwnPropertyNames(requestMap)
      .map(name => {
        return requestMap[name].mockTypescriptContent
      })
      .join(EOL)
    prettierWrite(
      [
        warningComment(EOL as string),
        requesterResult.import,
        importAllDefinition(project),
        requesterResult.code,
        mockRequestContent,
      ].join(EOL),
      join(dest, targetFileNames.mockRequest),
      project.prettierConfig,
    )
  }

  prettierWrite(
    [warningComment(EOL as string), projectIndex()].join(EOL),
    join(dest, targetFileNames.index),
    project.prettierConfig,
  )
}
