import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateRequestContent } from 'src/step/generateRequestContent'
import petSchema from 'example/fixture/pet.json'
import projects from 'example/ts-gear'
import * as step from 'src/step'
import { restore } from 'src/projectGlobalVariable'
import { IProject } from 'src/interface'

describe('src/step/generateRequestContent', () => {
  const project: IProject = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: () => Promise.resolve(),
  }
  it('generateRequestContent', () => {
    const schema = cloneDeep(petSchema) as Spec
    step.cleanRefAndDefinitionName(schema, true)
    step.assembleSchemaToGlobal(schema, project)
    const content = generateRequestContent(schema, projects[0])
    console.log(content)
    restore(project)
  })
})
