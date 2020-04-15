import { EOL } from 'os'

import { Schema, BodyParameter, Response, Parameter } from 'swagger-schema-official'
import { map } from 'lodash'

import { assembleDoc } from 'src/tool/assembleDoc'

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
  const { type, enum: enumValues, items, $ref, properties, additionalProperties, required } = schema as Schema
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
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
      // array可以没有items，但在同级有$ref
      if ($ref) {
        return `Array<${$ref}>`
      }
      // 使用Array<>而不是[]，因为里面的内容可能是复杂结构，例如枚举
      // 使用[]作为结尾时会产生错误结果
      if (Array.isArray(items)) {
        return `Array<${items.map(item => transform(item)).join(' | ')}>`
      }
      if (!items) {
        return `Array<any>`
      }
      return `Array<${transform(items)}>`

    case 'object':
      if (properties) {
        const obj = map(properties, (prop, name: string) => {
          const questionToken = required && required.includes(name) ? '' : '?'
          return `${generatePropertyDoc(prop)}${name}${questionToken}: ${transform(prop)}`
        }).join(EOL)
        let additionalProps = ''
        if (additionalProperties) {
          additionalProps = `${generatePropertyDoc(schema)}[propertyName: string]: ${
            additionalProperties === true ? 'any' : transform(additionalProperties)
          }`
        }
        return `{${EOL}${obj}${additionalProps}${EOL}}`
      }
      return 'any'
    default:
      if (type !== undefined) {
        throw new Error(`not valid json schema type: ${type}`)
      }
      return 'any'
  }
}

export const schemaToTypescript = transform
