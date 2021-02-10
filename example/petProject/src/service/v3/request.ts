/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { requester as requester } from 'fffxx'
import type {
  GetApiLibraBoardExportDetailsBaseDimension,
  GetApiLibraBoardExportDetailsCompareDimension,
  GetApiLibraBoardExportDetailsPriceType,
  GetApiLibraBoardListDetailBaseDimension,
  GetApiLibraBoardListDetailCompareDimension,
  GetApiLibraBoardListDetailPriceType,
  GetApiLibraBoardListMatrixBaseDimension,
  GetApiLibraBoardListMatrixCompareDimension,
  GetApiLibraBoardListMatrixPriceType,
  GetApiLibraBoardListProfitCurveBaseDimension,
  GetApiLibraBoardListProfitCurveCompareDimension,
  GetApiLibraBoardListProfitCurvePriceType,
  GetApiLibraBoardQueryBubblesBaseDimension,
  GetApiLibraBoardQueryBubblesCompareDimension,
  GetApiLibraBoardQueryBubblesPriceType,
  ReplyVOTsgString,
  ReplyVO,
  PageVO,
  DetailListVO,
  MatrixPointVO,
  ReplyVOListProfitCurveListVO,
  BubbleShowVO,
} from './definition'

/** request parameter type for getApiLibraBoardExportDetails */
interface GetApiLibraBoardExportDetailsOption {
  query?: {
    areaIds?: string
    areaLevel?: number
    baseDimension?: GetApiLibraBoardExportDetailsBaseDimension
    brandIds?: string
    cidLevel?: number
    cids?: string
    compareDimension?: GetApiLibraBoardExportDetailsCompareDimension
    dateType?: string
    deptIds?: string
    deptLevel?: number
    endIndex?: number
    endTimeStr?: string
    /**
        分页参数，第几页 */
    pageNo?: number
    /**
        分页参数，每页的条数 */
    pageSize?: number
    priceType?: GetApiLibraBoardExportDetailsPriceType
    startIndex?: number
    startTimeStr?: string
    warehouses?: string
  }
}

interface GetApiLibraBoardExportDetailsResponse {
  /** OK */
  200: ReplyVOTsgString
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type GetApiLibraBoardExportDetailsResponseSuccess = GetApiLibraBoardExportDetailsResponse[200]
/**
 * 导出对标明细数据
 * tags: 净利矩阵api
 */
export const getApiLibraBoardExportDetails = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/api/libra/board/exportDetails'
  function getApiLibraBoardExportDetails(
    option?: GetApiLibraBoardExportDetailsOption,
  ): Promise<GetApiLibraBoardExportDetailsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardExportDetailsResponseSuccess>
  }

  getApiLibraBoardExportDetails.method = method
  getApiLibraBoardExportDetails.url = url
  return getApiLibraBoardExportDetails
})()

/** request parameter type for getApiLibraBoardListDetail */
interface GetApiLibraBoardListDetailOption {
  query?: {
    areaIds?: string
    areaLevel?: number
    baseDimension?: GetApiLibraBoardListDetailBaseDimension
    brandIds?: string
    cidLevel?: number
    cids?: string
    compareDimension?: GetApiLibraBoardListDetailCompareDimension
    dateType?: string
    deptIds?: string
    deptLevel?: number
    endIndex?: number
    endTimeStr?: string
    /**
        分页参数，第几页 */
    pageNo?: number
    /**
        分页参数，每页的条数 */
    pageSize?: number
    priceType?: GetApiLibraBoardListDetailPriceType
    startIndex?: number
    startTimeStr?: string
    warehouses?: string
  }
}

