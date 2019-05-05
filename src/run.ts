import { parse$ref } from './generator/parseRef'
import { generateDefinitions } from './generator/definitions'
import { JSONSchema } from './interface'

/** deal the schema step by step */
export const run = async (schema: JSONSchema) => {
  const parsedSchema = await parse$ref(schema)

  // console.log(Object.keys(parsedSchema.definitions!))

  if (parsedSchema.definitions) {
    const definitions = await generateDefinitions(parsedSchema.definitions)
    return definitions
  }
}
