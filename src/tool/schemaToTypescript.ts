/**
 * Open Api 2.0
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md */
import { EOL } from 'os'

import { Schema, BodyParameter, Response, Parameter } from 'swagger-schema-official'
import { map } from 'lodash'

import { assembleDoc } from './assembleDoc'

type SchemaOption = Schema | BodyParameter | Response | Parameter

const isBodyParameter = (schema: SchemaOption): schema is Required<BodyParameter | Response> => 'schema' in schema

/** generate inline property doc */
const generatePropertyDoc = (schema: SchemaOption) => {
  const docs = assembleDoc(schema)
  return docs ? `/**${EOL}${docs.join(EOL)} */${EOL}` : ''
}

/** 将schema转换为ts的类型 */
const transform = (schema: SchemaOption): string => {
  if (isBodyParameter(schema)) {
    return transform(schema.schema)
  }
  const { type, enum: enumValues, items, $ref, properties, additionalProperties, required, allOf } = schema as Schema
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
  }
  if (allOf) {
    return `${allOf.map((prop) => transform(prop)).join(' & ')}`
  }
  if ($ref) {
    return $ref
  }
  switch (type) {
    case 'string':
      return 'string'
    case 'boolean':
      return 'boolean'
    case 'file':
      return 'File'
    case 'integer':
    case 'number':
      return 'number'
    case 'array':
      if (Array.isArray(items)) {
        return `Array<${items.map((item) => transform(item)).join(' | ')}>`
      }
      if (!items) {
        return `Array<any>`
      }
      return `Array<${transform(items)}>`

    case 'object': {
      if (!properties && !additionalProperties) {
        return 'any'
      }
      let objectContent = ''
      if (properties) {
        objectContent = map(properties, (prop, name: string) => {
          const questionToken = required && required.includes(name) ? '' : '?'
          return `${generatePropertyDoc(prop)}'${name}'${questionToken}: ${transform(prop)}`
        }).join(EOL)
      }
      if (!additionalProperties) {
        return `{${EOL}${objectContent}${EOL}}`
      }
      let additionalProps = ''
      additionalProps = `${generatePropertyDoc(schema)}[propertyName: string]: ${
        additionalProperties === true ? 'any' : transform(additionalProperties)
      }`
      if (objectContent) {
        return `{${EOL}${objectContent}${EOL}} & {${EOL}${additionalProps}${EOL}}`
      }
      return `{${EOL}${additionalProps}${EOL}}`
    }
    default:
      return 'any'
  }
}

export const schemaToTypescript = transform
