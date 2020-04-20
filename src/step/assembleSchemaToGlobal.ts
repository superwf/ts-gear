import { forEach, upperFirst } from 'lodash'
import { Spec } from 'swagger-schema-official'

import { getDefinition } from 'src/tool/getDefinition'
import { HttpMethod, IProject } from 'src/interface'
import { getGlobal, httpMethods } from 'src/global'
import { camelCase } from 'src/tool/camelCase'

/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
export const assembleSchemaToGlobal = (spec: Spec, project: IProject) => {
  const { definitionMap, requestMap } = getGlobal(project)
  const definitions = getDefinition(spec)
  Object.getOwnPropertyNames(definitions).forEach(name => {
    definitionMap[name] = {
      typeName: name,
      schema: definitions[name],
    }
  })
  forEach(spec.paths, (pathSchema /** Path */, pathName) => {
    forEach(httpMethods, httpMethod => {
      const operation = pathSchema[httpMethod]
      if (operation && !operation.deprecated) {
        requestMap[`${httpMethod}${upperFirst(camelCase(pathName))}`] = {
          pathName,
          httpMethod: httpMethod as HttpMethod,
          schema: operation!,
          responses: operation.responses,
          parameters: operation.parameters,
        }
      }
    })
  })
}
