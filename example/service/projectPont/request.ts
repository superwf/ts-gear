/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import projects from '../../ts-gear'

import { PropertyOf, GeneralRequestParameterQueryParameter, DataTransOutput, ResultListMap } from './definition'

const project = projects.find(p => p.name === 'projectPont')!
const { requester } = project
/** request parameter type for postApiCoreAssetCreditQueryPastCreditCardBillGather */
export interface IPostApiCoreAssetCreditQueryPastCreditCardBillGatherOption {
  /** requestParamVo */
  body: GeneralRequestParameterQueryParameter
}

export interface IPostApiCoreAssetCreditQueryPastCreditCardBillGatherResponse {
  /** OK */
  200: DataTransOutput
  /** Created */
  201: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

export type IPostApiCoreAssetCreditQueryPastCreditCardBillGatherResponseSuccess = PropertyOf<
  IPostApiCoreAssetCreditQueryPastCreditCardBillGatherResponse,
  200
>
/**
 * 往期账单汇总
 * 往期账单汇总
 * tags: credit-query-controller
 * produces: application／json;charset=UTF-8
 * consumes: application／json;charset=UTF-8
 */
export function postApiCoreAssetCreditQueryPastCreditCardBillGather(
  option: IPostApiCoreAssetCreditQueryPastCreditCardBillGatherOption,
): Promise<IPostApiCoreAssetCreditQueryPastCreditCardBillGatherResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({
      data: {},
      transCode: 0,
      transMessage: 'string',
      transMessageDetail: 'string',
    } as any)
  }
  return requester('/api/core/asset/credit/query/pastCreditCardBillGather', {
    method: 'post',
    ...option,
  }) as Promise<any>
}

/** request parameter type for postZzjyAllMsgGetAllMsgForMap */
export interface IPostZzjyAllMsgGetAllMsgForMapOption {
  /** accountTime */
  query: {
    /**
        accountTime */
    accountTime: string
    /**
        type */
    type: string
  }
}

export interface IPostZzjyAllMsgGetAllMsgForMapResponse {
  /** OK */
  200: ResultListMap
  /** Created */
  201: any
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

export type IPostZzjyAllMsgGetAllMsgForMapResponseSuccess = PropertyOf<IPostZzjyAllMsgGetAllMsgForMapResponse, 200>
/**
 * 站址经营-汇总首页
 * tags: credit-query-controller
 * produces: *／*
 * consumes: application／json
 */
export function postZzjyAllMsgGetAllMsgForMap(
  option: IPostZzjyAllMsgGetAllMsgForMapOption,
): Promise<IPostZzjyAllMsgGetAllMsgForMapResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({ description: 'string' } as any)
  }
  return requester('/zzjy/all-msg/getAllMsgForMap', {
    method: 'post',
    ...option,
  }) as Promise<any>
}
