/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type GetApiLibraBoardExportDetailsBaseDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardExportDetailsCompareDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardExportDetailsPriceType = 'ORDER' | 'UNIT'
export type GetApiLibraBoardListDetailBaseDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardListDetailCompareDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardListDetailPriceType = 'ORDER' | 'UNIT'
export type GetApiLibraBoardListMatrixBaseDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardListMatrixCompareDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardListMatrixPriceType = 'ORDER' | 'UNIT'
export type GetApiLibraBoardListProfitCurveBaseDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardListProfitCurveCompareDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardListProfitCurvePriceType = 'ORDER' | 'UNIT'
export type GetApiLibraBoardQueryBubblesBaseDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardQueryBubblesCompareDimension =
  | 'AREA'
  | 'BRAND'
  | 'CATE'
  | 'DEPT'
  | 'WAREHOUSE'
export type GetApiLibraBoardQueryBubblesPriceType = 'ORDER' | 'UNIT'
export interface BubbleListVO {
  base?: boolean
  /**
   * 气泡id
   * example: 100211
   */
  bubbleId?: string
  /**
   * 气泡名称
   * example: 蓝月亮
   */
  bubbleName?: string
  /**
   * 贡献利润
   * format: double
   * example: -1.1
   */
  contributionMargin?: number
  /**
   * GMV
   * format: double
   * example: 15122
   */
  gmv?: number
  /**
   * GMV占比
   * format: double
   * example: 15
   */
  gmvPercent?: number
  /**
   * x轴坐标
   * format: double
   * example: 1.2
   */
  xVal?: number
  /**
   * y轴坐标
   * format: double
   * example: 1.2
   */
  yVal?: number
}

export interface BubbleShowVO {
  /**
   * 横轴坐标
   * example: [1,2.3,11.7]
   */
  axisx?: Array<number>
  /**
   * 纵轴坐标
   * example: [1,2.3,11.7]
   */
  axisy?: Array<number>
  bubbles?: Array<BubbleListVO>
}

export interface DetailListVO {
  /**
   * 配送费率
   * format: double
   * example: 2.31
   */
  deliveryRate?: number
  /**
   * 维度id
   * example: 122211
   */
  dimensionId?: string
  /**
   * 维度名称
   * example: 蓝月亮
   */
  dimensionName?: string
  /**
   * 固定费率
   * format: double
   * example: 2.31
   */
  fixedRate?: number
  /**
   * gmv
   * format: double
   * example: 321112.31
   */
  gmv?: number
  /**
   * GMV占比
   * format: double
   * example: 15
   */
  gmvPercent?: number
  /**
   * 综合毛利率
   * format: double
   * example: 2.31
   */
  grossProfitRate?: number
  /**
   * 单均价
   * format: double
   * example: 32.31
   */
  orderAvgPrice?: number
  /**
   * 单均价贡献利润
   * format: double
   * example: -1.2
   */
  orderAvgPriceCM?: number
  /**
   * sku数量
   * format: int32
   * example: 121
   */
  skuNum?: number
  /**
   * 件均价
   * format: double
   * example: 32.31
   */
  unitAvgPrice?: number
  /**
   * 件单价贡献利润
   * format: double
   * example: -1.4
   */
  unitPriceCM?: number
  /**
   * 变动费率
   * format: double
   * example: 2.31
   */
  variableRate?: number
  /**
   * 仓储费率
   * format: double
   * example: 2.31
   */
  warehouseRate?: number
}

export interface MatrixDynamicParamVO {
  /**
   * 动态配送费率
   * format: double
   * example: -1.1
   */
  dynamicDeliveryRate?: number
  /**
   * 动态仓储费率
   * format: double
   * example: -1.1
   */
  dynamicWarehouseRate?: number
  /**
   * x轴坐标
   * format: double
   * example: 1.2
   */
  x?: number
}

