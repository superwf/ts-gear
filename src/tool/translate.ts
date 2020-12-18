import { baidu, google } from 'translation.js'

import type { TranslationEngine } from '../type'

export const translateEngines = {
  baidu,
  google,
}

/** change the engine, the result will definitely be different.
 * better not use this.
 * */
export async function translate(text: string, engineName: TranslationEngine) {
  try {
    const res = await translateEngines[engineName].translate({
      text,
      // from: 'zh-CN',
      to: 'en',
    })
    return res.result!.join('')
  } catch (e) {
    throw new Error(`translate word "${text}" by engine "${engineName}" fail, original error: ${e.message}`)
  }
}
