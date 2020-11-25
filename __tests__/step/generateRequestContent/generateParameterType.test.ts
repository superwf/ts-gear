import { Parameter, Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateParameterType } from 'src/step/generateRequestContent/generateParameterType'
import * as petSpec from 'example/fixture/pet.json'
import * as step from 'src/step'
import { restore } from 'src/projectGlobalVariable'
import { Project } from 'src/type'

describe('src/step/generateRequestContent/generateParameterType', () => {
  const project: Project = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: () => Promise.resolve(),
  }
  it('generateParameterType', () => {
    const spec = cloneDeep(petSpec) as Spec
    step.cleanRefAndDefinitionName(spec, true)
    step.assembleSchemaToGlobal(spec, project)
    let content = generateParameterType('ReqParam', spec.paths['/pet'].post!.parameters as Parameter[])
    console.log(content)
    // content = generateParameterType('ReqParam', schema.paths['/pet/{petId}'].post!.parameters as Parameter[])
    // console.log(content)

    // content = generateParameterType('ReqParam', schema.paths['/store/order'].post!.parameters as Parameter[])
    // console.log(content)
    content = generateParameterType(
      'postUserCreateWithList',
      spec.paths['/user/createWithList'].post!.parameters as Parameter[],
    )
    console.log(content)
    restore(project)
  })
})
