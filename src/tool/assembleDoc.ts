import { EOL } from 'os'

import { Schema, Operation, Parameter } from 'swagger-schema-official'
import { SchemaObject } from 'openapi3-ts'

/** add many possible properties to doc */
export const assembleDoc = (schema: Schema | Operation | Parameter) => {
  if (typeof schema !== 'object') {
    return undefined
  }
  const docs: string[] = []
  if ('description' in schema) {
    docs.push(String(schema.description))
  }
  if ('summary' in schema) {
    docs.push(String(schema.summary))
  }
  if ('format' in schema) {
    docs.push(`format: ${schema.format}`)
  }
  if ('tags' in schema && schema.tags) {
    docs.push(`tags: ${schema.tags.join()}`)
  }
  if ('default' in schema) {
    docs.push(`default: ${schema.default}`)
  }
  if ('produces' in schema) {
    docs.push(`produces: ${schema.produces}`)
  }
  if ('consumes' in schema) {
    docs.push(`consumes: ${schema.consumes}`)
  }
  if ('example' in schema) {
    docs.push(`example: ${schema.example}`)
  }
  if ('readOnly' in schema) {
    docs.push(`example: ${schema.readOnly}`)
  }
  if ('deprecated' in schema && schema.deprecated) {
    docs.push('@deprecated')
  }
  const v3Schema = schema as SchemaObject
  if ('writeOnly' in schema) {
    docs.push(`example: ${v3Schema.writeOnly}`)
  }
  if (v3Schema.not) {
    docs.push(`not: ${v3Schema.not}`)
  }
  if (v3Schema.anyOf) {
    docs.push(`must anyOf: ${v3Schema.anyOf}`)
  }
  if (v3Schema.oneOf) {
    docs.push(`must anyOf: ${v3Schema.oneOf}`)
  }
  if (docs.length === 0) {
    return undefined
  }
  return [
    docs
      .filter(Boolean)
      /** replace invalid comment charator */
      .map(doc => doc.replace('/', '／'))
      .join(EOL),
  ]
}
