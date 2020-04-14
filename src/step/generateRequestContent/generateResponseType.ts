import { upperFirst } from 'lodash'
import { Response, Reference } from 'swagger-schema-official'

import { sow, harvest } from 'src/source'
import { schemaToTypescript } from 'src/tool/schemaToTypescript'
import { assembleDoc } from 'src/tool/assembleDoc'
import { IAssembleResponse } from 'src/interface'

/**
 * when has responses spec, get an interface type and use the first 2xx member as successType
 * when has not responses, use any as successType
 * */
export const generateResponseType = (
  functionName: string,
  responses: { [responseName: string]: Response | Reference },
): IAssembleResponse => {
  const responseTypeName = `I${upperFirst(functionName)}Response`

  // use first 2xx response type as success response type
  let successTypeContent = `export type ${responseTypeName}Success = any`
  let responseTypeContent = `export type ${responseTypeName} = any`
  const successTypeName = `${responseTypeName}Success`
  const responseStatuses = Object.getOwnPropertyNames(responses).sort()
  if (responseStatuses.length > 0) {
    const source = sow()
    const inter = source.addInterface({
      name: responseTypeName,
      isExported: true,
    })
    responseStatuses.forEach(status => {
      inter.addProperty({
        name: String(status),
        type: schemaToTypescript(responses[status]),
        docs: assembleDoc(responses[status]),
      })
    })
    responseTypeContent = harvest(source)
    const firstResponseStatus = responseStatuses[0]
    if (firstResponseStatus.startsWith('2') || firstResponseStatus === 'default') {
      if (Number.isNaN(Number(firstResponseStatus))) {
        successTypeContent = `export type ${responseTypeName}Success = PropertyOf<${responseTypeName}, '${firstResponseStatus}'>`
      } else {
        successTypeContent = `export type ${responseTypeName}Success = PropertyOf<${responseTypeName}, ${firstResponseStatus}>`
      }
    }
  }
  return {
    responseTypeContent,
    successTypeContent,
    responseTypeName,
    successTypeName,
  }
}
