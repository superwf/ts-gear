import { baidu, google } from 'translation.js'
import type { TranslationEngine } from '../type'
import { sleep } from './sleep'
import { info } from './log'

export const translateEngines = {
  baidu,
  google,
}

/** change the engine, the result will definitely be different.
 * better not use this.
 * */
export async function translate(text: string, engineName: TranslationEngine) {
  try {
    await sleep(1000 * Math.random())
    info(`translating by ${engineName}: "${text}"`)
    const res = await translateEngines[engineName].translate({
      text,
      // from: 'zh-CN',
      to: 'en',
    })
    info(`translate result: "${String(res.result)}"`)
    return res.result!.join('')
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`translate word "${text}" by engine "${engineName}" fail, original error: ${e.message}`)
    }
    throw e
  }
}
