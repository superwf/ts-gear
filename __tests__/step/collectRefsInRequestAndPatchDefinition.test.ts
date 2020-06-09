import { cloneDeep } from 'lodash'
import { Spec } from 'swagger-schema-official'

import * as step from 'src/step'
import { IProject } from 'src/interface'
import { getGlobal, restore } from 'src/projectGlobalVariable'

describe('collectRefsInRequestAndPatchDefinition', () => {
  const spec = {
    swagger: '2.0',
    info: {
      description: '',
      version: '1.0',
      title: '接口文档',
      termsOfService: 'http://localhost',
      contact: { name: '管理平台', url: 'http://localhost', email: '67890211@qq.com' },
      license: { name: 'license', url: 'http://localhost' },
    },
    host: 'http://localhost',
    basePath: '/',
    tags: [{ name: 'credit-query-controller', description: 'Credit Query Controller' }],
    paths: {
      '/api/core/asset/credit/query/pastCreditCardBillGather': {
        post: {
          tags: ['credit-query-controller'],
          summary: '往期账单汇总',
          description: '往期账单汇总',
          operationId: 'pastCreditCardBillGatherUsingPOST',
          consumes: ['application/json;charset=UTF-8'],
          produces: ['application/json;charset=UTF-8'],
          parameters: [
            {
              in: 'body',
              name: 'body',
              description: 'requestParamVo',
              required: true,
              schema: { $ref: 'GeneralRequestParameterQueryParameter' },
            },
          ],
          responses: {
            '200': { description: 'OK', schema: { $ref: 'DataTransOutput' } },
            '201': { description: 'Created' },
            '401': { description: 'Unauthorized' },
            '403': { description: 'Forbidden' },
            '404': { description: 'Not Found' },
          },
        },
      },
      '/zzjy/all-msg/getAllMsgForMap': {
        post: {
          tags: ['credit-query-controller'],
          summary: '站址经营-汇总首页',
          operationId: 'getAllMsgForMapUsingPOST',
          consumes: ['application/json'],
          produces: ['*/*'],
          parameters: [
            { name: 'accountTime', in: 'query', description: 'accountTime', required: true, type: 'string' },
            { name: 'type', in: 'query', description: 'type', required: true, type: 'string' },
          ],
          responses: {
            '200': { description: 'OK', schema: { $ref: 'ResultListMap' } },
            '201': { description: 'Created' },
            '401': { description: 'Unauthorized' },
            '403': { description: 'Forbidden' },
            '404': { description: 'Not Found' },
          },
        },
      },
    },
    definitions: {
      DataTransOutput: {
        type: 'object',
        required: ['transCode', 'transMessage', 'transMessageDetail'],
        properties: {
          data: { type: 'object', description: '返回数据' },
          transCode: {
            type: 'integer',
            format: 'int32',
            description: '错误码。\n100000 成功\n200000 入参不合法\n400000 权限不足\n500000 服务失败',
          },
          transMessage: { type: 'string', description: '错误信息。成功：“成功” 失败：“失败对应的msg”' },
          transMessageDetail: { type: 'string', description: '信息详情”' },
        },
        description: '带数据的返回数据',
      },
      ResultListMap: {
        type: 'object',
        properties: {
          description: { type: 'string' },
          result: { type: 'array', items: { $ref: 'Map' } },
          returnCode: { type: 'integer', format: 'int32' },
        },
      },
      OutputParameterVo: {
        type: 'object',
        required: ['dueDay', 'requestChannel'],
        properties: {
          dueDay: { type: 'string', description: '开卡日' },
          requestChannel: { type: 'string', description: '进件渠道' },
        },
      },
      ABCOutputParameters: {
        type: 'object',
        required: ['dueDay', 'requestChannel'],
        properties: {
          dueDay: { type: 'string', description: '开卡日' },
          requestChannel: { type: 'string', description: '进件渠道' },
        },
      },
      MixedChineseAndEnglishWithSpacesVo: {
        type: 'object',
        required: ['dueDay', 'requestChannel'],
        properties: {
          dueDay: { type: 'string', description: '开卡日' },
          requestChannel: { type: 'string', description: '进件渠道' },
        },
      },
      QueryParameters: {
        type: 'object',
        required: ['dueDay', 'requestChannel'],
        properties: {
          dueDay: { type: 'string', description: '开卡日' },
          requestChannel: { type: 'string', description: '进件渠道' },
          data: { type: 'object', additionalProperties: { type: 'array', $ref: 'DataTransOutput' } },
        },
      },
      GeneralRequestParameterTokenOutputParameterVO: {
        type: 'object',
        properties: { bizParamVo: { $ref: 'OutputParameterVo' } },
      },
      DatatransoutputOutputParameterVO: {
        type: 'object',
        required: ['transCode', 'transMessage', 'transMessageDetail'],
        properties: {
          data: { description: '返回数据', $ref: 'OutputParameterVo' },
          transCode: {
            type: 'integer',
            format: 'int32',
            description: '错误码。\n100000 成功\n200000 入参不合法\n400000 权限不足\n500000 服务失败',
          },
          transMessage: { type: 'string', description: '错误信息。成功：“成功” 失败：“失败对应的msg”' },
          transMessageDetail: { type: 'string', description: '信息详情”' },
        },
        description: '带数据的返回数据',
      },
    },
  } as Spec
  it('without generic type', () => {
    const project: IProject = {
      name: 'projectPont',
      source: 'fixture/pontFixture.json',
      dest: './service',
      keepGeneric: false,
      requester: () => Promise.resolve({}),
    }
    step.assembleSchemaToGlobal(cloneDeep(spec), project)
    step.collectRefsInRequestAndPatchDefinition(project)
    const { definitionMap } = getGlobal(project)
    expect('Map' in definitionMap).toBe(true)

    restore(project)
  })

  it('with generic type', () => {
    const project: IProject = {
      name: 'projectPont',
      source: 'fixture/pontFixture.json',
      dest: './service',
      keepGeneric: true,
      requester: () => Promise.resolve({}),
    }
    step.assembleSchemaToGlobal(cloneDeep(spec), project)
    step.parseGenericType(project)
    step.collectRefsInRequestAndPatchDefinition(project)
    const { definitionMap } = getGlobal(project)
    expect('Map' in definitionMap).toBe(true)
  })
})
