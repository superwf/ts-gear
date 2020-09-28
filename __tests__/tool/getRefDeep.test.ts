import { getRefDeep } from '../../src/tool/getRefDeep'

describe('getRefDeep', () => {
  it('获取$ref', () => {
    expect(
      getRefDeep({
        description: 'OK',
        content: {
          '*/*': {
            schema: {
              $ref: 'ReplyVO',
            },
          },
        },
      }),
    ).toEqual({
      $ref: 'ReplyVO',
    })

    expect(
      getRefDeep({
        description: 'OK',
      }),
    ).toEqual({})
  })
})
