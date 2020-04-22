import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import * as petSchema from 'example/fixture/pet.json'

describe('run step', () => {
  it('definition typescriptContent', () => {
    cleanRefAndDefinitionName(cloneDeep(petSchema) as Spec, false)
    // console.log(JSON.stringify(petSchema))
    expect(petSchema).toMatchSnapshot()
  })
})
