import { getCliOption } from 'src/step/getUserConfig/cliOption'

describe('cli option', () => {
  const originLength = process.argv.length
  afterEach(() => {
    process.argv.length = originLength
  })

  it('test -p option', () => {
    expect(getCliOption().names).toEqual([])
    process.argv.push('-p', 'pet')
    expect(getCliOption().names).toEqual(['pet'])
  })

  it('test -i', () => {
    process.argv.push('-i')
    expect(getCliOption().init).toBe(true)
    expect(getCliOption().names).toEqual([])
  })

  it('test --config src/tsg.ts', () => {
    process.argv.push('-c src/tsg.ts')
    expect(getCliOption().config).toBe('src/tsg.ts')
  })
})
