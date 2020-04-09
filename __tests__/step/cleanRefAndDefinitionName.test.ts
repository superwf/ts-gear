import { cloneDeep } from 'lodash'

import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import petSchema from 'example/fixture/pet.json'
import { JSONSchema } from 'src/interface'

describe('run step', () => {
  it('definition typescriptContent', () => {
    cleanRefAndDefinitionName(cloneDeep(petSchema as JSONSchema))
    // console.log(JSON.stringify(petSchema))
    expect(petSchema).toMatchSnapshot()
  })
})
