import { resolve } from 'path'
import { run } from 'src/run'
import { tsGearRoot } from 'src/util'

describe('run', () => {
  it('with fixture', async () => {
    // 以example为cwd读取ts-gear.ts
    process.chdir(resolve(tsGearRoot, 'example'))
    await run()
  })
})
