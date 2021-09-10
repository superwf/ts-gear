/** use axios fetch to request */
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { forEach } from 'lodash'
import * as pathToRegexp from 'path-to-regexp'
import type { RequestParameter, Requester } from '../type'

/** transform parseUrl('/api/abc/:id', { path: { id: '123' } }) to '/api/abc/123'
 * */
export const parseUrl = (url: string, option?: RequestParameter): string => {
  if (option) {
    if (option.path) {
      Object.getOwnPropertyNames(option.path).forEach(k => {
        option.path[k] = encodeURIComponent(String(option.path[k]))
      })
      url = pathToRegexp.compile(url)(option.path)
    }
  }
  return url
}

/** assign request body to axios option */
export function interceptRequest(url: string, option?: RequestParameter): [string, AxiosRequestConfig] {
  try {
    url = parseUrl(url, option)
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message)
    }
    throw e
  }
  option = option || {}
  const requestOption: AxiosRequestConfig = {
    method: option.method || 'get',
  }
  if (option.header) {
    requestOption.headers = option.header
  }
  if (option.body) {
    requestOption.data = option.body
  }
  if (option.formData) {
    const formData = new FormData()
    // 这种上传文件的情况，应该只有一维的键值对应，只用forEach处理第一层数据
    forEach(option.formData, (v: any, k: string) => {
      formData.append(k, v)
    })
    requestOption.data = formData
  }
  return [url, requestOption]
}

export const requester = (ax?: AxiosInstance): Requester => {
  ax = ax || axios.create()
  return (apiUrl: string, param?: RequestParameter) => {
    const [url, option] = interceptRequest(apiUrl, param)
    return ax!(url, option)
  }
}
