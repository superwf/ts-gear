import { getFunctionName } from '../src/util'

describe('util', () => {
  it('getFunctionName', () => {
    expect(getFunctionName('/api/abc')).toBe('apiAbc')
    expect(getFunctionName(' /api/abc ')).toBe('apiAbc')
    expect(getFunctionName('/api/abc/{abc}')).toBe('apiAbcAbc')
  })
})
