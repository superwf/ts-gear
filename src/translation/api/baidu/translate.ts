/* eslint-disable camelcase,no-empty  */
import type { StringOrTranslateOptions, TranslateResult } from '../types'
import getValue from '../../utils/get'
import request from '../../utils/make-request'
import getError, { ERROR_CODE } from '../../utils/error'
import sign from './sign'
import { getAudioURI } from './audio'
import detect from './detect'
import { standard2custom, root, Cookie, fetchCookie, custom2standard } from './state'
import type { ResponseSymbol, Response } from './type'

function transformRaw(text: string, body: Response) {
  const transResult = body.trans_result
  const customFrom = getValue(transResult, 'from')
  const customTo = getValue(transResult, 'to')

  const result: TranslateResult = {
    text,
    raw: body,
    link: `${root}/#${customFrom}/${customTo}/${encodeURIComponent(text)}`,
    from: custom2standard[customFrom],
    to: custom2standard[customTo],
  }

  const symbols: ResponseSymbol = getValue(body, ['dict_result', 'simple_means', 'symbols', '0'])

  if (symbols) {
    // 解析音标
    const phonetic = []
    const { ph_am, ph_en } = symbols
    if (ph_am) {
      phonetic.push({
        name: '美',
        ttsURI: getAudioURI(text, 'en'),
        value: ph_am,
      })
    }
    if (ph_en) {
      phonetic.push({
        name: '英',
        ttsURI: getAudioURI(text, 'en-GB'),
        value: ph_en,
      })
    }
    if (phonetic.length) {
      result.phonetic = phonetic
    }

    // 解析词典数据
    try {
      result.dict = symbols.parts.map(part => {
        return (part.part ? `${part.part} ` : '') + part.means.join('；')
      })
    } catch (e) {}
  }

  // 解析普通的翻译结果
  try {
    result.result = transResult.data.map(d => d.dst)
  } catch (e) {}

  if (!result.dict && !result.result) {
    throw getError(ERROR_CODE.API_SERVER_ERROR)
  }

  return result
}

export default async function translate(options: StringOrTranslateOptions) {
  if (!Cookie.value) {
    await fetchCookie()
  }
  let { from = undefined, to = undefined, text } = typeof options === 'string' ? { text: options } : options

  if (!from) {
    from = await detect(text)
  }

  if (!to) {
    to = from.startsWith('zh') ? 'en' : 'zh-CN'
  }

  const customFromLang = standard2custom[from]
  const customToLang = standard2custom[to]

  if (!customFromLang || !customToLang) {
    throw getError(ERROR_CODE.UNSUPPORTED_LANG)
  }

  return transformRaw(
    text,
    await request({
      url: `${root}/v2transapi`,
      type: 'form',
      method: 'post',
      body: {
        from: customFromLang,
        to: customToLang,
        query: text,
        transtype: 'translang',
        simple_means_flag: 3,
        ...(await sign(text)),
      },
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Cookie: Cookie.value,
      },
    }),
  )
}
