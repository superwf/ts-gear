import { Parameter, Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateParameterType } from 'src/step/generateRequestContent/generateParameterType'
import * as petSpec from 'example/fixture/pet.json'
import * as step from 'src/step'
import { restore } from 'src/projectGlobalVariable'
import { IProject } from 'src/interface'

describe('src/step/generateRequestContent/generateParameterType', () => {
  const project: IProject = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: () => Promise.resolve(),
  }
  it('generateParameterType', () => {
    const spec = cloneDeep(petSpec) as Spec
    step.cleanRefAndDefinitionName(spec, true)
    step.assembleSchemaToGlobal(spec, project)
    let content = generateParameterType('IReqParam', spec.paths['/pet'].post!.parameters as Parameter[])
    console.log(content)
    // content = generateParameterType('IReqParam', schema.paths['/pet/{petId}'].post!.parameters as Parameter[])
    // console.log(content)

    // content = generateParameterType('IReqParam', schema.paths['/store/order'].post!.parameters as Parameter[])
    // console.log(content)
    content = generateParameterType(
      'postUserCreateWithList',
      spec.paths['/user/createWithList'].post!.parameters as Parameter[],
    )
    console.log(content)
    restore(project)
  })
})
