// import fetchMock from 'fetch-mock'

import * as step from 'src/step'
import { IProject } from 'src/interface'

jest.mock('isomorphic-fetch', () => {
  return () => ({
    json() {
      return Promise.resolve({ ok: true })
    },
  })
})

describe('fetchSwagger', () => {
  it('file not ends with json', done => {
    const project: IProject = {
      name: 'abc',
      source: 'abc',
      dest: 'abc',
      requester: () => Promise.resolve(),
    }
    step.fetchSwagger(project).catch(e => {
      expect(e.message).toBe('user config file should ends with `.json`')
      done()
    })
  })

  it('fetch remote spec', async () => {
    const project: IProject = {
      name: 'abc',
      source: 'http://abc.com',
      dest: 'abc',
      requester: () => Promise.resolve(),
    }
    const res = await step.fetchSwagger(project)
    expect(res).toEqual({ ok: true })
    jest.restoreAllMocks()
  })
})
