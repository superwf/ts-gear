import pet from '../example/fixture/pet.json'
import projectA from '../example/fixture/projectA.json'
import projectB from '../example/fixture/projectB.json'
import projectC from '../example/fixture/projectC.json'
import { JSONSchema } from '../src/interface'
import { generatePaths } from '../src/paths'

describe('generatePaths', () => {
  it('pet paths', async () => {
    const result = await generatePaths(pet as JSONSchema)
    expect(result).toMatchSnapshot()
  })

  it('projectA paths', async () => {
    const result = await generatePaths(projectA as JSONSchema)
    expect(result).toMatchSnapshot()
  })

  it('projectB paths', async () => {
    const result = await generatePaths(projectB as JSONSchema)
    expect(result).toMatchSnapshot()
  })

  it('projectC paths', async () => {
    const result = await generatePaths(projectC as JSONSchema)
    expect(result).toMatchSnapshot()
  })
})
