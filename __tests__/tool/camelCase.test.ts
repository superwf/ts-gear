import { camelCase } from 'src/tool/camelCase'

describe('camelCase', () => {
  it('normal words', () => {
    expect(camelCase('abc')).toBe('Abc')
    expect(camelCase('aBc')).toBe('ABc')
    expect(camelCase('aBc DEF')).toBe('ABcDEF')
    expect(camelCase('aBc / dEF')).toBe('ABcDEF')
  })

  it('unnormal charator words', () => {
    expect(camelCase('abc/def')).toBe('AbcDef')
  })
})
