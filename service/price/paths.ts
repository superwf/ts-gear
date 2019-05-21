import {
  ActivitySkuAddDTO,
  ActivitySkuUpdateDTO,
  DeptFollowRuleAddUpdateDTO,
  ManualAdjustPriceAddDTO,
  PoolIsAutoPubUpdateDTO,
  ReplyVO,
  ReplyVOActivitySkuShowVO,
  ReplyVOAuditFlowDeptFollowRuleDetailVO,
  ReplyVODeptFollowRuleEditVO,
  ReplyVOint,
  ReplyVOListOpponentVO,
  ReplyVOListPubPriceErrorVO,
  ReplyVOPageVOActivitySkuListVO,
  ReplyVOPageVOAuditFlowListVO,
  ReplyVOPageVOBlackListVO,
  ReplyVOPageVODeptFollowRuleListVO,
  ReplyVOPageVOFollowPoolListVO,
  ReplyVOPageVOUserInputDataListVO,
  ReplyVOPromotionListVO,
  ReplyVOUserInputDataEditVO,
  UserInputDataAddUpdateDTO,
} from './definitions'
import { interceptRequest, interceptResponse } from './fetchInterceptor'

interface IGetApiPricingActivitySkuParam {
  query?: {
    createdTimeSortSign?: number
    endIndex?: number
    operatedTimeSortSign?: number
    pageNo?: number
    pageSize?: number
    startIndex?: number
  }
}

