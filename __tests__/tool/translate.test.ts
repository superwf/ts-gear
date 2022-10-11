import { baidu } from 'src/translation'
import { translate } from 'src/tool/translate'

// type Translate = typeof baidu.translate

describe('translate by engines', () => {
  // jest.mock('src/translation', () => ({
  //   baidu: {
  //     translate: (_args: any) =>
  //       Promise.resolve({
  //         result: ['Output result « query parameters »'],
  //       }) as ReturnType<Translate>,
  //   },
  //   google: {
  //     translate: (_args: any) =>
  //       Promise.resolve({
  //         result: ['Output result'],
  //       }) as ReturnType<Translate>,
  //   },
  // }))
  it('translate by baidu', async () => {
    expect(await translate({ text: '输出结果«查询参数»', engine: 'baidu', debug: true, interval: 2000 })).toBe(
      'Output result « query parameter »',
    )
  }, 5000)

  it('translate by google', async () => {
    expect(await translate({ text: '输出结果', engine: 'google', debug: true })).toBe('Output results')
  }, 5000)

  it('catch error', async () => {
    const origin = baidu.translate
    baidu.translate = jest.fn(() => {
      throw new Error('translate error')
    })
    await expect(() => translate({ text: '输出结果«查询参数»', engine: 'baidu' })).rejects.toThrow()
    baidu.translate = origin
  })
})
