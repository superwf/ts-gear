import { Spec } from 'swagger-schema-official'
import { cloneDeep } from 'lodash'

import { checkAndUpdateDefinitionTypeName, parseGenericType, guessGenericTypeName } from 'src/step/parseGenericType'
import { cleanRefAndDefinitionName } from 'src/step/cleanRefAndDefinitionName'
import { assembleSchemaToGlobal } from 'src/step/assembleSchemaToGlobal'
import projects from 'example/ts-gear'
import { getGlobal, restore } from 'src/global'
import projectESpec from 'example/fixture/projectE.json'
import { IDefinitionMap } from 'src/interface'

describe('parse definition with generic type', () => {
  let spec: Spec
  const project = projects[1]
  beforeEach(() => {
    spec = (cloneDeep(projectESpec) as unknown) as Spec
    const keepGeneric = Boolean(project.keepGeneric)
    cleanRefAndDefinitionName(spec, keepGeneric)
    assembleSchemaToGlobal(spec, project)
  })
  afterEach(() => {
    restore(project)
  })

  it('checkAndUpdateDefinitionTypeName', () => {
    checkAndUpdateDefinitionTypeName(getGlobal(project))
    const { definitionMap } = getGlobal(project)
    console.log(JSON.stringify(definitionMap, null, 2))
  })

  it('parse one sub type', () => {
    const name = 'PageVO<User>'
    const { definitionMap } = getGlobal(project)
    definitionMap[name] = {
      typeName: '',
      schema: {
        type: 'object',
        properties: {
          pageNo: {
            type: 'number',
          },
          data: {
            $ref: 'User',
          },
        },
      },
    }
    parseGenericType(project)
    expect(definitionMap[name].typeName).toBe('PageVO')
    expect(definitionMap[name].typeParameters).toEqual(['User'])
  })

  it('remove generic type symbol when ref not contain in schema', () => {
    const name = 'PageVO<User>'
    const { definitionMap } = getGlobal(project)
    definitionMap[name] = {
      typeName: '',
      schema: {
        type: 'object',
        properties: {
          pageNo: {
            type: 'number',
          },
        },
      },
    }
    parseGenericType(project)
    console.log(definitionMap)
    expect(definitionMap[name].typeName).toBe('PageVOUser')
    expect(definitionMap[name].typeParameters).toBe(undefined)
  })

  it('remove more generic type symbol when ref not contain in schema', () => {
    const name = 'PageVO<User,Role>'
    const { definitionMap } = getGlobal(project)
    definitionMap[name] = {
      typeName: '',
      schema: {
        type: 'object',
        properties: {
          pageNo: {
            type: 'number',
          },
        },
      },
    }
    parseGenericType(project)
    expect(definitionMap[name].typeName).toBe('PageVOUserRole')
    expect(definitionMap[name].typeParameters).toBe(undefined)
  })

  it.only('parse two sub type', () => {
    const name = 'Page<User,Role>'
    const { definitionMap } = getGlobal(project)
    definitionMap[name] = {
      typeName: '',
      schema: {
        type: 'object',
        properties: {
          pageNo: {
            type: 'number',
          },
          user: {
            $ref: 'User',
          },
          role: {
            $ref: 'Role',
          },
        },
      },
    }
    parseGenericType(project)
    console.log(definitionMap)
    // expect(definitionMap[name].typeName).toBe('PageVO')
    // expect(definitionMap[name].typeParameters).toEqual(['User', 'Role'])
  })

  it('guessGenericTypeName', () => {
    const definitionMap: IDefinitionMap = {
      A: { typeName: 'A' },
      // B: { typeName: 'B' },
    }
    const name = guessGenericTypeName(
      {
        name: 'A',
        children: [
          {
            name: 'B',
            children: [
              {
                name: 'C',
              },
            ],
          },
        ],
      },
      definitionMap,
    )
    console.log(name)
  })
})
