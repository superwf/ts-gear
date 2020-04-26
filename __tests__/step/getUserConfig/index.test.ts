import { join } from 'path'

import { noop } from 'lodash'
// import { sync } from 'rimraf'

import { getUserConfig } from 'src/step/getUserConfig'
import exampleProjects from 'example/tsg.config'

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

    it('with project names in cli', async () => {
      process.chdir(join(cwd, 'example'))
      expect(await getUserConfig()).toEqual(exampleProjects)
      process.argv.push('-p', 'pet,projectE')
      expect(await getUserConfig()).toEqual([exampleProjects[0], exampleProjects[1]])
    })

    it('with none exist project names in cli', async () => {
      const spy = jest.spyOn(console, 'log').mockImplementation(noop)
      process.chdir(join(cwd, 'example'))
      expect(await getUserConfig()).toEqual(exampleProjects)
      process.argv.push('-p', 'noExistProjectName')
      expect(await getUserConfig()).toEqual([])
      expect(spy).toHaveBeenCalled()
      spy.mockRestore()
    })
  })
})
