/**
 * 深度获取内部的$ref对象
 * 用于兼容openapiv3，从requestBody中获取schema
 * */
export const getRefDeep = (obj?: Record<string, any>): any => {
  if (!obj) {
    return {}
  }
  if (obj.$ref) {
    return obj
  }
  const keys = Object.getOwnPropertyNames(obj)
  if (keys.length > 0) {
    /* eslint-disable no-restricted-syntax */
    for (const key of keys) {
      if (typeof obj[key] === 'object') {
        return getRefDeep(obj[key])
      }
    }
  }
  return {}
}
