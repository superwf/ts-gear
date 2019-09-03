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
  ReplyVOInt,
  ReplyVOUserInputDataEditVO,
} from './definitions'

export interface IGetApiPricingAuditFlowParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      entities: [
        {
          auditStatus: '待审批',
          cid1Name: '办公用品',
          cid2Name: '办公用品',
          cid3Name: '笔类，本册，便签',
          createdBy: 'zhangsan',
          createdTime: '2019-04-15 13:37:00',
          deptName: '文仪业务一部',
          id: 1001,
          operatedTime: '2019-04-15 13:37:00',
          ruleName: '文仪业务一部+二级：办公文具',
          type: 1,
        },
      ],
      entityCount: 100,
      firstEntityIndex: 0,
      lastEntityIndex: 10,
      pageCount: 10,
      pageNo: 1,
      pageSize: 10,
    },
    message: 'success',
  }) as Promise<ReplyVOPageVOAuditFlowListVO>
}

export interface IPostApiPricingAuditFlowApprovalParam {
  body: AuditFlowDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve({
    code: '000000',
    data: {},
    message: 'success',
  }) as Promise<ReplyVO>
}

export interface IPostApiPricingAuditFlowRejectParam {
  body: AuditFlowDTO
}

/**
 * 批量审批通过
 */
export function postApiPricingAuditFlowReject(
  param: IPostApiPricingAuditFlowRejectParam,
) {
  const [url, option] = interceptRequest('/api/pricing/auditFlow/reject', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostApiPricingAuditFlowTakeBackParam {
  body: AuditFlowDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingAuditFlowTypeTypeIdParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      auditDetails: [
        {
          auditErp: 'zhangsan',
          auditStatus: '待审批',
          createdTime: '2017-05-18 20:48:05',
          operatedTime: '2017-05-18 20:48:05',
        },
      ],
      bandMode: 0,
      bandType: 'sales',
      categoryNameList: ['string'],
      deptName: '文仪业务一部',
      followRuleItemList: [
        {
          fixedBand: 'ABC',
          floorBand: 1,
          followDegreeParam: {
            followObj: 'OPP_page_price',
            symbol: '+',
            value: 100,
          },
          oppIds: [0],
          otherParam: {
            adjustAmountLimit: 20,
            adjustLowerLimit: 95,
            adjustUpperLimit: 95,
            exceedAdjustAmount: true,
            exceedAdjustRangeNotFollow: true,
            futureNotFollowDay: 3,
            futureSpecialPromoNotFollow: true,
            futureSpecialPromoTypeList: ['sum', 'seckill'],
            inSpecialPromoNotFollow: true,
            inSpecialPromoTypeList: ['sum', 'seckill'],
            jdOutSafeStockNotFollow: true,
            jdSafeStockDay: 7,
            onlyAdjustLower: true,
            operateBase: 'abs',
            operateValue: 50,
            oppOutStockNotFollow: true,
            promoLimit: true,
            promoLimitNumber: 100,
            spreadLessRangeNotFollow: true,
          },
          riskParam: { maxPriceRate: 5, minGpRate: 10, minVenderPriceRate: 95 },
          upperBand: 50,
        },
      ],
      headerId: 1001,
      id: 10001,
      oppList: [
        { oppoId: 1001, oppoName: '天猫超市', url: 'http://www.taobao.com' },
      ],
      ruleName: '文仪业务一部+二级：办公文具',
      showApprovalBtn: true,
    },
    message: 'success',
  }) as Promise<ReplyVOAuditFlowDeptFollowRuleDetailVO>
}

export interface IGetApiPricingBlackListParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      entities: [
        {
          addBlacklistBy: 'zhangsan',
          addBlacklistTime: '2019-04-24 16:54:00',
          brandName: '晨光',
          categoryName: '一级-二级-三级',
          deptName: '一级-二级-三级',
          salerErp: 'zhangsan',
          skuId: 1001,
          skuName: '三只松鼠休闲零食',
        },
      ],
      entityCount: 100,
      firstEntityIndex: 0,
      lastEntityIndex: 10,
      pageCount: 10,
      pageNo: 1,
      pageSize: 10,
    },
    message: 'success',
  }) as Promise<ReplyVOPageVOBlackListVO>
}

export interface IPostApiPricingBlackListAddParam {
  body: BlackListAddDeleteDTO
}