type IGetApiPricingActivitySkuResponse = ReplyVOPageVOActivitySkuListVO
export function getApiPricingActivitySku(
  param: IGetApiPricingActivitySkuParam,
) {
  const [url, option] = interceptRequest('/api/pricing/activitySku', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingActivitySkuResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingActivitySkuParam {
  body?: {
    activitySkuAddDTO?: ActivitySkuAddDTO
  }
}

type IPostApiPricingActivitySkuResponse = ReplyVOActivitySkuShowVO
export function postApiPricingActivitySku(
  param: IPostApiPricingActivitySkuParam,
) {
  const [url, option] = interceptRequest('/api/pricing/activitySku', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingActivitySkuResponse>(
    interceptResponse,
  )
}

interface IPutApiPricingActivitySkuParam {
  body?: {
    activitySkuUpdateDTO?: ActivitySkuUpdateDTO
  }
}

type IPutApiPricingActivitySkuResponse = ReplyVOActivitySkuShowVO
export function putApiPricingActivitySku(
  param: IPutApiPricingActivitySkuParam,
) {
  const [url, option] = interceptRequest('/api/pricing/activitySku', param)
  option.method = 'put'
  return fetch(url, option).then<IPutApiPricingActivitySkuResponse>(
    interceptResponse,
  )
}

interface IDeleteApiPricingActivitySkuParam {
  body?: {
    id?: number
  }
}

type IDeleteApiPricingActivitySkuResponse = ReplyVOint
export function deleteApiPricingActivitySku(
  param: IDeleteApiPricingActivitySkuParam,
) {
  const [url, option] = interceptRequest('/api/pricing/activitySku', param)
  option.method = 'delete'
  return fetch(url, option).then<IDeleteApiPricingActivitySkuResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingActivitySkuIdParam {
  path?: {
    id?: number
  }
}

type IGetApiPricingActivitySkuIdResponse = ReplyVOActivitySkuShowVO
export function getApiPricingActivitySkuId(
  param: IGetApiPricingActivitySkuIdParam,
) {
  const [url, option] = interceptRequest('/api/pricing/activitySku/{id}', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingActivitySkuIdResponse>(
    interceptResponse,
  )
}

interface IDeleteApiPricingActivitySkuIdParam {
  path?: {
    id?: number
  }
}

type IDeleteApiPricingActivitySkuIdResponse = ReplyVOint
export function deleteApiPricingActivitySkuId(
  param: IDeleteApiPricingActivitySkuIdParam,
) {
  const [url, option] = interceptRequest('/api/pricing/activitySku/{id}', param)
  option.method = 'delete'
  return fetch(url, option).then<IDeleteApiPricingActivitySkuIdResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingAuditFlowParam {
  query?: {
    auditStatusList?: number[]
    createrList?: string[]
  }
}

type IGetApiPricingAuditFlowResponse = ReplyVOPageVOAuditFlowListVO
export function getApiPricingAuditFlow(param: IGetApiPricingAuditFlowParam) {
  const [url, option] = interceptRequest('/api/pricing/auditFlow', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingAuditFlowResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingAuditFlowApprovalParam {
  body?: {
    ids?: number
  }
}

type IPostApiPricingAuditFlowApprovalResponse = ReplyVO
export function postApiPricingAuditFlowApproval(
  param: IPostApiPricingAuditFlowApprovalParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/auditFlow/approval',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingAuditFlowApprovalResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingAuditFlowRejectParam {
  body?: {
    ids?: number
  }
}

type IPostApiPricingAuditFlowRejectResponse = ReplyVO
export function postApiPricingAuditFlowReject(
  param: IPostApiPricingAuditFlowRejectParam,
) {
  const [url, option] = interceptRequest('/api/pricing/auditFlow/reject', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingAuditFlowRejectResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingAuditFlowType1IdParam {
  path?: {
    id?: number
  }
}

type IGetApiPricingAuditFlowType1IdResponse = ReplyVOAuditFlowDeptFollowRuleDetailVO
export function getApiPricingAuditFlowType1Id(
  param: IGetApiPricingAuditFlowType1IdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/auditFlow/type1/{id}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingAuditFlowType1IdResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingBlackListParam {
  query: {
    brandId?: number
    cid?: number
    deptId3: string
    endIndex?: number
    level?: number
    pageNo?: number
    pageSize?: number
    skuList?: number[]
    startIndex?: number
  }
}

type IGetApiPricingBlackListResponse = ReplyVOPageVOBlackListVO
export function getApiPricingBlackList(param: IGetApiPricingBlackListParam) {
  const [url, option] = interceptRequest('/api/pricing/blackList', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingBlackListResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingBlackListAddParam {
  body?: {
    skuIds?: number
  }
}

type IPostApiPricingBlackListAddResponse = ReplyVO
export function postApiPricingBlackListAdd(
  param: IPostApiPricingBlackListAddParam,
) {
  const [url, option] = interceptRequest('/api/pricing/blackList/add', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingBlackListAddResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingBlackListRemoveParam {
  body?: {
    skuIds?: number
  }
}

type IPostApiPricingBlackListRemoveResponse = ReplyVO
export function postApiPricingBlackListRemove(
  param: IPostApiPricingBlackListRemoveParam,
) {
  const [url, option] = interceptRequest('/api/pricing/blackList/remove', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingBlackListRemoveResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingDeptFollowRuleParam {
  query: {
    auditStatus?: number
    cid?: number
    deptId3: string
    endIndex?: number
    level?: number
    pageNo?: number
    pageSize?: number
    startIndex?: number
  }
}

type IGetApiPricingDeptFollowRuleResponse = ReplyVOPageVODeptFollowRuleListVO
export function getApiPricingDeptFollowRule(
  param: IGetApiPricingDeptFollowRuleParam,
) {
  const [url, option] = interceptRequest('/api/pricing/deptFollowRule', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingDeptFollowRuleResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingDeptFollowRuleParam {
  body?: {
    deptFollowRuleAddUpdateDTO?: DeptFollowRuleAddUpdateDTO
  }
}

type IPostApiPricingDeptFollowRuleResponse = ReplyVO
export function postApiPricingDeptFollowRule(
  param: IPostApiPricingDeptFollowRuleParam,
) {
  const [url, option] = interceptRequest('/api/pricing/deptFollowRule', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingDeptFollowRuleResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingDeptFollowRuleSubmitParam {
  body?: {
    deptFollowRuleAddUpdateDTO?: DeptFollowRuleAddUpdateDTO
  }
}

type IPostApiPricingDeptFollowRuleSubmitResponse = ReplyVO
export function postApiPricingDeptFollowRuleSubmit(
  param: IPostApiPricingDeptFollowRuleSubmitParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/submit',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingDeptFollowRuleSubmitResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingDeptFollowRuleValidRuleHeaderIdParam {
  path?: {
    headerId?: number
  }
}

type IGetApiPricingDeptFollowRuleValidRuleHeaderIdResponse = ReplyVODeptFollowRuleEditVO
export function getApiPricingDeptFollowRuleValidRuleHeaderId(
  param: IGetApiPricingDeptFollowRuleValidRuleHeaderIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/validRule/{headerId}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<
    IGetApiPricingDeptFollowRuleValidRuleHeaderIdResponse
  >(interceptResponse)
}

interface IGetApiPricingDeptFollowRuleHeaderIdParam {
  path?: {
    headerId?: number
  }
}

type IGetApiPricingDeptFollowRuleHeaderIdResponse = ReplyVODeptFollowRuleEditVO
export function getApiPricingDeptFollowRuleHeaderId(
  param: IGetApiPricingDeptFollowRuleHeaderIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/{headerId}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingDeptFollowRuleHeaderIdResponse>(
    interceptResponse,
  )
}

interface IDeleteApiPricingDeptFollowRuleHeaderIdParam {
  path?: {
    headerId?: number
  }
}

type IDeleteApiPricingDeptFollowRuleHeaderIdResponse = ReplyVO
export function deleteApiPricingDeptFollowRuleHeaderId(
  param: IDeleteApiPricingDeptFollowRuleHeaderIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/{headerId}',
    param,
  )
  option.method = 'delete'
  return fetch(url, option).then<
    IDeleteApiPricingDeptFollowRuleHeaderIdResponse
  >(interceptResponse)
}

interface IGetApiPricingFollowPoolParam {
  query: {
    bandMode?: number
    bandType?: string
    brandId?: number
    cid?: number
    deptId3: string
    endIndex?: number
    fixedBand?: string
    floorBand?: number
    level?: number
    pageNo?: number
    pageSize?: number
    skuFilterType?: string
    skuList?: number[]
    startIndex?: number
    upperBand?: number
  }
}

type IGetApiPricingFollowPoolResponse = ReplyVOPageVOFollowPoolListVO
export function getApiPricingFollowPool(param: IGetApiPricingFollowPoolParam) {
  const [url, option] = interceptRequest('/api/pricing/followPool', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingFollowPoolResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingFollowPoolAddParam {
  body?: {
    skuIds?: number
  }
}

type IPostApiPricingFollowPoolAddResponse = ReplyVO
export function postApiPricingFollowPoolAdd(
  param: IPostApiPricingFollowPoolAddParam,
) {
  const [url, option] = interceptRequest('/api/pricing/followPool/add', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingFollowPoolAddResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingFollowPoolExportParam {
  query: {
    bandMode?: number
    bandType?: string
    brandId?: number
    cid?: number
    deptId3: string
    endIndex?: number
    fixedBand?: string
    floorBand?: number
    level?: number
    pageNo?: number
    pageSize?: number
    skuFilterType?: string
    skuList?: number[]
    startIndex?: number
    upperBand?: number
  }
}

type IGetApiPricingFollowPoolExportResponse = ReplyVO
export function getApiPricingFollowPoolExport(
  param: IGetApiPricingFollowPoolExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/followPool/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingFollowPoolExportResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingFollowPoolIsAutoPubParam {
  body?: {
    poolIsAutoPubUpdateDTO?: PoolIsAutoPubUpdateDTO
  }
}

type IPostApiPricingFollowPoolIsAutoPubResponse = ReplyVO
export function postApiPricingFollowPoolIsAutoPub(
  param: IPostApiPricingFollowPoolIsAutoPubParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/followPool/isAutoPub',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingFollowPoolIsAutoPubResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingFollowPoolRemoveParam {
  body?: {
    skuIds?: number
  }
}

type IPostApiPricingFollowPoolRemoveResponse = ReplyVO
export function postApiPricingFollowPoolRemove(
  param: IPostApiPricingFollowPoolRemoveParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/followPool/remove',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingFollowPoolRemoveResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingManualAdjustPriceParam {
  body?: {
    manualAdjustPriceAddDTO?: ManualAdjustPriceAddDTO
  }
}

type IPostApiPricingManualAdjustPriceResponse = ReplyVO
export function postApiPricingManualAdjustPrice(
  param: IPostApiPricingManualAdjustPriceParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/manualAdjustPrice',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingManualAdjustPriceResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingManualPublishPricePubParam {
  body?: {
    prIds?: number[]
  }
}

type IPostApiPricingManualPublishPricePubResponse = ReplyVOListPubPriceErrorVO
export function postApiPricingManualPublishPricePub(
  param: IPostApiPricingManualPublishPricePubParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/manualPublishPrice/pub',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingManualPublishPricePubResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingManualPublishPriceRejectParam {
  body?: {
    prIds?: number[]
  }
}

type IPostApiPricingManualPublishPriceRejectResponse = ReplyVO
export function postApiPricingManualPublishPriceReject(
  param: IPostApiPricingManualPublishPriceRejectParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/manualPublishPrice/reject',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<
    IPostApiPricingManualPublishPriceRejectResponse
  >(interceptResponse)
}

interface IGetApiPricingOpponentParam {
  query?: {
    cidList?: number[]
    level?: number
  }
}

type IGetApiPricingOpponentResponse = ReplyVOListOpponentVO
export function getApiPricingOpponent(param: IGetApiPricingOpponentParam) {
  const [url, option] = interceptRequest('/api/pricing/opponent', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingOpponentResponse>(
    interceptResponse,
  )
}

interface IDeleteApiPricingPromotionParam {
  body?: {
    promoIds?: number[]
  }
}

type IDeleteApiPricingPromotionResponse = ReplyVO
export function deleteApiPricingPromotion(
  param: IDeleteApiPricingPromotionParam,
) {
  const [url, option] = interceptRequest('/api/pricing/promotion', param)
  option.method = 'delete'
  return fetch(url, option).then<IDeleteApiPricingPromotionResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingPromotionSkuIdParam {
  path?: {
    skuId?: number
  }
}

type IGetApiPricingPromotionSkuIdResponse = ReplyVOPromotionListVO
export function getApiPricingPromotionSkuId(
  param: IGetApiPricingPromotionSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/promotion/{skuId}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingPromotionSkuIdResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingUserInputDataParam {
  query: {
    brandId?: number
    cid?: number
    deptId3: string
    endIndex?: number
    level?: number
    pageNo?: number
    pageSize?: number
    skuList?: number[]
    startIndex?: number
  }
}

type IGetApiPricingUserInputDataResponse = ReplyVOPageVOUserInputDataListVO
export function getApiPricingUserInputData(
  param: IGetApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingUserInputDataResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingUserInputDataParam {
  body?: {
    userInputDataAddUpdateDTO?: UserInputDataAddUpdateDTO
  }
}

type IPostApiPricingUserInputDataResponse = ReplyVO
export function postApiPricingUserInputData(
  param: IPostApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingUserInputDataResponse>(
    interceptResponse,
  )
}

interface IDeleteApiPricingUserInputDataParam {
  body?: {
    id?: number
  }
}

type IDeleteApiPricingUserInputDataResponse = ReplyVOint
export function deleteApiPricingUserInputData(
  param: IDeleteApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  option.method = 'delete'
  return fetch(url, option).then<IDeleteApiPricingUserInputDataResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingUserInputDataExportParam {
  query: {
    brandId?: number
    cid?: number
    deptId3: string
    endIndex?: number
    level?: number
    pageNo?: number
    pageSize?: number
    skuList?: number[]
    startIndex?: number
  }
}

type IGetApiPricingUserInputDataExportResponse = ReplyVO
export function getApiPricingUserInputDataExport(
  param: IGetApiPricingUserInputDataExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/userInputData/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingUserInputDataExportResponse>(
    interceptResponse,
  )
}

interface IPostApiPricingUserInputDataUploadParam {
  formData: {
    file: File
  }
}

type IPostApiPricingUserInputDataUploadResponse = ReplyVO
export function postApiPricingUserInputDataUpload(
  param: IPostApiPricingUserInputDataUploadParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/userInputData/upload',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiPricingUserInputDataUploadResponse>(
    interceptResponse,
  )
}

interface IGetApiPricingUserInputDataIdParam {
  path?: {
    id?: number
  }
}

type IGetApiPricingUserInputDataIdResponse = ReplyVOUserInputDataEditVO
export function getApiPricingUserInputDataId(
  param: IGetApiPricingUserInputDataIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/userInputData/{id}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiPricingUserInputDataIdResponse>(
    interceptResponse,
  )
}
