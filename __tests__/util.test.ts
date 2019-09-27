import { getUniqName, transformPathParameters, translateAsync, traverseSchema, trimDefinitionPrefix } from '../src/util'

describe('util', () => {
  it('trimDefinitionPrefix remove `#/definitions/`', () => {
    expect(trimDefinitionPrefix('#/definitions/abcdef')).toBe('abcdef')
    expect(trimDefinitionPrefix('#/definitions/中文VO')).toBe('中文VO')
    expect(trimDefinitionPrefix('xxx中文VO')).toBe('xxx中文VO')
  })

  it('transformPathParameters', () => {
    expect(transformPathParameters('/api/user/{id}')).toBe('/api/user/:id')
    expect(transformPathParameters('/api/user/{action}/{id}')).toBe('/api/user/:action/:id')

    expect(transformPathParameters('/api/user/{id}/edit/{role}')).toBe('/api/user/:id/edit/:role')
  })

  it('traverseSchema', () => {
    const fn = jest.fn()
    const obj1 = { a: 1 }
    traverseSchema(obj1, fn)
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenLastCalledWith({
      value: 1,
      parent: obj1,
      key: 'a',
      path: ['a'],
    })

    fn.mockReset()
    const obj2 = { a: { b: 2 } }
    traverseSchema(obj2, fn)
    expect(fn).toHaveBeenCalledTimes(2)
    expect(fn).toHaveBeenLastCalledWith({
      value: 2,
      parent: obj2.a,
      key: 'b',
      path: ['a', 'b'],
    })
  })

  it('translateAsync', async () => {
    const cn = '输出参数'
    const word = await translateAsync(cn)
    // expect(word).toBe(cn)
    expect(word).toEqual('OutputParameter')
  })

  describe('getUniqName', () => {
    it('get new name', () => {
      const definitions = {
        AB: true,
      }

      expect(
        getUniqName('AB', key => {
          return Reflect.has(definitions, key)
        }),
      ).toBe('AB1')
    })

    it('get new uniq name', () => {
      const definitions = {
        AB: true,
        AB1: true,
      }

      expect(
        getUniqName('AB', key => {
          return Reflect.has(definitions, key)
        }),
      ).toBe('AB2')
    })

    it('get origin name', () => {
      const definitions = {
        CD: true,
      }

      expect(
        getUniqName('AB', key => {
          return Reflect.has(definitions, key)
        }),
      ).toBe('AB')
    })
  })
})
