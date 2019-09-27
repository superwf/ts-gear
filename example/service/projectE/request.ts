import { interceptRequest, interceptResponse } from './interceptor'
import {
  ReplyVOInt,
  EsIndexAddDTO,
  ReplyVOChartResultVOPriceCompeteChartListVO,
  ReplyVOVoid,
  PriceCompeteExportSkuListQO,
  ReplyVOPriceCompeteSumVO,
  ReplyVOListPriceCompeteSkuDetailVO,
  PriceCompeteSkuListQO,
  ReplyVOPageVOPriceCompeteSkuListVO,
  ReplyVOListPriceEcAnalysisBrandVO,
  ReplyVOListPriceEcAnalysisCatVO,
  ReplyVOListPriceEcAnalysisDeptVO,
  ReplyVOListPriceEcAnalysisTopItemVO,
  ReplyVOPriceEcAnalysisHomeIndexVO,
  ReplyVOListPriceEcAnalysisSalerVO,
  ReplyVOPriceEcAnalysisTopVO,
  PageVOPriceHealthBrandAnalysisListVO,
  BodyBuilder,
  PageVOPriceHealthCategoryAnalysisListVO,
  PageVOPriceHealthDeptAnalysisListVO,
  GlobalAnalysisIndexVO,
  SkuPriceHistoryItemVO,
  PriceHealthIndexListVO,
  PageVOPriceHealthSalerAnalysisListVO,
  SkuDetailVO,
  SkuDetailQO,
  PageVOSkuListVO,
  SkuListQO,
  YearHistoryItemVO,
  YearHistoryAnalysisExportQO,
  ReplyVOChartResultVOPriceHonestChartListVO,
  PriceHonestExportSkuListQO,
  ReplyVOPriceHonestSumVO,
  ReplyVOListPriceHonestSkuDetailVO,
  PriceHonestSkuListQO,
  ReplyVOPageVOPriceHonestSkuListVO,
  ReplyVOListPriceHonestSkuTopVO,
  ReplyVOChartResultVOPriceWaveChartListVO,
  PriceWaveExportSkuListQO,
  ReplyVOPriceWaveSumVO,
  ReplyVOListPriceWaveSkuDetailVO,
  PriceWaveSkuListQO,
  ReplyVOPageVOPriceWaveSkuListVO,
  ReplyVOListSkuPriceChgVO,
  ReplyVOListPriceWaveSkuTopVO,
  ReplyVOPromoAnalysisSumVO,
  ReplyVOPromoAnalysisChartVO,
  ReplyVOSetPromoDeptTreeVO,
  ReplyVOPromoAnalysisHomeIndexVO,
  ReplyVOPromoAnalysisPromoResultVO,
  ReplyVOPageVOPromoAnalysisPromoSkuVO,
  ReplyVOPromoAnalysisSkuResultVO,
  ReplyVOReportTaskShowVO,
  ReportTaskDeleteQO,
  ReplyVO,
  ReplyVOString,
  String,
  ReplyVOPageVOReportTaskInstanceVO,
  ReplyVOPageVOReportTaskListVO,
  ReportRetryQO,
  ReportTaskAddDTO,
  ReportTaskUpdateDTO,
  ReplyVOPageVOSkuBlacklistListVO,
  SkuBlacklistAddDTO,
  SkuBlacklistDeleteQO,
  ReplyVOListTopBrandListVO,
  ListBrandVO,
  TopBrandAddDTO,
  TopBrandDeleteQO,
  ReplyVOMarkdownPriceCalcVO,
  ReplyVOMarkdownSaleSimulateVO,
  ReplyVOMarkdownTrendSimulateVO,
  ReplyVOSimulateSkuVO,
  SaleSimulateListQO,
  ReplyVOListSkuHistoryDTO,
  ReplyVOPageVOSimulateSkuVO,
  ReplyVOListSaleSimulateTableVO,
  ReplyVOSaleSimulateVO,
  PromoRoQO,
  PromoOverlayRiskDTO,
  ReplyVOListPromoResponse,
  ReplyVOMapLongBoolean,
  ReplyVOPromoRoVO,
  ReplyVOListSelectOptionVOInt,
  ReplyVOPageVOPromoSimulateDetailVO,
  ReplyVOPromoSimulateTotalVO,
} from './definitions'

export interface IDeleteApiDataboardBoardEsParam {
  body?: Array<string>
}

/**
 * 删除索引
 */
export function deleteApiDataboardBoardEs(
  param: IDeleteApiDataboardBoardEsParam,
) {
  const [url, option] = interceptRequest('/api/databoard/board/es', param)
  option.method = 'delete'
  return fetch(url, option).then<ReplyVOInt>(interceptResponse)
}

export interface IPostApiDataboardBoardEsCreateIndexParam {
  body?: EsIndexAddDTO
  formData: {
    file: File
  }
  query: {
    indexAlias: string
    indexNames: Array<string>
  }
}

/**
 * 创建索引
 */
export function postApiDataboardBoardEsCreateIndex(
  param: IPostApiDataboardBoardEsCreateIndexParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/es/createIndex',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOInt>(interceptResponse)
}

export interface IPostApiDataboardBoardEsUpdateIndexParam {
  formData: {
    file: File
  }
  query?: {
    indexNameOrAlias?: string
  }
}

