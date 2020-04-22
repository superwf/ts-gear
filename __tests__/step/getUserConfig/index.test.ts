import { join } from 'path'

import { noop } from 'lodash'
import { sync } from 'rimraf'

import { getUserConfig } from 'src/step/getUserConfig'
import exampleProjects from 'example/ts-gear'

describe('getUserConfig', () => {
  const originLength = process.argv.length
  const cwd = process.cwd()

  // restore process.argv
  afterEach(() => {
    process.argv.length = originLength
    process.chdir(cwd)
  })

  describe('filter project names', () => {
    beforeEach(() => {
      process.chdir(join(cwd, 'example'))
    })

    it('with project names in cli', () => {
      process.chdir(join(cwd, 'example'))
      expect(getUserConfig()).toEqual(exampleProjects)
      process.argv.push('-p', 'pet,projectE')
      expect(getUserConfig()).toEqual([exampleProjects[0], exampleProjects[1]])
    })

    it('with none exist project names in cli', () => {
      const spy = jest.spyOn(console, 'log').mockImplementation(noop)
      process.chdir(join(cwd, 'example'))
      expect(getUserConfig()).toEqual(exampleProjects)
      process.argv.push('-p', 'noExistProjectName')
      expect(getUserConfig()).toEqual([])
      expect(spy).toHaveBeenCalled()
      spy.mockRestore()
    })
  })

  describe('init', () => {
    beforeEach(() => {
      process.chdir(join(cwd, 'tmp'))
    })
    it('init', () => {
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
})
