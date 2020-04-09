import { restore, refMap } from 'src/global'

describe('src/global', () => {
  it('restore', () => {
    expect(refMap).toEqual({})
    refMap.c1 = 'c1'
    expect(refMap).toEqual({ c1: 'c1' })
    restore()
    expect(refMap).toEqual({})
  })
})
