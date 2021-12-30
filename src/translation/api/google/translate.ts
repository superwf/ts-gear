import {
  StringOrTranslateOptions,
  TranslateOptions,
  TranslateResult
} from '../types'
import request from '../../utils/make-request'
import { getRoot } from './state'
import detect from './detect'
import sign from './sign'

export default async function(options: StringOrTranslateOptions) {
  let { text, com = false, from = '', to = '' } =
    typeof options === 'string' ? { text: options } : options

  if (!from) {
    from = await detect(options)
  }
  if (!to) {
    to = from.startsWith('zh') ? 'en' : 'zh-CN'
  }

  return transformRaw(
    await request({
      url: getRoot(com) + '/translate_a/single',
      query: {
        client: 'webapp',
        sl: from,
        tl: to,
        hl: 'zh-CN',
        dt: ['at', 'bd', 'ex', 'ld', 'md', 'qca', 'rw', 'rm', 'ss', 't'],
        otf: '2',
        ssel: '3',
        tsel: '0',
        kc: '6',
        tk: await sign(text, com),
        q: text
      }
    }),
    {
      from,
      to,
      com,
      text
    }
  )
}

function transformRaw(body: any[], queryObj: TranslateOptions) {
  const { text, com, to } = queryObj
  const googleFrom = body[2]

  const result: TranslateResult = {
    text,
    raw: body,
    from: googleFrom,
    to: to!,
    link: `${getRoot(
      com
    )}/#view=home&op=translate&sl=${googleFrom}&tl=${to}&text=${encodeURIComponent(
      text
    )}`
  }

  try {
    result.dict = body[1].map((arr: any[]) => {
      return arr[0] + '：' + arr[1].join('，')
    })
  } catch (e) {}

  try {
    result.result = body[0]
      .map((arr: string[]) => arr[0])
      .filter((x: string) => x)
      .map((x: string) => x.trim())
  } catch (e) {}

  return result
}
