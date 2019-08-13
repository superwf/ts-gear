import { interceptRequest, interceptResponse } from './interceptor'
import {
  GeneralRequestParameterQueryParameter,
  DataTransOutput,
  ResultListMap1,
} from './definitions'

interface IPostApiCoreAssetCreditQueryPastCreditCardBillGatherParam {
  body: GeneralRequestParameterQueryParameter
}

/**
 * 往期账单汇总
 * 往期账单汇总
 */
export function postApiCoreAssetCreditQueryPastCreditCardBillGather(
  param: IPostApiCoreAssetCreditQueryPastCreditCardBillGatherParam,
) {
  const [url, option] = interceptRequest(
    '/api/core/asset/credit/query/pastCreditCardBillGather',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<DataTransOutput>(interceptResponse)
}

interface IPostZzjyAllMsgGetAllMsgForMapParam {
  query: {
    accountTime: string
    type: string
  }
}

/**
 * 站址经营-汇总首页
 */
export function postZzjyAllMsgGetAllMsgForMap(
  param: IPostZzjyAllMsgGetAllMsgForMapParam,
) {
  const [url, option] = interceptRequest('/zzjy/all-msg/getAllMsgForMap', param)
  option.method = 'post'
  return fetch(url, option).then<ResultListMap1>(interceptResponse)
}
