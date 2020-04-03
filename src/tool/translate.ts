import { baidu, google, youdao } from 'translation.js'
import { upperFirst, camelCase, find } from 'lodash'

import { traverseSchema } from './traverseSchema'

import { TranslationEngine, JSONSchema } from 'src/interface'

export const translateEngines = {
  baidu,
  youdao,
  google,
}

/** change the engine, the result will definitely be different.
 * better not use this.
 * */
export const translate = async (text: string, engineName: TranslationEngine) => {
  try {
    const res = await translateEngines[engineName].translate({
      text,
      from: 'zh-CN',
      to: 'en',
    })
    // console.log(engineName, res.result)
    return upperFirst(camelCase(res.result!.join('')))
  } catch (e) {
    console.error(`translate word "${text}" by engine "${engineName}" fail, error: `, e)
  }
}

// copy some translate part from pont src/scripts/base.ts
export const cnReg = /[\u4e00-\u9fa5]/

/** gather all words those need to be translated in schema */
export const gatherNonEnglishWords = (schema: JSONSchema) => {
  const originWordSet: Set<string> = new Set()

  traverseSchema(schema, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      // 将所有#/definitions/前缀去掉，之后就不用再处理了
      if (cnReg.test(value)) {
        originWordSet.add(value)
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

interface IWordsMap {
  [k: string]: string
}

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
  traverseSchema(schema, ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (value in wordsMap) {
        parent.$ref = wordsMap[value]
      }
    }
    if (key === 'definitions') {
      Reflect.ownKeys(value).forEach(k => {
        if (k in wordsMap) {
          value[wordsMap[k as string]] = value[k]
          delete value[k]
        }
      })
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
