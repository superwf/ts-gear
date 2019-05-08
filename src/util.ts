import RefParser from 'json-schema-ref-parser'
import { camelCase } from 'lodash'
import { JSONSchema } from './interface'

/** replace non charator and and return a valid function name */
export const getFunctionName = (v: string) => {
  return camelCase(v)
}

/** replace non charator and and return interface name */
export const getInterfaceName = (v: string) => {
  return `I${camelCase(v)}`
}

/** replace /abc/{id} to /abc/:id */
export const transformPathParameters = (v: string) => {
  return v
    .split('/')
    .map(s => {
      const reg = /[{}]/g
      if (reg.test(s)) {
        return `:${s.replace(reg, '')}`
      }
      return s
    })
    .join('/')
}

// parse all $ref property
const parser = new RefParser()

export const parseRef = (schema: JSONSchema) => {
  return parser.dereference(schema) as Promise<JSONSchema>
}
