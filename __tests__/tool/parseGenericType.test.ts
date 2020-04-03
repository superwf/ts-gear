import { parseGenericType } from 'src/tool/parseGenericType'

describe('parseGenericType', () => {
  it('parse simple type', () => {
    expect(parseGenericType('abc')).toEqual({
      name: 'abc',
    })
  })

  it('starts with <', () => {
    expect(() => {
      parseGenericType('<abc>')
    }).toThrow()
  })

  it('parse one sub type', () => {
    expect(parseGenericType('abc<def>')).toEqual({
      name: 'abc',
      children: [
        {
          name: 'def',
        },
      ],
    })
  })

  it('parse more sub type', () => {
    expect(parseGenericType('abc<def,efg>')).toEqual({
      name: 'abc',
      children: [
        {
          name: 'def',
        },
        {
          name: 'efg',
        },
      ],
    })
  })

  it('parse more sub in sub type', () => {
    expect(parseGenericType('abc<def,efg<hij>>')).toEqual({
      name: 'abc',
      children: [
        {
          name: 'def',
        },
        {
          name: 'efg',
          children: [
            {
              name: 'hij',
            },
          ],
        },
      ],
    })
  })
})
