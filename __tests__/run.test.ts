import { join } from 'path'
import { run } from 'src/run'

describe('run', () => {
  it('with fixture', async () => {
    const cwd = process.cwd()
    await run({
      projects: [
        {
          name: 'doc',
          dest: 'service',
          source: '../../fixture/doc.json',
          importRequesterStatement: 'import { requester } from "../../requester"',
          EOL: '\n',
          withBasePath: true,
        },
      ],
      appPath: join(cwd, 'example/petProject/src'),
    })
    expect(1).toBe(1)
  })
})
