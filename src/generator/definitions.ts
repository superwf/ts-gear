import { compile } from 'json-schema-to-typescript'
import { JSONSchema } from '../interface'

export const generateDefinitions = async (definitions: {
  [k: string]: JSONSchema
}) => {
  const result: any[] = []
  for (const i in definitions) {
    const schema: any = await compile(definitions[i], 'IgnoreName')
    result.push(schema)
  }
  return result
}
