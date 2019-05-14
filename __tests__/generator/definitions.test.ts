import fs from 'fs'
import pet from '../../fixture/price.json'
import { generateDefinitions } from '../../src/generator/definitions'
import { JSONSchema } from '../../src/interface'
// import { IDefinitions, JSONSchema } from '../../src/interface'
// import { addTitle } from '../../src/preprocessSchema'
// import { parseRef } from '../../src/util'

const outDir = './out'
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}

describe('generate definitions', () => {
  it('with fixture', async () => {
    const s = pet
    // const s = await parseRef(pet as JSONSchema)
    // const definitions = addTitle(s.definitions as JSONSchema)
    // console.log(definitions)
    const definitionString = await generateDefinitions(
      s.definitions as JSONSchema,
    )
    // console.log(definitions)
    if (definitionString) {
      fs.writeFileSync(`${outDir}/definitions.ts`, definitionString.join(''))
    }
  })
})
