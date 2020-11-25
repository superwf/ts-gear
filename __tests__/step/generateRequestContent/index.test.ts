import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateRequestContent } from 'src/step/generateRequestContent'
import * as petSchema from 'example/fixture/pet.json'
import projects from 'example/petProject/src/tsg.config'
import * as step from 'src/step'
import { restore } from 'src/projectGlobalVariable'
import { Project } from 'src/type'

describe('src/step/generateRequestContent', () => {
  const project: Project = {
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
