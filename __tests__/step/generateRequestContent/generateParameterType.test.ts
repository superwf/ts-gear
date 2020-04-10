import { cloneDeep } from 'lodash'

import { generateParameterType } from 'src/step/generateRequestContent/generateParameterType'
import petSchema from 'example/fixture/pet.json'
import { IParameter, JSONSchema } from 'src/interface'
import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from 'src/step/assembleSchemaToGlobal'
import { restore } from 'src/global'
// import projects from 'example/ts-gear'

describe('src/step/generateRequestContent/generateParameterType', () => {
  it('generateParameterType', () => {
    const schema = cloneDeep(petSchema) as JSONSchema
    cleanRefAndDefinitionName(schema, true)
    assembleSchemaToGlobal(schema)
    let content = generateParameterType('IReqParam', schema.paths['/pet'].post.parameters as IParameter[])
    console.log(content)
    content = generateParameterType('IReqParam', schema.paths['/pet/{petId}'].post.parameters as IParameter[])
    console.log(content)
    restore()
  })
})
