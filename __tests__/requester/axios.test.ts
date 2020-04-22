import * as moxios from 'moxios'

import { requester } from 'src/requester/axios'

describe('requester fetch', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('get header', async () => {
    moxios.stubRequest('/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester()('/abc', {
      method: 'get',
      header: {
        custom: 'headerValue',
      },
    })
    expect(result).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc')
    expect(req.headers.custom).toBe('headerValue')
  })

  it('with init option', async () => {
    moxios.stubRequest('/abc', { status: 200, responseText: '{"ok":true}' })
    const result = await requester({
      headers: {
        custom: 'headerValue',
      },
    })('/abc', {
      method: 'get',
    })
    expect(result).toEqual({ ok: true })
    expect(result).toEqual({ ok: true })
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
    expect(result).toEqual({ ok: true })
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
    expect(result).toEqual({ ok: true })
    const req = moxios.requests.mostRecent()
    expect(req.url).toBe('/abc/111/edit/abc')
    expect(req.config.data).toEqual(
      JSON.stringify({
        name: 'def',
      }),
    )
    expect(req.config.headers.value).toBe('A')
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
    expect(res).toBe('ok')
    const mockFormData = new FormData()
    mockFormData.append('formDataKey', 'formDataValue')
    expect(req.config.data).toEqual(mockFormData)

    delete (global as any).FormData
  })
})
