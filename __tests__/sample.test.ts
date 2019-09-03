import petFixture from '../example/fixture/pet.json'
// import projectA from '../example/fixture/projectA.json'
import { memoizedSampleFromSchema } from '../src/samples'
import { JSONSchema } from '../src/interface'

describe('sample', () => {
  it('make sample data', () => {
    const result = memoizedSampleFromSchema(petFixture.definitions.Order as JSONSchema)
    expect(result).toMatchSnapshot()
  })
})
