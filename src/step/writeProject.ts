import { EOL } from 'os'
import { join } from 'path'

import { getGlobal } from '../projectGlobalVariable'
import { prettierWrite } from '../tool/prettierWrite'
import { IProject } from '../interface'
import { warningComment } from '../content/warningComment'
import { projectIndex } from '../content/projectIndex'
import { requester } from '../content/requester'
import { propertyOf } from '../content/propertyOfHelper'

import { importAllDefinition } from './importAllDefinition'

/** gather global typescript content
 * write to project dir */
export const writeProject = (project: IProject) => {
  const { definitionMap, requestMap } = getGlobal(project)
  const cwd = process.cwd()
  const dest = join(cwd, project.dest, project.name)

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
  prettierWrite([warningComment, definitionContent].join(EOL), join(dest, 'definition.ts'))

  const requestContent = Object.getOwnPropertyNames(requestMap)
    .map(name => {
      return requestMap[name].typescriptContent
    })
    .join(EOL)
  const requesterResult = requester(project)
  prettierWrite(
    [
      warningComment,
      propertyOf,
      requesterResult.import,
      importAllDefinition(project),
      requesterResult.code,
      requestContent,
    ].join(EOL),
    join(dest, 'request.ts'),
  )

  prettierWrite([warningComment, projectIndex].join(EOL), join(dest, 'index.ts'))
}
