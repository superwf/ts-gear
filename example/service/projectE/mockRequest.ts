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

const { info } = console

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
  info('mock fetch: ', url)
  option.method = 'delete'
  return Promise.resolve(
    new Response('{"code":"000000","data":0,"message":"success"}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<ReplyVOInt>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"chartData":[{"avgPriceHighDegree":12.5,"avgPriceLowDegree":12.5,"brandId":3290,"brandName":"飞利浦（PHILIPS）","cid":1011,"cidName":"手机","deptId":2789,"deptName":"电脑数码事业部","dtime":"2019-01-01","flatNum":906,"flatRate":35.5,"matchRate":34.5,"matchSkuNum":2604,"priceCompetePoint":107.38,"priceHighNum":698,"priceHighRate":27.5,"priceLowNum":1000,"priceLowRate":38.5,"saleSkuNum":7566,"salerErp":"gaozong1","salerName":"高宗"}],"dtime":"string","dtype":"string"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOChartResultVOPriceCompeteChartListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response('{"code":"000000","message":"success"}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<ReplyVOVoid>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"avgPriceHighDegree":0.12,"dtime":"2019-01-01","flatSkuNum":906,"flatSkuRate":0.35,"matchRate":0.34,"matchSkuNum":2604,"priceHighSkuNum":698,"priceHighSkuRate":0.27,"priceLowSkuNum":1000,"priceLowSkuRate":0.38,"saleSkuNum":7566},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPriceCompeteSumVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"avgPriceHighDegree":12.5,"cbj":11,"cost":11,"dtime":"2019-01-01","erpPrice":11,"gmvBand":"B","jdRedPrice":11,"matchNum":1,"opponentCode":"tmall_suning_flagship","opponentName":"全天猫","opponentRedPrice":11,"opponentSkuId":1,"opponentUrl":1,"pv":1111,"skuId":11001,"skuName":"可比克薯片","upPriceFlag":1}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceCompeteSkuDetailVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"avgPriceHighDegree":12.5,"brandId":3290,"brandName":"飞利浦（PHILIPS）","buId":2789,"buName":"XXX事业群","cid1":1011,"cid1Name":"手机","cid2":1011,"cid2Name":"手机","cid3":1011,"cid3Name":"手机","deptId1":2789,"deptId2":2789,"deptId3":2789,"deptName1":"电脑数码事业部","deptName2":"电脑数码事业部","deptName3":"电脑数码事业部","dtime":"2019-09-01","dtype":"D","gmvBand":"B","opponentCode":"tmall_suning_flagship","opponentName":"全天猫","priceCompeteAbove":107.38,"priceCompeteBelow":107.38,"priceCompetePoint":107.38,"priceHighDayNum":698,"priceHighRate":27.5,"pvBand":"C","salerErp":"zhangsan","salerName":"张三","salesBand":"A","skuDtMatchNum":2604,"skuDtNum":100,"skuId":1101001,"skuName":"杜蕾斯-哇偶"}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOPriceCompeteSkuListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"brandId":10001,"brandName":"可比克","deptId":1,"deptName":"xxx","doubleCount":100,"gmvCount":100,"gpCount":100,"otherCount":100,"potentialRate":100,"skuCount":100}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceEcAnalysisBrandVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"cid":1,"cname":"xxx","doubleCount":100,"gmvCount":100,"gpCount":100,"otherCount":100,"potentialRate":100,"skuCount":100}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceEcAnalysisCatVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"deptId":1,"deptName":"xxx","doubleCount":100,"gmvCount":100,"gpCount":100,"otherCount":100,"potentialRate":100,"skuCount":100}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceEcAnalysisDeptVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"brandId":10001,"brandName":"可比克","cid":101,"cid1":101,"cid2":202,"cid3":303,"cname":"薯片","cname1":"薯片","cname2":"薯片","cname3":"薯片","cost":100,"ecBand":1,"gmv":10000,"gmvBand":"A","gp":100,"imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","pvBand":"A","redPrice":19.9,"salerErp":"zhangsan","sales":100,"salesBand":"A","skuId":1001,"skuName":"可比克薯片"}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceEcAnalysisTopItemVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

