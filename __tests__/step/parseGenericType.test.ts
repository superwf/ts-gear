import { Spec } from 'swagger-schema-official'

import { checkAndUpdateDefinitionTypeName, checkAndUpdateRequestRef } from 'src/step/parseGenericType'
import * as step from 'src/step'
import { getGlobal, restore } from 'src/global'
// import { IDefinitionMap } from 'src/interface'

const spec = {
  info: { contact: {}, license: { name: '' }, title: '', version: '' },
  swagger: '2.0',
  paths: {
    '/api/req': {
      post: {
        parameters: [
          {
            in: 'body',
            name: 'qo',
            schema: {
              $ref: 'ReplyVO<BatchOperateQO<Other>>',
            },
          },
        ],
        responses: {
          '200': {
            description: 'OK',
            schema: {
              $ref: 'ReplyVO<List<User>>',
            },
          },
        },
      },
    },
  },
  definitions: {
    'ReplyVO<List<User>>': {
      type: 'object',
      properties: {
        code: {
          type: 'string',
        },
        data: {
          $ref: 'List<User>',
        },
        message: {
          type: 'string',
          example: 'success',
        },
      },
    },
    'ReplyRole<List<Role>>': {
      type: 'object',
      properties: {
        code: {
          type: 'string',
        },
        data: {
          $ref: 'L<Role>',
        },
        user: {
          $ref: 'ReplyVO<List<User>>',
        },
        other: {
          $ref: 'ReplyVO<Other>',
        },
        message: {
          type: 'string',
          example: 'success',
        },
      },
    },
    'ReplyVO<List<VV>>': {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          description: '返回数据',
          items: {
            $ref: 'VV',
            originalRef: 'VV',
          },
        },
      },
    },
  },
} as Spec

describe('parse definition with generic type', () => {
  const project = {
    name: 'sample',
    dest: './service',
    source: 'fixture/ignore.json',
    keepGeneric: true,
    requester: () => Promise.resolve({}),
  }

  beforeEach(() => {
    step.assembleSchemaToGlobal(spec, project)
  })
  afterEach(() => {
    restore(project)
  })

  it('checkAndUpdateDefinitionTypeName', () => {
    checkAndUpdateDefinitionTypeName(getGlobal(project))
    const { definitionMap, requestMap } = getGlobal(project)
    // console.log(JSON.stringify(definitionMap, null, 2))
    expect(definitionMap.LRole).toEqual({
      typeName: 'LRole',
      typescriptContent: 'export type LRole = any',
    })

    expect(definitionMap.ReplyVO).toEqual({
      typeName: 'ReplyVO',
      schema: spec.definitions!['ReplyVO<List<User>>'],
      typeParameters: ['ListUser'],
    })

    checkAndUpdateRequestRef(getGlobal(project))

    console.log(JSON.stringify(definitionMap, null, 2))
    console.log(JSON.stringify(requestMap, null, 2))
  })
})
