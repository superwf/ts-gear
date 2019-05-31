import { interceptRequest, interceptResponse } from './interceptor'
import {
  ReplyVOPageVOAuditFlowListVO,
  AuditFlowDTO,
  ReplyVO,
  ReplyVOAuditFlowDeptFollowRuleDetailVO,
  ReplyVOPageVOBlackListVO,
  BlackListAddDeleteDTO,
  ReplyVOPageVODeptFollowRuleListVO,
  DeptFollowRuleAddUpdateDTO,
  ReplyVODeptFollowRuleViewVO,
  ReplyVODeptFollowRuleEditVO,
  ReplyVOPageVOFollowPoolListVO,
  FollowPoolSkuAddDeleteDTO,
  PoolIsAutoPubUpdateDTO,
  ManualAdjustPriceAddDTO,
  ReplyVOListOpponentVO,
  PromotionDeleteDTO,
  ReplyVOPromotionListVO,
  PublishPricingDTO,
  ReplyVOPageVOUserInputDataListVO,
  UserInputDataAddUpdateDTO,
  UserInputDataDeleteDTO,
  ReplyVOint,
  ReplyVOUserInputDataEditVO,
} from './definitions'

interface IGetApiPricingAuditFlowParam {
  query?: {
    auditStatusList?: Array<number>
    createrList?: Array<string>
    endIndex?: number
    pageNo?: number
    pageSize?: number
    ruleType?: number
    sortSign?: string
    startIndex?: number
  }
}

/**
 * 分页查询【规则审批流】
 */
