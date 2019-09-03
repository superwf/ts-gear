import { interceptRequest, interceptResponse } from './interceptor'
import {
  ReplyVOListOpponentVO,
  ReplyVOPageVOCisSkuListVO,
  ReplyVOListPriceHistoryVO,
  CisMatchInfoDTO,
  ReplyVOVoid,
  SkuMatchDTO,
  ReplyVOListOpponentSkuListVO,
  CisSkuDTO,
  ReplyVOConfigVO,
  ReplyVOCisSkuShowVO,
} from './definitions'

export interface IGetApiCompetitionOpponentParam {
  query?: {
    skuId?: number
  }
}

/**
 * 查询【友商】
 */
export function getApiCompetitionOpponent(
  param: IGetApiCompetitionOpponentParam,
) {
  const [url, option] = interceptRequest('/api/competition/opponent', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: [{ opponentId: 1, opponentName: 1 }],
    message: 'success',
  }) as Promise<ReplyVOListOpponentVO>
}

export interface IGetApiCompetitionSkuParam {
  query?: {
    blackListStatus?: boolean
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: Array<string>
    deptLevel?: number
    endIndex?: number
    gmvBand?: Array<string>
    matchStatus?: boolean
    monitorStatus?: boolean
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    priceTag?: number
    priceType?: number
    pvBand?: Array<string>
    salerErp?: string
    salerErps?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    skuIds?: Array<number>
    skuName?: string
    startIndex?: number
  }
}

/**
 * 分页查询【比价sku】
 */
export function getApiCompetitionSku(param: IGetApiCompetitionSkuParam) {
  const [url, option] = interceptRequest('/api/competition/sku', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      entities: [
        {
          basePrice: 21.3,
          blackListStatus: true,
          cbj: 11.3,
          conversion: 0.11,
          dealPrice: 21.3,
          dealPriceLastTime: '2019-09-03T02:01:17.362Z',
          dealPriceMargin: 20,
          id: 1,
          imgUrl:
            'http://img10.360buyimg.com/imgzone/jfs/t1/14727/6/9505/734417/5c7e3b92E19e74a47/63e4c88feec73947.jpg',
          jdPrice: 19.3,
          matchStatus: true,
          monitorStatus: true,
          opponentMin: {
            attentionType: false,
            basePrice: 21.3,
            dealPrice: 21.3,
            id: 1,
            imgUrl:
              'https://imgservice.suning.cn/uimg1/b2c/image/lqNY4fOrFbXVxrciwQt01w.jpg_120w_120h_4e',
            opponentId: 1,
            opponentProductId: 1,
            opponentShopTypeName: '天猫旗舰店',
            opponentSkuId: '122200ddd',
            opponentSkuName: '海飞丝',
            opponentUpdatedTime: '2017-12-07 00:00:00',
            promoInfo: '满100-99',
            redPrice: 22.3,
            url: 'https://product.suning.com/0000000000/104549193.html',
          },
          priceTag: 1,
          promoInfo: '满100-99',
          pv: 122,
          redPrice: 22.3,
          redPriceMargin: -20,
          redPriceUpdatedTime: '2017-12-07 00:00:00',
          saleQtty: 11.2,
          salerErp: 'bjttt',
          skuId: 910151,
          skuName: '海飞丝',
          stock: 11.2,
          uv: 22,
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
  }) as Promise<ReplyVOPageVOCisSkuListVO>
}

export interface IGetApiCompetitionSkuHistorySkuIdParam {
  query?: {
    priceType?: number
  }
  path?: {
    skuId?: number
  }
}

/**
 * 查看【价格历史】详情
 */
export function getApiCompetitionSkuHistorySkuId(
  param: IGetApiCompetitionSkuHistorySkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/competition/sku/history/:skuId',
    param,
  )
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: [
      {
        opponentId: '天猫',
        opponentName: '天猫',
        prices: [{ date: '2017-12-07 00:00:00', price: 22.3 }],
        sku: '122200ddd',
      },
    ],
    message: 'success',
  }) as Promise<ReplyVOListPriceHistoryVO>
}

export interface IPostApiCompetitionSkuMatchParam {
  body: CisMatchInfoDTO
}

/**
 * 新增【比价匹配商品】
 */
export function postApiCompetitionSkuMatch(
  param: IPostApiCompetitionSkuMatchParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/match', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve({ code: '000000', message: 'success' }) as Promise<
    ReplyVOVoid
  >
}

export interface IDeleteApiCompetitionSkuMatchParam {
  body: SkuMatchDTO
}