/**
 * 批量添加sku到黑名单
 */
export function postApiPricingBlackListAdd(
  param: IPostApiPricingBlackListAddParam,
) {
  const [url, option] = interceptRequest('/api/pricing/blackList/add', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostApiPricingBlackListRemoveParam {
  body: BlackListAddDeleteDTO
}

/**
 * 批量从黑名单移除sku
 */
export function postApiPricingBlackListRemove(
  param: IPostApiPricingBlackListRemoveParam,
) {
  const [url, option] = interceptRequest('/api/pricing/blackList/remove', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingDeptFollowRuleParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      entities: [
        {
          auditStatusDesc: '通过',
          cidName2: '办公文具',
          cidName3: '笔类、本册/便签',
          createdTime: '2019-04-24 16:54:00',
          deptName: '文仪业务一部',
          headerId: 1001,
          operateFlag: true,
          operatedBy: 'zhangsan',
          operatedTime: '2019-04-24 16:54:00',
          ruleName: '文仪业务一部+二级：办公文具',
          validHeaderId: 1001,
        },
      ],
      entityCount: 100,
      firstEntityIndex: 0,
      lastEntityIndex: 10,
      pageCount: 10,
      pageNo: 1,
      pageSize: 10,
    },
    message: 'success',
  }) as Promise<ReplyVOPageVODeptFollowRuleListVO>
}

export interface IPostApiPricingDeptFollowRuleParam {
  body?: DeptFollowRuleAddUpdateDTO
}

/**
 * 保存【部门跟价规则】
 */
export function postApiPricingDeptFollowRule(
  param: IPostApiPricingDeptFollowRuleParam,
) {
  const [url, option] = interceptRequest('/api/pricing/deptFollowRule', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostApiPricingDeptFollowRuleSubmitParam {
  body?: DeptFollowRuleAddUpdateDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingDeptFollowRuleValidRuleHeaderIdParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      bandMode: 0,
      bandType: 'sales',
      categoryNameList: ['string'],
      deptName: '文仪业务一部',
      followRuleItemList: [null],
      headerId: 1001,
      oppList: [null],
      ruleName: '文仪业务一部+二级：办公文具',
    },
    message: 'success',
  }) as Promise<ReplyVODeptFollowRuleViewVO>
}

export interface IGetApiPricingDeptFollowRuleHeaderIdParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      auditErps: 'zhangsan,lisi,wangwu',
      auditId: 10001,
      auditStatus: 0,
      auditStatusName: '未提交',
      bandMode: 0,
      bandType: 'sales',
      categoryNameList: ['string'],
      deptName: '文仪业务一部',
      followRuleItemList: [null],
      headerId: 1001,
      oppList: [null],
      ruleName: '文仪业务一部+二级：办公文具',
      showCancelBtn: true,
      showSaveBtn: true,
      showSubmitBtn: true,
    },
    message: 'success',
  }) as Promise<ReplyVODeptFollowRuleEditVO>
}

export interface IDeleteApiPricingDeptFollowRuleHeaderIdParam {
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
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}

export interface IGetApiPricingFollowPoolParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      entities: [
        {
          cbj: 80,
          dpPrice: 35,
          dpTime: '2019-05-04 00:58:00',
          erpPrice: 80,
          explainInfo: '友商无货',
          giftPromCount: 70,
          gmvBand: 'A',
          gpRate: 5,
          isAutoPub: 1,
          lastPubTime: '2019-05-04 00:58:00',
          lowestOppName: '天猫',
          lowestOppSkuPrice: 35,
          lowestOppSkuUrl:
            'https://detail.tmall.com/item.htm?id=12905113259&skuId=24647771955',
          packPromCount: 70,
          prId: 100011,
          promCount: 70,
          purchasePrice: 24,
          realCost: 80,
          redPrice: 80,
          showApprovalRejectBtn: true,
          singlePromCount: 70,
          skuId: 1001,
          skuName: '三只松鼠休闲零食',
          statusInfo: '需审批',
          stock: 1000,
          sumPromCount: 70,
          topPromCount: 70,
        },
      ],
      entityCount: 100,
      firstEntityIndex: 0,
      lastEntityIndex: 10,
      pageCount: 10,
      pageNo: 1,
      pageSize: 10,
    },
    message: 'success',
  }) as Promise<ReplyVOPageVOFollowPoolListVO>
}

