import { run } from '../src/run'
import sample from '../fixture/sample.json'
import { JSONSchema } from '../src/interface'
import fs from 'fs'

const outDir = './out'
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

describe('run', () => {
  it('with fixture', async () => {
    const definitions = await run(sample as JSONSchema)
    if (definitions) {
      fs.writeFileSync(`${outDir}/definitions.ts`, definitions.join(''))
    }
  })
})
