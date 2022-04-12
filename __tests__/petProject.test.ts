import 'cross-fetch/polyfill'
import { deletePetPetId, getUserLogin } from 'example/petProject/src/service/pet/request'

/** 在run的测试用例运行之后，已经生成了pet的service文件 */
describe('pet methods', () => {
  const originEnv = process.env.NODE_ENV
  beforeEach(() => {
    process.env.NODE_ENV = 'development'
  })
  afterEach(() => {
    process.env.NODE_ENV = originEnv
  })
  it('deletePetPetId, 替换path参数', async () => {
    const mockRes = { ok: true }
    const mockFetch = jest.fn(() =>
      Promise.resolve(
        new Response(JSON.stringify(mockRes), {
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    const g: any = global
    const originFetch: any = g.fetch

    g.fetch = mockFetch
    const res = await deletePetPetId({
      path: {
        petId: 1,
      },
    })
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenLastCalledWith('/v2/pet/1', {
      method: 'delete',
    })
    expect(res).toEqual(mockRes)
    g.fetch = originFetch
  })

  it('getUserLogin, 有query', async () => {
    const mockRes = { ok: true }
    const mockFetch = jest.fn(() =>
      Promise.resolve(
        new Response(JSON.stringify(mockRes), {
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )
    const g: any = global
    const originFetch: any = g.fetch

    g.fetch = mockFetch
    const query = {
      username: 'a',
      password: 'b',
    }
    const res = await getUserLogin(query)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(mockFetch).toHaveBeenLastCalledWith(`/v2/user/login?${new URLSearchParams(query)}`, {
      method: 'get',
    })
    expect(res).toEqual(mockRes)

    g.fetch = originFetch
  })
})
