import { cleanName } from 'src/tool/cleanName'

describe('cleanName', () => {
  it('remove "#/definitions/"', () => {
    expect(cleanName('#/definitions/abc', true)).toBe('Abc')
  })

  it('remove "#/components/schema/"', () => {
    expect(cleanName('#/components/schema/abc', true)).toBe('Abc')
  })

  it('remove "#/definitions/abc«def»"', () => {
    expect(cleanName('#/definitions/abc«def»', true)).toBe('Abc<Def>')
    expect(cleanName('#/definitions/abc<def>', true)).toBe('Abc<Def>')
  })

  it('remove space and upper every word first charator', () => {
    expect(cleanName(' asdf asdf « def»', true)).toBe('AsdfAsdf<Def>')
  })

  it('not keep generic symbol', () => {
    expect(cleanName(' asdf asdf « def»', false)).toBe('AsdfAsdfDef')
    expect(cleanName('#/definitions/abc«def»', false)).toBe('AbcDef')
  })

  it('special charator', () => {
    expect(cleanName(' asdf 😝sdf « def»', false)).toBe('AsdfSdfDef')
  })
})
