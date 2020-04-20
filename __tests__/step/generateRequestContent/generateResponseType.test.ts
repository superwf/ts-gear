import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateResponseType } from 'src/step/generateRequestContent/generateResponseType'
import petSpec from 'example/fixture/pet.json'
import * as step from 'src/step'
import { restore } from 'src/global'
import { IProject } from 'src/interface'

describe('response type content', () => {
  const project: IProject = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: () => Promise.resolve(),
  }
  it('response', () => {
    const schema = cloneDeep(petSpec) as Spec
    step.cleanRefAndDefinitionName(schema, true)
    step.assembleSchemaToGlobal(schema, project)
    let content = generateResponseType('IGetXXX', schema.paths['/pet'].post!.responses)
    console.log(content)
    content = generateResponseType('IGetXXX', schema.paths['/pet'].put!.responses)
    console.log(content)

    content = generateResponseType('IGetXXX', schema.paths['/store/order'].post!.responses)
    console.log(content)
    restore(project)
  })
})
