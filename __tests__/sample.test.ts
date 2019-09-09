import petFixture from '../example/fixture/pet.json'
// import projectA from '../example/fixture/projectA.json'
import { generateMockData } from '../src/generateMockData'
import { JSONSchema } from '../src/interface'

describe('sample', () => {
  it('make sample data', () => {
    const result = generateMockData(petFixture.definitions.Order as JSONSchema)
    expect(result).toMatchSnapshot()
  })
})
