import { upperFirst } from 'lodash'
import type { Response, Reference } from 'swagger-schema-official'
import type { ResponseObject } from 'openapi3-ts'
import { sow, harvest } from '../../source'
import { schemaToTypescript } from '../../tool/schemaToTypescript'
import { assembleDoc } from '../../tool/assembleDoc'
import { getSchemaDeep } from '../../tool/getSchemaDeep'
import type { AssembleResponse, Project } from '../../type'

/**
 * when has responses spec, get an interface type and use the first 2xx member as successType
 * when has not responses, use any as successType
 * */
export const generateResponseType = (
  functionName: string,
  responses: { [responseName: string]: Response | Reference },
  project: Project,
): AssembleResponse => {
  const responseTypeName = `${upperFirst(functionName)}Response`

  const shouldExport = !!project.shouldExportResponseType

  // use first 2xx response type as success response type
  let successTypeContent = `${shouldExport ? 'export' : ''} type ${responseTypeName}Success = any`
  let responseTypeContent = `${shouldExport ? 'export' : ''} type ${responseTypeName} = any`
  const successTypeName = `${responseTypeName}Success`
  const responseStatuses = Object.getOwnPropertyNames(responses).sort()
  if (responseStatuses.length > 0) {
    const source = sow()
    const inter = source.addInterface({
      name: responseTypeName,
      isExported: shouldExport,
    })
    responseStatuses.forEach(status => {
      const statusRes = responses[status]
      /** 兼容openapiv3 */
      if ('content' in statusRes) {
        const res = statusRes as ResponseObject
        res.schema = getSchemaDeep((statusRes as ResponseObject).content)
      }
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
        successTypeContent = `${
          shouldExport ? 'export' : ''
        } type ${responseTypeName}Success = ${responseTypeName}['${firstResponseStatus}']`
      } else {
        successTypeContent = `${
          shouldExport ? 'export' : ''
        } type ${responseTypeName}Success = ${responseTypeName}[${firstResponseStatus}]`
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