/**
 * 首页指标
 */
export function getApiDataboardBoardPriceEcAnalysisHomeIndex() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/homeIndex',
  )
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"doubleCount":100,"ecCount":100,"ecHighCount":100,"ecLowCount":100,"gmvCount":100,"gpCount":100,"potentialCount":100,"updatedDate":"2018-01-01"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPriceEcAnalysisHomeIndexVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"doubleCount":100,"gmvCount":100,"gpCount":100,"otherCount":100,"potentialRate":100,"salerErp":"gaozong1","salerName":"高宗","skuCount":100}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceEcAnalysisSalerVO>(interceptResponse)
}

/**
 * 3个top1
 */
export function getApiDataboardBoardPriceEcAnalysisTop() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceEcAnalysis/top',
  )
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response('{"code":"000000","data":{},"message":"success"}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<ReplyVOPriceEcAnalysisTopVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"entities":[{"avgPromoDays":22.33,"avgWaveNum":22.33,"brandId":11001,"brandName":"品牌品类","buId":11001,"buName":"3C事业群","competePoint":22.33,"deptId1":11001,"deptId2":11001,"deptId3":11001,"deptName1":"一级部门","deptName2":"二级部门","deptName3":"三级部门","jdAvgWeightRiseRangeDown":22.33,"jdAvgWeightRiseRangeUp":22.33,"matchSkuNum":100,"priceHighDegree":22.33,"priceHighSkuNum":100,"priceHighSkuRate":22.33,"promoRate":22.33,"promoSkuNum":100,"promoUpPriceDegree":22.33,"promoUpPriceRate":22.33,"promoUpPriceSkuNum":100,"saleSkuNum":100,"skuCoverRate":22.33,"wavePoint":22.33,"waveRate":22.33,"waveSkuNum":22.33,"wciDown":22.33,"wciUp":22.33,"wpiDown":22.33,"wpiUp":22.33}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<PageVOPriceHealthBrandAnalysisListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response('{}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<BodyBuilder>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"entities":[{"avgPromoDays":22.33,"avgWaveNum":22.33,"buId":11001,"buName":"3C事业群","cid1":11001,"cid1Name":"一级品类","cid2":11001,"cid2Name":"二级品类","cid3":11001,"cid3Name":"三级品类","competePoint":22.33,"deptId1":11001,"deptId2":11001,"deptId3":11001,"deptName1":"一级部门","deptName2":"二级部门","deptName3":"三级部门","jdAvgWeightRiseRangeDown":22.33,"jdAvgWeightRiseRangeUp":22.33,"matchSkuNum":100,"priceHighDegree":22.33,"priceHighSkuNum":100,"priceHighSkuRate":22.33,"promoRate":22.33,"promoSkuNum":100,"promoUpPriceDegree":22.33,"promoUpPriceRate":22.33,"promoUpPriceSkuNum":100,"saleSkuNum":100,"skuCoverRate":22.33,"wavePoint":22.33,"waveRate":22.33,"waveSkuNum":22.33,"wciDown":22.33,"wciUp":22.33,"wpiDown":22.33,"wpiUp":22.33}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<PageVOPriceHealthCategoryAnalysisListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"entities":[{"avgPromoDays":22.33,"avgWaveNum":22.33,"buId":11001,"buName":"3C事业群","competePoint":22.33,"deptId1":11001,"deptId2":11001,"deptId3":11001,"deptName1":"一级部门","deptName2":"二级部门","deptName3":"三级部门","jdAvgWeightRiseRangeDown":22.33,"jdAvgWeightRiseRangeUp":22.33,"matchSkuNum":100,"priceHighDegree":22.33,"priceHighSkuNum":100,"priceHighSkuRate":22.33,"promoRate":22.33,"promoSkuNum":100,"promoUpPriceDegree":22.33,"promoUpPriceRate":22.33,"promoUpPriceSkuNum":100,"saleSkuNum":100,"skuCoverRate":22.33,"wavePoint":22.33,"waveRate":22.33,"waveSkuNum":22.33,"wciDown":22.33,"wciUp":22.33,"wpiDown":22.33,"wpiUp":22.33}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<PageVOPriceHealthDeptAnalysisListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"priceHealthCompeteVO":{"cGtSkuNum":500,"cGtSkuRatio":0.23,"cGtSkuRatioCmprLast":0.23,"cGtSkuRatioCmprSame":0.23,"cJdSkuNum":137895,"cMatchSkuNum":898,"cWpi":0.23,"cWpiCmprLast":0.23,"cWpiCmprSame":0.23},"priceHealthHonestVO":{"hJdSkuNum":137895,"hPmoJdJoinRatio":0.23,"hPmoJdRiseSkuNum":898,"hPmoJdSkuNum":500,"hPmoRiseRange":0.23,"hPmoRiseRangeCmprLast":0.23,"hPmoRiseRangeCmprSame":0.23,"hPmoRiseRatio":0.23,"hPmoRiseRatioCmprLast":0.23,"hPmoRiseRatioCmprSame":0.23},"priceHealthWaveVO":{"wAvgNum":0.23,"wAvgNumCmprLast":0.23,"wAvgNumCmprSame":0.23,"wJdSkuNum":137895,"wSkuNum":898,"wWci":0.23,"wWciCmprLast":0.23,"wWciCmprSame":0.23}}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<GlobalAnalysisIndexVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"basePrice":22.22,"endTime":"2019-01-01 14:00:00","jdPrice":22.22,"redPrice":11.22,"startTime":"2019-01-01 12:00:00"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<SkuPriceHistoryItemVO>(interceptResponse)
}

/**
 * 价格指数表现
 */
export function getApiDataboardBoardPriceHealthPriceIndexAnalysis() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/priceIndexAnalysis',
  )
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"idxName":"价格指数名称","prices":[{"catgId":"分类编码","catgName":"分类名称","val":0.23,"valCmprLast":0.23,"valCmprSame":0.23}],"valYearCur":0.23,"valYearLast":0.23}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<PriceHealthIndexListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"entities":[{"avgPromoDays":22.33,"avgWaveNum":22.33,"buId":11001,"buName":"3C事业群","competePoint":22.33,"deptId1":11001,"deptId2":11001,"deptId3":11001,"deptName1":"一级部门","deptName2":"二级部门","deptName3":"三级部门","jdAvgWeightRiseRangeDown":22.33,"jdAvgWeightRiseRangeUp":22.33,"matchSkuNum":100,"priceHighDegree":22.33,"priceHighSkuNum":100,"priceHighSkuRate":22.33,"promoRate":22.33,"promoSkuNum":100,"promoUpPriceDegree":22.33,"promoUpPriceRate":22.33,"promoUpPriceSkuNum":100,"saleSkuNum":100,"salerErp":"zhangsan","salerName":"张三","skuCoverRate":22.33,"wavePoint":22.33,"waveRate":22.33,"waveSkuNum":22.33,"wciDown":22.33,"wciUp":22.33,"wpiDown":22.33,"wpiUp":22.33}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<PageVOPriceHealthSalerAnalysisListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"gmvBand":"A","skuDetailItems":[{"avgAlterPriceNum":22.22,"avgPriceGtRange":22.22,"avgPromoDays":2,"basePrice":22.22,"cbj":22.22,"dt":"2019-09-26","gmv":22.22,"honestScore":22.22,"jdAvgWeightRiseRange":0.56,"jdCouponFlag":"是","jdGtStatus":false,"jdPrice":22.22,"jdPriceAlterNum":2,"jdPromoRaiseFlag":false,"jdTotalFlag":"是","msAlterNum":2,"partnerRedPrice":22.22,"pv":10001,"pvRatio":22.22,"rebackJdPriceNum":2,"redPrice":22.22,"redPriceInfo":[{"dtime":"2019-01-01","endTime":"2019-01-01 14:00:00","priceFlag":"1跟价,2系统调价,3人工调价","redPrice":11.22,"skuId":11001,"startTime":"2019-01-01 12:00:00"}],"saleQtty":22,"saleStatus":"是","sgAlterNum":2,"skuPriceAlterNum":2,"stkPrc":22.22,"uv":22,"wciScore":22.22,"wpiScore":22.22}],"skuId":1001,"skuName":"三只松鼠休闲零食"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<SkuDetailVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"entities":[{"avgPriceGtRange":0.23,"avgPromoDays":2.3,"avgWaveNum":22.33,"basePrice":25,"brandName":"飞利浦（PHILIPS）","buName":"XXX事业群","cid1Name":"手机","cid2Name":"手机","cid3Name":"手机","deptName1":"电脑数码事业部","deptName2":"电脑数码事业部","deptName3":"电脑数码事业部","dt":"2019-09-26","gmv":10000.44,"gmvBand":"A","healthScore":22.33,"honestScore":22.33,"jdAvgWeightRiseRange":0.56,"jdAvgWeightRiseRangeDown":23,"jdAvgWeightRiseRangeUp":23,"jdPriceAlterNum":23,"jdPromoRate":23,"jdPromoSkuDtNum":23,"jdRisePriceRatio":0.56,"jdRisePriceSkuDtNum":23,"msAlterNum":23,"partnerUnionName":"天猫国际","priceGtNum":23,"priceHighSkuRate":22.33,"pvBand":"A","pvRatio":0.56,"rebackJdPriceNum":23,"saleQtty":10000,"salerErp":"zhangsan","salesBand":"A","sgAlterNum":23,"skuDtMatchNum":23,"skuDtNum":23,"skuId":1001,"skuMatchRate":0.23,"skuName":"三只松鼠休闲零食","skuPriceAlterNum":23,"uv":1000,"wci":0.56,"wciDown":2.3,"wciScore":22.33,"wciUp":0.23,"wpi":0.56,"wpiDown":0.23,"wpiScore":22.33,"wpiUp":0.23}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<PageVOSkuListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '[{"band":"A","cidName":"手机","deptName":"电脑数码事业部","risePriceRangeList":[0],"risePriceRatioList":[0],"wciList":[0],"wpiList":[0]}]',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<GetApiDataboardBoardPriceHealthYearHistoryResponse>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

type GetApiDataboardBoardPriceHealthYearHistoryMonthDtResponse = Array<string>
/**
 * 查询【年度历史月dt】
 */
export function getApiDataboardBoardPriceHealthYearHistoryMonthDt() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/priceHealth/yearHistoryMonthDt',
  )
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response('["string"]', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<GetApiDataboardBoardPriceHealthYearHistoryMonthDtResponse>(
    interceptResponse,
  )
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"chartData":[{"avgUpPriceDegree":33.5,"brandId":3290,"brandName":"飞利浦（PHILIPS）","cid":1011,"cidName":"手机","deptId":2789,"deptName":"电脑数码事业部","dtime":"2019-01-01","notUpPromoPriceNum":1486,"promoNum":2000,"promoRate":77.5,"promoSkuNum":2000,"promoUpPriceNumDown":400,"promoUpPriceNumUp":114,"promoUpPriceRate":57.5,"saleSkuNum":2604,"salerErp":"gaozong1","salerName":"高宗"}],"dtime":"string","dtype":"string"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOChartResultVOPriceHonestChartListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"dtime":"2019-01-01","promoRate":77.5,"promoSkuNum":2000,"promoUpPriceRate":70.5,"promoUpPriceSkuNum":114,"saleSkuNum":2604,"upPriceDegree":33.5},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPriceHonestSumVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"avgUpPriceDegree":33.5,"basePrice":57.5,"couponStatus":1,"dtime":"2019-01-01","gmvBand":"B","jdPromoRaiseFlag":1,"pv":1101001,"redPrice":57.5,"saleNum":1,"skuId":11001,"skuName":"可比克薯片","totalPromoStatus":1}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceHonestSkuDetailVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"avgUpPriceDegree":33.5,"avgUpPriceDegreeAbove":57.5,"avgUpPriceDegreeBelow":57.5,"basePrice":57.5,"brandId":3290,"brandName":"飞利浦（PHILIPS）","buId":2789,"buName":"XXX事业群","cid1":1011,"cid1Name":"手机","cid2":1011,"cid2Name":"手机","cid3":1011,"cid3Name":"手机","deptId1":2789,"deptId2":2789,"deptId3":2789,"deptName1":"电脑数码事业部","deptName2":"电脑数码事业部","deptName3":"电脑数码事业部","dtime":"2019-09-01","dtype":"D","gmvBand":"B","jdPromoSkuDtNum":100,"promoUpPriceDayNumUp":57.5,"promoUpPriceRate":57.5,"pvBand":"C","salerErp":"zhangsan","salerName":"张三","salesBand":"A","skuDtNum":100,"skuId":1101001,"skuName":"杜蕾斯-哇偶"}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOPriceHonestSkuListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"basePrice":19.92,"brandId":19,"brandName":"良品铺子","gmvBand":"B","imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","promoIds":"111,222,333","promoResultList":12.9,"pvBand":"C","redPrice":19.92,"salesBand":"A","skuId":1300239,"upPriceDegree":0.25}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceHonestSkuTopVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"chartData":[{"adjustPriceNum1":1000,"adjustPriceNum2":600,"adjustPriceNum3":47,"adjustPriceNumRate1":61.5,"adjustPriceNumRate2":36.5,"adjustPriceNumRate3":3.5,"brandId":3290,"brandName":"飞利浦（PHILIPS）","cid":1011,"cidName":"手机","deptId":2789,"deptName":"电脑数码事业部","dtime":"2019-01-01","priceWaveRate":0.03,"saleNum":1647,"salerErp":"gaozong1","salerName":"高宗"}],"dtime":"string","dtype":"string"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOChartResultVOPriceWaveChartListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"adjustPriceSkuNum":10,"avgSkuUpPriceNum":32,"dtimeEnd":"2019-01-10","dtimeStart":"2019-01-01","personAdjustPriceNum":4,"personAdjustPriceTotalNum":4,"priceWaveRate":0.4,"saleSkuNum":1647,"sysAdjustPriceNum":18,"sysAdjustPriceTotalNum":18,"sysFollowPriceNum":10,"sysFollowPriceTotalNum":10,"upPriceSkuNum":1647,"upPriceSkuNum1":1000,"upPriceSkuNum2":600,"upPriceSkuRate":5.5},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPriceWaveSumVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"callErpPriceNum":100,"dtime":"2019-01-01","erpPrice":100,"gmvBand":"B","jdPriceAdjustNum":100,"msAdjustNum":100,"priceWaveDegree":100.1,"pv":1101001,"redPriceInfo":[null],"saleNum":1,"shangouAdjustNum":100,"singleAdjustNum":100,"skuId":11001,"skuName":"可比克薯片","totalWaveNum":100}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceWaveSkuDetailVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"brandId":3290,"brandName":"飞利浦（PHILIPS）","buId":2789,"buName":"XXX事业群","cid1":1011,"cid1Name":"手机","cid2":1011,"cid2Name":"手机","cid3":1011,"cid3Name":"手机","deptId1":2789,"deptId2":2789,"deptId3":2789,"deptName1":"电脑数码事业部","deptName2":"电脑数码事业部","deptName3":"电脑数码事业部","dtime":"2019-09-01","dtype":"D","gmvBand":"B","priceWaveAbove":0.03,"priceWaveBelow":20,"priceWaveRate":0.03,"pvBand":"C","salerErp":"zhangsan","salerName":"张三","salesBand":"A","skuDtNum":100,"skuId":1101001,"skuName":"杜蕾斯-哇偶","totalWaveNum":100}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOPriceWaveSkuListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"priceName":"京东价","prices":[{"chgDate":"2019-09-02 00:00:00","price":19.9}],"skuId":100001}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListSkuPriceChgVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"adjustPriceTotalNum":32,"brandId":19,"brandName":"良品铺子","cost":100,"ec":0.02,"ecTag":0.02,"gmvBand":"B","imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","personAdjustPriceNum":4,"potentialType":1,"potentialTypeDesc":1,"pvBand":"C","redPrice":19.95,"salesBand":"A","skuId":1300239,"sysAdjustPriceNum":18,"sysFollowPriceNum":10}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPriceWaveSkuTopVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"pureIncrementalRate":20,"realDiscount":20,"roi":1},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoAnalysisSumVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"chart1":{"list":[{"children":[null],"gmv":10000,"gmvRate":40,"name":"有效促销","sales":100,"type":1}]},"chart2":{"list":[{"avgDiscount":20,"baselineGmv":100,"cannGmv":100,"children":[null],"discountGmv":100,"haloGmv":100,"name":"有效促销","pureIncremental":20,"pureIncrementalRate":20,"roi":30,"type":1,"upliftGmv":100}]},"chart3":{"list":[null]},"lastUpdate":"2019-01-01"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoAnalysisChartVO>(interceptResponse)
}

