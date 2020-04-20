import { Schema } from 'swagger-schema-official'

import petSpec from 'example/fixture/pet.json'
// import projectA from '../example/fixture/projectA.json'
import { generateMockData } from 'src/step/generateRequestContent/generateMockData'

describe('sample', () => {
  it('make sample data', () => {
    const result = generateMockData(petSpec.definitions.Order as Schema)
    expect(result).toMatchSnapshot()
  })
})
