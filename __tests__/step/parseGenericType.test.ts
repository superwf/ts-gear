import { parseDefinitionGenericType, parseGenericName } from 'src/tool/parseGenericType'
import { definitionMap } from 'src/global'

describe('parseGenericName', () => {
  it('parse simple type', () => {
    expect(parseGenericName('abc')).toEqual({
      name: 'abc',
      top: true,
    })
  })

  it('starts with <', () => {
    expect(() => {
      parseGenericName('<abc>')
    }).toThrow()
  })

  it('parse one sub type', () => {
    expect(parseGenericName('abc<def>')).toEqual({
      name: 'abc',
      top: true,
      children: [
        {
          name: 'def',
          top: false,
        },
      ],
    })
  })

  it('parse more sub type', () => {
    expect(parseGenericName('abc<def,efg>')).toEqual({
      name: 'abc',
      top: true,
      children: [
        {
          name: 'def',
          top: false,
        },
        {
          name: 'efg',
          top: false,
        },
      ],
    })
  })

  it('parse more sub in sub type', () => {
    expect(parseGenericName('abc<def,efg<hij>>')).toEqual({
      name: 'abc',
      top: true,
      children: [
        {
          name: 'def',
          top: false,
        },
        {
          name: 'efg',
          top: false,
          children: [
            {
              name: 'hij',
              top: false,
            },
          ],
        },
      ],
    })
  })
})

describe('parse definition generic type', () => {
  it('parse one sub type', () => {
    const name = 'PageVO<User>'
    definitionMap[name] = {
      definitionName: name,
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
    parseDefinitionGenericType()
  })
})
