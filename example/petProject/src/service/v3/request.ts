/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { requester as requester } from "fffxx";
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
} from "./definition";

/** request parameter type for getApiLibraBoardExportDetails */
export interface GetApiLibraBoardExportDetailsOption {
  query?: {
    areaIds?: string;
    areaLevel?: number;
    baseDimension?: GetApiLibraBoardExportDetailsBaseDimension;
    brandIds?: string;
    cidLevel?: number;
    cids?: string;
    compareDimension?: GetApiLibraBoardExportDetailsCompareDimension;
    dateType?: string;
    deptIds?: string;
    deptLevel?: number;
    endIndex?: number;
    endTimeStr?: string;
    /**
        分页参数，第几页 */
    pageNo?: number;
    /**
        分页参数，每页的条数 */
    pageSize?: number;
    priceType?: GetApiLibraBoardExportDetailsPriceType;
    startIndex?: number;
    startTimeStr?: string;
    warehouses?: string;
  };
}

export interface GetApiLibraBoardExportDetailsResponse {
  /** OK */
  200: ReplyVOTsgString;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
  /** Not Found */
  404: any;
}

export type GetApiLibraBoardExportDetailsResponseSuccess = GetApiLibraBoardExportDetailsResponse[200];
export const getApiLibraBoardExportDetailsMockData = ({
  code: "0",
  data: "string",
  message: "success",
} as unknown) as GetApiLibraBoardExportDetailsResponseSuccess;
/**
 * 导出对标明细数据
 * tags: 净利矩阵api
 */
export const getApiLibraBoardExportDetails = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/libra/board/exportDetails";
  function getApiLibraBoardExportDetails(
    option?: GetApiLibraBoardExportDetailsOption
  ): Promise<GetApiLibraBoardExportDetailsResponseSuccess> {
    if (process.env.NODE_ENV === "test") {
      return Promise.resolve(getApiLibraBoardExportDetailsMockData);
    }
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardExportDetailsResponseSuccess>;
  }

  getApiLibraBoardExportDetails.method = method;
  getApiLibraBoardExportDetails.url = url;
  return getApiLibraBoardExportDetails;
})();

/** request parameter type for getApiLibraBoardListDetail */
export interface GetApiLibraBoardListDetailOption {
  query?: {
    areaIds?: string;
    areaLevel?: number;
    baseDimension?: GetApiLibraBoardListDetailBaseDimension;
    brandIds?: string;
    cidLevel?: number;
    cids?: string;
    compareDimension?: GetApiLibraBoardListDetailCompareDimension;
    dateType?: string;
    deptIds?: string;
    deptLevel?: number;
    endIndex?: number;
    endTimeStr?: string;
    /**
        分页参数，第几页 */
    pageNo?: number;
    /**
        分页参数，每页的条数 */
    pageSize?: number;
    priceType?: GetApiLibraBoardListDetailPriceType;
    startIndex?: number;
    startTimeStr?: string;
    warehouses?: string;
  };
}

export interface GetApiLibraBoardListDetailResponse {
  /** OK */
  200: ReplyVO<PageVO<DetailListVO>>;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
  /** Not Found */
  404: any;
}

