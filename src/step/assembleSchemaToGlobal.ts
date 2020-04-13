import { forEach, upperFirst } from 'lodash'
import { Spec } from 'swagger-schema-official'

import { getDefinition } from 'src/tool/getDefinition'
import { HttpMethod } from 'src/interface'
import { refMap, definitionMap, requestMap, httpMethods } from 'src/global'
import { traverseSchema } from 'src/tool/traverseSchema'
import { camelCase } from 'src/tool/camelCase'
import { assembleDoc } from 'src/tool/assembleDoc'

/**
 * collect definition
 * collect request, skip deprecated ones
 * */
export const assembleSchemaToGlobal = (spec: Spec) => {
  const definitions = getDefinition(spec)
  for (const name in definitions) {
    definitionMap[name] = {
      typeName: name,
      schema: definitions[name],
    }
  }
  forEach(spec.paths, (pathSchema /** Path */, pathName) => {
    forEach(httpMethods, httpMethod => {
      const operation = pathSchema[httpMethod]
      if (operation && !operation.deprecated) {
        requestMap[`${httpMethod}${upperFirst(camelCase(pathName))}`] = {
          pathName,
          httpMethod: httpMethod as HttpMethod,
          schema: operation!,
          doc: assembleDoc(operation),
          responses: operation.responses,
          parameters: operation.parameters,
        }
      }
    })
  })
  traverseSchema(spec, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      refMap[value] = value
    }
  })
}
