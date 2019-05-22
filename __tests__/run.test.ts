import { resolve } from 'path'
import { run } from 'src/run'
import { tsGearRoot } from 'src/util'

describe('run', () => {
  it('with fixture', async () => {
    process.chdir(resolve(tsGearRoot, 'example'))
    await run()
  })
})
