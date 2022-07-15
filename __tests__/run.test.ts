import { join } from 'path'
import { run } from 'src/run'

describe('run', () => {
  it('with fixture', async () => {
    const cwd = process.cwd()
    await run({
      projects: [
        {
          name: 'projectE',
          dest: 'service',
          source: '../../../example/fixture/projectE.json',
          // source: '../../../example/fixture/pet.json',
          importRequesterStatement: 'import { requester } from "../../requester"',
          EOL: '\n',
          withBasePath: true,
          translationEngine: 'baidu',
          translateSerial: true,
          stripBodyPropWhenOnlyOneBodyProp: true,
        },
      ],
      appPath: join(cwd, 'example/petProject/src'),
    })
    expect(1).toBe(1)
  })
})
