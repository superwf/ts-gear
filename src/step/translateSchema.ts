import { Spec } from 'swagger-schema-official'
import { find } from 'lodash'

import { traverseSchema } from '../tool/traverseSchema'
import { TranslationEngine, IWordsMap } from '../interface'
import { translate } from '../tool/translate'

export const cnReg = /[\u4e00-\u9fa5]/

/** gather all words those need to be translated in spec */
export const gatherNonEnglishWords = (spec: Spec) => {
  const originWordSet: Set<string> = new Set()

  Object.getOwnPropertyNames(spec.definitions!).forEach((k) => {
    k = String(k)
    if (cnReg.test(k)) {
      originWordSet.add(k)
    }
  })

  traverseSchema(spec, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (cnReg.test(value)) {
        // remove "#/definition/" prefix
        originWordSet.add(value.replace(/^#\/.+\//, ''))
      }
    }
  })
  return Array.from(originWordSet)
}

// when the translation result repeat, add a unique number as suffix.
// make every word uniq.
let $wordCount = 1

/**
 * generate a translation map, as
 *
 * @return translation map
 * {
 *   "结果": "Result",
 * }
 * */
export const generateTranslationMap = async (originWords: string[], engine: TranslationEngine) => {
  const wordsMap: IWordsMap = {}

  if (originWords.length > 0) {
    await Promise.all(
      originWords.map(async (word) => {
        let newWord = String(await translate(word, engine))
        // if translated word repeat, add number as suffix
        if (find(wordsMap, (v) => v === newWord)) {
          newWord = `${newWord}${$wordCount}`
          $wordCount += 1
        }
        wordsMap[word] = newWord
      }),
    )
  }
  return wordsMap
}

/** update words those need to be translated in spec */
export const updateSchema = (spec: Spec, wordsMap: IWordsMap) => {
  const { definitions } = spec
  Object.getOwnPropertyNames(definitions!).forEach((k) => {
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
export const translateSchema = async (spec: Spec, engineName: TranslationEngine) => {
  const words = gatherNonEnglishWords(spec)
  const map = await generateTranslationMap(words, engineName)
  updateSchema(spec, map)
}
