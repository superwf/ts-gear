import { find } from 'lodash'

import { traverseSchema } from 'src/tool/traverseSchema'
import { TranslationEngine, JSONSchema, IWordsMap } from 'src/interface'
import { translate } from 'src/tool/translate'

// copy some translate part from pont src/scripts/base.ts
export const cnReg = /[\u4e00-\u9fa5]/

/** gather all words those need to be translated in schema */
export const gatherNonEnglishWords = (schema: JSONSchema) => {
  const originWordSet: Set<string> = new Set()

  traverseSchema(schema, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (cnReg.test(value)) {
        // remove "#/definition/" prefix
        originWordSet.add(value.replace(/^#\/.+\//, ''))
      }
    }
    if (key === 'definitions') {
      Reflect.ownKeys(value).forEach(k => {
        k = String(k)
        if (cnReg.test(k)) {
          originWordSet.add(k)
        }
      })
    }
  })
  return Array.from(originWordSet)
}

// when the translation result repeat, add a unique number as suffix.
// so every word uniq.
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
    for (const word of originWords) {
      let newWord = String(await translate(word, engine))
      // if translated word repeat, add number as suffix
      if (find(wordsMap, v => v === newWord)) {
        newWord = `${newWord}${$wordCount++}`
      }
      wordsMap[word] = newWord
    }
  }
  return wordsMap
}

/** update words those need to be translated in schema */
export const updateSchema = (schema: JSONSchema, wordsMap: IWordsMap) => {
  const { definitions } = schema
  Object.getOwnPropertyNames(definitions!).forEach(k => {
    if (k in wordsMap) {
      definitions![wordsMap[k as string]] = definitions![k]
      delete definitions![k]
    }
  })

  traverseSchema(schema, ({ value, parent, key }) => {
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

/** translate "$ref" value and keys in "definitions" in schema
 * just update the schema parame object
 * not return a new object
 * */
export const translateSchema = async (schema: JSONSchema, engineName: TranslationEngine) => {
  const words = gatherNonEnglishWords(schema)
  const map = await generateTranslationMap(words, engineName)
  updateSchema(schema, map)
}
