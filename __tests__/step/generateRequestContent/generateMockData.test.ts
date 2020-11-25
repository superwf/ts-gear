import { cloneDeep } from 'lodash'
import { Spec } from 'swagger-schema-official'

import * as petSpec from 'example/fixture/pet.json'
import { generateMockData } from 'src/step/generateRequestContent/generateMockData'
import * as step from 'src/step'
import { Project } from 'src/type'
import { getGlobal, restore } from 'src/projectGlobalVariable'

describe('sample', () => {
  it('make sample data', () => {
    const project: Project = {
      name: 'projectPont',
      source: 'fixture/pontFixture.json',
      dest: './service',
      // keepGeneric: true,
      translationEngine: 'baidu',
      requester: () => Promise.resolve({}),
    }

    const spec = cloneDeep(petSpec) as Spec
    step.cleanRefAndDefinitionName(spec, false)
    step.assembleSchemaToGlobal(spec, project)
    const { definitionMap, requestMap, enumMap } = getGlobal(project)

    const result = generateMockData(requestMap.getPetFindByStatus, definitionMap, enumMap)
    expect(result).toMatchSnapshot()

    restore(project)
  })
})
