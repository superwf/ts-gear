import { Schema, Operation } from 'swagger-schema-official'

/** add many possible properties to doc */
export const assembleDoc = (schema: Schema | Operation) => {
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
  if ('tags' in schema) {
    docs.push(`tags: ${schema.tags?.join()}`)
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
  return docs
}
