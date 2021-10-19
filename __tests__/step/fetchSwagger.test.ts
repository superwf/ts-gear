import { join } from 'path'
import * as fetchMock from 'fetch-mock'
import * as step from 'src/step'
import type { Project } from 'src/type'

const getOnce = fetchMock.getOnce.bind(fetchMock)

describe('fetchSwagger', () => {
  const cwd = process.cwd()
  it('file not ends with json', async () => {
    const project: Project = {
      name: 'abc',
      source: 'abc',
      dest: 'abc',
      importRequesterStatement: 'import { requester } from "ts-gear/requester/fetch"',
    }
    await expect(async () => {
      await step.fetchOpenapiData(project, '')
    }).rejects.toThrow('user config file should ends with `.json`')
  })

  it('get json', async () => {
    const project: Project = {
      name: 'abc',
      source: join('example', 'petProject', 'package.json'),
      dest: 'abc',
      importRequesterStatement: 'import { requester } from "ts-gear/requester/fetch"',
    }
    const spec = await step.fetchOpenapiData(project, '')
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
    expect(spec).toEqual(require(join(cwd, 'example', 'petProject', 'package.json')))
  })

  it('fetch remote spec', async () => {
    const project: Project = {
      name: 'abc',
      source: 'http://abc.com',
      dest: 'abc',
      importRequesterStatement: 'import { requester } from "ts-gear/requester/fetch"',
    }
    getOnce('http://abc.com', { ok: true })
    const res = await step.fetchOpenapiData(project, '')
    expect(res).toEqual({ ok: true })
  })
})
