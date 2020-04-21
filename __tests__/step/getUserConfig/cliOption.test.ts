import { getCliOption } from 'src/step/getUserConfig/cliOption'

describe('cli option', () => {
  it('test -p option to assign project name and -i', () => {
    const originLength = process.argv.length
    // 以example为cwd读取ts-gear.ts
    expect(getCliOption().names).toEqual([])
    process.argv.push('-p', 'pet')
    expect(getCliOption().names).toEqual(['pet'])
    process.argv[process.argv.length - 1] = 'projectE'
    expect(getCliOption().names).toEqual(['projectE'])
    expect(getCliOption().init).toBe(false)
    process.argv.length = originLength

    process.argv.push('-i')
    expect(getCliOption().init).toBe(true)
    expect(getCliOption().names).toEqual([])
    process.argv.length = originLength

    process.argv.push('--init')
    expect(getCliOption().init).toBe(true)
    expect(getCliOption().names).toEqual([])
    process.argv.length = originLength
  })
})
