import request from '../../../utils/make-request'
import { Cookie, fetchCookie } from '../state'
import getError, { ERROR_CODE } from '../../../utils/error'

const seedReg = /window\.gtk\s=\s'([^']+)';/
const tokenReg = /token:\s'([^']+)'/

export default async function fetchSeed() {
  if (!Cookie.value) {
    await fetchCookie()
  }
  // 尚不清楚 gtk 和 token 多久变一次，暂时在每次请求时都解析一遍
  const html = await request({
    url: 'https://fanyi.baidu.com',
    headers: {
      Cookie: Cookie.value,
    },
    responseType: 'text',
  })
  const seed = html.match(seedReg)
  if (seed) {
    const token = html.match(tokenReg)
    if (token) {
      return {
        seed: seed[1],
        token: token[1],
      }
    }
  }

  // 如果不能正确解析出 seed 和 token，则视为服务器错误
  throw getError(ERROR_CODE.API_SERVER_ERROR)
}
