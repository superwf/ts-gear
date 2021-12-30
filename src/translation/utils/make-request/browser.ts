import { RequestOptions } from './types'
import { ParsedUrlQueryInput } from 'querystring'
import getError, { ERROR_CODE } from '../error'

/**
 * 将对象转换成查询字符串
 * TODO: 使用 noshjs 中的方法
 */
function qs(obj?: ParsedUrlQueryInput) {
  if (!obj) return ''
  const r = []
  for (let key in obj) {
    const v = [].concat(obj[key] as never)
    r.push(...v.map(valStr => `${key}=${encodeURIComponent(valStr)}`))
  }
  return r.join('&')
}

export default function(options: RequestOptions): Promise<any> {
  const xhr = new XMLHttpRequest()
  const urlObj = new URL(options.url)

  urlObj.search += (urlObj.search ? '&' : '?') + qs(options.query)

  const { method = 'get' } = options

  xhr.open(method, urlObj.toString())

  let body: string

  if (method === 'post') {
    switch (options.type) {
      case 'form':
        xhr.setRequestHeader(
          'Content-Type',
          'application/x-www-form-urlencoded; charset=UTF-8'
        )
        body = qs(options.body)
        break

      case 'json':
      default:
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
        body = JSON.stringify(options.body)
        break
    }
  }

  const { headers } = options
  if (headers) {
    for (let header in headers) {
      xhr.setRequestHeader(header, headers[header])
    }
  }

  xhr.responseType = options.responseType || 'json'

  return new Promise((resolve, reject) => {
    xhr.onload = () => {
      // 如果 responseType 设为 json 但服务器返回的数据无法解析成 json，
      // 则 response 是 null，其他无法解析的情况也是同理。
      // 另外，responseText 只能在 responseType 是 '' 或 'text' 访问。
      if (xhr.status !== 200 || xhr.response === null) {
        reject(getError(ERROR_CODE.API_SERVER_ERROR))
        return
      }
      resolve(xhr.response)
    }

    xhr.onerror = () => {
      reject(getError(ERROR_CODE.NETWORK_ERROR, '网络错误'))
    }

    xhr.send(body)
  })
}
