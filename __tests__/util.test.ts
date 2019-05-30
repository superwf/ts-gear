import {
  getGenericTypeName,
  getSafeDefinitionTitle,
  transformPathParameters,
  traverseSchema,
} from '../src/util'

describe('util', () => {
  it('getSafeDefinitionTitle', () => {
    // const title = 'ReplyVO«List«DeptFollowRuleEditVO»»'

    expect(getSafeDefinitionTitle('PageVO')).toEqual(['PageVO', 'PageVO'])
    expect(getSafeDefinitionTitle('PageVO«StdVO»')).toEqual([
      'PageVOStdVO',
      'PageVO<StdVO>',
    ])

    expect(getSafeDefinitionTitle('PageVO«StdVO«BB»»')).toEqual([
      'PageVOStdVOBB',
      'PageVO<StdVO<BB>>',
    ])

    expect(getSafeDefinitionTitle('PageVO«List«BB»»')).toEqual([
      'PageVOListBB',
      'PageVO<Array<BB>>',
    ])

    expect(getSafeDefinitionTitle('List«BB»')).toEqual(['ListBB', 'Array<BB>'])
  })

  it('getGenericTypeName', () => {
    expect(getGenericTypeName('ReplyVO<Abc>')).toEqual(['ReplyVO'])
    expect(getGenericTypeName('ReplyVO<Abc<Def>>')).toEqual(['ReplyVO', 'Abc'])
  })

  it('transformPathParameters', () => {
    expect(transformPathParameters('/api/user/{id}')).toBe('/api/user/:id')
    expect(transformPathParameters('/api/user/{action}/{id}')).toBe(
      '/api/user/:action/:id',
    )

    expect(transformPathParameters('/api/user/{id}/edit/{role}')).toBe(
      '/api/user/:id/edit/:role',
    )
  })

  it('traverse', () => {
    const fn = jest.fn()
    const obj1 = { a: 1 }
    traverseSchema(obj1, fn)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenLastCalledWith({
      value: 1,
      parent: obj1,
      key: 'a',
      path: ['a'],
    })

    fn.mockReset()
    const obj2 = { a: { b: 2 } }
    traverseSchema(obj2, fn)
    expect(fn).toHaveBeenCalledTimes(2)
    expect(fn).toHaveBeenLastCalledWith({
      value: 2,
      parent: obj2.a,
      key: 'b',
      path: ['a', 'b'],
    })
  })
})
