import fs from 'fs'
import { JSONSchema } from '../src/interface'
import { generatePaths } from '../src/paths'
// import { parseRef } from '../../src/util'
// import sample from '../../fixture/sample.json'
import sample from './fixture/sample.json'

describe('generatePaths', () => {
  it('sample', async () => {
    // const schema = await parseRef(sample as JSONSchema)
    // const { log } = console
    // log(schema)
    const result = await generatePaths(sample as JSONSchema)
    // console.log(result)
    const outDir = './out/sample'
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir)
    }
    fs.writeFileSync(`${outDir}/paths.ts`, result.join('\n'))
  })
})
