/**
 * Open Api 2.0
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md */
import type { Schema, BodyParameter, Response, Parameter } from 'swagger-schema-official'
import { map } from 'lodash'
import type { SchemaObject } from 'openapi3-ts'
import { config } from '../constant'
import { assembleDoc } from './assembleDoc'

type SchemaOption = Schema | BodyParameter | Response | Parameter

const isBodyParameter = (schema: SchemaOption): schema is Required<BodyParameter | Response> => 'schema' in schema

/** generate inline property doc */
const generatePropertyDoc = (schema: SchemaOption) => {
  const { EOL } = config
  const docs = assembleDoc(schema)
  return docs ? `/**${EOL}${docs.join(EOL)} */${EOL}` : ''
}

/** transform schema to typescript type definition
 * @param schema
 * */
const transform = (schema: SchemaOption): string => {
  const { EOL } = config
  if (isBodyParameter(schema)) {
    return transform(schema.schema)
  }
  const v3Schema = schema as SchemaObject
  const { anyOf, oneOf, discriminator } = v3Schema

  const {
    type,
    enum: enumValues,
    items,
    $ref,
    properties,
    additionalProperties,
    required,
    allOf,
    format,
  } = schema as Schema
  if (enumValues) {
    if (Array.isArray(enumValues)) {
      if (type === 'string') {
        return `'${enumValues.join("' | '")}'`
      }
      if (type === 'integer' || type === 'number') {
        return enumValues.join(' | ')
      }
    }
    return enumValues as unknown as string
  }
  if (!properties && !discriminator) {
    if (anyOf) {
      return `${anyOf.map(prop => transform(prop as Schema)).join(' | ')}`
    }
    if (oneOf) {
      return `${oneOf.map(prop => transform(prop as Schema)).join(' | ')}`
    }
    if (allOf) {
      return `${allOf.map(prop => transform(prop)).join(' & ')}`
    }
  }
  if ($ref) {
    return $ref
  }
  switch (type) {
    case 'string':
      return format === 'binary' ? 'File' : 'string'
    case 'boolean':
      return 'boolean'
    case 'file':
      return 'File'
    case 'integer':
    case 'number':
      return 'number'
    case 'array':
      if (Array.isArray(items)) {
        return `Array<${items.map(item => transform(item)).join(' | ')}>`
      }
      if (!items) {
        return `Array<any>`
      }
      return `Array<${transform(items)}>`

    case 'object': {
      /**
       * The discriminator object is legal only when using one of the composite keywords oneOf, anyOf, allOf.
       * process discriminator with these cases
       * 1. only discriminator without properties nor mapping
       * 2. only discriminator has mapping, no other properties
       * 3. discriminator and other properties
       * 4. discriminator, no mapping, no allOf, oneOf, anyOf, treat as normal string
       * */
      let discriminatorTypeString = ''
      let discriminatorPropertyName = ''
      if (v3Schema.discriminator) {
        const { propertyName, mapping } = v3Schema.discriminator
        if (propertyName) {
          discriminatorPropertyName = propertyName
          if (mapping) {
            discriminatorTypeString = `'${Object.keys(mapping).join("' | '")}'`
          } else if (allOf) {
            discriminatorTypeString = `'${allOf.map(prop => transform(prop)).join("' & '")}'`
          } else if (oneOf || anyOf) {
            discriminatorTypeString = `'${(oneOf || anyOf)!.map(prop => transform(prop as Schema)).join("' | '")}'`
          } else {
            discriminatorTypeString = 'string'
          }
        }
      }
      if (!properties) {
        if (discriminatorPropertyName) {
          const questionToken = required && required.includes(discriminatorPropertyName) ? '' : '?'
          return `{${EOL}'${discriminatorPropertyName}'${questionToken}: ${discriminatorTypeString}${EOL}}`
        }
      }
      if (!properties && !additionalProperties) {
        return 'any'
      }

      let objectContent = ''
      if (properties) {
        objectContent = map(properties, (prop, name: string) => {
          const questionToken = required && required.includes(name) ? '' : '?'
          /** check discriminator */
          if (name === discriminatorPropertyName) {
            return `${generatePropertyDoc(prop)}'${name}'${questionToken}: ${discriminatorTypeString}`
          }
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

/** compatible with openapi v3 */
const withNullType = (typeString: string, nullable?: boolean) => {
  if (!nullable || typeString === 'any') {
    return typeString
  }
  return `${typeString} | null`
}

export const schemaToTypescript = (schema: Schema) => {
  const v3Schema = schema as SchemaObject
  return withNullType(transform(schema), v3Schema.nullable)
}
