import { hasGenericSymbol, removeGenericSymbol, parseGenericNames, getGenericNameFromNode } from 'src/tool/genericType'

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
    const r = parseGenericNames('A<B<C,D<G>,F<E>>>')
    // r.forEach(t => console.log(t))
    const [A, B, C, D, G, F, E] = r
    expect(A.children!).toHaveLength(1)
    expect(A.children![0]).toBe(B)
    expect(B.parent).toBe(A)
    expect(B.children).toHaveLength(3)
    expect(B.children![0]).toBe(C)
    expect(B.children![1]).toBe(D)
    expect(B.children![2]).toBe(F)
    expect(D.parent).toBe(B)
    expect(G.parent).toBe(D)
    expect(E.parent).toBe(F)
    expect(F.parent).toBe(B)
    expect(F.children!).toHaveLength(1)
    expect(F.children![0]).toBe(E)
  })

  it('getGenericNameFromNode', () => {
    const name = 'A<B<C,D<G>,F<E>>>'
    const r = parseGenericNames(name)
    expect(getGenericNameFromNode(r[0])).toBe(name)
  })
})
