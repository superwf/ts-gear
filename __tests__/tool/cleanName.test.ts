import { cleanName } from 'src/tool/cleanName'

describe('cleanName', () => {
  it('remove "#/definitions/"', () => {
    expect(cleanName('#/definitions/abc')).toBe('abc')
  })

  it('remove "#/definitions/abc«def»"', () => {
    expect(cleanName('#/definitions/abc«def»')).toBe('abc<def>')
  })

  it('remove space', () => {
    expect(cleanName(' asdf asdf')).toBe('asdfasdf')
  })
})
