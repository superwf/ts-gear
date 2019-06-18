import { interceptRequest, interceptResponse } from './interceptor'
import {
  EsIndexAddDTO,
  ReplyVOInt,
  ReplyVOVoid,
  ReplyVOChartResultVOPriceCompeteChartListVO,
  ReplyVOPriceCompeteSumVO,
  ReplyVOListPriceEcAnalysisBrandVO,
  ReplyVOListPriceEcAnalysisCatVO,
  ReplyVOListPriceEcAnalysisDeptVO,
  ReplyVOPriceEcAnalysisHomeIndexVO,
  ReplyVOListPriceEcAnalysisSalerVO,
  ReplyVOPriceEcAnalysisTopVO,
  ReplyVOChartResultVOPriceHonestChartListVO,
  ReplyVOListPriceHonestSkuListVO,
  ReplyVOPriceHonestSumVO,
  ReplyVOChartResultVOPriceWaveChartListVO,
  ReplyVOListPriceWaveSkuListVO,
  ReplyVOPriceWaveSumVO,
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

interface IPostApiDataboardBoardEsCreateIndexParam {
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

interface IDeleteApiDataboardBoardEsDelIndexParam {
  body?: Array<string>
}

/**
 * 删除索引
 */
export function deleteApiDataboardBoardEsDelIndex(
  param: IDeleteApiDataboardBoardEsDelIndexParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/es/delIndex',
    param,
  )
  option.method = 'delete'
  return fetch(url, option).then<ReplyVOInt>(interceptResponse)
}

interface IGetApiDataboardBoardPriceCompeteExportChartParam {
  query?: {
    cidLevel?: number
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    opponentCode?: string
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
  body: string
}

/**
 * 图表导出
 */
export function getApiDataboardBoardPriceCompeteExportChart(
  param: IGetApiDataboardBoardPriceCompeteExportChartParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/exportChart',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IGetApiDataboardBoardPriceCompeteListParam {
  query?: {
    cidLevel?: number
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    opponentCode?: string
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 图表查询【价格竞争力-图表、列表】
 */
export function getApiDataboardBoardPriceCompeteList(
  param: IGetApiDataboardBoardPriceCompeteListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceCompete/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOChartResultVOPriceCompeteChartListVO>(
    interceptResponse,
  )
}

interface IGetApiDataboardBoardPriceCompeteShowSummaryParam {
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

interface IGetApiDataboardBoardPriceEcAnalysisBrandListParam {
  query?: {
    deptLevel?: number
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
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

interface IGetApiDataboardBoardPriceEcAnalysisCatListParam {
  query?: {
    catLevel?: number
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
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

interface IGetApiDataboardBoardPriceEcAnalysisDeptListParam {
  query?: {
    deptLevel?: number
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
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

interface IGetApiDataboardBoardPriceEcAnalysisSalerListParam {
  query?: {
    gmvBand?: Array<string>
    pageNo?: number
    pageSize?: number
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

interface IGetApiDataboardBoardPriceHonestExportChartParam {
  query?: {
    cidLevel?: number
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
  body: string
}

/**
 * 图表导出
 */
export function getApiDataboardBoardPriceHonestExportChart(
  param: IGetApiDataboardBoardPriceHonestExportChartParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/exportChart',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IGetApiDataboardBoardPriceHonestExportListSkuParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
  body: string
}

/**
 * 查看更多（导出）
 */
export function getApiDataboardBoardPriceHonestExportListSku(
  param: IGetApiDataboardBoardPriceHonestExportListSkuParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/exportListSku',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IGetApiDataboardBoardPriceHonestListParam {
  query?: {
    cidLevel?: number
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 图表查询【价格诚信度-图表、列表】
 */
export function getApiDataboardBoardPriceHonestList(
  param: IGetApiDataboardBoardPriceHonestListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOChartResultVOPriceHonestChartListVO>(
    interceptResponse,
  )
}

interface IGetApiDataboardBoardPriceHonestListSkuParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询T+1sku数据【价格竞争力T+1数据(sku部分)】
 */
export function getApiDataboardBoardPriceHonestListSku(
  param: IGetApiDataboardBoardPriceHonestListSkuParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHonest/listSku',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceHonestSkuListVO>(
    interceptResponse,
  )
}

interface IGetApiDataboardBoardPriceHonestShowSummaryParam {
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

interface IGetApiDataboardBoardPriceWaveExportChartParam {
  query?: {
    cidLevel?: number
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
  body: string
}

/**
 * 图表导出
 */
export function getApiDataboardBoardPriceWaveExportChart(
  param: IGetApiDataboardBoardPriceWaveExportChartParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/exportChart',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IGetApiDataboardBoardPriceWaveListParam {
  query?: {
    cidLevel?: number
    deptLevel?: number
    dtype?: string
    gmvBand?: Array<string>
    menuType?: number
    pageNo?: number
    pageSize?: number
    pvBand?: Array<string>
    salesBand?: Array<string>
  }
}

/**
 * 图表查询【价格波动性-图表、列表】
 */
export function getApiDataboardBoardPriceWaveList(
  param: IGetApiDataboardBoardPriceWaveListParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/list',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOChartResultVOPriceWaveChartListVO>(
    interceptResponse,
  )
}

interface IGetApiDataboardBoardPriceWaveListSkuParam {
  query?: {
    dtype?: string
    pageNo?: number
    pageSize?: number
  }
}

/**
 * 查询时间段内sku数据【价格波动性-时间段内数据(sku部分)】
 */
export function getApiDataboardBoardPriceWaveListSku(
  param: IGetApiDataboardBoardPriceWaveListSkuParam,
) {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceWave/listSku',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceWaveSkuListVO>(
    interceptResponse,
  )
}

interface IGetApiDataboardBoardPriceWaveShowSummaryParam {
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

interface IGetApiDataboardBoardPromoAnalysisBenchmarkingParam {
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

interface IGetApiDataboardBoardPromoAnalysisChartParam {
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

interface IGetApiDataboardBoardPromoAnalysisPromoListParam {
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

interface IGetApiDataboardBoardPromoAnalysisPromoSkuListParam {
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

interface IGetApiDataboardBoardPromoAnalysisSkuListParam {
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

interface IGetApiDataboardBoardReportTaskConfigIdParam {
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

interface IDeleteApiDataboardBoardReportTaskDeleteBatchParam {
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

interface IGetApiDataboardBoardReportTaskInstanceListParam {
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

interface IGetApiDataboardBoardReportTaskListParam {
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

interface IPostApiDataboardBoardReportTaskRetryParam {
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

interface IPostApiDataboardBoardReportTaskSaveParam {
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

interface IPutApiDataboardBoardReportTaskUpdateParam {
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

interface IGetApiDataboardBoardSkuBlacklistParam {
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

interface IPostApiDataboardBoardSkuBlacklistParam {
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

interface IDeleteApiDataboardBoardSkuBlacklistParam {
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

interface IGetApiDataboardBoardSkuBlacklistExportParam {
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

interface IPostApiDataboardBoardTopBrandParam {
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

interface IDeleteApiDataboardBoardTopBrandParam {
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

interface IGetApiDataboardPriceMarkdownSimulateCalcParam {
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

interface IGetApiDataboardPriceMarkdownSimulateExportParam {
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

interface IGetApiDataboardPriceMarkdownSimulateSaleParam {
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

interface IGetApiDataboardPriceMarkdownSimulateTrendParam {
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

interface IGetApiDataboardPriceMarkdownSimulateSkuIdParam {
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

interface IGetApiDataboardPriceSaleSimulateExportParam {
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

interface IGetApiDataboardPriceSaleSimulateHistoryParam {
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

interface IGetApiDataboardPriceSaleSimulateListParam {
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

interface IGetApiDataboardPriceSaleSimulateShowTableParam {
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

interface IGetApiDataboardPriceSaleSimulateSimulateParam {
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

interface IGetApiDataboardPriceSaleSimulateSkuIdParam {
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

interface IGetApiDataboardPromoRoExportParam {
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

interface IPostApiDataboardPromoRoExportParam {
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

interface IPostApiDataboardPromoRoFindOverlayPromoParam {
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

interface IPostApiDataboardPromoRoFindOverlayRiskParam {
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

interface IGetApiDataboardPromoRoListParam {
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

interface IPostApiDataboardPromoRoListParam {
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

interface IGetApiDataboardPromoRoSubTypesParam {
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

interface IGetApiDataboardPromoSimulateExportParam {
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

interface IPostApiDataboardPromoSimulateExportParam {
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

interface IGetApiDataboardPromoSimulateListParam {
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

interface IPostApiDataboardPromoSimulateListParam {
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

interface IGetApiDataboardPromoSimulateSubTypesParam {
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

interface IGetApiDataboardPromoSimulateTotalParam {
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

interface IPostApiDataboardPromoSimulateTotalParam {
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
