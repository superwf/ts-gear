import axios from 'axios'
import * as moxios from 'moxios'
import { requester } from 'src/requester/axios'

describe('requester fetch', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('simple get', async () => {
    moxios.stubRequest('/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester()('/abc')
    expect(result.data).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc')
  })

  it('get header', async () => {
    moxios.stubRequest('/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester()('/abc', {
      method: 'get',
      header: {
        custom: 'headerValue',
      },
    })
    expect(result.data).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc')
    expect(req.headers.custom).toBe('headerValue')
  })

  it('with path', async () => {
    moxios.stubRequest('/abc/111', { status: 200, responseText: '{"ok":true}' })
    const result = await requester()('/abc/:id', {
      method: 'get',
      path: {
        id: '111',
      },
    })
    expect(result.data).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc/111')
  })

  it('with wrong path', async () => {
    await expect(async () => {
      await requester()('/abc/:id/:slot', {
        method: 'get',
        path: {
          id: '111',
        },
      })
    }).rejects.toThrow('Expected "slot" to be a string')
  })

  it('with init option', async () => {
    moxios.stubRequest('/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester(
      axios.create({
        headers: {
          custom: 'headerValue',
        },
      }),
    )('/abc', {
      method: 'get',
    })
    expect(result.data).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc')
    expect(req.headers.custom).toBe('headerValue')
  })

  it('path', async () => {
    moxios.stubRequest('/abc/111/edit/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester()('/abc/:id/edit/:name', {
      method: 'get',
      path: {
        id: '111',
        name: 'abc',
      },
    })
    expect(result.data).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc/111/edit/abc')
  })

  it('post body', async () => {
    moxios.stubRequest('/abc/111/edit/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester()('/abc/:id/edit/:name', {
      method: 'post',
      header: {
        value: 'A',
      },
      path: {
        id: '111',
        name: 'abc',
      },
      body: {
        name: 'def',
      },
    })
    expect(result.data).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc/111/edit/abc')
    expect(JSON.parse(req.config.data)).toEqual({
      name: 'def',
    })
    expect(req.config.headers?.value).toBe('A')
  })

  it('put formData', async () => {
    ;(global as any).FormData = class {
      [k: string]: any

      public append(k: string, v: any) {
        this[k] = v
      }
    }
    moxios.stubRequest('/abc', { status: 200, responseText: 'ok' })
    const res = await requester()('/abc', {
      method: 'put',
      formData: {
        formDataKey: 'formDataValue',
      },
    })
    const req = moxios.requests.mostRecent()
    expect(res.data).toBe('ok')
    const mockFormData = new FormData()
    mockFormData.append('formDataKey', 'formDataValue')
    expect(JSON.parse(req.config.data)).toEqual(mockFormData)

    delete (global as any).FormData
  })
})
