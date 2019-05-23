import { generateDefinitions } from 'src/definitions'
import { JSONSchema } from 'src/interface'
import pet from '../example/fixture/pet.json'
import projectA from '../example/fixture/projectA.json'
import projectB from '../example/fixture/projectB.json'
import projectC from '../example/fixture/projectC.json'

describe('generateDefinitions', () => {
  it('geterate pet definitions', async () => {
    const petDefinitions = await generateDefinitions(
      pet.definitions as JSONSchema,
    )
    expect(petDefinitions).toMatchSnapshot()
  })

  it('projectA', async () => {
    const definitions = await generateDefinitions(
      projectA.definitions as JSONSchema,
    )
    expect(definitions).toMatchSnapshot()
  })

  it('projectB', async () => {
    const definitions = await generateDefinitions(
      projectB.definitions as JSONSchema,
    )
    expect(definitions).toMatchSnapshot()
  })

  it('projectC', async () => {
    const definitions = await generateDefinitions(
      projectC.definitions as JSONSchema,
    )
    expect(definitions).toMatchSnapshot()
  })
})
