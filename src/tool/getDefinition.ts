import { JSONSchema } from 'src/interface'

/**
 * return definitions part depends swagger version
 * */
export const getDefinition = (schema: JSONSchema) => {
  if (schema.swagger === '2.0') {
    return schema.definitions!
  }
  if (schema.swagger === '3.0') {
    return schema.components.schemas!
  }
}