/**
 * 更新索引
 */
export function postApiDataboardBoardEsUpdateIndex(
  param: IPostApiDataboardBoardEsUpdateIndexParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/es/updateIndex',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOInt>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceCompeteChartListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    opponentCode?: string
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErp?: string
    salesBand?: Array<string>
    skuId?: string
  }
}

/**
 * 图表查询【价格竞争力-图表、列表】
 */
export function getApiDataboardBoardPriceCompeteChartList(
  param: IGetApiDataboardBoardPriceCompeteChartListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/chartList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOChartResultVOPriceCompeteChartListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceCompeteExportChartListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    menuType?: number
    opponentCode?: string
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErp?: string
    salesBand?: Array<string>
    skuId?: string
  }
}

/**
 * 图表导出
 */
export function getApiDataboardBoardPriceCompeteExportChartList(
  param: IGetApiDataboardBoardPriceCompeteExportChartListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/exportChartList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IPostApiDataboardBoardPriceCompeteExportSkuListParam {
  body: PriceCompeteExportSkuListQO
}

/**
 * 商品明细列表导出
 */
export function postApiDataboardBoardPriceCompeteExportSkuList(
  param: IPostApiDataboardBoardPriceCompeteExportSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/exportSkuList',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceCompeteShowSummaryParam {
  query?: {
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询实时汇总数据【价格竞争力-实时数据(汇总部分)】
 */
export function getApiDataboardBoardPriceCompeteShowSummary(
  param: IGetApiDataboardBoardPriceCompeteShowSummaryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/showSummary',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPriceCompeteSumVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceCompeteSkuDetailParam {
  query?: {
    dtype?: string
    skuId?: number
  }
}

/**
 * 商品明细
 */
export function getApiDataboardBoardPriceCompeteSkuDetail(
  param: IGetApiDataboardBoardPriceCompeteSkuDetailParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/skuDetail',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceCompeteSkuDetailVO>(
    interceptResponse,
  )
}

export interface IPostApiDataboardBoardPriceCompeteSkuListParam {
  body: PriceCompeteSkuListQO
}

/**
 * 商品明细列表
 */
export function postApiDataboardBoardPriceCompeteSkuList(
  param: IPostApiDataboardBoardPriceCompeteSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/skuList',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOPageVOPriceCompeteSkuListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceEcAnalysisBrandListParam {
  query?: {
    deptLevel?: number
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 品牌下钻
 */
export function getApiDataboardBoardPriceEcAnalysisBrandList(
  param: IGetApiDataboardBoardPriceEcAnalysisBrandListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/brandList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceEcAnalysisBrandVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceEcAnalysisCatListParam {
  query?: {
    catLevel?: number
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 品类下钻
 */
export function getApiDataboardBoardPriceEcAnalysisCatList(
  param: IGetApiDataboardBoardPriceEcAnalysisCatListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/catList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceEcAnalysisCatVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceEcAnalysisDeptListParam {
  query?: {
    deptLevel?: number
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 部门下钻
 */
export function getApiDataboardBoardPriceEcAnalysisDeptList(
  param: IGetApiDataboardBoardPriceEcAnalysisDeptListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/deptList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceEcAnalysisDeptVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceEcAnalysisExportBrandListParam {
  query?: {
    deptLevel?: number
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
  body: string
}

/**
 * 品牌下钻图表导出
 */
export function getApiDataboardBoardPriceEcAnalysisExportBrandList(
  param: IGetApiDataboardBoardPriceEcAnalysisExportBrandListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/exportBrandList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceEcAnalysisExportCatListParam {
  query?: {
    catLevel?: number
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
  body: string
}

/**
 * 品类下钻图表导出
 */
export function getApiDataboardBoardPriceEcAnalysisExportCatList(
  param: IGetApiDataboardBoardPriceEcAnalysisExportCatListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/exportCatList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceEcAnalysisExportDeptListParam {
  query?: {
    deptLevel?: number
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
  body: string
}

/**
 * 部门下钻图表导出
 */
export function getApiDataboardBoardPriceEcAnalysisExportDeptList(
  param: IGetApiDataboardBoardPriceEcAnalysisExportDeptListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/exportDeptList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceEcAnalysisExportSalerListParam {
  body: string
  query?: {
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 采销下钻图表导出
 */
export function getApiDataboardBoardPriceEcAnalysisExportSalerList(
  param: IGetApiDataboardBoardPriceEcAnalysisExportSalerListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/exportSalerList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceEcAnalysisGmvPotentialTop3Param {
  query?: {
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * gmv提升潜力top3
 */
export function getApiDataboardBoardPriceEcAnalysisGmvPotentialTop3(
  param: IGetApiDataboardBoardPriceEcAnalysisGmvPotentialTop3Param,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/gmvPotentialTop3',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceEcAnalysisTopItemVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceEcAnalysisGmvTop3Param {
  query?: {
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * gmv提升潜力top3
 */
export function getApiDataboardBoardPriceEcAnalysisGmvTop3(
  param: IGetApiDataboardBoardPriceEcAnalysisGmvTop3Param,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/gmvTop3',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceEcAnalysisTopItemVO>(
    interceptResponse,
  )
}

/**
 * 首页指标
 */
export function getApiDataboardBoardPriceEcAnalysisHomeIndex() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/homeIndex',
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPriceEcAnalysisHomeIndexVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceEcAnalysisSalerListParam {
  query?: {
    gmvBand?: Array<string>
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    potentialType?: string
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 采销下钻
 */
export function getApiDataboardBoardPriceEcAnalysisSalerList(
  param: IGetApiDataboardBoardPriceEcAnalysisSalerListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/salerList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceEcAnalysisSalerVO>(
    interceptResponse,
  )
}

/**
 * 3个top1
 */
export function getApiDataboardBoardPriceEcAnalysisTop() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/top',
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPriceEcAnalysisTopVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthBrandAnalysisListParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 分页查询【价格健康度-品牌下钻分析】
 */
export function getApiDataboardBoardPriceHealthBrandAnalysisList(
  param: IGetApiDataboardBoardPriceHealthBrandAnalysisListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/brandAnalysisList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<PageVOPriceHealthBrandAnalysisListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceHealthBrandAnalysisListExportParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 【价格健康度-品牌下钻分析导出】
 */
export function getApiDataboardBoardPriceHealthBrandAnalysisListExport(
  param: IGetApiDataboardBoardPriceHealthBrandAnalysisListExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/brandAnalysisListExport',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthCategoryAnalysisListParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 分页查询【价格健康度-品类下钻分析】
 */
export function getApiDataboardBoardPriceHealthCategoryAnalysisList(
  param: IGetApiDataboardBoardPriceHealthCategoryAnalysisListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/categoryAnalysisList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<PageVOPriceHealthCategoryAnalysisListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceHealthCategoryAnalysisListExportParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 【价格健康度-品类下钻分析导出】
 */
export function getApiDataboardBoardPriceHealthCategoryAnalysisListExport(
  param: IGetApiDataboardBoardPriceHealthCategoryAnalysisListExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/categoryAnalysisListExport',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthDeptAnalysisListParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 分页查询【价格健康度-部门下钻分析】
 */
export function getApiDataboardBoardPriceHealthDeptAnalysisList(
  param: IGetApiDataboardBoardPriceHealthDeptAnalysisListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/deptAnalysisList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<PageVOPriceHealthDeptAnalysisListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceHealthDeptAnalysisListExportParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 【价格健康度-部门下钻分析导出】
 */
export function getApiDataboardBoardPriceHealthDeptAnalysisListExport(
  param: IGetApiDataboardBoardPriceHealthDeptAnalysisListExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/deptAnalysisListExport',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthIndexGlobalAnalysisParam {
  query?: {
    cid?: Array<number>
    cidLevel?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pDeptId?: number
    pDeptLevel?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 指数整体分析
 */
export function getApiDataboardBoardPriceHealthIndexGlobalAnalysis(
  param: IGetApiDataboardBoardPriceHealthIndexGlobalAnalysisParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/indexGlobalAnalysis',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<GlobalAnalysisIndexVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthJdSkuPriceHistorySkuIdParam {
  path?: {
    skuId?: string
  }
}

/**
 * 获取sku【京东价格历史】
 */
export function getApiDataboardBoardPriceHealthJdSkuPriceHistorySkuId(
  param: IGetApiDataboardBoardPriceHealthJdSkuPriceHistorySkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/jdSkuPriceHistory/:skuId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<SkuPriceHistoryItemVO>(interceptResponse)
}

/**
 * 价格指数表现
 */
export function getApiDataboardBoardPriceHealthPriceIndexAnalysis() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/priceIndexAnalysis',
  )
  option.method = 'get'
  return fetch(url, option).then<PriceHealthIndexListVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthSalerAnalysisListParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 分页查询【价格健康度-采销下钻分析】
 */
export function getApiDataboardBoardPriceHealthSalerAnalysisList(
  param: IGetApiDataboardBoardPriceHealthSalerAnalysisListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/salerAnalysisList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<PageVOPriceHealthSalerAnalysisListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceHealthSalerAnalysisListExportParam {
  query?: {
    avgWaveNumSortSign?: number
    cid?: Array<number>
    cidLevel?: number
    competePointSortSign?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    priceHighSkuRateSortSign?: number
    promoUpPriceDegreeSortSign?: number
    promoUpPriceRateSortSign?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    wavePointSortSign?: number
  }
}

/**
 * 【价格健康度-采销下钻分析导出】
 */
export function getApiDataboardBoardPriceHealthSalerAnalysisListExport(
  param: IGetApiDataboardBoardPriceHealthSalerAnalysisListExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/salerAnalysisListExport',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthSkuDtailParam {
  query?: {
    dtype?: string
    skuId?: number
  }
}

/**
 * 查询【SKU详情页】
 */
export function getApiDataboardBoardPriceHealthSkuDtail(
  param: IGetApiDataboardBoardPriceHealthSkuDtailParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/skuDtail',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<SkuDetailVO>(interceptResponse)
}

export interface IPostApiDataboardBoardPriceHealthSkuDtailExportParam {
  body: SkuDetailQO
}

/**
 * 导出【SKU详情页】
 */
export function postApiDataboardBoardPriceHealthSkuDtailExport(
  param: IPostApiDataboardBoardPriceHealthSkuDtailExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/skuDtailExport',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthSkuListParam {
  query?: {
    brandIds?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErps?: Array<string>
    salesBand?: Array<string>
    skuIds?: Array<number>
  }
}

/**
 * 分页查询【商品明细】
 */
export function getApiDataboardBoardPriceHealthSkuList(
  param: IGetApiDataboardBoardPriceHealthSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/skuList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<PageVOSkuListVO>(interceptResponse)
}

export interface IPostApiDataboardBoardPriceHealthSkuListExportParam {
  body: SkuListQO
}

/**
 * 导出【商品明细】
 */
export function postApiDataboardBoardPriceHealthSkuListExport(
  param: IPostApiDataboardBoardPriceHealthSkuListExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/skuListExport',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHealthYearHistoryParam {
  query?: {
    cid?: Array<number>
    cidLevel?: number
    deptId?: Array<number>
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

type GetApiDataboardBoardPriceHealthYearHistoryResponse = Array<
  YearHistoryItemVO
>
/**
 * 分页查询【商品明细】
 */
export function getApiDataboardBoardPriceHealthYearHistory(
  param: IGetApiDataboardBoardPriceHealthYearHistoryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/yearHistory',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<
    GetApiDataboardBoardPriceHealthYearHistoryResponse
  >(interceptResponse)
}

export interface IPostApiDataboardBoardPriceHealthYearHistoryParam {
  body: YearHistoryAnalysisExportQO
}

/**
 * 导出【年度历史趋势】
 */
export function postApiDataboardBoardPriceHealthYearHistory(
  param: IPostApiDataboardBoardPriceHealthYearHistoryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/yearHistory',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<BodyBuilder>(interceptResponse)
}

type GetApiDataboardBoardPriceHealthYearHistoryMonthDtResponse = Array<string>
/**
 * 查询【年度历史月dt】
 */
export function getApiDataboardBoardPriceHealthYearHistoryMonthDt() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/yearHistoryMonthDt',
  )
  option.method = 'get'
  return fetch(url, option).then<
    GetApiDataboardBoardPriceHealthYearHistoryMonthDtResponse
  >(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHonestChartListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErp?: string
    salesBand?: Array<string>
    skuId?: string
  }
}

/**
 * 图表查询【价格诚信度-图表、列表】
 */
export function getApiDataboardBoardPriceHonestChartList(
  param: IGetApiDataboardBoardPriceHonestChartListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/chartList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOChartResultVOPriceHonestChartListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceHonestExportChartListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErp?: string
    salesBand?: Array<string>
    skuId?: string
  }
}

/**
 * 图表导出
 */
export function getApiDataboardBoardPriceHonestExportChartList(
  param: IGetApiDataboardBoardPriceHonestExportChartListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/exportChartList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IPostApiDataboardBoardPriceHonestExportSkuListParam {
  body: PriceHonestExportSkuListQO
}

/**
 * 商品明细列表导出
 */
export function postApiDataboardBoardPriceHonestExportSkuList(
  param: IPostApiDataboardBoardPriceHonestExportSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/exportSkuList',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHonestExportSkuTopParam {
  query?: {
    dtype?: string
    exportEmail?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查看更多（导出）
 */
export function getApiDataboardBoardPriceHonestExportSkuTop(
  param: IGetApiDataboardBoardPriceHonestExportSkuTopParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/exportSkuTop',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHonestShowSummaryParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询T+1汇总数据【价格竞争力T+1数据(汇总部分)】
 */
export function getApiDataboardBoardPriceHonestShowSummary(
  param: IGetApiDataboardBoardPriceHonestShowSummaryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/showSummary',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPriceHonestSumVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceHonestSkuDetailParam {
  query?: {
    dtype?: string
    skuId?: number
  }
}

/**
 * 商品明细
 */
export function getApiDataboardBoardPriceHonestSkuDetail(
  param: IGetApiDataboardBoardPriceHonestSkuDetailParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/skuDetail',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceHonestSkuDetailVO>(
    interceptResponse,
  )
}

export interface IPostApiDataboardBoardPriceHonestSkuListParam {
  body: PriceHonestSkuListQO
}

/**
 * 商品明细列表
 */
export function postApiDataboardBoardPriceHonestSkuList(
  param: IPostApiDataboardBoardPriceHonestSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/skuList',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOPageVOPriceHonestSkuListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceHonestSkuTopParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询T+1sku数据【价格竞争力T+1数据(sku部分)】
 */
export function getApiDataboardBoardPriceHonestSkuTop(
  param: IGetApiDataboardBoardPriceHonestSkuTopParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/skuTop',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceHonestSkuTopVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceWaveChartListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErp?: string
    salesBand?: Array<string>
    skuId?: string
  }
}

/**
 * 图表查询【价格波动性-图表、列表】
 */
export function getApiDataboardBoardPriceWaveChartList(
  param: IGetApiDataboardBoardPriceWaveChartListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/chartList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOChartResultVOPriceWaveChartListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceWaveExportChartListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    dtype?: string
    exportEmail?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salerErp?: string
    salesBand?: Array<string>
    skuId?: string
  }
}

/**
 * 图表导出
 */
export function getApiDataboardBoardPriceWaveExportChartList(
  param: IGetApiDataboardBoardPriceWaveExportChartListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/exportChartList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IPostApiDataboardBoardPriceWaveExportSkuListParam {
  body: PriceWaveExportSkuListQO
}

/**
 * 商品明细列表导出
 */
export function postApiDataboardBoardPriceWaveExportSkuList(
  param: IPostApiDataboardBoardPriceWaveExportSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/exportSkuList',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceWaveShowSummaryParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询时间段内汇总数据【价格波动性-时间段内数据(汇总部分)】
 */
export function getApiDataboardBoardPriceWaveShowSummary(
  param: IGetApiDataboardBoardPriceWaveShowSummaryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/showSummary',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPriceWaveSumVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceWaveSkuDetailParam {
  query?: {
    dtype?: string
    skuId?: number
  }
}

/**
 * 商品明细
 */
export function getApiDataboardBoardPriceWaveSkuDetail(
  param: IGetApiDataboardBoardPriceWaveSkuDetailParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/skuDetail',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceWaveSkuDetailVO>(
    interceptResponse,
  )
}

export interface IPostApiDataboardBoardPriceWaveSkuListParam {
  body: PriceWaveSkuListQO
}

/**
 * 商品明细列表
 */
export function postApiDataboardBoardPriceWaveSkuList(
  param: IPostApiDataboardBoardPriceWaveSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/skuList',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOPageVOPriceWaveSkuListVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPriceWaveSkuPriceChgDetailSkuIdParam {
  path?: {
    skuId?: number
  }
}

/**
 * 商品明细价格变动详情
 */
export function getApiDataboardBoardPriceWaveSkuPriceChgDetailSkuId(
  param: IGetApiDataboardBoardPriceWaveSkuPriceChgDetailSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/skuPriceChgDetail/:skuId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListSkuPriceChgVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPriceWaveSkuTopParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询时间段内sku数据【价格波动性-时间段内数据(sku部分)】
 */
export function getApiDataboardBoardPriceWaveSkuTop(
  param: IGetApiDataboardBoardPriceWaveSkuTopParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/skuTop',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceWaveSkuTopVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPromoAnalysisBenchmarkingParam {
  query?: {
    cid?: number
    deptId?: string
    monthRange?: Array<string>
  }
}

/**
 * 对标均值
 */
export function getApiDataboardBoardPromoAnalysisBenchmarking(
  param: IGetApiDataboardBoardPromoAnalysisBenchmarkingParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/benchmarking',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoAnalysisSumVO>(interceptResponse)
}

export interface IGetApiDataboardBoardPromoAnalysisChartParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    gmvBand?: Array<string>
    monthRange?: Array<string>
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 明细分析(3张图表)
 */
export function getApiDataboardBoardPromoAnalysisChart(
  param: IGetApiDataboardBoardPromoAnalysisChartParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/chart',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoAnalysisChartVO>(interceptResponse)
}

/**
 * 获取所有部门
 */
export function getApiDataboardBoardPromoAnalysisDept() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/dept',
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOSetPromoDeptTreeVO>(interceptResponse)
}

/**
 * 首页指标
 */
export function getApiDataboardBoardPromoAnalysisHomeIndex() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/homeIndex',
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoAnalysisHomeIndexVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPromoAnalysisPromoListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    gmvBand?: Array<string>
    monthRange?: Array<string>
    pageNo?: number
    pageSize?: number
    promoDeptName?: string
    promoId?: number
    promoStatus?: number
    promoSubType?: number
    promoType?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 促销下钻
 */
export function getApiDataboardBoardPromoAnalysisPromoList(
  param: IGetApiDataboardBoardPromoAnalysisPromoListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/promoList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoAnalysisPromoResultVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPromoAnalysisPromoSkuListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    promoId?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 促销商品列表
 */
export function getApiDataboardBoardPromoAnalysisPromoSkuList(
  param: IGetApiDataboardBoardPromoAnalysisPromoSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/promoSkuList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOPromoAnalysisPromoSkuVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardPromoAnalysisSkuListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    gmvBand?: Array<string>
    monthRange?: Array<string>
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuId?: number
  }
}

/**
 * 商品下钻
 */
export function getApiDataboardBoardPromoAnalysisSkuList(
  param: IGetApiDataboardBoardPromoAnalysisSkuListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/skuList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoAnalysisSkuResultVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardReportTaskConfigIdParam {
  path?: {
    id?: number
  }
}

/**
 * 查看【报表任务】详情
 */
export function getApiDataboardBoardReportTaskConfigId(
  param: IGetApiDataboardBoardReportTaskConfigIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/config/:id',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOReportTaskShowVO>(interceptResponse)
}

export interface IDeleteApiDataboardBoardReportTaskDeleteBatchParam {
  body?: ReportTaskDeleteQO
}

/**
 * 批量删除【报表任务】
 */
export function deleteApiDataboardBoardReportTaskDeleteBatch(
  param: IDeleteApiDataboardBoardReportTaskDeleteBatchParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/deleteBatch',
    param,
  )
  option.method = 'delete'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardBoardReportTaskGetDetailLinkParam {
  query?: {
    id?: number
  }
}

/**
 * 获取明细链接
 */
export function getApiDataboardBoardReportTaskGetDetailLink(
  param: IGetApiDataboardBoardReportTaskGetDetailLinkParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/getDetailLink',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOString>(interceptResponse)
}

export interface IPostApiDataboardBoardReportTaskImportOldDataParam {
  body?: String
}

/**
 * 导出旧品策数据到新系统
 */
export function postApiDataboardBoardReportTaskImportOldData(
  param: IPostApiDataboardBoardReportTaskImportOldDataParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/importOldData',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardBoardReportTaskInstanceListParam {
  query?: {
    pageNo?: number
    pageSize?: number
    taskId?: number
  }
}

/**
 * 查看【报表任务】执行详情
 */
export function getApiDataboardBoardReportTaskInstanceList(
  param: IGetApiDataboardBoardReportTaskInstanceListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/instance/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOReportTaskInstanceVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardBoardReportTaskListParam {
  query?: {
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 分页查询【报表任务】
 */
export function getApiDataboardBoardReportTaskList(
  param: IGetApiDataboardBoardReportTaskListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOReportTaskListVO>(
    interceptResponse,
  )
}

export interface IPostApiDataboardBoardReportTaskRetryParam {
  body?: ReportRetryQO
}

/**
 * 手动触发【报表任务】
 */
export function postApiDataboardBoardReportTaskRetry(
  param: IPostApiDataboardBoardReportTaskRetryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/retry',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IPostApiDataboardBoardReportTaskSaveParam {
  body?: ReportTaskAddDTO
}

/**
 * 新增【报表任务】
 */
export function postApiDataboardBoardReportTaskSave(
  param: IPostApiDataboardBoardReportTaskSaveParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/save',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IPutApiDataboardBoardReportTaskUpdateParam {
  body?: ReportTaskUpdateDTO
}

/**
 * 修改【报表任务】
 */
export function putApiDataboardBoardReportTaskUpdate(
  param: IPutApiDataboardBoardReportTaskUpdateParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/update',
    param,
  )
  option.method = 'put'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IPostApiDataboardBoardReportTaskUpdateOldDataParam {
  body?: String
}

/**
 * 更新旧品策数据到新系统
 */
export function postApiDataboardBoardReportTaskUpdateOldData(
  param: IPostApiDataboardBoardReportTaskUpdateOldDataParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/reportTask/updateOldData',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardBoardSkuBlacklistParam {
  query?: {
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 分页查询【sku黑名单设置】
 */
export function getApiDataboardBoardSkuBlacklist(
  param: IGetApiDataboardBoardSkuBlacklistParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/skuBlacklist',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOSkuBlacklistListVO>(
    interceptResponse,
  )
}

export interface IPostApiDataboardBoardSkuBlacklistParam {
  body?: SkuBlacklistAddDTO
}

/**
 * 新增【sku黑名单设置】
 */
export function postApiDataboardBoardSkuBlacklist(
  param: IPostApiDataboardBoardSkuBlacklistParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/skuBlacklist',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IDeleteApiDataboardBoardSkuBlacklistParam {
  body?: SkuBlacklistDeleteQO
}

/**
 * 批量删除【sku黑名单设置】
 */
export function deleteApiDataboardBoardSkuBlacklist(
  param: IDeleteApiDataboardBoardSkuBlacklistParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/skuBlacklist',
    param,
  )
  option.method = 'delete'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardBoardSkuBlacklistExportParam {
  query?: {
    exportEmail?: string
  }
}

/**
 * 导出【sku黑名单设置】
 */
export function getApiDataboardBoardSkuBlacklistExport(
  param: IGetApiDataboardBoardSkuBlacklistExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/skuBlacklist/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

/**
 * 分页查询【重点品牌监控设置】
 */
export function getApiDataboardBoardTopBrand() {
  const [url, option] = interceptRequest('/api/databoard/board/topBrand')
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListTopBrandListVO>(interceptResponse)
}

export interface IPostApiDataboardBoardTopBrandParam {
  body: ListBrandVO
}

/**
 * 新增【重点品牌监控设置】
 */
export function postApiDataboardBoardTopBrand(
  param: IPostApiDataboardBoardTopBrandParam,
) {
  const [url, option] = interceptRequest('/api/databoard/board/topBrand', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IDeleteApiDataboardBoardTopBrandParam {
  path?: {
    id?: number
  }
  body: TopBrandDeleteQO
}

/**
 * 按id查询【重点品牌监控设置】
 */
export function deleteApiDataboardBoardTopBrand(
  param: IDeleteApiDataboardBoardTopBrandParam,
) {
  const [url, option] = interceptRequest('/api/databoard/board/topBrand', param)
  option.method = 'delete'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardPrestoTestSkuIdParam {
  path: {
    skuId: number
  }
}

/**
 * Presto测试
 */
export function getApiDataboardPrestoTestSkuId(
  param: IGetApiDataboardPrestoTestSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/prestoTest/:skuId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardPriceMarkdownSimulateCalcParam {
  query?: {
    bottomPrice?: number
    cleanDays?: number
    pageNo?: number
    pageSize?: number
    pointPrice?: number
    skuId?: number
    stockNum?: number
    targetQtty?: number
    topPrice?: number
  }
}

/**
 * 建议价格计算接口
 */
export function getApiDataboardPriceMarkdownSimulateCalc(
  param: IGetApiDataboardPriceMarkdownSimulateCalcParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/markdownSimulate/calc',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOMarkdownPriceCalcVO>(interceptResponse)
}

export interface IGetApiDataboardPriceMarkdownSimulateExportParam {
  query?: {
    endDt?: string
    pageNo?: number
    pageSize?: number
    skuId?: number
    startDt?: string
  }
  body: string
}

/**
 * 历史量价明细导出
 */
export function getApiDataboardPriceMarkdownSimulateExport(
  param: IGetApiDataboardPriceMarkdownSimulateExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/markdownSimulate/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IGetApiDataboardPriceMarkdownSimulateSaleParam {
  query?: {
    bottomPrice?: number
    cleanDays?: number
    pageNo?: number
    pageSize?: number
    pointPrice?: number
    skuId?: number
    stockNum?: number
    targetQtty?: number
    topPrice?: number
  }
}

/**
 * 量价关系模拟接口
 */
export function getApiDataboardPriceMarkdownSimulateSale(
  param: IGetApiDataboardPriceMarkdownSimulateSaleParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/markdownSimulate/sale',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOMarkdownSaleSimulateVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardPriceMarkdownSimulateTrendParam {
  query?: {
    bottomPrice?: number
    cleanDays?: number
    pageNo?: number
    pageSize?: number
    pointPrice?: number
    skuId?: number
    stockNum?: number
    targetQtty?: number
    topPrice?: number
  }
}

/**
 * 清理量趋势预测接口
 */
export function getApiDataboardPriceMarkdownSimulateTrend(
  param: IGetApiDataboardPriceMarkdownSimulateTrendParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/markdownSimulate/trend',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOMarkdownTrendSimulateVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardPriceMarkdownSimulateSkuIdParam {
  path: {
    skuId: number
  }
}

/**
 * 查询sku详情
 */
export function getApiDataboardPriceMarkdownSimulateSkuId(
  param: IGetApiDataboardPriceMarkdownSimulateSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/markdownSimulate/:skuId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOSimulateSkuVO>(interceptResponse)
}

export interface IGetApiDataboardPriceSaleSimulateExportParam {
  query?: {
    endDt?: string
    pageNo?: number
    pageSize?: number
    skuId?: number
    startDt?: string
  }
  body: string
}

/**
 * 历史量价明细导出
 */
export function getApiDataboardPriceSaleSimulateExport(
  param: IGetApiDataboardPriceSaleSimulateExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVO>(interceptResponse)
}

export interface IPostApiDataboardPriceSaleSimulateExportListSkuParam {
  body: SaleSimulateListQO
}

/**
 * 销售优化模拟商品列表（导出）
 */
export function postApiDataboardPriceSaleSimulateExportListSku(
  param: IPostApiDataboardPriceSaleSimulateExportListSkuParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/exportListSku',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardPriceSaleSimulateHistoryParam {
  query?: {
    endDt?: string
    pageNo?: number
    pageSize?: number
    skuId?: number
    startDt?: string
  }
}

/**
 * 历史数据明细
 */
export function getApiDataboardPriceSaleSimulateHistory(
  param: IGetApiDataboardPriceSaleSimulateHistoryParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/history',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListSkuHistoryDTO>(interceptResponse)
}

export interface IGetApiDataboardPriceSaleSimulateListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    gmvBand?: Array<string>
    monthPriceChange?: number
    pageNo?: number
    pageSize?: number
    potentialType?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuIds?: string
    sortType?: string
  }
}

/**
 * 分页查询【销售优化模拟商品列表】
 */
export function getApiDataboardPriceSaleSimulateList(
  param: IGetApiDataboardPriceSaleSimulateListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOSimulateSkuVO>(interceptResponse)
}

export interface IGetApiDataboardPriceSaleSimulateShowTableParam {
  query?: {
    endDate?: string
    maxPrice?: number
    maxPv?: number
    minPrice?: number
    minPv?: number
    pageNo?: number
    pageSize?: number
    skuId?: number
    startDate?: string
  }
}

/**
 * 按pv分段展示表格
 */
export function getApiDataboardPriceSaleSimulateShowTable(
  param: IGetApiDataboardPriceSaleSimulateShowTableParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/showTable',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListSaleSimulateTableVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardPriceSaleSimulateSimulateParam {
  query?: {
    endDate?: string
    maxPrice?: number
    maxPv?: number
    minPrice?: number
    minPv?: number
    pageNo?: number
    pageSize?: number
    skuId?: number
    startDate?: string
  }
}

/**
 * 销售优化模拟
 */
export function getApiDataboardPriceSaleSimulateSimulate(
  param: IGetApiDataboardPriceSaleSimulateSimulateParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/simulate',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOSaleSimulateVO>(interceptResponse)
}

export interface IGetApiDataboardPriceSaleSimulateSkuIdParam {
  path: {
    skuId: number
  }
}

/**
 * 查询sku详情
 */
export function getApiDataboardPriceSaleSimulateSkuId(
  param: IGetApiDataboardPriceSaleSimulateSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/price/saleSimulate/:skuId',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOSimulateSkuVO>(interceptResponse)
}

export interface IGetApiDataboardPromoRoExportParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    endDate?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    plan?: number
    promoSubType1?: number
    promoSubType2?: number
    promoType1?: number
    promoType2?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    startDate?: string
    threshold1?: string
    threshold2?: string
  }
}

/**
 * 选品导出【Get方法】
 */
export function getApiDataboardPromoRoExport(
  param: IGetApiDataboardPromoRoExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/ro/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IPostApiDataboardPromoRoExportParam {
  body: PromoRoQO
}

/**
 * 选品导出【Post方法】
 */
export function postApiDataboardPromoRoExport(
  param: IPostApiDataboardPromoRoExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/ro/export',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IPostApiDataboardPromoRoFindOverlayPromoParam {
  body: PromoOverlayRiskDTO
}

/**
 * 查询sku有叠加风险的其他促销
 */
export function postApiDataboardPromoRoFindOverlayPromo(
  param: IPostApiDataboardPromoRoFindOverlayPromoParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/ro/findOverlayPromo',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOListPromoResponse>(interceptResponse)
}

export interface IPostApiDataboardPromoRoFindOverlayRiskParam {
  body: PromoOverlayRiskDTO
}

/**
 * 查询sku是否有叠加其他促销风险
 */
export function postApiDataboardPromoRoFindOverlayRisk(
  param: IPostApiDataboardPromoRoFindOverlayRiskParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/ro/findOverlayRisk',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOMapLongBoolean>(interceptResponse)
}

export interface IGetApiDataboardPromoRoListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    endDate?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    plan?: number
    promoSubType1?: number
    promoSubType2?: number
    promoType1?: number
    promoType2?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    startDate?: string
    threshold1?: string
    threshold2?: string
  }
}

/**
 * 查询选品【Get方法】
 */
export function getApiDataboardPromoRoList(
  param: IGetApiDataboardPromoRoListParam,
) {
  const [url, option] = interceptRequest('/api/databoard/promo/ro/list', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoRoVO>(interceptResponse)
}

export interface IPostApiDataboardPromoRoListParam {
  body: PromoRoQO
}

/**
 * 查询选品【Post方法】
 */
export function postApiDataboardPromoRoList(
  param: IPostApiDataboardPromoRoListParam,
) {
  const [url, option] = interceptRequest('/api/databoard/promo/ro/list', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVOPromoRoVO>(interceptResponse)
}

export interface IGetApiDataboardPromoRoSubTypesParam {
  query: {
    promoType: number
  }
}

/**
 * 根据促销类型查询促销子类型列表
 */
export function getApiDataboardPromoRoSubTypes(
  param: IGetApiDataboardPromoRoSubTypesParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/ro/subTypes',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListSelectOptionVOInt>(
    interceptResponse,
  )
}

export interface IGetApiDataboardPromoSimulateExportParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    endDate?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    plan?: number
    promoSubType1?: number
    promoSubType2?: number
    promoType1?: number
    promoType2?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    startDate?: string
    threshold1?: string
    threshold2?: string
  }
}

/**
 * 模拟导出【Get方法】
 */
export function getApiDataboardPromoSimulateExport(
  param: IGetApiDataboardPromoSimulateExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/export',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IPostApiDataboardPromoSimulateExportParam {
  body: PromoRoQO
}

/**
 * 模拟导出【Post方法】
 */
export function postApiDataboardPromoSimulateExport(
  param: IPostApiDataboardPromoSimulateExportParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/export',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

export interface IGetApiDataboardPromoSimulateListParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    endDate?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    plan?: number
    promoSubType1?: number
    promoSubType2?: number
    promoType1?: number
    promoType2?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    startDate?: string
    threshold1?: string
    threshold2?: string
  }
}

/**
 * 效果模拟【Get方法】
 */
export function getApiDataboardPromoSimulateList(
  param: IGetApiDataboardPromoSimulateListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOPromoSimulateDetailVO>(
    interceptResponse,
  )
}

export interface IPostApiDataboardPromoSimulateListParam {
  body: PromoRoQO
}

/**
 * 效果模拟【Post方法】
 */
export function postApiDataboardPromoSimulateList(
  param: IPostApiDataboardPromoSimulateListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/list',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOPageVOPromoSimulateDetailVO>(
    interceptResponse,
  )
}

export interface IGetApiDataboardPromoSimulateSubTypesParam {
  query: {
    promoType: number
  }
}

/**
 * 根据促销类型查询促销子类型列表
 */
export function getApiDataboardPromoSimulateSubTypes(
  param: IGetApiDataboardPromoSimulateSubTypesParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/subTypes',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListSelectOptionVOInt>(
    interceptResponse,
  )
}

export interface IGetApiDataboardPromoSimulateTotalParam {
  query?: {
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: string
    deptLevel?: number
    endDate?: string
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
    plan?: number
    promoSubType1?: number
    promoSubType2?: number
    promoType1?: number
    promoType2?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    startDate?: string
    threshold1?: string
    threshold2?: string
  }
}

/**
 * 效果模拟汇总【Get方法】
 */
export function getApiDataboardPromoSimulateTotal(
  param: IGetApiDataboardPromoSimulateTotalParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/total',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPromoSimulateTotalVO>(interceptResponse)
}

export interface IPostApiDataboardPromoSimulateTotalParam {
  body: PromoRoQO
}

/**
 * 效果模拟汇总【Post方法】
 */
export function postApiDataboardPromoSimulateTotal(
  param: IPostApiDataboardPromoSimulateTotalParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/promo/simulate/total',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<ReplyVOPromoSimulateTotalVO>(interceptResponse)
}
