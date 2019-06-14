import { interceptRequest, interceptResponse } from './interceptor'
import {
  CisMatchInfoDTO,
  CisSkuDTO,
  ReplyVOCisSkuShowVO,
  ReplyVOConfigVO,
  ReplyVOListOpponentSkuListVO,
  ReplyVOListOpponentVO,
  ReplyVOListPriceHistoryVO,
  ReplyVOPageVOCisSkuListVO,
  ReplyVOVoid,
  SkuMatchDTO,
} from './definitions'

interface IGetApiCompetitionOpponentParam {
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
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListOpponentVO>(interceptResponse)
}

interface IGetApiCompetitionSkuParam {
  query?: {
    blackListStatus?: boolean
    brandId?: number[]
    cid?: number[]
    cidLevel?: number
    deptId?: string[]
    deptLevel?: number
    endIndex?: number
    gmvBand?: string[]
    matchStatus?: boolean
    monitorStatus?: boolean
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    priceTag?: number
    priceType?: number
    pvBand?: string[]
    salerErp?: string
    salerErps?: string[]
    salesBand?: string[]
    skuId?: string
    skuIds?: number[]
    skuName?: string
    startIndex?: number
  }
}

/**
 * 分页查询【比价sku】
 */
export function getApiCompetitionSku(param: IGetApiCompetitionSkuParam) {
  const [url, option] = interceptRequest('/api/competition/sku', param)
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOCisSkuListVO>(interceptResponse)
}

interface IGetApiCompetitionSkuHistorySkuIdParam {
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
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListPriceHistoryVO>(interceptResponse)
}

interface IPostApiCompetitionSkuMatchParam {
  body: {
    cisMatchInfoDTO: CisMatchInfoDTO
  }
}

/**
 * 新增【比价匹配商品】
 */
export function postApiCompetitionSkuMatch(
  param: IPostApiCompetitionSkuMatchParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/match', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IDeleteApiCompetitionSkuMatchParam {
  body: {
    skuMatchDTO: SkuMatchDTO
  }
}

/**
 * 批量删除【比价匹配商品】
 */
export function deleteApiCompetitionSkuMatch(
  param: IDeleteApiCompetitionSkuMatchParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/match', param)
  option.method = 'delete'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IPostApiCompetitionSkuMatchBatchParam {
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
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IGetApiCompetitionSkuMatchSkuIdParam {
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
  option.method = 'get'
  return fetch(url, option).then<ReplyVOListOpponentSkuListVO>(
    interceptResponse,
  )
}

interface IGetApiCompetitionSkuMonitorParam {
  query?: {
    blackListStatus?: boolean
    brandId?: number[]
    cid?: number[]
    cidLevel?: number
    deptId?: string[]
    deptLevel?: number
    endIndex?: number
    gmvBand?: string[]
    matchStatus?: boolean
    monitorStatus?: boolean
    orderBy?: string
    orderType?: string
    pageNo?: number
    pageSize?: number
    priceTag?: number
    priceType?: number
    pvBand?: string[]
    salerErp?: string
    salerErps?: string[]
    salesBand?: string[]
    skuId?: string
    skuIds?: number[]
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
  option.method = 'get'
  return fetch(url, option).then<ReplyVOPageVOCisSkuListVO>(interceptResponse)
}

interface IPostApiCompetitionSkuMonitorParam {
  body: {
    cisSkuQO: CisSkuDTO
  }
}

/**
 * 批量新增【比价重点关注商品】
 */
export function postApiCompetitionSkuMonitor(
  param: IPostApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  option.method = 'post'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

interface IDeleteApiCompetitionSkuMonitorParam {
  body: {
    cisSkuQO: CisSkuDTO
  }
}

/**
 * 批量删除【比价重点关注商品】
 */
export function deleteApiCompetitionSkuMonitor(
  param: IDeleteApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  option.method = 'delete'
  return fetch(url, option).then<ReplyVOVoid>(interceptResponse)
}

/**
 * 查询监控提示【比价重点关注商品】
 */
export function getApiCompetitionSkuMonitorGetConfig() {
  const [url, option] = interceptRequest(
    '/api/competition/sku/monitor/getConfig',
  )
  option.method = 'get'
  return fetch(url, option).then<ReplyVOConfigVO>(interceptResponse)
}

interface IGetApiCompetitionSkuSkuIdParam {
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
  option.method = 'get'
  return fetch(url, option).then<ReplyVOCisSkuShowVO>(interceptResponse)
}
