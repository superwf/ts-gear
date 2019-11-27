/** transform the transform url or option code here */
import * as URL from 'url'

import { forEach, isPlainObject } from 'lodash'
import * as pathToRegexp from 'path-to-regexp'

const jsonType = 'application/json'

/** url query
 * 只支持一维结构的键值对或数组
 * */
export interface IQuery {
  [k: string]: string | string[] | number | number[] | boolean | boolean[] | undefined
}

/** url param in path
 * 例如/api/abc/:id
 * 如果是/:ids数组的情况
 * 应先手动转成string再带入
 * */
export interface IPath {
  [k: string]: string | number | undefined
}

/** request parameter option */
export interface IRequestParameter {
  query?: IQuery
  path?: IPath
  body?: any
  formData?: any
}

/** transform path and query parameter
 * transform parseUrl('/api/abc/:id', { path: { id: '123' }, query: { name: 'def' } }) to '/api/abc/123?name=def'
 * */
export const parseUrl = (url: string, option?: IRequestParameter): string => {
  if (option) {
    if (option.path) {
      for (const k of Object.keys(option.path)) {
        option.path[k] = encodeURIComponent(String(option.path[k]))
      }
      url = pathToRegexp.compile(url)(option.path)
    }
    if (option.query) {
      const urlObject = URL.parse(url, true) // true: let the urlObject.query is object
      // see url#format, only search is absent, query will be used
      delete urlObject.search
      url = URL.format({
        ...urlObject,
        query: {
          ...urlObject.query,
          ...option.query,
        },
      })
    }
  }
  return url
}

class RequestError extends Error {
  constructor(message: string, hideStackFunc: any) {
    super(message)
    Error.captureStackTrace(this, hideStackFunc)
  }
}

/** 请求拦截器
 * 每个请求的通用设置放到这里
 * 如果请求体是普通对象，用json格式化并添加json的http header
 * 如果请求体有formData项，自动添加成FormData
 * */
export function interceptRequest(url: string, option?: IRequestParameter): [string, RequestInit] {
  try {
    url = parseUrl(url, option)
  } catch (e) {
    // skip this function
    // throw error to above stack, at fetch caller function position
    throw new RequestError(e.message, interceptRequest)
  }
  const requestOption: RequestInit = {
    // add the default request option here
  }
  if (option && option.body) {
    let { body } = option
    // add application/json header when body is plain object
    // and auto json stringify the body
    if (isPlainObject(body)) {
      requestOption.headers = {
        'Content-Type': jsonType,
      }
      body = JSON.stringify(body)
    }
    requestOption.body = option.body
  }
  // body 与 formData 不能同时存在
  // 所以如果有formData时，直接想requestOption.body赋值即可
  if (option && option.formData) {
    const formData = new FormData()
    forEach(option.formData, (v: any, k: string) => {
      formData.append(k, v)
    })
    requestOption.body = formData
  }
  return [url, requestOption]
}

class InterceptError extends Error {
  constructor(message: string, hideStackFunc: any) {
    super(message)
    Error.captureStackTrace(this, hideStackFunc)
  }
}

/** transform the transform response code here */
export function interceptResponse<T>(res: Response) {
  if (!res.ok) {
    throw new InterceptError(
      `response not ok, status: ${res.status}, ${res.statusText}, url: ${res.url}`,
      interceptResponse,
    )
  }
  const contentType = res.headers.get('Content-Type')
  if (contentType) {
    if (contentType.includes(jsonType)) {
      return res.json() as Promise<T>
    }

    if (contentType.includes('text/plain')) {
      return (res.text() as unknown) as Promise<T>
    }
    // 在此处添加处理更多的response类型
  }
  return (Promise.resolve(res) as unknown) as Promise<T>
}
