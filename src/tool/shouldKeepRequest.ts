import type { ApiFilter, SwaggerRequest } from '../type'

export const shouldKeepRequest = (request: SwaggerRequest, apiFilter?: ApiFilter) => {
  if (apiFilter) {
    if (typeof apiFilter === 'function') {
      if (!apiFilter(request)) {
        return false
      }
    } else if (!apiFilter.test(request.pathname)) {
      return false
    }
  }
  return true
}
