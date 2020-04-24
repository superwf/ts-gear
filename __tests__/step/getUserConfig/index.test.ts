import { join } from 'path'
import { writeFileSync, existsSync } from 'fs'

import { noop } from 'lodash'
// import { sync } from 'rimraf'
import * as prompts from 'prompts'

import { getUserConfig } from 'src/step/getUserConfig'
import exampleProjects from 'example/tsg.config'

let overwrite = false
let exists = false

jest.mock('prompts', () => {
  return jest.fn(() => {
    return Promise.resolve({ overwrite })
  })
})

jest.mock('fs', () => {
  return {
    writeFileSync: jest.fn(),
    existsSync: jest.fn(() => exists),
  }
})

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

  describe('init', () => {
    beforeEach(() => {
      process.chdir(join(cwd, 'tmp'))
    })

    it('init', async () => {
      process.argv.push('-i')
      expect(await getUserConfig()).toEqual([])
      process.argv.length = originLength
      expect(prompts).not.toHaveBeenCalled()
      expect(existsSync).toHaveBeenCalledTimes(1)
      expect(writeFileSync).toHaveBeenCalledTimes(1)

      process.argv.push('--init')
      expect(await getUserConfig()).toEqual([])
      expect(prompts).not.toHaveBeenCalled()
      expect(existsSync).toHaveBeenCalledTimes(2)
      expect(writeFileSync).toHaveBeenCalledTimes(2)

      exists = true
      expect(await getUserConfig()).toEqual([])
      expect(prompts).toHaveBeenCalledTimes(1)
      expect(existsSync).toHaveBeenCalledTimes(3)
      expect(writeFileSync).toHaveBeenCalledTimes(2)

      overwrite = true
      expect(await getUserConfig()).toEqual([])
      expect(prompts).toHaveBeenCalledTimes(2)
      expect(existsSync).toHaveBeenCalledTimes(4)
      expect(writeFileSync).toHaveBeenCalledTimes(3)
      // sync(join(cwd, 'tmp/*'))
    })
  })
})
