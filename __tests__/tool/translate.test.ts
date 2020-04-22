import { baidu } from 'translation.js'

import { translate } from 'src/tool/translate'

type Translate = typeof baidu.translate

jest.mock('translation.js', () => {
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
    expect(await translate('输出结果«查询参数»', 'baidu')).toBe('Output result « query parameter »')
  }, 5000)

  it('translate by google', async () => {
    expect(await translate('输出结果«查询参数»', 'google')).toBe('Output result «Query parameters»')
  }, 5000)

  it('catch error', done => {
    baidu.translate = jest.fn(() => {
      throw new Error('translate error')
    })
    translate('输出结果«查询参数»', 'baidu').catch(e => {
      expect(e.message).toContain('original error: translate error')
      done()
    })
  })
})
