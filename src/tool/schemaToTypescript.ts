import { EOL } from 'os'

import { Schema, BodyParameter, Response, Parameter } from 'swagger-schema-official'
import { map } from 'lodash'

import { refMap } from 'src/global'

const isBodyParameter = (schema: Schema | BodyParameter | Response): schema is Required<BodyParameter | Response> =>
  'schema' in schema

/** 将schema转换为ts的类型 */
const transform = (schema: Schema | BodyParameter | Response | Parameter): string => {
  if (isBodyParameter(schema)) {
    return transform(schema.schema)
  }
  const { type, enum: enumValues, items, $ref } = schema as Schema
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
  }
  if ($ref) {
    return refMap[$ref]
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
        return `Array<${refMap[$ref]}>`
      }
      // 使用Array<>而不是[]，因为里面的内容可能是复杂结构，例如枚举
      // 使用[]作为结尾时会产生错误结果
      if (Array.isArray(items)) {
        return `Array<${items.map(transform).join(' | ')}>`
      } else {
        return `Array<${transform(items!)}>`
      }
    case 'object':
      const { properties, additionalProperties, required } = schema as Schema
      if (properties) {
        const obj = map(properties, (prop, name: string) => {
          const optionalMark = required && required.includes(name) ? '' : '?'
          return `${name}${optionalMark}: ${transform(prop)}`
        }).join(EOL)
        let additionalProps = ''
        if (additionalProperties) {
          if (additionalProperties === true) {
            additionalProps = `${EOL}[k: string]: any`
          } else {
            additionalProps = `${EOL}[k: string]: ${transform(additionalProperties)}`
          }
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
