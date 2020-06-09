import { writeFileSync, existsSync } from 'fs'
import { join } from 'path'

import * as prompts from 'prompts'

import { getUserConfig } from 'src/step/getUserConfig'

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

describe('init', () => {
  const originLength = process.argv.length
  const cwd = process.cwd()

  afterEach(() => {
    process.argv.length = originLength
    process.chdir(cwd)
  })

  beforeEach(() => {
    const examplePath = join(cwd, 'example')
    process.chdir(examplePath)
  })

  afterAll(() => {
    jest.unmock('prompts')
    jest.unmock('fs')
  })

  it('init', async () => {
    process.argv.push('-i')
    expect(await getUserConfig()).toEqual({ projects: [], tsGearConfigPath: '' })
    process.argv.length = originLength
    expect(prompts).not.toHaveBeenCalled()
    expect(existsSync).toHaveBeenCalledTimes(1)
    expect(writeFileSync).toHaveBeenCalledTimes(1)

    process.argv.push('--init')
    expect(await getUserConfig()).toEqual({ projects: [], tsGearConfigPath: '' })
    expect(prompts).not.toHaveBeenCalled()
    expect(existsSync).toHaveBeenCalledTimes(2)
    expect(writeFileSync).toHaveBeenCalledTimes(2)

    exists = true
    expect(await getUserConfig()).toEqual({ projects: [], tsGearConfigPath: '' })
    expect(prompts).toHaveBeenCalledTimes(1)
    expect(existsSync).toHaveBeenCalledTimes(3)
    expect(writeFileSync).toHaveBeenCalledTimes(2)

    overwrite = true
    expect(await getUserConfig()).toEqual({ projects: [], tsGearConfigPath: '' })
    expect(prompts).toHaveBeenCalledTimes(2)
    expect(existsSync).toHaveBeenCalledTimes(4)
    expect(writeFileSync).toHaveBeenCalledTimes(3)
  })
})
