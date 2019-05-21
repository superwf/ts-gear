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
import { interceptRequest, interceptResponse } from './fetchInterceptor'

interface IGetApiCompetitionOpponentParam {
  query?: {
    skuId?: number
  }
}

type IGetApiCompetitionOpponentResponse = ReplyVOListOpponentVO
export function getApiCompetitionOpponent(
  param: IGetApiCompetitionOpponentParam,
) {
  const [url, option] = interceptRequest('/api/competition/opponent', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionOpponentResponse>(
    interceptResponse,
  )
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

type IGetApiCompetitionSkuResponse = ReplyVOPageVOCisSkuListVO
export function getApiCompetitionSku(param: IGetApiCompetitionSkuParam) {
  const [url, option] = interceptRequest('/api/competition/sku', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionSkuResponse>(
    interceptResponse,
  )
}

interface IGetApiCompetitionSkuHistorySkuIdParam {
  query?: {
    priceType?: number
  }
  path?: {
    skuId?: number
  }
}

type IGetApiCompetitionSkuHistorySkuIdResponse = ReplyVOListPriceHistoryVO
export function getApiCompetitionSkuHistorySkuId(
  param: IGetApiCompetitionSkuHistorySkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/competition/sku/history/{skuId}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionSkuHistorySkuIdResponse>(
    interceptResponse,
  )
}

interface IPostApiCompetitionSkuMatchParam {
  body: {
    cisMatchInfoDTO: CisMatchInfoDTO
  }
}

type IPostApiCompetitionSkuMatchResponse = ReplyVOVoid
export function postApiCompetitionSkuMatch(
  param: IPostApiCompetitionSkuMatchParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/match', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiCompetitionSkuMatchResponse>(
    interceptResponse,
  )
}

interface IDeleteApiCompetitionSkuMatchParam {
  body: {
    skuMatchDTO: SkuMatchDTO
  }
}

type IDeleteApiCompetitionSkuMatchResponse = ReplyVOVoid
export function deleteApiCompetitionSkuMatch(
  param: IDeleteApiCompetitionSkuMatchParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/match', param)
  option.method = 'delete'
  return fetch(url, option).then<IDeleteApiCompetitionSkuMatchResponse>(
    interceptResponse,
  )
}

interface IPostApiCompetitionSkuMatchBatchParam {
  formData: {
    file: File
  }
}

type IPostApiCompetitionSkuMatchBatchResponse = ReplyVOVoid
export function postApiCompetitionSkuMatchBatch(
  param: IPostApiCompetitionSkuMatchBatchParam,
) {
  const [url, option] = interceptRequest(
    '/api/competition/sku/match/batch',
    param,
  )
  option.method = 'post'
  return fetch(url, option).then<IPostApiCompetitionSkuMatchBatchResponse>(
    interceptResponse,
  )
}

interface IGetApiCompetitionSkuMatchSkuIdParam {
  path?: {
    skuId?: number
  }
}

type IGetApiCompetitionSkuMatchSkuIdResponse = ReplyVOListOpponentSkuListVO
export function getApiCompetitionSkuMatchSkuId(
  param: IGetApiCompetitionSkuMatchSkuIdParam,
) {
  const [url, option] = interceptRequest(
    '/api/competition/sku/match/{skuId}',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionSkuMatchSkuIdResponse>(
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

type IGetApiCompetitionSkuMonitorResponse = ReplyVOPageVOCisSkuListVO
export function getApiCompetitionSkuMonitor(
  param: IGetApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionSkuMonitorResponse>(
    interceptResponse,
  )
}

interface IPostApiCompetitionSkuMonitorParam {
  body: {
    cisSkuQO: CisSkuDTO
  }
}

type IPostApiCompetitionSkuMonitorResponse = ReplyVOVoid
export function postApiCompetitionSkuMonitor(
  param: IPostApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  option.method = 'post'
  return fetch(url, option).then<IPostApiCompetitionSkuMonitorResponse>(
    interceptResponse,
  )
}

interface IDeleteApiCompetitionSkuMonitorParam {
  body: {
    cisSkuQO: CisSkuDTO
  }
}

type IDeleteApiCompetitionSkuMonitorResponse = ReplyVOVoid
export function deleteApiCompetitionSkuMonitor(
  param: IDeleteApiCompetitionSkuMonitorParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/monitor', param)
  option.method = 'delete'
  return fetch(url, option).then<IDeleteApiCompetitionSkuMonitorResponse>(
    interceptResponse,
  )
}

type IGetApiCompetitionSkuMonitorGetConfigResponse = ReplyVOConfigVO
export function getApiCompetitionSkuMonitorGetConfig() {
  const [url, option] = interceptRequest(
    '/api/competition/sku/monitor/getConfig',
  )
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionSkuMonitorGetConfigResponse>(
    interceptResponse,
  )
}

interface IGetApiCompetitionSkuSkuIdParam {
  path?: {
    skuId?: number
  }
}

type IGetApiCompetitionSkuSkuIdResponse = ReplyVOCisSkuShowVO
export function getApiCompetitionSkuSkuId(
  param: IGetApiCompetitionSkuSkuIdParam,
) {
  const [url, option] = interceptRequest('/api/competition/sku/{skuId}', param)
  option.method = 'get'
  return fetch(url, option).then<IGetApiCompetitionSkuSkuIdResponse>(
    interceptResponse,
  )
}
