import swaggerSchema from 'swagger-schema-official/schema.json'
import { JSONSchema } from '../src/interface'
import { parseRef } from '../src/util'

describe('swagger', () => {
  it('paths', async () => {
    const r = await parseRef(swaggerSchema as JSONSchema)
    console.log(r.properties!.paths)
  })
})
