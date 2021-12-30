import { StringOrTranslateOptions } from '../types'
import sign from './sign'
import { getRoot } from './state'
import detect from './detect'

export default async function(options: StringOrTranslateOptions) {
  let { text, from = '', com = false } =
    typeof options === 'string' ? { text: options } : options

  if (!from) {
    from = await detect(text)
  }

  return `${getRoot(com)}/translate_tts?ie=UTF-8&q=${encodeURIComponent(
    text
  )}&tl=${from}&total=1&idx=0&textlen=${text.length}&tk=${await sign(
    text,
    com
  )}&client=webapp&prev=input`
}
