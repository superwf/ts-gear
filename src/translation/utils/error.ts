export const enum ERROR_CODE {
  NETWORK_TIMEOUT = 'NETWORK_TIMEOUT', // 查询接口时超时了
  NETWORK_ERROR = 'NETWORK_ERROR', // 查询时网络出问题了
  API_SERVER_ERROR = 'API_SERVER_ERROR', // 接口服务出问题了
  UNSUPPORTED_LANG = 'UNSUPPORTED_LANG' // 不支持的语种
}

export interface TranslateError extends Error {
  code: ERROR_CODE
}

export default function(code: ERROR_CODE, msg?: string) {
  const e = new Error(msg) as TranslateError
  e.code = code
  return e
}