/**
 * 批量删除【比价匹配商品】
 */
export function deleteApiCompetitionSkuMatch(
  param: IDeleteApiCompetitionSkuMatchParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/match', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}

export interface IPostApiCompetitionSkuMatchBatchParam {
  formData: {
    file: File
  }
}

/**
 * 批量新增【比价匹配商品】
 */
export function postApiCompetitionSkuMatchBatch(
  param: IPostApiCompetitionSkuMatchBatchParam,
) {
  const [url, option] = interceptRequest(
    '/api/competition/sku/match/batch',
    param,
  )
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetApiCompetitionSkuMatchSkuIdParam {
  path?: {
    skuId?: number
  }
}

/**
 * 查询【友商sku】
 */
export function getApiCompetitionSkuMatchSkuId(
  param: IGetApiCompetitionSkuMatchSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/competition/sku/match/:skuId',
    param,
  )
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: [
      {
        attentionType: false,
        dealPrice: 21.3,
        id: 1,
        imgUrl:
          'https://imgservice.suning.cn/uimg1/b2c/image/lqNY4fOrFbXVxrciwQt01w.jpg_120w_120h_4e',
        opponentId: 1,
        opponentName: 1,
        opponentProductId: 1,
        opponentSkuId: '122200ddd',
        opponentSkuName: '海飞丝',
        opponentUpdatedTime: '2017-12-07 00:00:00',
        promoInfo: '满100-99',
        redPrice: 22.3,
        url: 'https://product.suning.com/0000000000/104549193.html',
      },
    ],
    message: 'success',
  }) as Promise<ReplyVOListOpponentSkuListVO>
}

export interface IGetApiCompetitionSkuMonitorParam {
  query?: {
    blackListStatus?: boolean
    brandId?: Array<number>
    cid?: Array<number>
    cidLevel?: number
    deptId?: Array<string>
    deptLevel?: number
    endIndex?: number
    gmvBand?: Array<string>
    matchStatus?: boolean
    monitorStatus?: boolean
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    priceTag?: number
    priceType?: number
    pvBand?: Array<string>
    salerErp?: string
    salerErps?: Array<string>
    salesBand?: Array<string>
    skuId?: string
    skuIds?: Array<number>
    skuName?: string
    startIndex?: number
  }
}

/**
 * 分页查询【比价重点关注商品】
 */
export function getApiCompetitionSkuMonitor(
  param: IGetApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

export interface IPostApiCompetitionSkuMonitorParam {
  body: CisSkuDTO
}

/**
 * 批量新增【比价重点关注商品】
 */
export function postApiCompetitionSkuMonitor(
  param: IPostApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IDeleteApiCompetitionSkuMonitorParam {
  body: CisSkuDTO
}

/**
 * 批量删除【比价重点关注商品】
 */
export function deleteApiCompetitionSkuMonitor(
  param: IDeleteApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}

/**
 * 查询监控提示【比价重点关注商品】
 */
export function getApiCompetitionSkuMonitorGetConfig() {
  const [url, option] = interceptRequest(
    '/api/competition/sku/monitor/getConfig',
  )
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: { hour: 0, num: 0 },
    message: 'success',
  }) as Promise<ReplyVOConfigVO>
}

export interface IGetApiCompetitionSkuSkuIdParam {
  path?: {
    skuId?: number
  }
}

/**
 * 查看【比价sku】详情
 */
export function getApiCompetitionSkuSkuId(
  param: IGetApiCompetitionSkuSkuIdParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/:skuId', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    code: '000000',
    data: {
      basePrice: 21.3,
      blackListStatus: true,
      cbj: 11.3,
      conversion: 0.11,
      dealPrice: 21.3,
      dealPriceLastTime: '2019-09-03T02:01:17.386Z',
      dealPriceMargin: 20,
      id: 1,
      imgUrl:
        'http://img10.360buyimg.com/imgzone/jfs/t1/14727/6/9505/734417/5c7e3b92E19e74a47/63e4c88feec73947.jpg',
      jdPrice: 19.3,
      matchStatus: true,
      monitorStatus: true,
      priceTag: 1,
      promoInfo: '满100-99',
      pv: 122,
      redPrice: 22.3,
      redPriceMargin: -20,
      redPriceUpdatedTime: '2017-12-07 00:00:00',
      saleQtty: 11.2,
      salerErp: 'bjttt',
      skuId: 910151,
      skuName: '海飞丝',
      stock: 11.2,
      uv: 22,
    },
    message: 'success',
  }) as Promise<ReplyVOCisSkuShowVO>
}
