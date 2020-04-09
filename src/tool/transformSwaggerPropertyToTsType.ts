import { EOL } from 'os'

import { map } from 'lodash'

import { JSONSchema } from 'src/interface'
import { refMap } from 'src/global'

/** 将schema转换为ts的类型 */
const transform = (property: JSONSchema): string => {
  const { type, enum: enumValues, items, schema, $ref, oneOf, anyOf, allOf, not } = property
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
  }
  if ($ref) {
    return refMap[$ref]
  }
  if (schema) {
    return transform(schema)
  }

  // https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/
  // only openapi 3.0 need process oneOf,anyOf,allOf and discriminator
  // oneOf, anyOf, allOf对应的应该是数组，每个成员有$ref
  // TODO deal discriminator case
  if (oneOf) {
    if (Array.isArray(property.oneOf)) {
      return property.oneOf.map(prop => transform(prop)).join(' | ')
    }
    return 'any'
  }

  // use Partial for anyOf
  if (anyOf) {
    if (Array.isArray(property.oneOf)) {
      return `Partial<${property.oneOf.map(prop => transform(prop)).join(' & ')}>`
    }
    return 'any'
  }
  // 必须拥有所有对象属性的并集
  if (allOf) {
    if (Array.isArray(property.oneOf)) {
      return `Required<${property.oneOf.map(prop => transform(prop)).join(' & ')}>`
    }
    return 'any'
  }

  // 这个做不到覆盖所有情况，用any，更省心
  if (not) {
    return `any`
  }

  switch (type) {
    case 'string':
      return 'string'
    case 'boolean':
      return 'boolean'
    case 'file':
      return 'File'
    case 'null':
      return 'null'
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
      return `Array<${transform(items!)}>`
    case 'object':
      const { properties, additionalProperties, required } = property
      if (properties) {
        const obj = map(properties, (prop: JSONSchema, name: string) => {
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

export const transformSwaggerPropertyToTsType = transform
