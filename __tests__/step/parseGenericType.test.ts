import { parseGenericType } from 'src/step/parseGenericType'
import { definitionMap, restore } from 'src/global'

describe('parse definition with generic type', () => {
  afterEach(() => {
    restore()
  })
  it('parse one sub type', () => {
    const name = 'PageVO<User>'
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
    parseGenericType()
    expect(definitionMap[name].typeName).toBe('PageVO')
    expect(definitionMap[name].typeParameters).toEqual(['User'])
  })

  it('remove generic type symbol when ref not contain in schema', () => {
    const name = 'PageVO<User>'
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
    parseGenericType()
    console.log(definitionMap)
    expect(definitionMap[name].typeName).toBe('PageVOUser')
    expect(definitionMap[name].typeParameters).toBe(undefined)
  })

  it('remove more generic type symbol when ref not contain in schema', () => {
    const name = 'PageVO<User,Role>'
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
    parseGenericType()
    expect(definitionMap[name].typeName).toBe('PageVOUserRole')
    expect(definitionMap[name].typeParameters).toBe(undefined)
  })

  it('parse two sub type', () => {
    const name = 'PageVO<User,Role>'
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
    parseGenericType()
    expect(definitionMap[name].typeName).toBe('PageVO')
    expect(definitionMap[name].typeParameters).toEqual(['User', 'Role'])
  })
})
