import { getProjectNamesFromCommmandLine } from 'src/step/getUserConfig/cliOption'

describe('option', () => {
  it('test -p option to assign project name', () => {
    // 以example为cwd读取ts-gear.ts
    expect(getProjectNamesFromCommmandLine()).toEqual([])
    process.argv.push('-p', 'pet')
    expect(getProjectNamesFromCommmandLine()).toEqual(['pet'])
    process.argv[process.argv.length - 1] = 'projectE'
    expect(getProjectNamesFromCommmandLine()).toEqual(['projectE'])
    process.argv.length = process.argv.length - 2
  })
})
