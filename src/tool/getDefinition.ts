import { Spec } from 'swagger-schema-official'

/**
 * return definitions
 * */
export const getDefinition = (spec: Spec) => {
  return spec.definitions!
}
