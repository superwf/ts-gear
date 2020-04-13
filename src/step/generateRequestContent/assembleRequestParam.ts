import { Parameter, Reference } from 'swagger-schema-official'

import { ParameterPositionMap } from 'src/interface'
import { isReference } from 'src/tool/isReference'
import { assembleDoc } from 'src/tool/assembleDoc'

/** assemble parameters to type ParameterPositionMap
 *
 * NOTD: body has a useless nest 'body' property, will generate type as
 * { body: { body: Pet } }
 * remove it to generate as below
 * { body: Pet }
 * */
export const assembleRequestParam = (parameters: Array<Parameter | Reference>) => {
  return parameters.reduce<ParameterPositionMap>((map, parameter) => {
    // ? TODO never meet this case
    if (isReference(parameter)) {
      return map
    } else {
      if (parameter.in in map) {
        const positionParameter = map[parameter.in]!
        // once required, then required
        if (parameter.required && !positionParameter.required.includes(parameter.name)) {
          positionParameter.required.push(parameter.name)
        }
        positionParameter.properties![parameter.name] = parameter
      } else {
        /** remove body nest structure */
        if (parameter.in === 'body' && parameter.schema) {
          map.body = {
            type: 'object',
            name: 'body',
            required: parameter.required ? [parameter.name] : [],
            schema: parameter.schema,
            docs: assembleDoc(parameter),
          }
        } else {
          map[parameter.in] = {
            type: 'object',
            name: parameter.in,
            required: parameter.required ? [parameter.name] : [],
            properties: {
              [parameter.name]: parameter,
            },
            docs: assembleDoc(parameter),
          }
        }
      }
    }
    return map
  }, {})
}
