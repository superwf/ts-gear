import { StringOrTranslateOptions } from '../types'
import detect from './detect'
import { root, standard2custom } from './state'
import getError, { ERROR_CODE } from '../../utils/error'

/**
 * 生成百度语音地址
 * @param text 要朗读的文本
 * @param lang 文本的语种，使用百度自定义的语种名称
 */
export function getAudioURI(text: string, lang: string) {
  return (
    root +
    `/gettts?lan=${lang}&text=${encodeURIComponent(text)}&spd=3&source=web`
  )
}

/**
 * 获取指定文本的网络语音地址
 */
export default async function(options: StringOrTranslateOptions) {
  let { text, from = undefined } =
    typeof options === 'string' ? { text: options } : options

  if (!from) {
    from = await detect(text)
  }

  let lang
  if (from === 'en-GB') {
    lang = 'uk'
  } else {
    lang = standard2custom[from]
    if (!lang) throw getError(ERROR_CODE.UNSUPPORTED_LANG)
  }
  return getAudioURI(text, lang)
}
