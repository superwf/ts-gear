import { cleanName } from 'src/tool/cleanName'

describe('cleanName', () => {
  it('remove "#/definitions/"', () => {
    expect(cleanName('#/definitions/abc')).toBe('Abc')
  })

  it('remove "#/components/schema/"', () => {
    expect(cleanName('#/components/schema/abc')).toBe('Abc')
  })

  it('remove "#/definitions/abc«def»"', () => {
    expect(cleanName('#/definitions/abc«def»')).toBe('Abc<Def>')
  })

  it('remove space and upper every word first charator', () => {
    expect(cleanName(' asdf asdf « def»')).toBe('AsdfAsdf<Def>')
  })
})
