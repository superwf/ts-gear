import { baidu } from 'src/translation'
import { translate } from 'src/tool/translate'

type Translate = typeof baidu.translate

jest.mock('src/translation', () => {
  return {
    baidu: {
      translate: (_args: any) => {
        return Promise.resolve({
          result: ['Output result « query parameter »'],
        }) as ReturnType<Translate>
      },
    },
    google: {
      translate: (_args: any) => {
        return Promise.resolve({
          result: ['Output result «Query parameters»'],
        }) as ReturnType<Translate>
      },
    },
  }
})

describe('translate by engines', () => {
  it('translate by baidu', async () => {
    expect(await translate({ text: '输出结果«查询参数»', engine: 'baidu' })).toBe('Output result « query parameter »')
  }, 5000)

  it('translate by google', async () => {
    expect(await translate({ text: '输出结果«查询参数»', engine: 'google' })).toBe('Output result «Query parameters»')
  }, 5000)

  it('catch error', async () => {
    const origin = baidu.translate
    baidu.translate = jest.fn(() => {
      throw new Error('translate error')
    })
    await expect(translate({ text: '输出结果«查询参数»', engine: 'baidu' })).rejects.toThrow(
      'original error: translate error',
    )
    baidu.translate = origin
  })
})
