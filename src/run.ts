import { generateDefinitions } from './generator/definitions'
import { JSONSchema } from './interface'
import { parseRef } from './util'

/** deal the schema step by step */
export const run = async (schema: JSONSchema) => {
  const parsedSchema = await parseRef(schema)

  // console.log(Object.keys(parsedSchema.definitions!))

  if (parsedSchema.definitions) {
    const definitions = await generateDefinitions(parsedSchema.definitions)
    return definitions
  }
}
