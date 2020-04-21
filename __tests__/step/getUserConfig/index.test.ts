import { join } from 'path'

import { sync } from 'rimraf'

import { getUserConfig } from 'src/step/getUserConfig'
import exampleProjects from 'example/ts-gear'

describe('getUserConfig', () => {
  it('get user config', () => {
    const cwd = process.cwd()
    process.chdir(join(cwd, 'example'))
    const originLength = process.argv.length
    expect(getUserConfig()).toEqual(exampleProjects)
    process.argv.push('-p', 'pet')
    expect(getUserConfig()).toEqual([exampleProjects[0]])
    process.argv.length = originLength

    process.argv.push('--projects', 'projectE')
    expect(getUserConfig()).toEqual([exampleProjects[1]])
    process.argv.length = originLength

    process.chdir(join(cwd, 'tmp'))

    process.argv.push('-i')
    expect(getUserConfig()).toEqual([])
    process.argv.length = originLength

    process.argv.push('--init')
    expect(getUserConfig()).toEqual([])
    process.argv.length = originLength
    process.chdir(cwd)

    sync(join(cwd, 'tmp/*'))
  })
})
