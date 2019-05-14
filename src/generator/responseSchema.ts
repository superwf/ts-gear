import { compile } from 'json-schema-to-typescript'
import { camelCase, upperFirst } from 'lodash'
import { IResponse } from '../interface'

export const generateResponseSchema = async (
  responses: IResponse,
): Promise<string> => {
  if (responses[200] && responses[200].schema) {
    // console.log(request.responses[200])
    const { title } = responses[200].schema
    console.log(responses[200].schema)
    // 如果该schema有自己的title则说明是引用definitions里的
    // 否则就是直接定义的，应该compile
    if (title) {
      return upperFirst(camelCase(title))
    }
    return compile(responses[200].schema, '')
  }
  return ''
}
