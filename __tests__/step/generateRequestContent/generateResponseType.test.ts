import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateResponseType } from 'src/step/generateRequestContent/generateResponseType'
import * as petSpec from 'example/fixture/pet.json'
import * as step from 'src/step'
import { restore } from 'src/projectGlobalVariable'
import { Project } from 'src/type'

describe('response type content', () => {
  const project: Project = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: () => Promise.resolve(),
  }
  it('response', () => {
    const schema = cloneDeep(petSpec) as Spec
    step.cleanRefAndDefinitionName(schema, true)
    step.assembleSchemaToGlobal(schema, project)
    let content = generateResponseType('GetXXX', schema.paths['/pet'].post!.responses)
    console.log(content)
    content = generateResponseType('GetXXX', schema.paths['/pet'].put!.responses)
    console.log(content)

    content = generateResponseType('GetXXX', schema.paths['/store/order'].post!.responses)
    console.log(content)
    restore(project)
  })
})
