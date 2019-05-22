import {
  getGenericTypeName,
  getSafeDefinitionTitle,
  transformPathParameters,
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
})
