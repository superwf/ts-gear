import { hasGenericSymbol, removeGenericSymbol, parseGenericNames } from 'src/tool/genericType'

describe('process generic type name', () => {
  it('hasGenericSymbol', () => {
    expect(hasGenericSymbol('A<B>')).toBe(true)
    expect(hasGenericSymbol('AB')).toBe(false)
  })

  it('removeGenericSymbol', () => {
    expect(removeGenericSymbol('A<B>')).toBe('AB')
    expect(removeGenericSymbol('ABC')).toBe('ABC')
  })

  it('parseGenericNames', () => {
    expect(parseGenericNames('A<B>')).toEqual({
      parent: 'A',
      children: ['B'],
    })

    expect(parseGenericNames('A<B,C>')).toEqual({
      parent: 'A',
      children: ['B', 'C'],
    })

    expect(parseGenericNames('A<B<C>>')).toEqual({
      parent: 'A',
      children: ['B<C>'],
    })
  })
})
