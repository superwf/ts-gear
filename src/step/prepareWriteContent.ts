import { join } from 'path'
import { targetFileNames, config } from '../constant'
import { requester } from '../content/requester'
import type { Project, PrepareToWrite } from '../type'
import { getGlobal } from '../projectGlobalVariable'
import { warningComment } from '../content/warningComment'
import { projectIndex } from '../content/projectIndex'
import { importAllDefinition } from './importAllDefinition'

/**
 * gather global typescript content
 */
export const prepareWriteContent = (project: Project, tsGearConfigPath: string): PrepareToWrite => {
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
  const definitionFile = join(dest, targetFileNames.definition)
  const definitionFileContent = [warningComment(EOL as string), enumContent, definitionContent].join(EOL)

  const requestContent = Object.getOwnPropertyNames(requestMap)
    .map(name => requestMap[name].typescriptContent)
    .join(EOL)
  const requesterResult = requester(project)
  const requestFile = join(dest, targetFileNames.request)
  const requestFileContent = [
    warningComment(EOL as string),
    requesterResult.import,
    importAllDefinition(project),
    requesterResult.code,
    requestContent,
  ].join(EOL)
  let mockRequestFile = ''
  let mockRequestFileContent = ''
  if (project.shouldGenerateMock) {
    const mockRequestContent = Object.getOwnPropertyNames(requestMap)
      .map(name => requestMap[name].mockTypescriptContent)
      .join(EOL)
    mockRequestFile = join(dest, targetFileNames.mockRequest)
    mockRequestFileContent = [
      warningComment(EOL as string),
      requesterResult.import,
      importAllDefinition(project),
      requesterResult.code,
      mockRequestContent,
    ].join(EOL)
  }

  const indexFile = join(dest, targetFileNames.index)
  const indexFileContent = [warningComment(EOL as string), projectIndex()].join(EOL)

  return {
    requestFile,
    requestFileContent,
    definitionFile,
    definitionFileContent,
    mockRequestFile,
    mockRequestFileContent,
    indexFile,
    indexFileContent,
  }
}
