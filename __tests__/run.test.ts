import { resolve } from 'path'

import { putPet } from '../example/service/pet/request'

import { run } from 'src/run'
import { tsGearRoot } from 'src/util'

describe('run', () => {
  it('with fixture', async () => {
    // 以example为cwd读取ts-gear.ts
    process.chdir(resolve(tsGearRoot, 'example'))
    await run()
  })

  it('for putPet', async () => {
    const g: any = global
    g.fetch.mockResponse(JSON.stringify({}))
    await putPet({
      body: {
        name: 'a',
        photoUrls: ['xxx'],
      },
    })
  })
})
