import { Parameter, Reference } from 'swagger-schema-official'
import { isEmpty, upperFirst } from 'lodash'

import { assembleRequestParam } from './assembleRequestParam'

import { RequestParameterPosition } from 'src/interface'
import { schemaToTypescript } from 'src/tool/schemaToTypescript'
import { sow, harvest } from 'src/source'
// import { ParameterPositionMap } from 'src/interface'

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