export interface IPostApiPricingFollowPoolAddParam {
  body: FollowPoolSkuAddDeleteDTO
}

/**
 * 批量添加sku到跟价池
 */
export function postApiPricingFollowPoolAdd(
  param: IPostApiPricingFollowPoolAddParam,
) {
  const [url, option] = interceptRequest('/api/pricing/followPool/add', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingFollowPoolExportParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

export interface IPostApiPricingFollowPoolIsAutoPubParam {
  body?: PoolIsAutoPubUpdateDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostApiPricingFollowPoolRemoveParam {
  body: FollowPoolSkuAddDeleteDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostApiPricingManualAdjustPriceParam {
  body?: ManualAdjustPriceAddDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingOpponentParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: [null],
    message: 'success',
  }) as Promise<ReplyVOListOpponentVO>
}

export interface IDeleteApiPricingPromotionParam {
  body: PromotionDeleteDTO
}

/**
 * 删除指定促销
 */
export function deleteApiPricingPromotion(
  param: IDeleteApiPricingPromotionParam,
) {
  const [url, option] = interceptRequest('/api/pricing/promotion', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}

export interface IGetApiPricingPromotionSkuIdParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      erpPrice: 100,
      name: '卡西欧（CASIO）TR750 系列相机包',
      price: 99,
      promotions: [
        {
          canDelete: true,
          channel: '全渠道',
          checkState: '完成',
          detailLink:
            'http://p.erp.jd.com/promotionUpgrade/auditPromo.action?promoId=219525797&promoType=view',
          isDps: true,
          promoId: 100001,
          promoInfo: '一口价￥218',
          promoName: '品秒-5.20',
          promoTypeName: '单品',
          skuId: 100001,
          timeBegin: '2018-05-20 00:00:00',
          timeEnd: '2018-05-20 23:59:59',
        },
      ],
      skuId: 100001,
    },
    message: 'success',
  }) as Promise<ReplyVOPromotionListVO>
}

export interface IPostApiPricingPublishPricingPubPriceParam {
  body?: PublishPricingDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostApiPricingPublishPricingRejectPriceParam {
  body?: PublishPricingDTO
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingUserInputDataParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      entities: [
        {
          brandName: '晨光',
          categoryInfo: '图书-教育-少儿',
          cbj: 24,
          fromData: '2019-03-05',
          id: 1001,
          marketPrice: 24,
          maximumPrice: 24,
          minimumPrice: 24,
          priceLimitTypeDesc: '供应商限价',
          priceLimitWayDesc: '固定约束',
          purchasePrice: 24,
          realCost: 24,
          redPrice: 24,
          remark: '满20-5',
          skuId: 1001,
          skuName: '晨光黑色碳素笔',
          toData: '2019-03-08',
        },
      ],
      entityCount: 100,
      firstEntityIndex: 0,
      lastEntityIndex: 10,
      pageCount: 10,
      pageNo: 1,
      pageSize: 10,
    },
    message: 'success',
  }) as Promise<ReplyVOPageVOUserInputDataListVO>
}

export interface IPostApiPricingUserInputDataParam {
  body?: UserInputDataAddUpdateDTO
}

/**
 * 新增、修改【用户录入数据】
 */
export function postApiPricingUserInputData(
  param: IPostApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IDeleteApiPricingUserInputDataParam {
  body: UserInputDataDeleteDTO
}

/**
 * 批量删除【用户录入数据】
 */
export function deleteApiPricingUserInputData(
  param: IDeleteApiPricingUserInputDataParam,
) {
  const [url, option] = interceptRequest('/api/pricing/userInputData', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  return Promise.resolve({
    code: '000000',
    data: 0,
    message: 'success',
  }) as Promise<ReplyVOInt>
}

export interface IGetApiPricingUserInputDataExportParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

export interface IPostApiPricingUserInputDataUploadParam {
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
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiPricingUserInputDataIdParam {
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
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      fromData: '2019-03-05',
      id: 1001,
      maximumPrice: 24,
      minimumPrice: 24,
      priceLimitType: 1,
      priceLimitWay: 1,
      realCost: 24,
      remark: '满20-5',
      skuId: 1001,
      toData: '2019-03-08',
    },
    message: 'success',
  }) as Promise<ReplyVOUserInputDataEditVO>
}