/**
 * 获取所有部门
 */
export function getApiDataboardBoardPromoAnalysisDept() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/dept',
  )
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"children":[null],"level":1,"name":"ABC"}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOSetPromoDeptTreeVO>(interceptResponse)
}

/**
 * 首页指标
 */
export function getApiDataboardBoardPromoAnalysisHomeIndex() {
  const [url, option] = interceptRequest(
    '/api/databoard/board/promoAnalysis/homeIndex',
  )
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"endTime":"2018-01-01","incrementalRate":30,"promoCount":10,"promoInvalidCount":2,"promoNegativeCount":3,"promoPositiveCount":5,"roi":30,"skuCount":1000,"skuInvalidCount":200,"skuNegativeCount":300,"skuPositiveCount":500,"startTime":"2018-01-01"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoAnalysisHomeIndexVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"page":{"entities":[{"createdBy":"zhangsan","dataEndTime":"2019-01-01","dataStartTime":"2019-01-01","deptName":"xxx","parentQtty":200,"promoEndTime":"2019-01-01","promoGmv":20000,"promoGmvRate":"67%","promoId":1,"promoName":"蝴蝶节","promoStartTime":"2019-01-01","promoStatus":1,"promoStatusDesc":"已结束","promoSubType":101,"promoSubTypeDesc":"秒杀","promoType":1,"promoTypeDesc":"单品促销","pureIncrementalRate":20,"realDiscount":20,"roi":1,"singlePrice":200,"skuCount":1000,"skuInvalidCount":200,"skuNegativeCount":300,"threshold":"300-30","thresholdDesc":"每满300减30","totalGmv":30000,"uv":200,"uvValue":200}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoAnalysisPromoResultVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"avgRedPrice":200,"baselinePrice":200,"brandId":10001,"brandName":"可比克","cid":101,"cid1":101,"cid2":202,"cid3":303,"cname":"薯片","cname1":"薯片","cname2":"薯片","cname3":"薯片","gmvBand":"A","imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","itemPrice":200,"priceHike":false,"promoFlag":1,"promoGmv":20000,"pureIncrementalRate":20,"pvBand":"A","realDiscount":20,"roi":1,"salerErp":"zhangsan","sales":100,"salesBand":"A","skuId":1001,"skuName":"可比克薯片"}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOPromoAnalysisPromoSkuVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"page":{"entities":[{"brandId":10001,"brandName":"可比克","cid":101,"cid1":101,"cid2":202,"cid3":303,"cname":"薯片","cname1":"薯片","cname2":"薯片","cname3":"薯片","deptId":1,"deptName":"xxx","gmvBand":"A","imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","itemPrice":200,"promoCount":10,"promoGmv":20000,"promoGmvRate":"67%","promoInvalidCount":2,"promoNegativeCount":3,"pureIncrementalRate":20,"pvBand":"A","realDiscount":20,"roi":1,"salerErp":"zhangsan","sales":100,"salesBand":"A","skuId":1001,"skuName":"可比克薯片","totalGmv":30000}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10}},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoAnalysisSkuResultVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"beginDate":"2018-12-12","ccMail":"zhang@jd.com","deptUnionId":"0_100_1100","enabled":0,"endDate":"2018-12-20","id":1,"opponentUnionId":"tmall_shop","priceType":0,"sendTime":"9:00","templateType":0,"timeType":0,"timingType":0,"toMail":"zhangbo65@jd.com"},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOReportTaskShowVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'delete'
  return Promise.resolve(
    new Response('{"code":"000000","data":{},"message":"success"}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<ReplyVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response('{"code":"000000","data":"string","message":"success"}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<ReplyVOString>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"beginTime":"2019-03-23 10:45:38","endTime":"2019-03-23 10:45:38","id":1,"planTime":"2019-03-23 10:45:38","remark":"促销提价个数环比数据校验异常","status":1,"taskId":1,"type":1}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOReportTaskInstanceVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"beginDate":"2018-12-12","ccMail":"zhang@jd.com","createdBy":"admin","createdTime":"2017-12-07 00:00:00","deptName":"消费品事业部","deptUnionId":"0_10_11","enabled":0,"endDate":"2018-12-20","id":1,"operatedBy":"admin","operatedTime":"修改时间【yyyy-MM-dd HH:mm:ss】","opponentName":"天猫超市","opponentUnionId":"tmall_shop","sendTime":"9:00","templateType":0,"timeType":0,"timingType":0,"toMail":"zhangbo65@jd.com"}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOReportTaskListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'put'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"createdBy":"张三","createdTime":"2019-09-03T00:00:00.000Z","createdTimeStr":"2018-12-01 20:12:12","deptName1":"家电事业部","deptName2":"手机业务部","deptName3":"测试三级部门（勿用）","skuId":110011}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOSkuBlacklistListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