export interface MatrixPointVO {
  /**
   * 当前增值税率
   * format: double
   * example: 2.31
   */
  curTaxRate?: number
  /**
   * 配送费率
   * format: double
   * example: 2.31
   */
  deliveryRate?: number
  dynamicParams?: Array<MatrixDynamicParamVO>
  /**
   * 固定费率
   * format: double
   * example: 2.31
   */
  fixedRate?: number
  /**
   * 单均价
   * format: double
   * example: 32.31
   */
  orderAvgPrice?: number
  /**
   * 件均价
   * format: double
   * example: 32.31
   */
  unitAvgPrice?: number
  /**
   * 件单价贡献利润
   * format: double
   * example: -1.4
   */
  unitPriceCM?: number
  /**
   * 变动费率
   * format: double
   * example: 2.31
   */
  variableRate?: number
  /**
   * 仓储费率
   * format: double
   * example: 2.31
   */
  warehouseRate?: number
}

export interface ProfitCurveListVO {
  base?: boolean
  /**
   * 曲线名称
   * example: 洗衣液
   */
  baseDimension?: string
  details?: Array<ProfitCurvePointVO>
  /**
   * 当前曲线GMV
   * format: double
   * example: 321123
   */
  gmv?: number
}

export interface ProfitCurvePointVO {
  /**
   * x轴坐标：日期
   * example: 2020-12
   */
  date?: string
  /**
   * 配送费率
   * format: double
   * example: 2.31
   */
  deliveryRate?: number
  /**
   * 综合毛利率
   * format: double
   * example: 2.31
   */
  grossProfitRate?: number
  /**
   * 单均价
   * format: double
   * example: 32.31
   */
  orderAvgPrice?: number
  /**
   * 单均价贡献利润
   * format: double
   * example: -1.2
   */
  orderAvgPriceCM?: number
  /**
   * 件单价
   * format: double
   * example: 32.31
   */
  unitPrice?: number
  /**
   * 件单价贡献利润
   * format: double
   * example: -1.4
   */
  unitPriceCM?: number
  /**
   * 仓储费率
   * format: double
   * example: 2.31
   */
  warehouseRate?: number
}

export type PageVODetailListVO = PageVO<DetailListVO>
export type ReplyVOBubbleShowVO = ReplyVO<BubbleShowVO>
export interface ReplyVOListProfitCurveListVO {
  /**
   * 响应代码【0正确,非0错误】
   * example: 0
   */
  code: string
  /** 返回数据 */
  data?: Array<ProfitCurveListVO>
  /**
   * 结果描述
   * example: success
   */
  message: string
}

export type ReplyVOMatrixPointVO = ReplyVO<MatrixPointVO>
export type ReplyVOPageVODetailListVO = ReplyVO<PageVO<DetailListVO>>
export interface ReplyVOTsgString {
  /**
   * 响应代码【0正确,非0错误】
   * example: 0
   */
  code: string
  /** 返回数据 */
  data?: string
  /**
   * 结果描述
   * example: success
   */
  message: string
}

export interface PageVO<DetailListVO = any> {
  /**
   * 页码
   * format: int32
   * example: 1
   */
  currentPage: number
  /**
   * 开始序号
   * format: int32
   * example: 0
   */
  firstIndex: number
  /**
   * 结束序号
   * format: int32
   * example: 10
   */
  lastIndex: number
  /** 数据列表 */
  list: Array<DetailListVO>
  /**
   * 总页数
   * format: int32
   * example: 10
   */
  pageCount: number
  /**
   * 每页条数
   * format: int32
   * example: 10
   */
  pageSize: number
  /**
   * 总条数
   * format: int32
   * example: 100
   */
  total: number
}

export interface ReplyVO<BubbleShowVO = any> {
  /**
   * 响应代码【0正确,非0错误】
   * example: 0
   */
  code: string
  /** 返回数据 */
  data?: BubbleShowVO
  /**
   * 结果描述
   * example: success
   */
  message: string
}
