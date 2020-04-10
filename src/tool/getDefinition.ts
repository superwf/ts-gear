import { Spec } from 'swagger-schema-official'

/**
 * return definitions
 * */
export const getDefinition = (schema: Spec) => {
  return schema.definitions!
}
