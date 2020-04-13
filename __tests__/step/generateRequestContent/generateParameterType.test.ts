import { Parameter, Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateParameterType } from 'src/step/generateRequestContent/generateParameterType'
import petSchema from 'example/fixture/pet.json'
import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from 'src/step/assembleSchemaToGlobal'
import { restore } from 'src/global'
// import projects from 'example/ts-gear'

describe('src/step/generateRequestContent/generateParameterType', () => {
  it('generateParameterType', () => {
    const schema = cloneDeep(petSchema) as Spec
    cleanRefAndDefinitionName(schema, true)
    assembleSchemaToGlobal(schema)
    let content = generateParameterType('IReqParam', schema.paths['/pet'].post!.parameters as Parameter[])
    console.log(content)
    // content = generateParameterType('IReqParam', schema.paths['/pet/{petId}'].post!.parameters as Parameter[])
    // console.log(content)

    // content = generateParameterType('IReqParam', schema.paths['/store/order'].post!.parameters as Parameter[])
    // console.log(content)
    content = generateParameterType(
      'postUserCreateWithList',
      schema.paths['/user/createWithList'].post!.parameters as Parameter[],
    )
    console.log(content)
    restore()
  })
})
