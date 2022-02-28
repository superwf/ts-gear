/**
 * Open Api 2.0
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md */
import type { Schema, BodyParameter, Response, Parameter } from 'swagger-schema-official'
import { map } from 'lodash'
import type { SchemaObject } from 'openapi3-ts'
import { config } from '../constant'
import type { Project } from '../type'
import { assembleDoc } from './assembleDoc'

type SchemaOption = Schema | BodyParameter | Response | Parameter | SchemaObject

const isBodyParameter = (schema: SchemaOption): schema is Required<BodyParameter | Response> => 'schema' in schema

export const getHasQuestionToken = (
  name: string,
  property: Schema | SchemaObject,
  project: Project,
  required?: string[],
) => {
  // 先判断required里面是否存在
  if (required && required.includes(name)) {
    return false
  }
  // 再根据 nullable 判断是否允许 optional
  if (project.nullableFalseAsRequired === true) {
    return Boolean((property as SchemaObject)?.nullable)
  }
  return true
}

/** generate inline property doc */
const generatePropertyDoc = (schema: SchemaOption) => {
  const { EOL } = config
  const docs = assembleDoc(schema)
  return docs ? `/**${EOL}${docs.join(EOL)} */${EOL}` : ''
}

/** compatible with openapi v3 nullable property */
const withNullType = (typeString: string, nullable: boolean | undefined) => {
  if (!nullable || typeString === 'any' || typeString.endsWith('| null')) {
    return typeString
  }
  return `${typeString} | null`
}

/** transform schema to typescript type definition
 * @param schema
 * */
const transform = (schema: SchemaOption, project: Project): string => {
  const { EOL } = config
  if (isBodyParameter(schema)) {
    return transform(schema.schema, project)
  }

  const {
    anyOf,
    oneOf,
    discriminator,
    nullable,
    type,
    enum: enumValues,
    items,
    $ref,
    properties,
    additionalProperties,
    required,
    allOf,
    format,
  } = schema as SchemaObject
  if (enumValues) {
    let typeScring = ''
    if (Array.isArray(enumValues)) {
      if (type === 'string') {
        typeScring = `'${enumValues.join("' | '")}'`
      }
      if (type === 'integer' || type === 'number') {
        typeScring = enumValues.join(' | ')
      }
    } else {
      typeScring = enumValues as unknown as string
    }
    return withNullType(typeScring, nullable)
  }
  if (!properties && !discriminator) {
    let typeScring = ''
    if (anyOf) {
      typeScring = `${anyOf.map(prop => transform(prop as Schema, project)).join(' | ')}`
    } else if (oneOf) {
      typeScring = `${oneOf.map(prop => transform(prop as Schema, project)).join(' | ')}`
    }
    if (typeScring) {
      return withNullType(typeScring, nullable)
    }
    if (allOf) {
      typeScring = `${allOf.map(prop => transform(prop as Schema, project)).join(' & ')}`
      if (nullable) {
        return withNullType(`(${typeScring})`, nullable)
      }
      return typeScring
    }
  }
  if ($ref) {
    return withNullType($ref, nullable)
  }
  switch (type) {
    case 'string':
      return withNullType(format === 'binary' ? 'File' : 'string', nullable)
    case 'boolean':
      return withNullType('boolean', nullable)
    case 'file':
      return withNullType('File', nullable)
    case 'integer':
    case 'number':
      return withNullType('number', nullable)
    case 'array':
      if (Array.isArray(items)) {
        return withNullType(`Array<${items.map(item => transform(item, project)).join(' | ')}>`, nullable)
      }
      if (!items) {
        return withNullType(`Array<any>`, nullable)
      }
      return withNullType(`Array<${transform(items, project)}>`, nullable)

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
      if (discriminator) {
        const { propertyName, mapping } = discriminator
        if (propertyName) {
          discriminatorPropertyName = propertyName
          if (mapping) {
            discriminatorTypeString = `'${Object.keys(mapping).join("' | '")}'`
          } else if (allOf) {
            discriminatorTypeString = `'${allOf.map(prop => transform(prop, project)).join("' & '")}'`
          } else if (oneOf || anyOf) {
            discriminatorTypeString = `'${(oneOf || anyOf)!
              .map(prop => transform(prop as Schema, project))
              .join("' | '")}'`
          } else {
            discriminatorTypeString = 'string'
          }
        } else {
          discriminatorTypeString = 'string'
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
          const questionToken = getHasQuestionToken(name, prop, project, required) ? '?' : ''
          /** check discriminator */
          if (name === discriminatorPropertyName) {
            return `${generatePropertyDoc(prop)}'${name}'${questionToken}: ${discriminatorTypeString}`
          }
          return `${generatePropertyDoc(prop)}'${name}'${questionToken}: ${transform(prop, project)}`
        }).join(EOL)
      }
      if (!additionalProperties) {
        return withNullType(`{${EOL}${objectContent}${EOL}}`, nullable)
      }
      let additionalProps = ''
      additionalProps = `${generatePropertyDoc(schema)}[propertyName: string]: ${
        additionalProperties === true
          ? 'any'
          : withNullType(
              transform(additionalProperties, project),
              typeof additionalProperties === 'object' &&
                'nullable' in additionalProperties &&
                additionalProperties.nullable,
            )
      }`
      if (objectContent) {
        return withNullType(`{${EOL}${objectContent}${EOL}} & {${EOL}${additionalProps}${EOL}}`, nullable)
      }
      return withNullType(`{${EOL}${additionalProps}${EOL}}`, nullable)
    }
    default:
      return 'any'
  }
}

export const schemaToTypescript = (schema: Schema, project: Project) => {
  const v3Schema = schema as SchemaObject
  return withNullType(transform(schema, project), v3Schema.nullable)
}