export function getApiPricingAuditFlow(param: IGetApiPricingAuditFlowParam) {
  const [url, option] = interceptRequest('/api/pricing/auditFlow', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOAuditFlowListVO>(
    interceptResponse,
  )
}

interface IPostApiPricingAuditFlowApprovalParam {
  body: {
    auditFlowDTO: AuditFlowDTO
  }
}

/**
 * 批量审批通过
 */
export function postApiPricingAuditFlowApproval(
  param: IPostApiPricingAuditFlowApprovalParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/auditFlow/approval',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingAuditFlowRejectParam {
  body: {
    auditFlowDTO: AuditFlowDTO
  }
}

/**
 * 批量审批通过
 */
export function postApiPricingAuditFlowReject(
  param: IPostApiPricingAuditFlowRejectParam,
) {
  const [url, option] = interceptRequest('/api/pricing/auditFlow/reject', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingAuditFlowTakeBackParam {
  body: {
    auditFlowDTO: AuditFlowDTO
  }
}

/**
 * 批量取回
 */
export function postApiPricingAuditFlowTakeBack(
  param: IPostApiPricingAuditFlowTakeBackParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/auditFlow/takeBack',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IGetApiPricingAuditFlowTypeTypeIdParam {
  path?: {
    id?: number
    type?: number
  }
}

/**
 * 查看审批流-部门跟价规则明细
 */
export function getApiPricingAuditFlowTypeTypeId(
  param: IGetApiPricingAuditFlowTypeTypeIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/auditFlow/type/:type/:id',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOAuditFlowDeptFollowRuleDetailVO>(
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
    skuList?: Array<number>
    sortSign?: string
    startIndex?: number
  }
}

/**
 * 分页查询【黑名单】
 */
export function getApiPricingBlackList(param: IGetApiPricingBlackListParam) {
  const [url, option] = interceptRequest('/api/pricing/blackList', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOBlackListVO>(interceptResponse)
}

interface IPostApiPricingBlackListAddParam {
  body: {
    blackListAddDeleteDTO: BlackListAddDeleteDTO
  }
}

/**
 * 批量添加sku到黑名单
 */
export function postApiPricingBlackListAdd(
  param: IPostApiPricingBlackListAddParam,
) {
  const [url, option] = interceptRequest('/api/pricing/blackList/add', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingBlackListRemoveParam {
  body: {
    blackListAddDeleteDTO: BlackListAddDeleteDTO
  }
}

/**
 * 批量从黑名单移除sku
 */
export function postApiPricingBlackListRemove(
  param: IPostApiPricingBlackListRemoveParam,
) {
  const [url, option] = interceptRequest('/api/pricing/blackList/remove', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
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
    sortSign?: string
    startIndex?: number
  }
}

/**
 * 分页查询【部门跟价规则】
 */
export function getApiPricingDeptFollowRule(
  param: IGetApiPricingDeptFollowRuleParam,
) {
  const [url, option] = interceptRequest('/api/pricing/deptFollowRule', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVODeptFollowRuleListVO>(
    interceptResponse,
  )
}

interface IPostApiPricingDeptFollowRuleParam {
  body?: {
    deptFollowRuleAddUpdateDTO?: DeptFollowRuleAddUpdateDTO
  }
}

/**
 * 保存【部门跟价规则】
 */
export function postApiPricingDeptFollowRule(
  param: IPostApiPricingDeptFollowRuleParam,
) {
  const [url, option] = interceptRequest('/api/pricing/deptFollowRule', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingDeptFollowRuleSubmitParam {
  body?: {
    deptFollowRuleAddUpdateDTO?: DeptFollowRuleAddUpdateDTO
  }
}

/**
 * 提交审批【部门跟价规则】
 */
export function postApiPricingDeptFollowRuleSubmit(
  param: IPostApiPricingDeptFollowRuleSubmitParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/submit',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IGetApiPricingDeptFollowRuleValidRuleHeaderIdParam {
  path?: {
    headerId?: number
  }
}

/**
 * 查看生效的【部门跟价规则】详情
 */
export function getApiPricingDeptFollowRuleValidRuleHeaderId(
  param: IGetApiPricingDeptFollowRuleValidRuleHeaderIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/validRule/:headerId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVODeptFollowRuleViewVO>(interceptResponse)
}

interface IGetApiPricingDeptFollowRuleHeaderIdParam {
  path?: {
    headerId?: number
  }
}

/**
 * 编辑【部门跟价规则】详情
 */
export function getApiPricingDeptFollowRuleHeaderId(
  param: IGetApiPricingDeptFollowRuleHeaderIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/:headerId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVODeptFollowRuleEditVO>(interceptResponse)
}

interface IDeleteApiPricingDeptFollowRuleHeaderIdParam {
  path?: {
    headerId?: number
  }
}

/**
 * 删除【部门跟价规则】
 */
export function deleteApiPricingDeptFollowRuleHeaderId(
  param: IDeleteApiPricingDeptFollowRuleHeaderIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/deptFollowRule/:headerId',
    param,
  )
  option.method = 'delete'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
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
    skuList?: Array<number>
    sortSign?: string
    startIndex?: number
    upperBand?: number
  }
}

/**
 * 分页查询【跟价池】
 */
export function getApiPricingFollowPool(param: IGetApiPricingFollowPoolParam) {
  const [url, option] = interceptRequest('/api/pricing/followPool', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOFollowPoolListVO>(
    interceptResponse,
  )
}

interface IPostApiPricingFollowPoolAddParam {
  body: {
    followPoolSkuAddDeleteDTO: FollowPoolSkuAddDeleteDTO
  }
}

/**
 * 批量添加sku到跟价池
 */
export function postApiPricingFollowPoolAdd(
  param: IPostApiPricingFollowPoolAddParam,
) {
  const [url, option] = interceptRequest('/api/pricing/followPool/add', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
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
    skuList?: Array<number>
    sortSign?: string
    startIndex?: number
    upperBand?: number
  }
}

/**
 * 分页查询【跟价池】
 */
export function getApiPricingFollowPoolExport(
  param: IGetApiPricingFollowPoolExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/followPool/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingFollowPoolIsAutoPubParam {
  body?: {
    poolIsAutoPubUpdateDTO?: PoolIsAutoPubUpdateDTO
  }
}

/**
 * 批量更新是否自动发布价格
 */
export function postApiPricingFollowPoolIsAutoPub(
  param: IPostApiPricingFollowPoolIsAutoPubParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/followPool/isAutoPub',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingFollowPoolRemoveParam {
  body: {
    followPoolSkuAddDeleteDTO: FollowPoolSkuAddDeleteDTO
  }
}

/**
 * 批量从跟价池移除sku
 */
export function postApiPricingFollowPoolRemove(
  param: IPostApiPricingFollowPoolRemoveParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/followPool/remove',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingManualAdjustPriceParam {
  body?: {
    manualAdjustPriceAddDTO?: ManualAdjustPriceAddDTO
  }
}

/**
 * 调价
 */
export function postApiPricingManualAdjustPrice(
  param: IPostApiPricingManualAdjustPriceParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/manualAdjustPrice',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IGetApiPricingOpponentParam {
  query?: {
    cidList?: Array<number>
    level?: number
    sortSign?: string
  }
}

/**
 * 通过分类获取友商信息
 */
export function getApiPricingOpponent(param: IGetApiPricingOpponentParam) {
  const [url, option] = interceptRequest('/api/pricing/opponent', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListOpponentVO>(interceptResponse)
}

interface IDeleteApiPricingPromotionParam {
  body: {
    promotionDeleteDTO: PromotionDeleteDTO
  }
}

/**
 * 删除指定促销
 */
export function deleteApiPricingPromotion(
  param: IDeleteApiPricingPromotionParam,
) {
  const [url, option] = interceptRequest('/api/pricing/promotion', param)
  option.method = 'delete'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IGetApiPricingPromotionSkuIdParam {
  path?: {
    skuId?: number
  }
}

/**
 * 获取sku的促销信息
 */
export function getApiPricingPromotionSkuId(
  param: IGetApiPricingPromotionSkuIdParam,
) {
  const [url, option] = interceptRequest('/api/pricing/promotion/:skuId', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromotionListVO>(interceptResponse)
}

interface IPostApiPricingPublishPricingPubPriceParam {
  body?: {
    publishPricingDTO?: PublishPricingDTO
  }
}

/**
 * 批量发布商品价格
 */
export function postApiPricingPublishPricingPubPrice(
  param: IPostApiPricingPublishPricingPubPriceParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/publishPricing/pubPrice',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingPublishPricingRejectPriceParam {
  body?: {
    publishPricingDTO?: PublishPricingDTO
  }
}

/**
 * 批量拒绝商品价格
 */
export function postApiPricingPublishPricingRejectPrice(
  param: IPostApiPricingPublishPricingRejectPriceParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/publishPricing/rejectPrice',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
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
    skuList?: Array<number>
    sortSign?: string
    startIndex?: number
  }
}

/**
 * 分页查询【用户录入数据】
 */
export function getApiPricingUserInputData(
  param: IGetApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOUserInputDataListVO>(
    interceptResponse,
  )
}

interface IPostApiPricingUserInputDataParam {
  body?: {
    userInputDataAddUpdateDTO?: UserInputDataAddUpdateDTO
  }
}

/**
 * 新增、修改【用户录入数据】
 */
export function postApiPricingUserInputData(
  param: IPostApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IDeleteApiPricingUserInputDataParam {
  body: {
    userInputDataDeleteDTO: UserInputDataDeleteDTO
  }
}

/**
 * 批量删除【用户录入数据】
 */
export function deleteApiPricingUserInputData(
  param: IDeleteApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  option.method = 'delete'
  return fetch(url, option).then<ReplyVOint>(interceptResponse)
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
    skuList?: Array<number>
    sortSign?: string
    startIndex?: number
  }
}

/**
 * 分页查询【用户录入数据】
 */
export function getApiPricingUserInputDataExport(
  param: IGetApiPricingUserInputDataExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/userInputData/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IPostApiPricingUserInputDataUploadParam {
  formData: {
    file: File
  }
}

/**
 * 导入【用户录入数据】
 */
export function postApiPricingUserInputDataUpload(
  param: IPostApiPricingUserInputDataUploadParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/userInputData/upload',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

interface IGetApiPricingUserInputDataIdParam {
  path?: {
    id?: number
  }
}

/**
 * 查看【用户录入数据】详情
 */
export function getApiPricingUserInputDataId(
  param: IGetApiPricingUserInputDataIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/pricing/userInputData/:id',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOUserInputDataEditVO>(interceptResponse)
}
