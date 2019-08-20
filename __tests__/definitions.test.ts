import {
  transform$RefsNotInDefinitions,
  transformDefinitionsToTypescript,
} from 'src/definitions'
import { JSONSchema } from 'src/interface'
import { initializeSchema } from 'src/util'
import pet from '../example/fixture/pet.json'
// import pontFixture from '../example/fixture/pontFixture.json'
import projectA from '../example/fixture/projectA.json'
import projectB from '../example/fixture/projectB.json'
import projectC from '../example/fixture/projectC.json'

describe('transformDefinitionsToTs', () => {
  it('geterate pet definitions', async () => {
    const { $refsNotInDefinitions } = await initializeSchema(pet as JSONSchema)
    const petDefinitions = await transformDefinitionsToTypescript(
      pet.definitions as JSONSchema,
    )
    expect(petDefinitions).toMatchSnapshot()
    expect(
      transform$RefsNotInDefinitions($refsNotInDefinitions),
    ).toMatchSnapshot()
  })

  it('projectA', async () => {
    await initializeSchema(projectA as JSONSchema)
    const definitions = await transformDefinitionsToTypescript(
      projectA.definitions as JSONSchema,
    )
    expect(definitions).toMatchSnapshot()
  })

  it('projectB', async () => {
    await initializeSchema(projectB as JSONSchema)
    const definitions = await transformDefinitionsToTypescript(
      projectB.definitions as JSONSchema,
    )
    expect(definitions).toMatchSnapshot()
  })

  it('projectC', async () => {
    await initializeSchema(projectC as JSONSchema)
    // console.log(Object.keys(projectC.definitions).join('\n'))
    const definitions = await transformDefinitionsToTypescript(
      projectC.definitions as JSONSchema,
    )
    expect(definitions).toMatchSnapshot()
  })

  // it('pontFixture', async () => {
  //   await initializeSchema(pontFixture as JSONSchema)
  //   const definitions = await transformDefinitionsToTypescript(
  //     pontFixture.definitions as JSONSchema,
  //   )
  //   expect(definitions).toMatchSnapshot()
  // })
})
