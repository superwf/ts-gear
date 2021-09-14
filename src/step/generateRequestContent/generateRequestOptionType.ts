import type { Parameter, Reference } from 'swagger-schema-official'
import { isEmpty, upperFirst } from 'lodash'
import type { RequestParameterPosition, Project } from '../../type'
import { schemaToTypescript } from '../../tool/schemaToTypescript'
import { sow, harvest } from '../../source'
import { assembleRequestParam } from './assembleRequestParam'

/**
 * @param name request function parameter interface name
 * @param parameters swagger request parameters
 * */
export const generateRequestOptionType = (
  functionName: string,
  parameters: Array<Parameter | Reference>,
  project: Project,
) => {
  const source = sow()
  const parameterTypeName = `${upperFirst(functionName)}Option`
  const inter = source.addInterface({
    isExported: project.shouldExportRequestOptionType === undefined || !!project.shouldExportRequestOptionType,
    name: parameterTypeName,
    docs: [`@description request parameter type for ${functionName}`],
  })
  const assembledParameters = assembleRequestParam(parameters)
  let parameterRequired = false
  ;(Object.getOwnPropertyNames(assembledParameters) as RequestParameterPosition[]).forEach(position => {
    const param = assembledParameters[position]!
    if (!parameterRequired) {
      parameterRequired = !isEmpty(param.required)
    }
    inter.addProperty({
      name: position,
      type: schemaToTypescript(param),
      hasQuestionToken: isEmpty(param.required),
      docs: param.docs,
    })
  })
  return {
    parameterTypeName,
    parameterTypeContent: harvest(source),
    parameterRequired,
  }
}
