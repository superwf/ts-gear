import { baidu, google } from '../translation'
import type { TranslationEngine } from '../type'
import { sleep } from './sleep'
import { info } from './log'

export const translateEngines = {
  baidu,
  google,
}

type Option = {
  text: string
  engine: TranslationEngine
  interval?: number
  debug?: boolean
}

/** change the engine, the result will definitely be different.
 * better not use this.
 * */
export async function translate({ text, engine, interval = 0, debug = false }: Option) {
  try {
    if (interval > 0) {
      await sleep(interval * Math.random())
    }
    if (debug) {
      info(`translating by ${engine}: "${text}"`)
    }
    const res = await translateEngines[engine].translate({
      text,
      to: 'en',
    })
    if (debug) {
      info(`translate result: "${String(res.result)}"`)
    }
    return res.result!.join('')
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`translate word "${text}" by engine "${engine}" fail, original error: ${e.toString()}`)
    }
    throw e
  }
}
