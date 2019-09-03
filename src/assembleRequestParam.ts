import { JSONSchema4TypeName } from 'json-schema'

import { IParameter, IParameterSchema, JSONSchema } from './interface'

/** 将parameters中的成员添加到对应的query, body, path对象中 */
const addParamProperty = (parameter: IParameter, parameterSchema: IParameterSchema) => {
  const property: JSONSchema = {}
  if (parameter.description) {
    property.description = parameter.description
  }
  if (parameter.type) {
    property.type = parameter.type as JSONSchema4TypeName
  }
  // TODO 需要更多判断
  // $ref, type: array, type: object
  if (parameter.schema) {
    property.schema = parameter.schema
  }
  if (parameter.type === 'array') {
    property.items = parameter.items as JSONSchema
  }
  if (!parameterSchema[parameter.in]) {
    parameterSchema[parameter.in] = {
      name: parameter.in,
      type: 'object',
      required: [],
      properties: {},
      additionalProperties: false,
    }
  }
  parameterSchema[parameter.in]!.properties![parameter.name] = property
  if (parameter.required) {
    ;(parameterSchema[parameter.in]!.required as string[]).push(parameter.name)
  }
  return parameter
}

/** 将paths里的各种请求参数组装成IParameterSchema的结构 */
export const assembleRequestParam = (parameters: IParameter[]): IParameterSchema => {
  const schema: IParameterSchema = {}
  parameters.forEach(parameter => {
    addParamProperty(parameter, schema)
  })
  return schema
}
