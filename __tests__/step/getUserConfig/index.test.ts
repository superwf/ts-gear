import { join } from 'path'
import { noop } from 'lodash'
import { getUserConfig } from 'src/step/getUserConfig'
import exampleProjects from 'example/petProject/src/tsg.config'

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
      process.chdir(join(cwd, 'example', 'petProject'))
    })

    it('with project names in cli', async () => {
      expect(await getUserConfig()).toEqual({
        projects: exampleProjects,
        tsGearConfigPath: join(process.cwd(), 'src'),
      })
      process.argv.push('-p', 'pet,projectE')
      expect(await getUserConfig()).toEqual({
        projects: [exampleProjects[0], exampleProjects[2]],
        tsGearConfigPath: join(process.cwd(), 'src'),
      })
    })

    it('with none exist project names in cli', async () => {
      const spy = jest.spyOn(console, 'log').mockImplementation(noop)
      expect(await getUserConfig()).toEqual({
        projects: exampleProjects,
        tsGearConfigPath: join(process.cwd(), 'src'),
      })
      process.argv.push('-p', 'noExistProjectName')
      expect(await getUserConfig()).toEqual({ projects: [], tsGearConfigPath: join(process.cwd(), 'src') })
      expect(spy).toHaveBeenCalled()
      spy.mockRestore()
    })
  })
})
