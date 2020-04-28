/** use axios fetch to request */
import axios, { AxiosRequestConfig } from 'axios'
import { forEach } from 'lodash'
import * as pathToRegexp from 'path-to-regexp'

import { IRequestParameter, Requester } from '../interface'

/** transform parseUrl('/api/abc/:id', { path: { id: '123' } }) to '/api/abc/123'
 * */
export const parseUrl = (url: string, option?: IRequestParameter): string => {
  if (option) {
    if (option.path) {
      Object.getOwnPropertyNames(option.path).forEach((k) => {
        option.path[k] = encodeURIComponent(String(option.path[k]))
      })
      url = pathToRegexp.compile(url)(option.path)
    }
  }
  return url
}

class InterceptError extends Error {
  constructor(message: string, hideStackFunc: any) {
    super(message)
    Error.captureStackTrace(this, hideStackFunc)
  }
}

/** assign request body to axios option */
export function interceptRequest(url: string, option?: IRequestParameter): [string, AxiosRequestConfig] {
  try {
    url = parseUrl(url, option)
  } catch (e) {
    // skip this function
    // throw error to above stack, at fetch caller function position
    throw new InterceptError(e.message, interceptRequest)
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

export const requester = (axiosInit?: AxiosRequestConfig): Requester => {
  const request = axios.create(axiosInit)
  return (apiUrl: string, param?: IRequestParameter) => {
    const [url, option] = interceptRequest(apiUrl, param)
    return request(url, option).then((res) => res.data)
  }
}
