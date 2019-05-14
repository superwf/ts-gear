import fixture from '../fixture/price.json'
import { JSONSchema } from '../src/interface'
import {
  getDefinitionRef,
  getFunctionName,
  getGenericTypeName,
  getSafeDefinitionTitle,
} from '../src/util'

describe('util', () => {
  it('getFunctionName', () => {
    expect(getFunctionName('/api/abc')).toBe('apiAbc')
    expect(getFunctionName(' /api/abc ')).toBe('apiAbc')
    expect(getFunctionName('/api/abc/{abc}')).toBe('apiAbcAbc')
  })

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

  it.only('getDefinitionRef', () => {
    const f = fixture.definitions['ReplyVO«List«PubPriceErrorVO»»']
    // expect(getDefinitionRef(f as JSONSchema)[0]).toBe(true)

    console.log(getDefinitionRef(f as JSONSchema))

    // const f1 = fixture.definitions.UserInputDataListVO
    // expect(getDefinitionRef(f1 as JSONSchema)[0]).toBe(false)
  })
})
