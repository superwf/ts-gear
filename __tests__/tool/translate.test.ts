import { cloneDeep } from 'lodash'

import pontSchema from 'example/fixture/pontFixture.json'
import {
  translate,
  gatherNonEnglishWords,
  translateEngines,
  generateTranslationMap,
  updateSchema,
} from 'src/tool/translate'
import { cleanRefInSchema } from 'src/tool/initializeSchema'
import { JSONSchema } from 'src/interface'

describe.skip('translate by engines', () => {
  it('translate by baidu', async () => {
    expect(await translate('输出结果', 'baidu')).toBe('OutputResult')
  }, 5000)

  it('translate by youdao', async () => {
    expect(await translate('输出结果', 'youdao')).toBe('TheOutput')
  }, 5000)

  it('translate by google', async () => {
    expect(await translate('输出结果', 'google')).toBe('OutputResult')
  }, 5000)
})

it('gather cn words', () => {
  const schema = cloneDeep(pontSchema) as JSONSchema
  cleanRefInSchema(schema)
  expect(gatherNonEnglishWords(schema)).toEqual([
    '通用请求参数«查询参数»',
    '输出参数vo',
    'abc输出参数',
    ' 中英文 混合 带 空格 Vo ',
    '查询参数',
    '通用请求参数token«输出参数vo»',
    'DataTransOutput«输出参数vo»',
  ])
})

describe('mock baidu translate', () => {
  let originBaiduEngine = translateEngines.baidu
  beforeAll(() => {
    originBaiduEngine = translateEngines.baidu
    // mock translate
    ;(translateEngines as any).baidu = {
      translate: () => {
        return Promise.resolve({ result: ['system development'] })
      },
    }
  })
  afterAll(() => {
    translateEngines.baidu = originBaiduEngine
  })

  it('generate translate map', async () => {
    const words = ['系统开发']
    const map = await generateTranslationMap(words, 'baidu')
    expect(map).toEqual({
      系统开发: 'SystemDevelopment',
    })
  })

  it('update schema', async () => {
    const schema = cloneDeep(pontSchema) as JSONSchema
    // console.log(Object.keys(schema.definitions!))
    cleanRefInSchema(schema)
    const wordsMap = {
      '通用请求参数«查询参数»': 'GeneralRequestParameter',
      输出参数vo: 'OutputParameterVo',
      abc输出参数: 'AbcOutputParameter',
      ' 中英文 混合 带 空格 Vo ': 'ChineseEnglishMixinSpaceVo',
      查询参数: 'QueryParameter',
      '通用请求参数token«输出参数vo»': 'GeneralRequestTokenVo',
      'DataTransOutput«输出参数vo»': 'DataTransOutputOutputParameterVo',
    }
    updateSchema(schema, wordsMap)
    // console.log(Object.keys(schema.definitions!))
    expect(schema).toMatchSnapshot()
  })
})
