/**
 * 兼容openapiv3
 * 深度获取requestBody对象内是否有required选项
 * 生成请求参数的required属性用
 * */
export const getRequiredDeep = (obj?: Record<string, any>): boolean => {
  if (!obj) {
    return false
  }
  if (typeof obj === 'object') {
    const keys = Object.getOwnPropertyNames(obj)
    if (keys.length > 0) {
      /* eslint-disable no-restricted-syntax */
      for (const key of keys) {
        if (key === 'required' && obj[key] === true) {
          return true
        }
        if (typeof obj[key] === 'object') {
          return getRequiredDeep(obj[key])
        }
      }
    }
  }
  return false
}
