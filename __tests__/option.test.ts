import { getProjectsFromCommmandLine } from 'src/option'

describe('option', () => {
  it('test -p option to assign project name', () => {
    // 以example为cwd读取ts-gear.ts
    expect(getProjectsFromCommmandLine()).toEqual([])
    process.argv.push('-p', 'pet')
    expect(getProjectsFromCommmandLine()).toEqual(['pet'])
    process.argv[process.argv.length - 1] = 'projectE'
    expect(getProjectsFromCommmandLine()).toEqual(['projectE'])
    process.argv.length = process.argv.length - 2
  })
})
