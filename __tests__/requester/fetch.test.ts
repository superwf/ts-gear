import 'cross-fetch/polyfill'
import * as fetchMock from 'fetch-mock'
import { requester } from 'src/requester/fetch'

const getOnce = fetchMock.getOnce.bind(fetchMock)
const postOnce = fetchMock.postOnce.bind(fetchMock)
const putOnce = fetchMock.putOnce.bind(fetchMock)
const lastCall = fetchMock.lastCall.bind(fetchMock)

describe('requester fetch', () => {
  it('get header', async () => {
    getOnce('/abc', { ok: true })
    let result = await requester()('/abc', {
      method: 'get',
      header: {
        custom: 'headerValue',
      },
    })
    expect(result).toEqual({ ok: true })
    let call = lastCall()
    expect(call![0]!).toBe('/abc')
    expect(call![1]!.headers).toEqual({
      custom: 'headerValue',
    })

    getOnce('/abc', { ok: true }, { overwriteRoutes: true })
    result = await requester()('/abc')
    call = lastCall()
    expect(call![0]!).toBe('/abc')
    expect(call![1]!.headers).toBe(undefined)
  })

  it('with query', async () => {
    getOnce('/abc?d=f', { ok: true })
    const result = await requester()('/abc', {
      query: { d: 'f' },
    })
    expect(result).toEqual({ ok: true })
    const call = lastCall()
    expect(call![0]!).toBe('/abc?d=f')
  })

  it('intercept request', async () => {
    getOnce('/abc', 200, { overwriteRoutes: true })
    await expect(async () =>
      requester()('/abc/:id/:slot', {
        path: { id: '1' },
      }),
    ).rejects.toThrow(/Expected/)
  })

  it('response error', async () => {
    getOnce('/return500', { status: 500 })
    await expect(async () => {
      await requester()('/return500')
    }).rejects.toThrow(/status: 500, Internal Server Error, url: \/return500/)
    const call = lastCall()
    expect(call![0]!).toBe('/return500')
    // expect(result).toEqual({ ok: true })
  })

  it('with init option', async () => {
    getOnce('/abc', { ok: true }, { overwriteRoutes: true })
    const result = await requester({
      headers: {
        custom: 'headerValue',
      },
    })('/abc', {
      method: 'get',
    })
    expect(result).toEqual({ ok: true })
    const call = lastCall()
    expect(call![0]!).toBe('/abc')
    expect(call![1]!.headers).toEqual({
      custom: 'headerValue',
    })
  })

  it('path', async () => {
    getOnce('/abc/111/edit/abc', { ok: true })
    const result = await requester()('/abc/:id/edit/:name', {
      method: 'get',
      path: {
        id: '111',
        name: 'abc',
      },
    })
    expect(result).toEqual({ ok: true })
    const call = lastCall()
    expect(call![0]!).toBe('/abc/111/edit/abc')
  })

  it('post body', async () => {
    postOnce('/abc/111/edit/abc', { ok: true })
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
    const call = lastCall()
    expect(call![0]!).toBe('/abc/111/edit/abc')
    expect(call![1]!).toEqual({
      method: 'post',
      headers: {
        value: 'A',
        'Content-Type': 'application/json',
      },
      body: '{"name":"def"}',
    })
  })

  it('post string body', async () => {
    postOnce('/abc', { ok: true }, { overwriteRoutes: true })
    const result = await requester()('/abc', {
      method: 'post',
      body: 'string',
    })
    expect(result).toEqual({ ok: true })
    const call = lastCall()
    expect(call![0]!).toBe('/abc')
    expect(call![1]!).toEqual({
      method: 'post',
      body: 'string',
    })
  })

  it('put formData', async () => {
    ;(global as any).FormData = class {
      [k: string]: any

      public append(k: string, v: any) {
        this[k] = v
      }
    }
    putOnce('/abc', {
      headers: {
        'Content-Type': 'text/plain',
      },
      body: 'ok',
    })
    const result = await requester()('/abc', {
      method: 'put',
      formData: {
        name: 'def',
      },
    })
    expect(result).toBe('ok')
    const call = lastCall()
    expect(call![0]!).toBe('/abc')
    const mockFormData = new FormData()
    mockFormData.append('name', 'def')
    expect(call![1]!).toEqual({
      method: 'put',
      body: mockFormData,
    })

    delete (global as any).FormData
  })

  it('other content type', async () => {
    putOnce(
      '/abc',
      {
        headers: {
          'Content-Type': 'text/xml',
        },
        body: '<xml />',
      },
      { overwriteRoutes: true },
    )
    const result = await requester()('/abc', {
      method: 'put',
    })
    expect(result.headers.get('Content-Type')).toBe('text/xml')
    expect(result.body.toString()).toBe('<xml />')
  })

  it('no content type', async () => {
    putOnce(
      '/abc',
      {
        headers: {},
        body: 'rawbody',
      },
      { overwriteRoutes: true },
    )
    const result = await requester()('/abc', {
      method: 'put',
    })
    expect(result).toBe('rawbody')
  })
})
