import fs from 'fs-extra'
import {
  generateDefinition,
  generatePrimitiveDefinition,
} from '../src/definitions'
import { JSONSchema } from '../src/interface'
import pet from './fixture/pet.json'
import price from './fixture/price.json'
import sample from './fixture/sample.json'

describe('generateDefinitions', () => {
  it('geterate primitive interface', async () => {
    const user = await generatePrimitiveDefinition(
      pet.definitions.User as JSONSchema,
      'User',
    )
    expect(user).toMatchSnapshot()

    const category = await generatePrimitiveDefinition(
      pet.definitions.Category as JSONSchema,
      'Category',
    )
    expect(category).toMatchSnapshot()

    const order = await generatePrimitiveDefinition(
      pet.definitions.Order as JSONSchema,
      'Order',
    )
    expect(order).toMatchSnapshot()
  })

  it('use pet fixture for generate definition', async () => {
    const { definitions } = pet
    const results: string[] = []
    for (const name in definitions) {
      if (definitions.hasOwnProperty(name)) {
        const d = (definitions as any)[name] as JSONSchema
        const result = await generateDefinition(d as JSONSchema, name)
        results.push(result)
      }
    }
    expect(results).toMatchSnapshot()
  })

  it('use sample fixture for generate definition', async () => {
    const { definitions } = sample
    const results: string[] = []
    for (const name in definitions) {
      if (definitions.hasOwnProperty(name)) {
        const d = (definitions as any)[name] as JSONSchema
        const result = await generateDefinition(d as JSONSchema, name)
        results.push(result)
      }
    }
    // console.log(results)
    expect(results).toMatchSnapshot()
  })

  it('use price fixture for generate definition', async () => {
    const { definitions } = price
    const results: string[] = []
    for (const name in definitions) {
      if (definitions.hasOwnProperty(name)) {
        const d = (definitions as any)[name] as JSONSchema
        const result = await generateDefinition(d as JSONSchema, name)
        results.push(result)
      }
    }
    // console.log(results)
    fs.writeFileSync('./out/price.ts', results.join(''))
    expect(results).toMatchSnapshot()
  })
})
