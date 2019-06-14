import { generatePaths } from 'src/paths'
import { initializeSchema } from 'src/util'
import pet from '../example/fixture/pet.json'
import projectA from '../example/fixture/projectA.json'
import projectB from '../example/fixture/projectB.json'
import projectC from '../example/fixture/projectC.json'
import { JSONSchema } from '../src/interface'

describe('generatePaths', () => {
  it('pet paths', async () => {
    const { $refsInPaths } = await initializeSchema(pet as JSONSchema)
    const result = await generatePaths(pet as JSONSchema, $refsInPaths)
    expect(result).toMatchSnapshot()
  })

  it('projectA paths', async () => {
    const { $refsInPaths } = await initializeSchema(projectA as JSONSchema)
    const result = await generatePaths(projectA as JSONSchema, $refsInPaths)
    expect(result).toMatchSnapshot()
  })

  it('projectB paths', async () => {
    const { $refsInPaths } = await initializeSchema(projectB as JSONSchema)
    const result = await generatePaths(projectB as JSONSchema, $refsInPaths)
    expect(result).toMatchSnapshot()
  })

  it('projectC paths', async () => {
    const { $refsInPaths } = await initializeSchema(projectC as JSONSchema)
    const result = await generatePaths(projectC as JSONSchema, $refsInPaths)
    expect(result).toMatchSnapshot()
  })
})
