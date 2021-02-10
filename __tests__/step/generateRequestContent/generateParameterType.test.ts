import type { Parameter, Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'
import { generateRequestOptionType } from 'src/step/generateRequestContent/generateRequestOptionType'
import * as petSpec from 'example/fixture/pet.json'
import * as step from 'src/step'
import { restore } from 'src/projectGlobalVariable'
import type { Project } from 'src/type'

describe('src/step/generateRequestContent/generateParameterType', () => {
  const project: Project = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    importRequesterStatement: 'import { requester } from "ts-gear/requester/fetch"',
  }
  it('generateParameterType', () => {
    const spec = cloneDeep(petSpec) as Spec
    step.cleanRefAndDefinitionName(spec, true)
    step.assembleSchemaToGlobal(spec, project)
    let content = generateRequestOptionType('ReqParam', spec.paths['/pet'].post!.parameters as Parameter[], project)
    console.log(content)
    // content = generateParameterType('ReqParam', schema.paths['/pet/{petId}'].post!.parameters as Parameter[])
    // console.log(content)

    // content = generateParameterType('ReqParam', schema.paths['/store/order'].post!.parameters as Parameter[])
    // console.log(content)
    content = generateRequestOptionType(
      'postUserCreateWithList',
      spec.paths['/user/createWithList'].post!.parameters as Parameter[],
      project,
    )
    console.log(content)
    restore(project)
  })
})
