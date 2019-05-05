import $RefParser from 'json-schema-ref-parser'
import { JSONSchema } from '../interface'

// parse all $ref property
const parser = new $RefParser()

export const parse$ref = (schema: JSONSchema) => {
  return parser.dereference(schema) as Promise<JSONSchema>
}
