import type { StringOrTranslateOptions } from '../types'
import request from '../../utils/make-request'
import getError, { ERROR_CODE } from '../../utils/error'
import { getRoot } from './state'
import sign from './sign'

export default async function (options: StringOrTranslateOptions) {
  const { text, com = false } = typeof options === 'string' ? { text: options } : options

  const result = await request({
    url: `${getRoot(com)}/translate_a/single`,
    query: {
      client: 'webapp',
      sl: 'auto',
      tl: 'zh-CN',
      hl: 'zh-CN',
      ssel: '3',
      tsel: '0',
      kc: '0',
      tk: await sign(text, com),
      q: text,
    },
  })

  const src = result && result[2]
  if (src) return src
  throw getError(ERROR_CODE.UNSUPPORTED_LANG)
}
