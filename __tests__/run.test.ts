import { join } from 'path'

import { run } from 'src/run'

describe('run', () => {
  it('with fixture', async () => {
    // 以example为cwd读取ts-gear.ts
    process.chdir(join(process.cwd(), 'example'))
    await run()
  })

  // it('for putPet', async () => {
  //   const { putPet } = require('../example/service/pet/request')
  //   const g: any = global
  //   g.fetch.mockResponse(JSON.stringify({}))
  //   await putPet({
  //     body: {
  //       name: 'a',
  //       photoUrls: ['xxx'],
  //     },
  //   })
  // })
})
