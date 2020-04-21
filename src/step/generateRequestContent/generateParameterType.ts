import { Parameter, Reference } from 'swagger-schema-official'
import { isEmpty, upperFirst } from 'lodash'

import { RequestParameterPosition } from '../../interface'
import { schemaToTypescript } from '../../tool/schemaToTypescript'
import { sow, harvest } from '../../source'

import { assembleRequestParam } from './assembleRequestParam'

/**
 * @param name request function parameter interface name
 * @param parameters swagger request parameters
 * */
export const generateParameterType = (functionName: string, parameters: Array<Parameter | Reference>) => {
  const source = sow()
  const parameterTypeName = `I${upperFirst(functionName)}Option`
  const inter = source.addInterface({
    isExported: true,
    name: parameterTypeName,
    docs: [`request parameter type for ${functionName}`],
  })
  const assembledParameters = assembleRequestParam(parameters)
  ;(Object.getOwnPropertyNames(assembledParameters) as RequestParameterPosition[]).forEach(position => {
    const param = assembledParameters[position]!
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
  }
}