interface GetApiLibraBoardListDetailResponse {
  /** OK */
  200: ReplyVO<PageVO<DetailListVO>>
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type GetApiLibraBoardListDetailResponseSuccess = GetApiLibraBoardListDetailResponse[200]
/**
 * 分页查询对标明细
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListDetail = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/api/libra/board/listDetail'
  function getApiLibraBoardListDetail(
    option?: GetApiLibraBoardListDetailOption,
  ): Promise<GetApiLibraBoardListDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListDetailResponseSuccess>
  }

  getApiLibraBoardListDetail.method = method
  getApiLibraBoardListDetail.url = url
  return getApiLibraBoardListDetail
})()

/** request parameter type for getApiLibraBoardListMatrix */
interface GetApiLibraBoardListMatrixOption {
  query?: {
    areaIds?: string
    areaLevel?: number
    base?: boolean
    baseDimension?: GetApiLibraBoardListMatrixBaseDimension
    brandIds?: string
    bubbleId?: string
    cidLevel?: number
    cids?: string
    compareDimension?: GetApiLibraBoardListMatrixCompareDimension
    dateType?: string
    deptIds?: string
    deptLevel?: number
    endIndex?: number
    endTimeStr?: string
    /**
        分页参数，第几页 */
    pageNo?: number
    /**
        分页参数，每页的条数 */
    pageSize?: number
    priceType?: GetApiLibraBoardListMatrixPriceType
    startIndex?: number
    startTimeStr?: string
    warehouses?: string
  }
}

interface GetApiLibraBoardListMatrixResponse {
  /** OK */
  200: ReplyVO<MatrixPointVO>
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type GetApiLibraBoardListMatrixResponseSuccess = GetApiLibraBoardListMatrixResponse[200]
/**
 * 获取矩阵散点值
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListMatrix = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/api/libra/board/listMatrix'
  function getApiLibraBoardListMatrix(
    option?: GetApiLibraBoardListMatrixOption,
  ): Promise<GetApiLibraBoardListMatrixResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListMatrixResponseSuccess>
  }

  getApiLibraBoardListMatrix.method = method
  getApiLibraBoardListMatrix.url = url
  return getApiLibraBoardListMatrix
})()

/** request parameter type for getApiLibraBoardListProfitCurve */
interface GetApiLibraBoardListProfitCurveOption {
  query?: {
    areaIds?: string
    areaLevel?: number
    baseDimension?: GetApiLibraBoardListProfitCurveBaseDimension
    brandIds?: string
    cidLevel?: number
    cids?: string
    compareDimension?: GetApiLibraBoardListProfitCurveCompareDimension
    dateType?: string
    deptIds?: string
    deptLevel?: number
    endIndex?: number
    endTimeStr?: string
    /**
        分页参数，第几页 */
    pageNo?: number
    /**
        分页参数，每页的条数 */
    pageSize?: number
    priceType?: GetApiLibraBoardListProfitCurvePriceType
    startIndex?: number
    startTimeStr?: string
    warehouses?: string
  }
}

interface GetApiLibraBoardListProfitCurveResponse {
  /** OK */
  200: ReplyVOListProfitCurveListVO
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type GetApiLibraBoardListProfitCurveResponseSuccess = GetApiLibraBoardListProfitCurveResponse[200]
/**
 * 获取净利波动曲线
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListProfitCurve = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/api/libra/board/listProfitCurve'
  function getApiLibraBoardListProfitCurve(
    option?: GetApiLibraBoardListProfitCurveOption,
  ): Promise<GetApiLibraBoardListProfitCurveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListProfitCurveResponseSuccess>
  }

  getApiLibraBoardListProfitCurve.method = method
  getApiLibraBoardListProfitCurve.url = url
  return getApiLibraBoardListProfitCurve
})()

/** request parameter type for getApiLibraBoardQueryBubbles */
interface GetApiLibraBoardQueryBubblesOption {
  query?: {
    areaIds?: string
    areaLevel?: number
    baseDimension?: GetApiLibraBoardQueryBubblesBaseDimension
    brandIds?: string
    cidLevel?: number
    cids?: string
    compareDimension?: GetApiLibraBoardQueryBubblesCompareDimension
    dateType?: string
    deptIds?: string
    deptLevel?: number
    endIndex?: number
    endTimeStr?: string
    /**
        分页参数，第几页 */
    pageNo?: number
    /**
        分页参数，每页的条数 */
    pageSize?: number
    priceType?: GetApiLibraBoardQueryBubblesPriceType
    startIndex?: number
    startTimeStr?: string
    warehouses?: string
  }
}

interface GetApiLibraBoardQueryBubblesResponse {
  /** OK */
  200: ReplyVO<BubbleShowVO>
  /** Unauthorized */
  401: any
  /** Forbidden */
  403: any
  /** Not Found */
  404: any
}

type GetApiLibraBoardQueryBubblesResponseSuccess = GetApiLibraBoardQueryBubblesResponse[200]
/**
 * 查询净利平衡矩阵气泡
 * tags: 净利矩阵api
 */
export const getApiLibraBoardQueryBubbles = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/api/libra/board/queryBubbles'
  function getApiLibraBoardQueryBubbles(
    option?: GetApiLibraBoardQueryBubblesOption,
  ): Promise<GetApiLibraBoardQueryBubblesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardQueryBubblesResponseSuccess>
  }

  getApiLibraBoardQueryBubbles.method = method
  getApiLibraBoardQueryBubbles.url = url
  return getApiLibraBoardQueryBubbles
})()
