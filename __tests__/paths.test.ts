import fs from 'fs'
import { generatePaths } from '../src/generator/paths'
import { JSONSchema } from '../src/interface'
// import { parseRef } from '../../src/util'
// import sample from '../../fixture/sample.json'
import sample from './fixture/price.json'

const outDir = './out'
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

describe('generateParameters', () => {
  it('generateParameters', async () => {
    // const schema = await parseRef(sample as JSONSchema)
    // const { log } = console
    // log(schema)
    const result = await generatePaths(sample as JSONSchema)
    fs.writeFileSync(`${outDir}/samplePaths.ts`, result)
  })
})
