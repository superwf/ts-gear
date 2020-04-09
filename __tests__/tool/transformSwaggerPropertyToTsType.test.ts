import { transformSwaggerPropertyToTsType as transform } from '../../src/tool/transformSwaggerPropertyToTsType'

describe('transformSwaggerPropertyToTsType', () => {
  it('number int32', () => {
    expect(
      transform({
        type: 'integer',
        format: 'int32',
      }),
    ).toBe('number')
  })

  it('number int64', () => {
    expect(
      transform({
        type: 'integer',
        format: 'int64',
      }),
    ).toBe('number')
  })

  it('string', () => {
    expect(
      transform({
        type: 'string',
      }),
    ).toBe('string')
  })

  it('boolean', () => {
    expect(
      transform({
        type: 'boolean',
      }),
    ).toBe('boolean')
  })

  it('enum', () => {
    expect(
      transform({
        type: 'string',
        enum: [1, 2, 3],
      }),
    ).toBe("'1' | '2' | '3'")
  })

  describe('unregular type', () => {
    it('only project, no property', () => {
      expect(
        transform({
          type: 'object',
          title: 'BodyBuilder',
        }),
      ).toBe('any')
    })
  })
})
