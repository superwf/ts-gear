import type { Spec, Schema } from 'swagger-schema-official'
import type { OpenAPIObject } from 'openapi3-ts'

type ReturnSchema = { [definitionsName: string]: Schema }

/**
 * return definitions
 * */
export const getDefinition = (spec: Spec | OpenAPIObject): ReturnSchema => {
  if ('components' in spec) {
    const v3spec = spec as OpenAPIObject
    return v3spec.components?.schemas as ReturnSchema
  }
  return spec.definitions!
}
