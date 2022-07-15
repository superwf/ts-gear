// import detect from './detect'
// import audio from './audio'
// import translate from './translate'

// export { detect, audio, translate }
import * as vitaletsTranslate from '@vitalets/google-translate-api'
import type { StringOrTranslateOptions } from '../types'

export const translate = async (option: StringOrTranslateOptions) => {
  if (typeof option === 'string') {
    return vitaletsTranslate(option, { to: 'en' }).then(res => ({ result: [res.text] }))
  }
  return vitaletsTranslate(option.text, { to: 'en' }).then(res => ({ result: [res.text] }))
}
