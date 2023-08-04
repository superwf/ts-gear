import type { Spec } from 'swagger-schema-official'
import { find } from 'lodash'
import { traverseSchema } from '../tool/traverseSchema'
import type { TranslationEngine, WordsMap, Project } from '../type'
import { translate } from '../tool/translate'

export const cnReg = /[\u4e00-\u9fa5]/

/** gather all words those need to be translated in spec */
export const gatherNonEnglishWords = (spec: Spec) => {
  const originWordSet: Set<string> = new Set()

  Object.getOwnPropertyNames(spec.definitions!).forEach(k => {
    k = String(k)
    if (cnReg.test(k)) {
      originWordSet.add(k)
    }
  })

  traverseSchema(spec, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (cnReg.test(value)) {
        // in openapi v2 remove "#/definition/" prefix
        // in openapi v3 remove "#/components/schemas/" prefix
        originWordSet.add(value.replace(/^#\/.+\//, ''))
      }
    }
  })
  return Array.from(originWordSet)
}

/** when the translation result repeat, add a unique number as suffix.
 * make every word uniq.
 * 这块过一段时间，自己也看不懂了，特此备注。
 * 源文字不同，但翻译目标的英文可能会一样
 * 比如“非常好”,“很好”，都翻译成 "very good"，针对目标英文可能有重复，添加自增后缀数字区分
 */
let $wordCount = 1

/**
 *generateTranslationMap param type
 * */
type Option = {
  words: string[]
  engine: TranslationEngine
  interval?: number
  serial?: boolean
  debug?: boolean
}

/**
 * generate a translation map, as
 *
 * @return translation map
 * {
 *   "结果": "Result",
 * }
 * */
export const generateTranslationMap = async ({ words, engine, interval = 2000, serial, debug = false }: Option) => {
  const wordsMap: WordsMap = {}

  serial = serial ?? true

  if (words.length > 0) {
    if (serial) {
      // eslint-disable-next-line no-restricted-syntax
      for (const text of words) {
        // eslint-disable-next-line no-await-in-loop
        let newWord = String(await translate({ text, engine, interval, debug }))
        // if translated word repeat, add number as suffix
        if (find(wordsMap, v => v === newWord)) {
          newWord = `${newWord}${$wordCount}`
          $wordCount += 1
        }
        wordsMap[text] = newWord
      }
    } else {
      await Promise.all(
        words.map(async text => {
          let newWord = String(await translate({ text, engine, interval, debug }))
          // if translated word repeat, add number as suffix
          if (find(wordsMap, v => v === newWord)) {
            newWord = `${newWord}${$wordCount}`
            $wordCount += 1
          }
          wordsMap[text] = newWord
        }),
      )
    }
  }
  return wordsMap
}

/** update words those need to be translated in spec */
export const updateSchema = (spec: Spec, wordsMap: WordsMap) => {
  const { definitions } = spec
  Object.getOwnPropertyNames(definitions!).forEach(k => {
    if (k in wordsMap) {
      definitions![wordsMap[k as string]] = definitions![k]
      delete definitions![k]
    }
  })

  traverseSchema(spec, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      const translatedWord = value.replace(/^#\/.+\//, '')
      if (translatedWord in wordsMap) {
        const matched = value.match(/^#\/.+\//)
        if (matched && matched.length > 0) {
          parent.$ref = `${matched[0]}${wordsMap[translatedWord]}`
        } else {
          parent.$ref = wordsMap[translatedWord]
        }
      }
    }
  })
}

/** translate "$ref" value and keys in "definitions" in spec
 * just update the spec parame object
 * not return a new object
 * */
export const translateSchema = async (spec: Spec, project: Project) => {
  const { translationEngine, translateSerial } = project
  if (translationEngine) {
    if (project.translateMap) {
      updateSchema(spec, project.translateMap)
      return
    }
    const words = gatherNonEnglishWords(spec)
    const map = await generateTranslationMap({
      words,
      engine: translationEngine,
      interval: project.translateIntervalPerWord,
      serial: translateSerial,
      debug: project.translateDebug,
    })
    updateSchema(spec, map)
  }
}
