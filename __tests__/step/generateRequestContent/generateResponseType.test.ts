import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateResponseType } from 'src/step/generateRequestContent/generateResponseType'
import petSchema from 'example/fixture/pet.json'
import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from 'src/step/assembleSchemaToGlobal'
import { restore } from 'src/global'

describe('response type content', () => {
  it('response', () => {
    const schema = cloneDeep(petSchema) as Spec
    cleanRefAndDefinitionName(schema, true)
    assembleSchemaToGlobal(schema)
    let content = generateResponseType('IGetXXX', schema.paths['/pet'].post!.responses)
    console.log(content)
    content = generateResponseType('IGetXXX', schema.paths['/pet'].put!.responses)
    console.log(content)

    content = generateResponseType('IGetXXX', schema.paths['/store/order'].post!.responses)
    console.log(content)
    restore()
  })
})
