import { Parameter, Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { generateRequestContent } from 'src/step/generateRequestContent'
import petSchema from 'example/fixture/pet.json'
import projects from 'example/ts-gear'
import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from 'src/step/assembleSchemaToGlobal'
import { restore } from 'src/global'
// import projects from 'example/ts-gear'

describe('src/step/generateRequestContent', () => {
  it('generateRequestContent', () => {
    const schema = cloneDeep(petSchema) as Spec
    cleanRefAndDefinitionName(schema, true)
    assembleSchemaToGlobal(schema)
    const content = generateRequestContent(schema, projects.pet)
    console.log(content)
    restore()
  })
})
