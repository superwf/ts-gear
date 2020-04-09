import { cloneDeep } from 'lodash'

import projects from 'example/ts-gear'
import projectESchema from 'example/fixture/projectE.json'
import { JSONSchema } from 'src/interface'
import { definitionMap } from 'src/global'
import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from 'src/step/assembleSchemaToGlobal'
import { parseGenericType } from 'src/step/parseGenericType'
import { polyfillRefToDefinition } from 'src/step/polyfillRefToDefinition'
import { generateDefinitionContent } from 'src/step/generateDefinitionContent'

describe('run step', () => {
  it('definition typescriptContent', () => {
    const project = projects.projectE
    const schema = cloneDeep(projectESchema) as JSONSchema
    cleanRefAndDefinitionName(schema)
    assembleSchemaToGlobal(schema)
    console.log(definitionMap)
    parseGenericType()
    console.log(definitionMap)
    polyfillRefToDefinition()
    console.log(definitionMap)
    generateDefinitionContent(project)
    console.log(definitionMap)
  })
})
