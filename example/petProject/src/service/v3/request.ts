/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
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
  if (process.env.NODE_ENV === 'test') {
    const mockData = ({
      code: '0',
      data: 'string',
      message: 'success',
    } as unknown) as GetApiLibraBoardExportDetailsResponseSuccess
    const mockRequest = function (
      option?: GetApiLibraBoardExportDetailsOption,
    ): Promise<GetApiLibraBoardExportDetailsResponseSuccess> {
      return Promise.resolve(mockData)
    }
    mockRequest.method = method
    mockRequest.url = url
    mockRequest.mockData = mockData
    return mockRequest
  }
  function request(
    option?: GetApiLibraBoardExportDetailsOption,
  ): Promise<GetApiLibraBoardExportDetailsResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardExportDetailsResponseSuccess>
  }

  request.method = method
  request.url = url
  request.mockData = (undefined as unknown) as any
  return request
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
  if (process.env.NODE_ENV === 'test') {
    const mockData = ({
      code: '0',
      data: {
        currentPage: 1,
        firstIndex: 0,
        lastIndex: 10,
        list: [
          {
            deliveryRate: 2.31,
            dimensionId: '122211',
            dimensionName: '蓝月亮',
            fixedRate: 2.31,
            gmv: 321112.31,
            gmvPercent: 15,
            grossProfitRate: 2.31,
            orderAvgPrice: 32.31,
            orderAvgPriceCM: -1.2,
            skuNum: 121,
            unitAvgPrice: 32.31,
            unitPriceCM: -1.4,
            variableRate: 2.31,
            warehouseRate: 2.31,
          },
        ],
        pageCount: 10,
        pageSize: 10,
        total: 100,
      },
      message: 'success',
    } as unknown) as GetApiLibraBoardListDetailResponseSuccess
    const mockRequest = function (
      option?: GetApiLibraBoardListDetailOption,
    ): Promise<GetApiLibraBoardListDetailResponseSuccess> {
      return Promise.resolve(mockData)
    }
    mockRequest.method = method
    mockRequest.url = url
    mockRequest.mockData = mockData
    return mockRequest
  }
  function request(
    option?: GetApiLibraBoardListDetailOption,
  ): Promise<GetApiLibraBoardListDetailResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListDetailResponseSuccess>
  }

  request.method = method
  request.url = url
  request.mockData = (undefined as unknown) as any
  return request
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
  if (process.env.NODE_ENV === 'test') {
    const mockData = ({
      code: '0',
      data: {
        curTaxRate: 2.31,
        deliveryRate: 2.31,
        dynamicParams: [
          { dynamicDeliveryRate: -1.1, dynamicWarehouseRate: -1.1, x: 1.2 },
        ],
        fixedRate: 2.31,
        orderAvgPrice: 32.31,
        unitAvgPrice: 32.31,
        unitPriceCM: -1.4,
        variableRate: 2.31,
        warehouseRate: 2.31,
      },
      message: 'success',
    } as unknown) as GetApiLibraBoardListMatrixResponseSuccess
    const mockRequest = function (
      option?: GetApiLibraBoardListMatrixOption,
    ): Promise<GetApiLibraBoardListMatrixResponseSuccess> {
      return Promise.resolve(mockData)
    }
    mockRequest.method = method
    mockRequest.url = url
    mockRequest.mockData = mockData
    return mockRequest
  }
  function request(
    option?: GetApiLibraBoardListMatrixOption,
  ): Promise<GetApiLibraBoardListMatrixResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListMatrixResponseSuccess>
  }

  request.method = method
  request.url = url
  request.mockData = (undefined as unknown) as any
  return request
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
  if (process.env.NODE_ENV === 'test') {
    const mockData = ({
      code: '0',
      data: [
        {
          base: true,
          baseDimension: '洗衣液',
          details: [
            {
              date: '2020-12',
              deliveryRate: 2.31,
              grossProfitRate: 2.31,
              orderAvgPrice: 32.31,
              orderAvgPriceCM: -1.2,
              unitPrice: 32.31,
              unitPriceCM: -1.4,
              warehouseRate: 2.31,
            },
          ],
          gmv: 321123,
        },
      ],
      message: 'success',
    } as unknown) as GetApiLibraBoardListProfitCurveResponseSuccess
    const mockRequest = function (
      option?: GetApiLibraBoardListProfitCurveOption,
    ): Promise<GetApiLibraBoardListProfitCurveResponseSuccess> {
      return Promise.resolve(mockData)
    }
    mockRequest.method = method
    mockRequest.url = url
    mockRequest.mockData = mockData
    return mockRequest
  }
  function request(
    option?: GetApiLibraBoardListProfitCurveOption,
  ): Promise<GetApiLibraBoardListProfitCurveResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListProfitCurveResponseSuccess>
  }

  request.method = method
  request.url = url
  request.mockData = (undefined as unknown) as any
  return request
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
  if (process.env.NODE_ENV === 'test') {
    const mockData = ({
      code: '0',
      data: {
        axisx: '[1,2.3,11.7]',
        axisy: '[1,2.3,11.7]',
        bubbles: [
          {
            base: true,
            bubbleId: '100211',
            bubbleName: '蓝月亮',
            contributionMargin: -1.1,
            gmv: 15122,
            gmvPercent: 15,
            xVal: 1.2,
            yVal: 1.2,
          },
        ],
      },
      message: 'success',
    } as unknown) as GetApiLibraBoardQueryBubblesResponseSuccess
    const mockRequest = function (
      option?: GetApiLibraBoardQueryBubblesOption,
    ): Promise<GetApiLibraBoardQueryBubblesResponseSuccess> {
      return Promise.resolve(mockData)
    }
    mockRequest.method = method
    mockRequest.url = url
    mockRequest.mockData = mockData
    return mockRequest
  }
  function request(
    option?: GetApiLibraBoardQueryBubblesOption,
  ): Promise<GetApiLibraBoardQueryBubblesResponseSuccess> {
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardQueryBubblesResponseSuccess>
  }

  request.method = method
  request.url = url
  request.mockData = (undefined as unknown) as any
  return request
})()
