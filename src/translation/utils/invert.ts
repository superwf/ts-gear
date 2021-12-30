import { StringObject } from '../types'

/** 反转对象 */
export default function(obj: StringObject) {
  const result: StringObject = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key
    }
  }
  return result
}
