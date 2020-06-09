import { forEach, upperFirst, findKey } from 'lodash'
import { Spec } from 'swagger-schema-official'

import { traverseSchema } from '../tool/traverseSchema'
import { getDefinition } from '../tool/getDefinition'
import { httpMethods, IProject } from '../interface'
import { getGlobal } from '../projectGlobalVariable'
import { camelCase } from '../tool/camelCase'
import { generateEnumName, generateEnumTypescriptContent } from '../tool/enumType'

/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
export const assembleSchemaToGlobal = (spec: Spec, project: IProject) => {
  const { definitionMap, requestMap, enumMap, requestEnumSet } = getGlobal(project)
  const definitions = getDefinition(spec)
  traverseSchema(spec, ({ value, key, path, parent }) => {
    if (key === 'enum' && value) {
      const name = generateEnumName(path, spec)
      const existEnumName = findKey(enumMap, ({ originalContent }) => originalContent === value)
      parent[key] = name
      if (path[0] === 'paths') {
        requestEnumSet.add(name)
      }
      // add enum type alias
      if (existEnumName) {
        enumMap[name] = {
          originalContent: value,
          typescriptContent: `export type ${name} = ${existEnumName}`,
        }
      } else {
        const tsContent = generateEnumTypescriptContent(value)
        enumMap[name] = {
          originalContent: value,
          typescriptContent: `export type ${name} = ${tsContent}`,
        }
      }
    }
  })
  Object.getOwnPropertyNames(definitions).forEach((name) => {
    definitionMap[name] = {
      typeName: name,
      schema: definitions[name],
    }
  })
  forEach(spec.paths, (pathSchema /** Path */, pathName) => {
    forEach(httpMethods, (httpMethod) => {
      const operation = pathSchema[httpMethod]
      if (operation && !operation.deprecated) {
        requestMap[`${httpMethod}${upperFirst(camelCase(pathName))}`] = {
          pathName,
          httpMethod,
          schema: operation!,
          responses: operation.responses,
          parameters: operation.parameters,
        }
      }
    })
  })
}
