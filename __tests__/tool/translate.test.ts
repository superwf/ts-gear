// import { cloneDeep } from 'lodash'

// import pontSchema from 'example/fixture/pontFixture.json'
import {
  translate,
  // gatherNonEnglishWords,
  // translateEngines,
  // generateTranslationMap,
  // updateSchema,
} from 'src/tool/translate'

describe.skip('translate by engines', () => {
  it('translate by baidu', async () => {
    expect(await translate('输出结果«查询参数»', 'baidu')).toBe('Output result « query parameter »')
  }, 5000)

  it('translate by google', async () => {
    expect(await translate('输出结果«查询参数»', 'google')).toBe('Output result «Query parameters»')
  }, 5000)
})

// it('gather cn words', () => {
//   const schema = cloneDeep(pontSchema) as JSONSchema
//   expect(gatherNonEnglishWords(schema)).toEqual([
//     '通用请求参数«查询参数»',
//     '输出参数vo',
//     'abc输出参数',
//     ' 中英文 混合 带 空格 Vo ',
//     '查询参数',
//     '通用请求参数token«输出参数vo»',
//     'DataTransOutput«输出参数vo»',
//   ])
// })

// describe('mock baidu translate', () => {
//   let originBaiduEngine = translateEngines.baidu
//   beforeAll(() => {
//     originBaiduEngine = translateEngines.baidu
//     // mock translate
//     ;(translateEngines as any).baidu = {
//       translate: () => {
//         return Promise.resolve({ result: ['system development'] })
//       },
//     }
//   })
//   afterAll(() => {
//     translateEngines.baidu = originBaiduEngine
//   })

//   it('generate translate map', async () => {
//     const words = ['系统开发']
//     const map = await generateTranslationMap(words, 'baidu')
//     expect(map).toEqual({
//       系统开发: 'system development',
//     })
//   })

//   it('update schema', async () => {
//     const schema = cloneDeep(pontSchema) as JSONSchema
//     // console.log(Object.keys(schema.definitions!))
//     const wordsMap = {
//       '通用请求参数«查询参数»': 'general request«query parameter»',
//       输出参数vo: 'output parameter vo',
//       abc输出参数: 'abc output parameter',
//       ' 中英文 混合 带 空格 Vo ': 'chinese english mixin space Vo',
//       查询参数: 'query parameter',
//       '通用请求参数token«输出参数vo»': 'general request «TokenVo»',
//       'DataTransOutput«输出参数vo»': 'DataTransOutput «OutputParameterVo»',
//     }
//     updateSchema(schema, wordsMap)
//     // console.log(schema)
//     expect(schema).toMatchSnapshot()
//   })
// })
