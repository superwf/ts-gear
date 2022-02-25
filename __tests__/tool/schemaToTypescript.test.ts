import { config } from 'src/constant'
import { schemaToTypescript as transform } from 'src/tool/schemaToTypescript'
import type { Project } from 'src/type'

const { EOL } = config

const project: Project = { name: 'testProject', dest: 'service', source: 'pet.json', importRequesterStatement: '' }

describe('transformSwaggerPropertyToTsType', () => {
  it('number int32', () => {
    expect(
      transform(
        {
          type: 'integer',
          format: 'int32',
        },
        project,
      ),
    ).toBe('number')
  })

  it('number int64', () => {
    expect(
      transform(
        {
          type: 'integer',
          format: 'int64',
        },
        project,
      ),
    ).toBe('number')
  })

  it('string', () => {
    expect(
      transform(
        {
          type: 'string',
        },
        project,
      ),
    ).toBe('string')
  })

  it('boolean', () => {
    expect(
      transform(
        {
          type: 'boolean',
        },
        project,
      ),
    ).toBe('boolean')
  })

  it('enum', () => {
    expect(
      transform(
        {
          type: 'string',
          enum: 'Abc',
        } as any,
        project,
      ),
    ).toBe('Abc')

    expect(
      transform(
        {
          type: 'string',
          enum: ['A', 'B', 'C'],
        } as any,
        project,
      ),
    ).toBe("'A' | 'B' | 'C'")

    expect(
      transform(
        {
          type: 'number',
          enum: [1, 2, 3],
        },
        project,
      ),
    ).toBe('1 | 2 | 3')
  })

  it('object with unregular property name', () => {
    expect(
      transform(
        {
          type: 'object',
          properties: {
            'X-Tag': {
              type: 'integer',
              format: 'int32',
              example: 1,
              description: '数据资源类型',
            },
          },
        },
        project,
      ),
    ).toBe(`{
/**
@description
  数据资源类型
@format int32
@example
  1 */
'X-Tag'?: number
}`)
  })

  it('allOf', () => {
    expect(
      transform(
        {
          allOf: [
            {
              $ref: 'Date',
            },
            {
              $ref: 'Week',
            },
          ],
        },
        project,
      ),
    ).toBe('Date & Week')
  })

  it('oneOf', () => {
    expect(
      transform(
        {
          oneOf: [
            {
              $ref: 'Date',
            },
            {
              $ref: 'Week',
            },
          ],
        } as any,
        project,
      ),
    ).toBe('Date | Week')
  })

  it('anyOf', () => {
    expect(
      transform(
        {
          anyOf: [
            {
              $ref: 'Date',
            },
            {
              $ref: 'Week',
            },
          ],
        } as any,
        project,
      ),
    ).toBe('Date | Week')
  })

  describe('unregular type', () => {
    it('only project, no property', () => {
      expect(
        transform(
          {
            type: 'object',
          },
          project,
        ),
      ).toBe('any')
    })
  })
  describe('array', () => {
    it('$ref', () => {
      expect(
        transform(
          {
            type: 'array',
          },
          project,
        ),
      ).toBe('Array<any>')
    })
    it('items', () => {
      expect(
        transform(
          {
            type: 'array',
            items: [
              {
                $ref: 'Order',
              },
              {
                $ref: 'Promotion',
              },
            ],
          },
          project,
        ),
      ).toBe('Array<Order | Promotion>')
    })
  })

  describe('additionalProperties', () => {
    it('true', () => {
      expect(
        transform(
          {
            type: 'object',
            additionalProperties: true,
          },
          project,
        ),
      ).toBe(`{${EOL}[propertyName: string]: any${EOL}}`)
    })

    it('string type', () => {
      expect(
        transform(
          {
            type: 'object',
            additionalProperties: {
              type: 'string',
            },
          },
          project,
        ),
      ).toBe(`{${EOL}[propertyName: string]: string${EOL}}`)
    })

    it('$ref type', () => {
      expect(
        transform(
          {
            type: 'object',
            additionalProperties: {
              $ref: 'Sky',
            },
          },
          project,
        ),
      ).toBe(`{${EOL}[propertyName: string]: Sky${EOL}}`)
    })

    it('properties and additionalProperties', () => {
      expect(
        transform(
          {
            type: 'object',
            properties: {
              name: {
                type: 'string',
              },
            },
            additionalProperties: {
              $ref: 'Sky',
            },
          },
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}} & {${EOL}[propertyName: string]: Sky${EOL}}`)
    })
  })

  it('file', () => {
    expect(
      transform(
        {
          type: 'file',
        },
        project,
      ),
    ).toBe('File')
  })

  it('invalid type', () => {
    expect(transform({} as any, project)).toBe('any')
    expect(
      transform(
        {
          type: 'xyz',
        } as any,
        project,
      ),
    ).toBe('any')
  })

  it('not type', () => {
    expect(
      transform(
        {
          type: 'xyz',
          not: 'Pet',
        } as any,
        project,
      ),
    ).toBe('any')

    expect(
      transform(
        {
          nullable: true,
          type: 'xyz',
          not: 'Pet',
        } as any,
        project,
      ),
    ).toBe('any')
  })

  describe('discriminator', () => {
    it('with mapping', () => {
      expect(
        transform(
          {
            type: 'object',
            discriminator: {
              propertyName: 'petType',
              mapping: {
                dog: 'Dog',
                cat: 'Cat',
              },
            },
            properties: {
              name: {
                type: 'string',
              },
              petType: {
                type: 'string',
              },
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}'petType'?: 'dog' | 'cat'${EOL}}`)
    })

    it('allOf', () => {
      expect(
        transform(
          {
            type: 'object',
            allOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'petType'?: 'Dog' & 'Cat'${EOL}}`)
    })

    it('oneOf, anyOf', () => {
      expect(
        transform(
          {
            type: 'object',
            oneOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'petType'?: 'Dog' | 'Cat'${EOL}}`)
      expect(
        transform(
          {
            type: 'object',
            anyOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'petType'?: 'Dog' | 'Cat'${EOL}}`)
    })

    it('with properties', () => {
      expect(
        transform(
          {
            type: 'object',
            anyOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
            required: ['petType'],
            properties: {
              name: {
                type: 'string',
              },
              petType: {
                type: 'string',
              },
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}'petType': 'Dog' | 'Cat'${EOL}}`)
    })

    it('wrong def, no mapping nor allOf, oneOf, anyOf', () => {
      expect(
        transform(
          {
            type: 'object',
            discriminator: {
              propertyName: 'petType',
            },
            required: ['petType'],
            properties: {
              name: {
                type: 'string',
              },
              petType: {
                type: 'string',
              },
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}'petType': string${EOL}}`)
    })
  })

  describe('nullable', () => {
    it('nullable unknown type', () => {
      expect(
        transform(
          {
            type: 'xyz',
            nullable: true,
          } as any,
          project,
        ),
      ).toBe('any')
    })

    it('nullable string', () => {
      expect(
        transform(
          {
            type: 'string',
            nullable: true,
          } as any,
          project,
        ),
      ).toBe('string | null')
    })

    it('nullable object', () => {
      expect(
        transform(
          {
            type: 'object',
            nullable: true,
            properties: {
              name: {
                type: 'string',
              },
            },
            additionalProperties: {
              $ref: 'Sky',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}} & {${EOL}[propertyName: string]: Sky${EOL}} | null`)
    })

    it('nullable object additionalProperties', () => {
      expect(
        transform(
          {
            type: 'object',
            nullable: true,
            properties: {
              name: {
                type: 'string',
              },
            },
            additionalProperties: {
              $ref: 'Sky',
              nullable: true,
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}} & {${EOL}[propertyName: string]: Sky | null${EOL}} | null`)
    })

    it('enum nullable', () => {
      expect(
        transform(
          {
            type: 'string',
            enum: ['A', 'B', 'C'],
            nullable: true,
          } as any,
          project,
        ),
      ).toBe("'A' | 'B' | 'C' | null")
    })

    it('oneOf with nullable', () => {
      expect(
        transform(
          {
            nullable: true,
            oneOf: [
              {
                $ref: 'Date',
              },
              {
                $ref: 'Week',
              },
            ],
          } as any,
          project,
        ),
      ).toBe('Date | Week | null')
    })

    it('anyOf nullable', () => {
      expect(
        transform(
          {
            nullable: true,
            anyOf: [
              {
                $ref: 'Date',
              },
              {
                $ref: 'Week',
              },
            ],
          } as any,
          project,
        ),
      ).toBe('Date | Week | null')
    })

    it('allOf nullable', () => {
      expect(
        transform(
          {
            nullable: true,
            allOf: [
              {
                $ref: 'Date',
              },
              {
                $ref: 'Week',
              },
            ],
          } as any,
          project,
        ),
      ).toBe('(Date & Week) | null')
    })

    it('array $ref nullable', () => {
      expect(
        transform(
          {
            nullable: true,
            type: 'array',
          } as any,
          project,
        ),
      ).toBe('Array<any> | null')
    })

    it('array with items nullable', () => {
      expect(
        transform(
          {
            nullable: true,
            type: 'array',
            items: [
              {
                $ref: 'Order',
              },
              {
                $ref: 'Promotion',
              },
            ],
          } as any,
          project,
        ),
      ).toBe('Array<Order | Promotion> | null')
    })

    it('allOf with discriminator and nullable', () => {
      expect(
        transform(
          {
            nullable: true,
            type: 'object',
            allOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'petType'?: 'Dog' & 'Cat'${EOL}} | null`)
    })
    it('descriminator oneOf, anyOf with nullable', () => {
      expect(
        transform(
          {
            type: 'object',
            nullable: true,
            oneOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'petType'?: 'Dog' | 'Cat'${EOL}} | null`)
      expect(
        transform(
          {
            nullable: true,
            type: 'object',
            anyOf: [
              {
                $ref: 'Dog',
              },
              {
                $ref: 'Cat',
              },
            ],
            discriminator: {
              propertyName: 'petType',
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'petType'?: 'Dog' | 'Cat'${EOL}} | null`)
    })

    it('discriminator but no allOf, oneOf, anyOf and has nullable', () => {
      expect(
        transform(
          {
            type: 'object',
            nullable: true,
            discriminator: {
              propertyName: 'petType',
            },
            required: ['petType'],
            properties: {
              name: {
                type: 'string',
              },
              petType: {
                type: 'string',
              },
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name'?: string${EOL}'petType': string${EOL}} | null`)
    })

    it('project config nullableFalseAsRequired = false', () => {
      const schema: any = {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            nullable: false,
          },
        },
      }
      expect(transform(schema, { ...project, nullableFalseAsRequired: true })).toBe(`{${EOL}'name': string${EOL}}`)
    })

    it('project config without nullableFalseAsRequired, as nullableFalseAsRequired is default true', () => {
      expect(
        transform(
          {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                nullable: false,
              },
            },
          } as any,
          project,
        ),
      ).toBe(`{${EOL}'name': string${EOL}}`)
    })
  })
})