export type GetApiLibraBoardListDetailResponseSuccess = GetApiLibraBoardListDetailResponse[200];
export const getApiLibraBoardListDetailMockData = ({
  code: "0",
  data: {
    currentPage: 1,
    firstIndex: 0,
    lastIndex: 10,
    list: [
      {
        deliveryRate: 2.31,
        dimensionId: "122211",
        dimensionName: "蓝月亮",
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
  message: "success",
} as unknown) as GetApiLibraBoardListDetailResponseSuccess;
/**
 * 分页查询对标明细
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListDetail = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/libra/board/listDetail";
  function getApiLibraBoardListDetail(
    option?: GetApiLibraBoardListDetailOption
  ): Promise<GetApiLibraBoardListDetailResponseSuccess> {
    if (process.env.NODE_ENV === "test") {
      return Promise.resolve(getApiLibraBoardListDetailMockData);
    }
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListDetailResponseSuccess>;
  }

  getApiLibraBoardListDetail.method = method;
  getApiLibraBoardListDetail.url = url;
  return getApiLibraBoardListDetail;
})();

/** request parameter type for getApiLibraBoardListMatrix */
export interface GetApiLibraBoardListMatrixOption {
  query?: {
    areaIds?: string;
    areaLevel?: number;
    base?: boolean;
    baseDimension?: GetApiLibraBoardListMatrixBaseDimension;
    brandIds?: string;
    bubbleId?: string;
    cidLevel?: number;
    cids?: string;
    compareDimension?: GetApiLibraBoardListMatrixCompareDimension;
    dateType?: string;
    deptIds?: string;
    deptLevel?: number;
    endIndex?: number;
    endTimeStr?: string;
    /**
        分页参数，第几页 */
    pageNo?: number;
    /**
        分页参数，每页的条数 */
    pageSize?: number;
    priceType?: GetApiLibraBoardListMatrixPriceType;
    startIndex?: number;
    startTimeStr?: string;
    warehouses?: string;
  };
}

export interface GetApiLibraBoardListMatrixResponse {
  /** OK */
  200: ReplyVO<MatrixPointVO>;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
  /** Not Found */
  404: any;
}

export type GetApiLibraBoardListMatrixResponseSuccess = GetApiLibraBoardListMatrixResponse[200];
export const getApiLibraBoardListMatrixMockData = ({
  code: "0",
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
  message: "success",
} as unknown) as GetApiLibraBoardListMatrixResponseSuccess;
/**
 * 获取矩阵散点值
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListMatrix = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/libra/board/listMatrix";
  function getApiLibraBoardListMatrix(
    option?: GetApiLibraBoardListMatrixOption
  ): Promise<GetApiLibraBoardListMatrixResponseSuccess> {
    if (process.env.NODE_ENV === "test") {
      return Promise.resolve(getApiLibraBoardListMatrixMockData);
    }
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListMatrixResponseSuccess>;
  }

  getApiLibraBoardListMatrix.method = method;
  getApiLibraBoardListMatrix.url = url;
  return getApiLibraBoardListMatrix;
})();

/** request parameter type for getApiLibraBoardListProfitCurve */
export interface GetApiLibraBoardListProfitCurveOption {
  query?: {
    areaIds?: string;
    areaLevel?: number;
    baseDimension?: GetApiLibraBoardListProfitCurveBaseDimension;
    brandIds?: string;
    cidLevel?: number;
    cids?: string;
    compareDimension?: GetApiLibraBoardListProfitCurveCompareDimension;
    dateType?: string;
    deptIds?: string;
    deptLevel?: number;
    endIndex?: number;
    endTimeStr?: string;
    /**
        分页参数，第几页 */
    pageNo?: number;
    /**
        分页参数，每页的条数 */
    pageSize?: number;
    priceType?: GetApiLibraBoardListProfitCurvePriceType;
    startIndex?: number;
    startTimeStr?: string;
    warehouses?: string;
  };
}

export interface GetApiLibraBoardListProfitCurveResponse {
  /** OK */
  200: ReplyVOListProfitCurveListVO;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
  /** Not Found */
  404: any;
}

export type GetApiLibraBoardListProfitCurveResponseSuccess = GetApiLibraBoardListProfitCurveResponse[200];
export const getApiLibraBoardListProfitCurveMockData = ({
  code: "0",
  data: [
    {
      base: true,
      baseDimension: "洗衣液",
      details: [
        {
          date: "2020-12",
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
  message: "success",
} as unknown) as GetApiLibraBoardListProfitCurveResponseSuccess;
/**
 * 获取净利波动曲线
 * tags: 净利矩阵api
 */
export const getApiLibraBoardListProfitCurve = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/libra/board/listProfitCurve";
  function getApiLibraBoardListProfitCurve(
    option?: GetApiLibraBoardListProfitCurveOption
  ): Promise<GetApiLibraBoardListProfitCurveResponseSuccess> {
    if (process.env.NODE_ENV === "test") {
      return Promise.resolve(getApiLibraBoardListProfitCurveMockData);
    }
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardListProfitCurveResponseSuccess>;
  }

  getApiLibraBoardListProfitCurve.method = method;
  getApiLibraBoardListProfitCurve.url = url;
  return getApiLibraBoardListProfitCurve;
})();

/** request parameter type for getApiLibraBoardQueryBubbles */
export interface GetApiLibraBoardQueryBubblesOption {
  query?: {
    areaIds?: string;
    areaLevel?: number;
    baseDimension?: GetApiLibraBoardQueryBubblesBaseDimension;
    brandIds?: string;
    cidLevel?: number;
    cids?: string;
    compareDimension?: GetApiLibraBoardQueryBubblesCompareDimension;
    dateType?: string;
    deptIds?: string;
    deptLevel?: number;
    endIndex?: number;
    endTimeStr?: string;
    /**
        分页参数，第几页 */
    pageNo?: number;
    /**
        分页参数，每页的条数 */
    pageSize?: number;
    priceType?: GetApiLibraBoardQueryBubblesPriceType;
    startIndex?: number;
    startTimeStr?: string;
    warehouses?: string;
  };
}

export interface GetApiLibraBoardQueryBubblesResponse {
  /** OK */
  200: ReplyVO<BubbleShowVO>;
  /** Unauthorized */
  401: any;
  /** Forbidden */
  403: any;
  /** Not Found */
  404: any;
}

export type GetApiLibraBoardQueryBubblesResponseSuccess = GetApiLibraBoardQueryBubblesResponse[200];
export const getApiLibraBoardQueryBubblesMockData = ({
  code: "0",
  data: {
    axisx: "[1,2.3,11.7]",
    axisy: "[1,2.3,11.7]",
    bubbles: [
      {
        base: true,
        bubbleId: "100211",
        bubbleName: "蓝月亮",
        contributionMargin: -1.1,
        gmv: 15122,
        gmvPercent: 15,
        xVal: 1.2,
        yVal: 1.2,
      },
    ],
  },
  message: "success",
} as unknown) as GetApiLibraBoardQueryBubblesResponseSuccess;
/**
 * 查询净利平衡矩阵气泡
 * tags: 净利矩阵api
 */
export const getApiLibraBoardQueryBubbles = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/api/libra/board/queryBubbles";
  function getApiLibraBoardQueryBubbles(
    option?: GetApiLibraBoardQueryBubblesOption
  ): Promise<GetApiLibraBoardQueryBubblesResponseSuccess> {
    if (process.env.NODE_ENV === "test") {
      return Promise.resolve(getApiLibraBoardQueryBubblesMockData);
    }
    return requester(url, {
      method,
      ...option,
    }) as Promise<GetApiLibraBoardQueryBubblesResponseSuccess>;
  }

  getApiLibraBoardQueryBubbles.method = method;
  getApiLibraBoardQueryBubbles.url = url;
  return getApiLibraBoardQueryBubbles;
})();
