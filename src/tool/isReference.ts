import type { Reference } from 'swagger-schema-official'

export const isReference = (value: any): value is Reference => {
  return '$ref' in value
}
