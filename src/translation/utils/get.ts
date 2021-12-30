/**
 * 安全的获取一个变量上指定路径的值。
 * TODO: 使用 noshjs 代替
 */
export default function(
  obj: any,
  pathArray: string | string[],
  defaultValue?: any
) {
  if (obj == null) return defaultValue

  if (typeof pathArray === 'string') {
    pathArray = [pathArray]
  }

  let value = obj

  for (let i = 0; i < pathArray.length; i += 1) {
    const key = pathArray[i]
    value = value[key]
    if (value == null) {
      return defaultValue
    }
  }

  return value
}
