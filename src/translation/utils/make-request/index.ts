import { request as requestHTTP } from 'http'
import { request as requestHTTPs } from 'https'
import { parse } from 'url'
import { stringify } from 'querystring'
import type { StringObject } from '../../types'
import getError, { ERROR_CODE } from '../error'
import type { RequestOptions } from './types'

require('tls').DEFAULT_ECDH_CURVE = 'auto'

export default function makerequest(options: RequestOptions): Promise<any> {
  const { method = 'get' } = options
  const urlObj = parse(options.url, true)
  const qs = stringify(Object.assign(urlObj.query, options.query))

  const headers: StringObject = {
    'User-Agent':
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
  }

  let body: string

  if (method === 'post') {
    switch (options.type) {
      case 'form':
        headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
        body = stringify(options.body)
        break

      case 'json':
      default:
        headers['Content-Type'] = 'application/json; charset=UTF-8'
        body = JSON.stringify(options.body)
        break
    }

    headers['Content-Length'] = String(Buffer.byteLength(body))
  }

  Object.assign(headers, options.headers)

  const httpOptions = {
    hostname: urlObj.hostname,
    method,
    path: `${urlObj.pathname}?${qs}`,
    headers,
    auth: urlObj.auth,
  }

  const responseType = options.responseType || 'json'

  return new Promise((resolve, reject) => {
    const req = (urlObj.protocol === 'https:' ? requestHTTPs : requestHTTP)(httpOptions, res => {
      // 内置的翻译接口都以 200 作为响应码，所以不是 200 的一律视为错误
      if (res.statusCode !== 200) {
        reject(getError(ERROR_CODE.API_SERVER_ERROR))
        return
      }

      res.setEncoding('utf8')
      let rawData = ''
      res.on('data', (chunk: string) => {
        rawData += chunk
      })
      res.on('end', () => {
        // Node.js 端只支持 json，其余都作为 text 处理
        if (responseType === 'json') {
          try {
            resolve(JSON.parse(rawData))
          } catch (e) {
            // 与浏览器端保持一致，在无法解析成 json 时报错
            reject(getError(ERROR_CODE.API_SERVER_ERROR))
          }
        } else {
          resolve(rawData)
        }
      })
    })

    req.on('error', e => {
      reject(getError(ERROR_CODE.NETWORK_ERROR, e.message))
    })

    req.end(body)
  })
}
