import type { OperationObject } from 'openapi3-ts'

export const getRequestBodySchema = (operation?: OperationObject): { $ref: string } => {
  if (operation?.requestBody?.$ref) {
    return { $ref: operation.requestBody.$ref }
  }

  return { $ref: '' }
}
