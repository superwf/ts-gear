import { isEmpty, groupBy, property, forEach } from 'lodash'

import { assembleRequestParam } from './assembleRequestParam'

import { IParameter, JSONSchema } from 'src/interface'
import { sow, harvest } from 'src/source'
import { transformSwaggerPropertyToTsType } from 'src/tool/transformSwaggerPropertyToTsType'

/**
 * @param name request function parameter interface name
 * @param parameters swagger request parameters
 * */
export const generateParameterType = (name: string, parameters?: IParameter[]): string => {
  if (!parameters) {
    return ''
  }
  // const groupedParameters = groupBy(parameters, property('in'))
  const assembledParameters = assembleRequestParam(parameters)
  const source = sow()
  const inter = source.addInterface({
    isExported: true,
    name,
  })
  forEach<JSONSchema>(assembledParameters, (schema, position) => {
    if (position === 'body' && !isEmpty(schema.properties)) {
      const keys = Object.getOwnPropertyNames(schema.properties)
      if (keys.length > 0) {
        const key = keys[0]
        inter.addProperty({
          name,
          type: transformSwaggerPropertyToTsType(schema.properties[key]),
          hasQuestionToken: !schema.required || schema.required.length === 0,
        })
      }
    } else {
      inter.addProperty({
        name: position,
        type: transformSwaggerPropertyToTsType(schema),
        hasQuestionToken: !schema!.required || schema!.required.length === 0,
      })
    }
  })
  return harvest(source)
}
