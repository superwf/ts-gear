import { generateDefinitionContent } from 'src/tool/generateDefinitionContent'
import { JSONSchema } from 'src/interface'

describe('src/tool/generateDefinitionContent', () => {
  it('generate definition class', () => {
    const apiResponse = {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        type: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
    }
    const res = generateDefinitionContent(apiResponse as JSONSchema, 'ApiResponse')
    expect(res).toMatchSnapshot()
  })

  it('generic type', () => {
    const apiResponse = {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
          format: 'int32',
        },
        type: {
          type: 'string',
        },
        entities: {
          type: 'array',
          description: '数据列表',
          items: {
            $ref: '#/definitions/DataVO',
          },
        },
        message: {
          type: 'string',
        },
      },
    }
    const res = generateDefinitionContent(apiResponse as JSONSchema, 'ApiResponse<DataVO>')
    expect(res).toMatchSnapshot()
  })
})