/**
 * 分页查询【重点品牌监控设置】
 */
export function getApiDataboardBoardTopBrand() {
  const [url, option] = interceptRequest('/api/databoard/board/topBrand')
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"brandId":1,"brandName":1,"id":1}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListTopBrandListVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"calcWarnMsg":"建议价格低于价格约束的最低价，无法在指定日期完成清滞","markdownPriceCalcDetailVOS":[{"gmv":990,"gp":90,"priceDesc":"高概率达成清滞目标，降价幅度较大","priceType":"80%清滞可能性","saleQtty":123,"suggestPrice":9.9}],"skuId":100086},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOMarkdownPriceCalcVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"markdownSaleSimulateDetailVOS":[{"avgQtty":5.6,"dealPrice":19.8,"maxQtty":9,"minQtty":3}],"points":[{"avgRedPrice":0,"dealPrice":0,"dt":"string","lastRedPrice":0,"maxRedPrice":0,"minRedPrice":0,"ordQtty":0,"pv":0,"regularPrice":0,"saleQtty":0,"skuId":0,"uv":0}],"skuId":100086},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOMarkdownSaleSimulateVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"avgDealPrice28":58.8,"avgSales28":7.8,"finishDays":31,"forecastAvgSales":43.5,"meanPrice":33.6,"minDealPrice28":43.5,"pointPrice":35.6,"simulateTrend":[{"dtOrder":2,"waitQtty":600}],"skuId":100086,"suggestPrice":34.6},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOMarkdownTrendSimulateVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"avgMonthDealPrice":58.8,"avgMonthSaleQtty":7.8,"brandId":10001,"brandName":"可比克","cbj":9.9,"cid":101,"cid1":101,"cid2":202,"cid3":303,"cname":"薯片","cname1":"薯片","cname2":"薯片","cname3":"薯片","dayAdjustPriceNum":5,"ec":-5.6,"ecTag":"高，低","erpPrice":29.9,"gmv7":10000.9,"gmvBand":"A","gp7":-113.5,"imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","minMonthDealPrice":43.5,"monthAdjustPriceNum":5,"naturalMonthAdjustPriceNum":5,"potentialType":"1，2，3，4","potentialTypeDesc":"无弹性无法计算销售潜力","pvBand":"A","redPrice":19.9,"saleQtty7":567,"salerErp":"zhangsan","salesBand":"A","skuId":1001,"skuName":"可比克薯片","stockQtty":6000,"weekAdjustPriceNum":5},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOSimulateSkuVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response('{"code":"000000","data":[null],"message":"success"}', {
      headers: { 'Content-Type': 'application/json' },
    }),
  ).then<ReplyVOListSkuHistoryDTO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[null],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOSimulateSkuVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"avgDealPrice":19.8,"avgGmv":590.89,"avgGp":-13.5,"avgOrdQtty":17.8,"avgSaleQtty":19.8,"dealPriceRange":"1000~2000","pvConversionRate":0.056,"pvRange":"1000~2000","skuId":100023,"uvConversionRate":0.046}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListSaleSimulateTableVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"cbj":0,"drawPoints":[{"dealPrice":19.8,"pv":999,"saleQtty":37,"type":0}],"lineData":[null],"maxPv":2000,"minPv":2000,"skuId":100023},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOSaleSimulateVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"adWord":"string","checkState":0,"deleteState":true,"levelMember":0,"promoExtType":0,"promoId":0,"promoName":"string","promoState":0,"promoType":0,"remark":"string","sites":[0],"source":0,"timeBegin":"2019-09-03T00:00:00.000Z","timeEnd":"2019-09-03T00:00:00.000Z"}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListPromoResponse>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"additionalProp1":true,"additionalProp2":true,"additionalProp3":true},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOMapLongBoolean>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"blackSize":0,"blacklist":[{"baselinePrice":100,"blacklistRate":10,"brandId":10001,"brandName":"可比克","cid":101,"cid1":101,"cid2":202,"cid3":303,"cname":"薯片","cname1":"薯片","cname2":"薯片","cname3":"薯片","cost":100,"gmvBand":"A","hikeRatio":10,"hikeRisk":true,"imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","jdPrice":100,"overlayRisk":true,"pvBand":"A","realDiscount":10,"redPrice":100,"salerErp":"zhangsan","salesBand":"A","skuId":1001,"skuName":"可比克薯片","stock":100,"stockTurnoverDay":10}],"fakeSize":0,"fakelist":[null],"whiteSize":0,"whitelist":[null]},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoRoVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":[{"label":"string","value":0}],"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOListSelectOptionVOInt>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"entities":[{"baselineGmv":10000,"baselinePrice":100,"baselineSales":100,"brandId":10001,"brandName":"可比克","cid":101,"cid1":101,"cid2":202,"cid3":303,"cname":"薯片","cname1":"薯片","cname2":"薯片","cname3":"薯片","cost":100,"gmvBand":"A","gmvSimulation":10000,"gpSimulation":2000,"hikeRatio":10,"hikeRisk":true,"imgPath":"jfs/t1/24612/24/11553/102913/5c9055caE6402c10a/a76d038aed78e11e.jpg","jdPrice":100,"overlayRisk":true,"pvBand":"A","realDiscount":10,"redPrice":100,"salerErp":"zhangsan","salesBand":"A","salesSimulation":100,"skuId":1001,"skuName":"可比克薯片","stock":100,"stockTurnoverDay":10}],"entityCount":100,"firstEntityIndex":0,"lastEntityIndex":10,"pageCount":10,"pageNo":1,"pageSize":10},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPageVOPromoSimulateDetailVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve(
    new Response(
      '{"code":"000000","data":{"gmvSimulation":10000,"salesSimulation":100},"message":"success"}',
      {
        headers: { 'Content-Type': 'application/json' },
      },
    ),
  ).then<ReplyVOPromoSimulateTotalVO>(interceptResponse)
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}
