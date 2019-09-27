export type BodyBuilder = any

/**
 * 【品牌展示】品牌展示对象
 */
export class BrandVO {
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名
   */
  public brandName?: string
}

export class GlobalAnalysisIndexVO {
  /**
   * 价格竞争力VO
   */
  public priceHealthCompeteVO?: PriceHealthCompeteVO
  /**
   * 价格诚信度VO
   */
  public priceHealthHonestVO?: PriceHealthHonestVO
  /**
   * 价格波动性VO
   */
  public priceHealthWaveVO?: PriceHealthWaveVO
}

export class MarkdownPriceCalcDetailVO {
  /**
   * 预测gmv
   */
  public gmv?: number
  /**
   * 预测毛利
   */
  public gp?: number
  /**
   * 价格说明
   */
  public priceDesc?: string
  /**
   * 价格类型
   */
  public priceType?: string
  /**
   * 预测日均销量
   */
  public saleQtty?: number
  /**
   * 建议价格
   */
  public suggestPrice?: number
}

export class MarkdownPriceCalcVO {
  /**
   * 无建议价格时的提示信息
   */
  public calcWarnMsg?: string
  /**
   * 清滞优化模拟的建议价格以及对应的gmv、毛利
   */
  public markdownPriceCalcDetailVOS?: Array<MarkdownPriceCalcDetailVO>
  /**
   * skuId
   */
  public skuId?: number
}

export class MarkdownSaleSimulateDetailVO {
  /**
   * 平均日销量
   */
  public avgQtty?: number
  /**
   * 剔除优惠券后的成交价
   */
  public dealPrice?: number
  /**
   * 最高日销量
   */
  public maxQtty?: number
  /**
   * 最低日销量
   */
  public minQtty?: number
}

export class MarkdownSaleSimulateVO {
  /**
   * 清滞优化模拟的量价关系
   */
  public markdownSaleSimulateDetailVOS?: Array<MarkdownSaleSimulateDetailVO>
  /**
   * 近28天的成交价销量，用于画点
   */
  public points?: Array<SkuHistoryDTO>
  /**
   * skuId
   */
  public skuId?: number
}

export class MarkdownTrendSimulateDetailVO {
  /**
   * 日期排序，即第几天
   */
  public dtOrder?: number
  /**
   * 待清理量
   */
  public waitQtty?: number
}

export class MarkdownTrendSimulateVO {
  /**
   * 近28天平均成交价
   */
  public avgDealPrice28?: number
  /**
   * 近28天日均销量
   */
  public avgSales28?: number
  /**
   * 预计清滞天数
   */
  public finishDays?: number
  /**
   * 预计日均销量
   */
  public forecastAvgSales?: number
  /**
   * 价格上下限的均值
   */
  public meanPrice?: number
  /**
   * 近28天最低成交价
   */
  public minDealPrice28?: number
  /**
   * 用户输入的模拟价格
   */
  public pointPrice?: number
  /**
   * 清滞优化模拟的清理量趋势
   */
  public simulateTrend?: Array<MarkdownTrendSimulateDetailVO>
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 引擎返回的建议价格
   */
  public suggestPrice?: number
}

/**
 * 【价格竞争力-整体趋势】图表、列表展示对象
 */
export class PriceCompeteChartListVO {
  /**
   * 平均价高幅度
   */
  public avgPriceHighDegree?: number
  /**
   * 平均价低幅度
   */
  public avgPriceLowDegree?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类ID
   */
  public cid?: number
  /**
   * 品类名称
   */
  public cidName?: string
  /**
   * 部门ID
   */
  public deptId?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 日期分区
   */
  public dtime?: string
  /**
   * 持平个数
   */
  public flatNum?: number
  /**
   * 持平占比
   */
  public flatRate?: number
  /**
   * 匹配率
   */
  public matchRate?: number
  /**
   * 匹配商品数
   */
  public matchSkuNum?: number
  /**
   * 价格竞争力指数
   */
  public priceCompetePoint?: number
  /**
   * 价高个数
   */
  public priceHighNum?: number
  /**
   * 价高占比
   */
  public priceHighRate?: number
  /**
   * 价低个数
   */
  public priceLowNum?: number
  /**
   * 价低占比
   */
  public priceLowRate?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
}

export class PriceCompeteExportSkuListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _dtime?: string
  public _dtimeEnd?: string
  public _dtimeStart?: string
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public dtype?: string
  public endIndex?: number
  public exportEmail?: string
  public gmvBand?: Array<string>
  public menuType?: number
  public opponentCode?: string
  public pageNo?: number
  public pageSize?: number
  public priceCompetePointSortSign?: number
  public priceHighRateSortSign?: number
  public pvBand?: Array<string>
  public salerErp?: string
  public salesBand?: Array<string>
  public skuId?: string
  public startIndex?: number
}

export class PriceCompeteSkuDetailVO {
  /**
   * 平均价高幅度
   */
  public avgPriceHighDegree?: number
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * 进货价
   */
  public cost?: number
  /**
   * 时间分区
   */
  public dtime?: string
  /**
   * 京东后台价
   */
  public erpPrice?: number
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 京东最底页面价
   */
  public jdRedPrice?: number
  /**
   * 是否有匹配
   */
  public matchNum?: number
  /**
   * 匹配友商
   */
  public opponentCode?: string
  /**
   * 匹配友商
   */
  public opponentName?: string
  /**
   * 友商最底页面价
   */
  public opponentRedPrice?: number
  /**
   * 友商skuId
   */
  public opponentSkuId?: string
  /**
   * 友商链接
   */
  public opponentUrl?: string
  /**
   * pv
   */
  public pv?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 是否价高
   */
  public upPriceFlag?: number
}

export class PriceCompeteSkuListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _dtime?: string
  public _dtimeEnd?: string
  public _dtimeStart?: string
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public dtype?: string
  public endIndex?: number
  public gmvBand?: Array<string>
  public menuType?: number
  public opponentCode?: string
  public pageNo?: number
  public pageSize?: number
  public priceCompetePointSortSign?: number
  public priceHighRateSortSign?: number
  public pvBand?: Array<string>
  public salerErp?: string
  public salesBand?: Array<string>
  public skuId?: string
  public startIndex?: number
}

/**
 * 【价格竞争力-商品明细】列表展示对象
 */
export class PriceCompeteSkuListVO {
  /**
   * 平均价高幅度
   */
  public avgPriceHighDegree?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 事业群ID
   */
  public buId?: string
  /**
   * 事业群
   */
  public buName?: string
  /**
   * 品类ID1
   */
  public cid1?: number
  /**
   * 品类名称1
   */
  public cid1Name?: string
  /**
   * 品类ID2
   */
  public cid2?: number
  /**
   * 品类名称2
   */
  public cid2Name?: string
  /**
   * 品类ID3
   */
  public cid3?: number
  /**
   * 品类名称3
   */
  public cid3Name?: string
  /**
   * 部门ID1
   */
  public deptId1?: string
  /**
   * 部门ID2
   */
  public deptId2?: string
  /**
   * 部门ID3
   */
  public deptId3?: string
  /**
   * 部门名称1
   */
  public deptName1?: string
  /**
   * 部门名称2
   */
  public deptName2?: string
  /**
   * 部门名称3
   */
  public deptName3?: string
  /**
   * 日期分区
   */
  public dtime?: string
  /**
   * 日期类型
   */
  public dtype?: string
  /**
   * 销量额Band
   */
  public gmvBand?: string
  /**
   * 匹配友商编码
   */
  public opponentCode?: string
  /**
   * 匹配友商名称
   */
  public opponentName?: string
  /**
   * 价格竞争力指数(分子)
   */
  public priceCompeteAbove?: number
  /**
   * 价格竞争力指数(分母)
   */
  public priceCompeteBelow?: number
  /**
   * 价格竞争力指数
   */
  public priceCompetePoint?: number
  /**
   * 价高sku天数
   */
  public priceHighDayNum?: number
  /**
   * 价高占比
   */
  public priceHighRate?: number
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * 匹配SKU天数
   */
  public skuDtMatchNum?: number
  /**
   * 上柜天数
   */
  public skuDtNum?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
}

/**
 * 【价格竞争力-实时数据(汇总)】数据展示对象
 */
export class PriceCompeteSumVO {
  /**
   * 平均价高幅度
   */
  public avgPriceHighDegree?: number
  /**
   * 数据更新时间
   */
  public dtime?: string
  /**
   * 持平商品数
   */
  public flatSkuNum?: number
  /**
   * 持平商品数占比
   */
  public flatSkuRate?: number
  /**
   * 匹配率
   */
  public matchRate?: number
  /**
   * 匹配商品数
   */
  public matchSkuNum?: number
  /**
   * 价高商品数
   */
  public priceHighSkuNum?: number
  /**
   * 价高商品数占比
   */
  public priceHighSkuRate?: number
  /**
   * 价低商品数
   */
  public priceLowSkuNum?: number
  /**
   * 价低占比
   */
  public priceLowSkuRate?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
}

/**
 * 品牌下钻列表项
 */
export class PriceEcAnalysisBrandVO {
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 部门id
   */
  public deptId?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * GMV和毛利双提升潜力商品数
   */
  public doubleCount?: number
  /**
   * GMV提升潜力商品数
   */
  public gmvCount?: number
  /**
   * 毛利提升潜力商品数
   */
  public gpCount?: number
  /**
   * 其他数
   */
  public otherCount?: number
  /**
   * 有销售潜力的商品占比
   */
  public potentialRate?: number
  /**
   * sku总数
   */
  public skuCount?: number
}

/**
 * 品类下钻列表项
 */
export class PriceEcAnalysisCatVO {
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * GMV和毛利双提升潜力商品数
   */
  public doubleCount?: number
  /**
   * GMV提升潜力商品数
   */
  public gmvCount?: number
  /**
   * 毛利提升潜力商品数
   */
  public gpCount?: number
  /**
   * 其他数
   */
  public otherCount?: number
  /**
   * 有销售潜力的商品占比
   */
  public potentialRate?: number
  /**
   * sku总数
   */
  public skuCount?: number
}

/**
 * 部门下钻列表项
 */
export class PriceEcAnalysisDeptVO {
  /**
   * 部门id
   */
  public deptId?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * GMV和毛利双提升潜力商品数
   */
  public doubleCount?: number
  /**
   * GMV提升潜力商品数
   */
  public gmvCount?: number
  /**
   * 毛利提升潜力商品数
   */
  public gpCount?: number
  /**
   * 其他数
   */
  public otherCount?: number
  /**
   * 有销售潜力的商品占比
   */
  public potentialRate?: number
  /**
   * sku总数
   */
  public skuCount?: number
}

/**
 * 首页指标
 */
export class PriceEcAnalysisHomeIndexVO {
  /**
   * GMV和毛利双提升潜力商品数
   */
  public doubleCount?: number
  /**
   * 有价格弹性的商品数
   */
  public ecCount?: number
  /**
   * 价格弹性高的商品数
   */
  public ecHighCount?: number
  /**
   * 价格弹性低的商品数
   */
  public ecLowCount?: number
  /**
   * GMV提升潜力商品数
   */
  public gmvCount?: number
  /**
   * 毛利提升潜力商品数
   */
  public gpCount?: number
  /**
   * 有销售潜力的商品数
   */
  public potentialCount?: number
  /**
   * 数据更新日期
   */
  public updatedDate?: string
}

/**
 * 采销下钻列表项
 */
export class PriceEcAnalysisSalerVO {
  /**
   * GMV和毛利双提升潜力商品数
   */
  public doubleCount?: number
  /**
   * GMV提升潜力商品数
   */
  public gmvCount?: number
  /**
   * 毛利提升潜力商品数
   */
  public gpCount?: number
  /**
   * 其他数
   */
  public otherCount?: number
  /**
   * 有销售潜力的商品占比
   */
  public potentialRate?: number
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
  /**
   * sku总数
   */
  public skuCount?: number
}

/**
 * top项
 */
export class PriceEcAnalysisTopItemVO {
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * 一级品类名称
   */
  public cname1?: string
  /**
   * 二级品类名称
   */
  public cname2?: string
  /**
   * 三级品类名称
   */
  public cname3?: string
  /**
   * 仓报价
   */
  public cost?: number
  /**
   * 弹性标签【1高,0低】
   */
  public ecBand?: string
  /**
   * 7天GMV
   */
  public gmv?: number
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 7天毛利
   */
  public gp?: number
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 页面价(红价)
   */
  public redPrice?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 7天销量
   */
  public sales?: number
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
}

/**
 * 3个top1
 */
export class PriceEcAnalysisTopVO {
  /**
   * 双提升top1
   */
  public doubleItem?: PriceEcAnalysisTopItemVO
  /**
   * gmv提升top1
   */
  public gmvItem?: PriceEcAnalysisTopItemVO
  /**
   * 毛利提升top1
   */
  public gpItem?: PriceEcAnalysisTopItemVO
}

/**
 * 【价格健康度天表】品牌下钻分析列表展示对象
 */
export class PriceHealthBrandAnalysisListVO {
  /**
   * 平均单促时长
   */
  public avgPromoDays?: number
  /**
   * 平均波动次数
   */
  public avgWaveNum?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 事业部ID
   */
  public buId?: string
  /**
   * 事业部名称
   */
  public buName?: string
  /**
   * 价格竞争力指数
   */
  public competePoint?: number
  /**
   * 一级部门ID
   */
  public deptId1?: string
  /**
   * 二级部门ID
   */
  public deptId2?: string
  /**
   * 三级部门ID
   */
  public deptId3?: string
  /**
   * 一级部门名称
   */
  public deptName1?: string
  /**
   * 二级部门名称
   */
  public deptName2?: string
  /**
   * 三级部门名称
   */
  public deptName3?: string
  /**
   * 促销提价幅度分母
   */
  public jdAvgWeightRiseRangeDown?: number
  /**
   * 促销提价幅度分子
   */
  public jdAvgWeightRiseRangeUp?: number
  /**
   * 重合商品数
   */
  public matchSkuNum?: number
  /**
   * 价高幅度
   */
  public priceHighDegree?: number
  /**
   * 价高商品数
   */
  public priceHighSkuNum?: number
  /**
   * 价高商品占比
   */
  public priceHighSkuRate?: number
  /**
   * 促销参与率
   */
  public promoRate?: number
  /**
   * 参加促销商品数
   */
  public promoSkuNum?: number
  /**
   * 促销提价幅度
   */
  public promoUpPriceDegree?: number
  /**
   * 促销提价占比
   */
  public promoUpPriceRate?: number
  /**
   * 促销提价商品数
   */
  public promoUpPriceSkuNum?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 商品重合率
   */
  public skuCoverRate?: number
  /**
   * 价格波动指数
   */
  public wavePoint?: number
  /**
   * 波动商品占比
   */
  public waveRate?: number
  /**
   * 波动商品数
   */
  public waveSkuNum?: number
  /**
   * 价格波动性指数分母
   */
  public wciDown?: number
  /**
   * 价格波动性指数分子
   */
  public wciUp?: number
  /**
   * 价格竞争力指数分母
   */
  public wpiDown?: number
  /**
   * 价格竞争力指数分子
   */
  public wpiUp?: number
}

/**
 * 【价格健康度天表】品类下钻分析列表展示对象
 */
export class PriceHealthCategoryAnalysisListVO {
  /**
   * 平均单促时长
   */
  public avgPromoDays?: number
  /**
   * 平均波动次数
   */
  public avgWaveNum?: number
  /**
   * 事业部ID
   */
  public buId?: string
  /**
   * 事业部名称
   */
  public buName?: string
  /**
   * 一级品类ID
   */
  public cid1?: number
  /**
   * 一级品类名称
   */
  public cid1Name?: string
  /**
   * 二级品类ID
   */
  public cid2?: number
  /**
   * 二级品类名称
   */
  public cid2Name?: string
  /**
   * 三级品类ID
   */
  public cid3?: number
  /**
   * 三级品类名称
   */
  public cid3Name?: string
  /**
   * 价格竞争力指数
   */
  public competePoint?: number
  /**
   * 一级部门ID
   */
  public deptId1?: string
  /**
   * 二级部门ID
   */
  public deptId2?: string
  /**
   * 三级部门ID
   */
  public deptId3?: string
  /**
   * 一级部门名称
   */
  public deptName1?: string
  /**
   * 二级部门名称
   */
  public deptName2?: string
  /**
   * 三级部门名称
   */
  public deptName3?: string
  /**
   * 促销提价幅度分母
   */
  public jdAvgWeightRiseRangeDown?: number
  /**
   * 促销提价幅度分子
   */
  public jdAvgWeightRiseRangeUp?: number
  /**
   * 重合商品数
   */
  public matchSkuNum?: number
  /**
   * 价高幅度
   */
  public priceHighDegree?: number
  /**
   * 价高商品数
   */
  public priceHighSkuNum?: number
  /**
   * 价高商品占比
   */
  public priceHighSkuRate?: number
  /**
   * 促销参与率
   */
  public promoRate?: number
  /**
   * 参加促销商品数
   */
  public promoSkuNum?: number
  /**
   * 促销提价幅度
   */
  public promoUpPriceDegree?: number
  /**
   * 促销提价占比
   */
  public promoUpPriceRate?: number
  /**
   * 促销提价商品数
   */
  public promoUpPriceSkuNum?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 商品重合率
   */
  public skuCoverRate?: number
  /**
   * 价格波动指数
   */
  public wavePoint?: number
  /**
   * 波动商品占比
   */
  public waveRate?: number
  /**
   * 波动商品数
   */
  public waveSkuNum?: number
  /**
   * 价格波动性指数分母
   */
  public wciDown?: number
  /**
   * 价格波动性指数分子
   */
  public wciUp?: number
  /**
   * 价格竞争力指数分母
   */
  public wpiDown?: number
  /**
   * 价格竞争力指数分子
   */
  public wpiUp?: number
}

export class PriceHealthCompeteVO {
  /**
   * 价高商品数
   */
  public cGtSkuNum?: number
  /**
   * 价高商品占比
   */
  public cGtSkuRatio?: number
  /**
   * 价高商品占比环比
   */
  public cGtSkuRatioCmprLast?: number
  /**
   * 价高商品占比同比
   */
  public cGtSkuRatioCmprSame?: number
  /**
   * 自营上柜商品数
   */
  public cJdSkuNum?: number
  /**
   * 参与促销商品数
   */
  public cMatchSkuNum?: number
  /**
   * 价格竞争力指数
   */
  public cWpi?: number
  /**
   * 价格竞争力指数环比
   */
  public cWpiCmprLast?: number
  /**
   * 价格竞争力指数同比
   */
  public cWpiCmprSame?: number
}

/**
 * 【价格健康度】部门下钻分析列表展示对象
 */
export class PriceHealthDeptAnalysisListVO {
  /**
   * 平均单促时长
   */
  public avgPromoDays?: number
  /**
   * 平均波动次数
   */
  public avgWaveNum?: number
  /**
   * 事业部ID
   */
  public buId?: string
  /**
   * 事业部名称
   */
  public buName?: string
  /**
   * 价格竞争力指数
   */
  public competePoint?: number
  /**
   * 一级部门ID
   */
  public deptId1?: string
  /**
   * 二级部门ID
   */
  public deptId2?: string
  /**
   * 三级部门ID
   */
  public deptId3?: string
  /**
   * 一级部门名称
   */
  public deptName1?: string
  /**
   * 二级部门名称
   */
  public deptName2?: string
  /**
   * 三级部门名称
   */
  public deptName3?: string
  /**
   * 促销提价幅度分母
   */
  public jdAvgWeightRiseRangeDown?: number
  /**
   * 促销提价幅度分子
   */
  public jdAvgWeightRiseRangeUp?: number
  /**
   * 重合商品数
   */
  public matchSkuNum?: number
  /**
   * 价高幅度
   */
  public priceHighDegree?: number
  /**
   * 价高商品数
   */
  public priceHighSkuNum?: number
  /**
   * 价高商品占比
   */
  public priceHighSkuRate?: number
  /**
   * 促销参与率
   */
  public promoRate?: number
  /**
   * 参加促销商品数
   */
  public promoSkuNum?: number
  /**
   * 促销提价幅度
   */
  public promoUpPriceDegree?: number
  /**
   * 促销提价占比
   */
  public promoUpPriceRate?: number
  /**
   * 促销提价商品数
   */
  public promoUpPriceSkuNum?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 商品重合率
   */
  public skuCoverRate?: number
  /**
   * 价格波动指数
   */
  public wavePoint?: number
  /**
   * 波动商品占比
   */
  public waveRate?: number
  /**
   * 波动商品数
   */
  public waveSkuNum?: number
  /**
   * 价格波动性指数分母
   */
  public wciDown?: number
  /**
   * 价格波动性指数分子
   */
  public wciUp?: number
  /**
   * 价格竞争力指数分母
   */
  public wpiDown?: number
  /**
   * 价格竞争力指数分子
   */
  public wpiUp?: number
}

export class PriceHealthHonestVO {
  /**
   * 自营上柜商品数
   */
  public hJdSkuNum?: number
  /**
   * 促销参与率
   */
  public hPmoJdJoinRatio?: number
  /**
   * 参与促销商品数
   */
  public hPmoJdRiseSkuNum?: number
  /**
   * 促销提价商品数
   */
  public hPmoJdSkuNum?: number
  /**
   * 促销提价幅度
   */
  public hPmoRiseRange?: number
  /**
   * 促销提价幅度环比
   */
  public hPmoRiseRangeCmprLast?: number
  /**
   * 促销提价幅度同比
   */
  public hPmoRiseRangeCmprSame?: number
  /**
   * 促销提价占比
   */
  public hPmoRiseRatio?: number
  /**
   * 促销提价占比环比
   */
  public hPmoRiseRatioCmprLast?: number
  /**
   * 促销提价占比同比
   */
  public hPmoRiseRatioCmprSame?: number
}

/**
 * 【价格指数表现分类信息】列表展示对象
 */
export class PriceHealthIndexCatgListVO {
  /**
   * 分类编码
   */
  public catgId?: number
  /**
   * 分类
   */
  public catgName?: string
  /**
   * 数值
   */
  public val?: number
  /**
   * 数值环比增量
   */
  public valCmprLast?: number
  /**
   * 数值同比增量
   */
  public valCmprSame?: number
}

/**
 * 【价格指数表现】列表展示对象
 */
export class PriceHealthIndexListVO {
  /**
   * 价格指数名称
   */
  public idxName?: string
  /**
   * SKU价格变动明细列表
   */
  public prices?: Array<PriceHealthIndexCatgListVO>
  /**
   * 当年数值
   */
  public valYearCur?: number
  /**
   * 去年数值
   */
  public valYearLast?: number
}

/**
 * 【价格健康度天表】采销下钻分析列表展示对象
 */
export class PriceHealthSalerAnalysisListVO {
  /**
   * 平均单促时长
   */
  public avgPromoDays?: number
  /**
   * 平均波动次数
   */
  public avgWaveNum?: number
  /**
   * 事业部ID
   */
  public buId?: string
  /**
   * 事业部名称
   */
  public buName?: string
  /**
   * 价格竞争力指数
   */
  public competePoint?: number
  /**
   * 一级部门ID
   */
  public deptId1?: string
  /**
   * 二级部门ID
   */
  public deptId2?: string
  /**
   * 三级部门ID
   */
  public deptId3?: string
  /**
   * 一级部门名称
   */
  public deptName1?: string
  /**
   * 二级部门名称
   */
  public deptName2?: string
  /**
   * 三级部门名称
   */
  public deptName3?: string
  /**
   * 促销提价幅度分母
   */
  public jdAvgWeightRiseRangeDown?: number
  /**
   * 促销提价幅度分子
   */
  public jdAvgWeightRiseRangeUp?: number
  /**
   * 重合商品数
   */
  public matchSkuNum?: number
  /**
   * 价高幅度
   */
  public priceHighDegree?: number
  /**
   * 价高商品数
   */
  public priceHighSkuNum?: number
  /**
   * 价高商品占比
   */
  public priceHighSkuRate?: number
  /**
   * 促销参与率
   */
  public promoRate?: number
  /**
   * 参加促销商品数
   */
  public promoSkuNum?: number
  /**
   * 促销提价幅度
   */
  public promoUpPriceDegree?: number
  /**
   * 促销提价占比
   */
  public promoUpPriceRate?: number
  /**
   * 促销提价商品数
   */
  public promoUpPriceSkuNum?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 采销名称
   */
  public salerName?: string
  /**
   * 商品重合率
   */
  public skuCoverRate?: number
  /**
   * 价格波动指数
   */
  public wavePoint?: number
  /**
   * 波动商品占比
   */
  public waveRate?: number
  /**
   * 波动商品数
   */
  public waveSkuNum?: number
  /**
   * 价格波动性指数分母
   */
  public wciDown?: number
  /**
   * 价格波动性指数分子
   */
  public wciUp?: number
  /**
   * 价格竞争力指数分母
   */
  public wpiDown?: number
  /**
   * 价格竞争力指数分子
   */
  public wpiUp?: number
}

export class PriceHealthWaveVO {
  /**
   * 平均波动次数
   */
  public wAvgNum?: number
  /**
   * 平均波动次数环比
   */
  public wAvgNumCmprLast?: number
  /**
   * 平均波动次数同比
   */
  public wAvgNumCmprSame?: number
  /**
   * 自营上柜商品数
   */
  public wJdSkuNum?: number
  /**
   * 波动商品数
   */
  public wSkuNum?: number
  /**
   * 价格波动性指数
   */
  public wWci?: number
  /**
   * 价格波动性指数环比
   */
  public wWciCmprLast?: number
  /**
   * 价格波动性指数同比
   */
  public wWciCmprSame?: number
}

/**
 * 【价格诚信度】图表、列表展示对象
 */
export class PriceHonestChartListVO {
  /**
   * 平均提价幅度(x>=10%)
   */
  public avgUpPriceDegree?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类ID
   */
  public cid?: number
  /**
   * 品类名称
   */
  public cidName?: string
  /**
   * 部门ID
   */
  public deptId?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 日期分区
   */
  public dtime?: string
  /**
   * 未提价个数(x<=0%)
   */
  public notUpPromoPriceNum?: number
  /**
   * 参加促销个数
   */
  public promoNum?: number
  /**
   * 促销参与率
   */
  public promoRate?: number
  /**
   * 参加促销商品数
   */
  public promoSkuNum?: number
  /**
   * 促销提价个数(0%<x<10%)
   */
  public promoUpPriceNumDown?: number
  /**
   * 促销提价个数(x>=10%)
   */
  public promoUpPriceNumUp?: number
  /**
   * 促销提价占比(x>=10%)
   */
  public promoUpPriceRate?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
}

export class PriceHonestExportSkuListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _dtime?: string
  public _dtimeEnd?: string
  public _dtimeStart?: string
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public avgUpPriceDegreeSortSign?: number
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public dtype?: string
  public endIndex?: number
  public exportEmail?: string
  public gmvBand?: Array<string>
  public menuType?: number
  public pageNo?: number
  public pageSize?: number
  public promoUpPriceRateSortSign?: number
  public pvBand?: Array<string>
  public salerErp?: string
  public salesBand?: Array<string>
  public skuId?: string
  public startIndex?: number
}

export class PriceHonestSkuDetailVO {
  /**
   * 平均提价幅度(x>=10%)
   */
  public avgUpPriceDegree?: number
  /**
   * 常规价(新加字段)
   */
  public basePrice?: number
  /**
   * 是否券促销(1：是，0：不是)
   */
  public couponStatus?: number
  /**
   * 时间分区
   */
  public dtime?: string
  /**
   * 销量额Band
   */
  public gmvBand?: string
  /**
   * 是否提价促销(1：是，0：不是)
   */
  public jdPromoRaiseFlag?: number
  /**
   * pv
   */
  public pv?: number
  /**
   * 页面价(新加字段)
   */
  public redPrice?: number
  /**
   * 是否上柜
   */
  public saleNum?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 是否总价促销(1：是，0：不是)
   */
  public totalPromoStatus?: number
}

export class PriceHonestSkuListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _dtime?: string
  public _dtimeEnd?: string
  public _dtimeStart?: string
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public avgUpPriceDegreeSortSign?: number
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public dtype?: string
  public endIndex?: number
  public gmvBand?: Array<string>
  public menuType?: number
  public pageNo?: number
  public pageSize?: number
  public promoUpPriceRateSortSign?: number
  public pvBand?: Array<string>
  public salerErp?: string
  public salesBand?: Array<string>
  public skuId?: string
  public startIndex?: number
}

/**
 * 【价格诚信度-商品明细】列表展示对象
 */
export class PriceHonestSkuListVO {
  /**
   * 平均提价幅度(x>=10%)
   */
  public avgUpPriceDegree?: number
  /**
   * 促销提价幅度(分子)
   */
  public avgUpPriceDegreeAbove?: number
  /**
   * 促销提价幅度(分母)
   */
  public avgUpPriceDegreeBelow?: number
  /**
   * 常规价
   */
  public basePrice?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 事业群ID
   */
  public buId?: string
  /**
   * 事业群
   */
  public buName?: string
  /**
   * 品类ID1
   */
  public cid1?: number
  /**
   * 品类名称1
   */
  public cid1Name?: string
  /**
   * 品类ID2
   */
  public cid2?: number
  /**
   * 品类名称2
   */
  public cid2Name?: string
  /**
   * 品类ID3
   */
  public cid3?: number
  /**
   * 品类名称3
   */
  public cid3Name?: string
  /**
   * 部门ID1
   */
  public deptId1?: string
  /**
   * 部门ID2
   */
  public deptId2?: string
  /**
   * 部门ID3
   */
  public deptId3?: string
  /**
   * 部门名称1
   */
  public deptName1?: string
  /**
   * 部门名称2
   */
  public deptName2?: string
  /**
   * 部门名称3
   */
  public deptName3?: string
  /**
   * 日期分区
   */
  public dtime?: string
  /**
   * 日期类型
   */
  public dtype?: string
  /**
   * 销量额Band
   */
  public gmvBand?: string
  /**
   * 促销SKU天数
   */
  public jdPromoSkuDtNum?: number
  /**
   * 促销提价SKU天数
   */
  public promoUpPriceDayNumUp?: number
  /**
   * 促销提价占比(x>=10%)
   */
  public promoUpPriceRate?: number
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * 上柜天数
   */
  public skuDtNum?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
}

/**
 * 【价格诚信度-T+1数据(商品)】促销信息
 */
export class PriceHonestSkuPromoListVO {
  public beginTime?: string
  public endTime?: string
  public extType?: number
  public promoDescription?: string
  public promoId?: number
  public promoName?: string
  public promoType?: number
}

/**
 * 【价格诚信度-T+1数据(商品)】列表展示对象
 */
export class PriceHonestSkuTopVO {
  /**
   * 常规价(基线价)
   */
  public basePrice?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 销量额Band
   */
  public gmvBand?: string
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 促销ID列表
   */
  public promoIds?: string
  /**
   * 参与促销信息
   */
  public promoResultList?: Array<PriceHonestSkuPromoListVO>
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 页面价(红价)
   */
  public redPrice?: number
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 提价幅度
   */
  public upPriceDegree?: number
}

/**
 * 【价格诚信度】看板详情展示对象
 */
export class PriceHonestSumVO {
  /**
   * 数据统计时间
   */
  public dtime?: string
  /**
   * 促销参与率
   */
  public promoRate?: number
  /**
   * 参加促销商品数
   */
  public promoSkuNum?: number
  /**
   * 促销提价占比(x>=10%)
   */
  public promoUpPriceRate?: number
  /**
   * 促销提价商品数
   */
  public promoUpPriceSkuNum?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 不加权提价幅度(x>=10%)
   */
  public upPriceDegree?: number
}

/**
 * 【价格波动性-整体趋势】图表、列表展示对象
 */
export class PriceWaveChartListVO {
  /**
   * （调价次数=0）个数
   */
  public adjustPriceNum1?: number
  /**
   * （0<调价次数<=5）个数
   */
  public adjustPriceNum2?: number
  /**
   * （调价次数>5）个数
   */
  public adjustPriceNum3?: number
  /**
   * （调价次数=0）占比
   */
  public adjustPriceNumRate1?: number
  /**
   * （0<调价次数<=5）占比
   */
  public adjustPriceNumRate2?: number
  /**
   * （调价次数>5）占比
   */
  public adjustPriceNumRate3?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类ID
   */
  public cid?: number
  /**
   * 品类名称
   */
  public cidName?: string
  /**
   * 部门ID
   */
  public deptId?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 日期分区
   */
  public dtime?: string
  /**
   * 价格波动指数
   */
  public priceWaveRate?: number
  /**
   * 自营上柜个数
   */
  public saleNum?: number
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
}

export class PriceWaveExportSkuListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _dtime?: string
  public _dtimeEnd?: string
  public _dtimeStart?: string
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public dtype?: string
  public endIndex?: number
  public exportEmail?: string
  public gmvBand?: Array<string>
  public menuType?: number
  public pageNo?: number
  public pageSize?: number
  public priceWaveRateSortSign?: number
  public pvBand?: Array<string>
  public salerErp?: string
  public salesBand?: Array<string>
  public skuId?: string
  public startIndex?: number
  public totalWaveNumSortSign?: number
}

export class PriceWaveRedPriceListVO {
  /**
   * 时间分区
   */
  public dtime?: string
  /**
   * 结束时间
   */
  public endTime?: string
  /**
   * 调价方式
   */
  public priceFlag?: number
  /**
   * 页面价
   */
  public redPrice?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 开始时间
   */
  public startTime?: string
}

export class PriceWaveSkuDetailVO {
  /**
   * 回调后台京东价次数
   */
  public callErpPriceNum?: number
  /**
   * 时间分区
   */
  public dtime?: string
  /**
   * 后台京东价(erp价格)
   */
  public erpPrice?: number
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 后台京东价波动次数
   */
  public jdPriceAdjustNum?: number
  /**
   * 秒杀波动次数
   */
  public msAdjustNum?: number
  /**
   * 波动幅度
   */
  public priceWaveDegree?: number
  /**
   * pv
   */
  public pv?: number
  /**
   * 页面价信息
   */
  public redPriceInfo?: Array<PriceWaveRedPriceListVO>
  /**
   * 是否上柜
   */
  public saleNum?: number
  /**
   * 闪购波动次数
   */
  public shangouAdjustNum?: number
  /**
   * 单促波动次数
   */
  public singleAdjustNum?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 总波动次数
   */
  public totalWaveNum?: number
}

export class PriceWaveSkuListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _dtime?: string
  public _dtimeEnd?: string
  public _dtimeStart?: string
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public dtype?: string
  public endIndex?: number
  public gmvBand?: Array<string>
  public menuType?: number
  public pageNo?: number
  public pageSize?: number
  public priceWaveRateSortSign?: number
  public pvBand?: Array<string>
  public salerErp?: string
  public salesBand?: Array<string>
  public skuId?: string
  public startIndex?: number
  public totalWaveNumSortSign?: number
}

/**
 * 【价格波动性-商品明细】列表展示对象
 */
export class PriceWaveSkuListVO {
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 事业群ID
   */
  public buId?: string
  /**
   * 事业群
   */
  public buName?: string
  /**
   * 品类ID1
   */
  public cid1?: number
  /**
   * 品类名称1
   */
  public cid1Name?: string
  /**
   * 品类ID2
   */
  public cid2?: number
  /**
   * 品类名称2
   */
  public cid2Name?: string
  /**
   * 品类ID3
   */
  public cid3?: number
  /**
   * 品类名称3
   */
  public cid3Name?: string
  /**
   * 部门ID1
   */
  public deptId1?: string
  /**
   * 部门ID2
   */
  public deptId2?: string
  /**
   * 部门ID3
   */
  public deptId3?: string
  /**
   * 部门名称1
   */
  public deptName1?: string
  /**
   * 部门名称2
   */
  public deptName2?: string
  /**
   * 部门名称3
   */
  public deptName3?: string
  /**
   * 日期分区
   */
  public dtime?: string
  /**
   * 日期类型
   */
  public dtype?: string
  /**
   * 销量额Band
   */
  public gmvBand?: string
  /**
   * 价格波动指数(分子)
   */
  public priceWaveAbove?: number
  /**
   * 价格波动指数(分母)
   */
  public priceWaveBelow?: number
  /**
   * 价格波动指数
   */
  public priceWaveRate?: number
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 采销姓名
   */
  public salerName?: string
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * 上柜天数
   */
  public skuDtNum?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 波动次数
   */
  public totalWaveNum?: number
}

/**
 * 【价格波动性-T+1数据(商品)】列表展示对象
 */
export class PriceWaveSkuTopVO {
  /**
   * 调价次数
   */
  public adjustPriceTotalNum?: number
  /**
   * 品牌ID
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 仓报价
   */
  public cost?: number
  /**
   * 弹性
   */
  public ec?: number
  /**
   * 弹性标签
   */
  public ecTag?: string
  /**
   * 销量额Band
   */
  public gmvBand?: string
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 人工调价次数
   */
  public personAdjustPriceNum?: number
  /**
   * 潜力类型
   */
  public potentialType?: string
  /**
   * 潜力类型描述
   */
  public potentialTypeDesc?: string
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 页面价(红价)
   */
  public redPrice?: number
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 系统定价次数
   */
  public sysAdjustPriceNum?: number
  /**
   * 系统跟价次数
   */
  public sysFollowPriceNum?: number
}

/**
 * 【价格波动性-T+1数据(汇总)】数据展示对象
 */
export class PriceWaveSumVO {
  /**
   * 调价sku数量
   */
  public adjustPriceSkuNum?: number
  /**
   * 平均每个SKU的调价次数
   */
  public avgSkuUpPriceNum?: number
  /**
   * 数据统计结束时间
   */
  public dtimeEnd?: string
  /**
   * 数据统计开始时间
   */
  public dtimeStart?: string
  /**
   * 人工调价次数
   */
  public personAdjustPriceNum?: number
  /**
   * 人工调价总次数
   */
  public personAdjustPriceTotalNum?: number
  /**
   * 价格波动指数
   */
  public priceWaveRate?: number
  /**
   * 自营上柜商品数
   */
  public saleSkuNum?: number
  /**
   * 系统定价次数
   */
  public sysAdjustPriceNum?: number
  /**
   * 系统定价总次数
   */
  public sysAdjustPriceTotalNum?: number
  /**
   * 系统跟价次数
   */
  public sysFollowPriceNum?: number
  /**
   * 系统跟价总次数
   */
  public sysFollowPriceTotalNum?: number
  /**
   * 调价商品数
   */
  public upPriceSkuNum?: number
  /**
   * （调价1-5次）商品个数
   */
  public upPriceSkuNum1?: number
  /**
   * （调价5次以上）商品个数
   */
  public upPriceSkuNum2?: number
  /**
   * 调价sku占比
   */
  public upPriceSkuRate?: number
}

/**
 * 促销GMV分析
 */
export class PromoAnalysisChart1VO {
  /**
   * 促销GMV分析列表项
   */
  public list?: Array<PromoAnalysisChartPieItemVO>
}

/**
 * 有效促销效果分析
 */
export class PromoAnalysisChart2VO {
  /**
   * 有效促销效果分析列表项
   */
  public list?: Array<PromoAnalysisChartBarItemVO>
}

/**
 * 有效促销提升效果下钻
 */
export class PromoAnalysisChart3VO {
  /**
   * 有效促销提升效果下钻列表项
   */
  public list?: Array<PromoAnalysisChartPieItemVO>
}

/**
 * 瀑布图列表项
 */
export class PromoAnalysisChartBarItemVO {
  /**
   * 平均折扣力度
   */
  public avgDiscount?: number
  /**
   * 基线GMV
   */
  public baselineGmv?: number
  /**
   * 蚕食GMV
   */
  public cannGmv?: number
  /**
   * 下级列表项
   */
  public children?: Array<PromoAnalysisChartBarItemVO>
  /**
   * 折扣GMV
   */
  public discountGmv?: number
  /**
   * 光环GMV
   */
  public haloGmv?: number
  /**
   * 促销类型中文
   */
  public name?: string
  /**
   * 净提升gmv
   */
  public pureIncremental?: number
  /**
   * 净提升率
   */
  public pureIncrementalRate?: number
  /**
   * ROI
   */
  public roi?: number
  /**
   * 促销类型
   */
  public type?: number
  /**
   * 提升GMV
   */
  public upliftGmv?: number
}

/**
 * 饼图列表项
 */
export class PromoAnalysisChartPieItemVO {
  /**
   * 下级列表项
   */
  public children?: Array<PromoAnalysisChartPieItemVO>
  /**
   * GMV
   */
  public gmv?: number
  /**
   * GMV占比
   */
  public gmvRate?: number
  /**
   * 促销类型中文
   */
  public name?: string
  /**
   * 销量
   */
  public sales?: number
  /**
   * 促销类型
   */
  public type?: number
}

/**
 * 明细分析图表VO
 */
export class PromoAnalysisChartVO {
  /**
   * 促销GMV分析
   */
  public chart1?: PromoAnalysisChart1VO
  /**
   * 有效促销效果分析
   */
  public chart2?: PromoAnalysisChart2VO
  /**
   * 有效促销提升效果下钻
   */
  public chart3?: PromoAnalysisChart3VO
  /**
   * 最新更新日期
   */
  public lastUpdate?: string
}

/**
 * 首页指标
 */
export class PromoAnalysisHomeIndexVO {
  /**
   * 数据统计时间-结束
   */
  public endTime?: string
  /**
   * 促销提升率
   */
  public incrementalRate?: number
  /**
   * 促销个数
   */
  public promoCount?: number
  /**
   * 无效促销个数
   */
  public promoInvalidCount?: number
  /**
   * 负提升促销个数
   */
  public promoNegativeCount?: number
  /**
   * 正提升促销个数
   */
  public promoPositiveCount?: number
  /**
   * ROI
   */
  public roi?: number
  /**
   * 参加促销商品数
   */
  public skuCount?: number
  /**
   * 无效商品数
   */
  public skuInvalidCount?: number
  /**
   * 负提升商品数
   */
  public skuNegativeCount?: number
  /**
   * 正提升商品数
   */
  public skuPositiveCount?: number
  /**
   * 数据统计时间-开始
   */
  public startTime?: string
}

/**
 * 促销下钻结果集
 */
export class PromoAnalysisPromoResultVO {
  public page?: PageVOPromoAnalysisPromoVO
  public sum?: PromoAnalysisSumVO
}

/**
 * 促销SKU下钻列表项
 */
export class PromoAnalysisPromoSkuVO {
  /**
   * 平均页面价
   */
  public avgRedPrice?: number
  /**
   * 常规价
   */
  public baselinePrice?: number
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * 一级品类名称
   */
  public cname1?: string
  /**
   * 二级品类名称
   */
  public cname2?: string
  /**
   * 三级品类名称
   */
  public cname3?: string
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 件单价
   */
  public itemPrice?: number
  /**
   * 是否提价做促销
   */
  public priceHike?: boolean
  /**
   * 促销标记(商品表现)【1无效促销、2正提升、3负提升】
   */
  public promoFlag?: string
  /**
   * 促销GMV
   */
  public promoGmv?: number
  /**
   * 净提升率
   */
  public pureIncrementalRate?: number
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 真实折扣力度
   */
  public realDiscount?: number
  /**
   * ROI
   */
  public roi?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 销量
   */
  public sales?: number
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
}

/**
 * 促销下钻列表项
 */
export class PromoAnalysisPromoVO {
  /**
   * 创建人ERP
   */
  public createdBy?: string
  /**
   * 数据结束时间
   */
  public dataEndTime?: string
  /**
   * 数据开始时间
   */
  public dataStartTime?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 父单量
   */
  public parentQtty?: number
  /**
   * 促销结束时间
   */
  public promoEndTime?: string
  /**
   * 促销GMV
   */
  public promoGmv?: number
  /**
   * 促销GMV占比
   */
  public promoGmvRate?: number
  /**
   * 促销id
   */
  public promoId?: number
  /**
   * 活动名称
   */
  public promoName?: string
  /**
   * 促销开始时间
   */
  public promoStartTime?: string
  /**
   * 促销状态值
   */
  public promoStatus?: number
  /**
   * 促销状态描述
   */
  public promoStatusDesc?: string
  /**
   * 促销子类型
   */
  public promoSubType?: number
  /**
   * 促销子类型描述
   */
  public promoSubTypeDesc?: string
  /**
   * 促销类型
   */
  public promoType?: number
  /**
   * 促销类型描述
   */
  public promoTypeDesc?: string
  /**
   * 净提升率
   */
  public pureIncrementalRate?: number
  /**
   * 真实折扣力度
   */
  public realDiscount?: number
  /**
   * ROI
   */
  public roi?: number
  /**
   * 客单价
   */
  public singlePrice?: number
  /**
   * 提报商品数
   */
  public skuCount?: number
  /**
   * 无效商品数
   */
  public skuInvalidCount?: number
  /**
   * 负提升商品数(黑名单)
   */
  public skuNegativeCount?: number
  /**
   * 门槛
   */
  public threshold?: string
  /**
   * 门槛优惠描述
   */
  public thresholdDesc?: string
  /**
   * 总GMV
   */
  public totalGmv?: number
  /**
   * UV
   */
  public uv?: number
  /**
   * UV价值
   */
  public uvValue?: number
}

/**
 * 促销下钻结果集
 */
export class PromoAnalysisSkuResultVO {
  public page?: PageVOPromoAnalysisSkuVO
  public sum?: PromoAnalysisSumVO
}

/**
 * SKU下钻列表项
 */
export class PromoAnalysisSkuVO {
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * 一级品类名称
   */
  public cname1?: string
  /**
   * 二级品类名称
   */
  public cname2?: string
  /**
   * 三级品类名称
   */
  public cname3?: string
  /**
   * 部门id
   */
  public deptId?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 件单价
   */
  public itemPrice?: number
  /**
   * 参加促销次数
   */
  public promoCount?: number
  /**
   * 促销GMV
   */
  public promoGmv?: number
  /**
   * 促销GMV占比
   */
  public promoGmvRate?: number
  /**
   * 无效促销次数
   */
  public promoInvalidCount?: number
  /**
   * 负提升(黑名单)促销次数
   */
  public promoNegativeCount?: number
  /**
   * 净提升率
   */
  public pureIncrementalRate?: number
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 真实折扣力度
   */
  public realDiscount?: number
  /**
   * ROI
   */
  public roi?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 销量
   */
  public sales?: number
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 总GMV
   */
  public totalGmv?: number
}

/**
 * 促销分析汇总VO
 */
export class PromoAnalysisSumVO {
  /**
   * 净提升率
   */
  public pureIncrementalRate?: number
  /**
   * 真实折扣力度
   */
  public realDiscount?: number
  /**
   * ROI
   */
  public roi?: number
}

/**
 * 部门树状结构
 */
export class PromoDeptTreeVO {
  public children?: Array<PromoDeptTreeVO>
  /**
   * 部门级别
   */
  public level?: number
  /**
   * 部门名称
   */
  public name?: string
}

/**
 * 查询【是否叠加其他促销风险】的参数
 */
export class PromoOverlayRiskDTO {
  /**
   * 结束日期
   */
  public endDate: string
  /**
   * 当前促销类型
   */
  public promoType: number
  /**
   * skuId列表
   */
  public skuIds: Array<number>
  /**
   * 开始日期
   */
  public startDate: string
}

export class PromoResponse {
  public adWord?: string
  public checkState?: number
  public deleteState?: boolean
  public levelMember?: number
  public promoExtType?: number
  public promoId?: number
  public promoName?: string
  public promoState?: number
  public promoType?: number
  public remark?: string
  public sites?: Array<number>
  public source?: number
  public timeBegin?: string
  public timeEnd?: string
}

/**
 * 选品明细
 */
export class PromoRoDetailVO {
  /**
   * 基线价格(常规价)
   */
  public baselinePrice?: number
  /**
   * 黑名单率
   */
  public blacklistRate?: number
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * 一级品类名称
   */
  public cname1?: string
  /**
   * 二级品类名称
   */
  public cname2?: string
  /**
   * 三级品类名称
   */
  public cname3?: string
  /**
   * 成本(仓报价)
   */
  public cost?: number
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 提价幅度
   */
  public hikeRatio?: number
  /**
   * 是否有提价风险
   */
  public hikeRisk?: boolean
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 京东价(erp价)
   */
  public jdPrice?: number
  /**
   * 是否有叠加其他促销风险
   */
  public overlayRisk?: boolean
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 真实折扣力度
   */
  public realDiscount?: number
  /**
   * 页面价(红价)
   */
  public redPrice?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 库存
   */
  public stock?: number
  /**
   * 库存周转天数
   */
  public stockTurnoverDay?: string
}

export class PromoRoQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public endDate: string
  public endIndex?: number
  public exportEmail?: string
  public gmvBand?: Array<string>
  public ifFindOverlayRisk?: boolean
  public pageNo?: number
  public pageSize?: number
  public plan: number
  public promoSubType1: number
  public promoSubType2?: number
  public promoSubTypeEnum1?:
    | 'SUB_1_0'
    | 'SUB_1_8'
    | 'SUB_1_1'
    | 'SUB_1_4'
    | 'SUB_1_10'
    | 'SUB_1_16'
    | 'SUB_1_101'
    | 'SUB_1_103'
    | 'SUB_1_106'
    | 'SUB_1_107'
    | 'SUB_1_999'
    | 'SUB_1_104'
    | 'SUB_10_0'
    | 'SUB_10_1'
    | 'SUB_10_2'
    | 'SUB_10_3'
    | 'SUB_10_4'
    | 'SUB_10_5'
    | 'SUB_10_6'
    | 'SUB_10_13'
    | 'SUB_10_14'
    | 'SUB_10_15'
    | 'SUB_10_115'
    | 'SUB_10_16'
    | 'SUB_10_17'
    | 'SUB_10_20'
    | 'SUB_10_21'
    | 'SUB_10_22'
    | 'SUB_10_23'
    | 'SUB_10_24'
    | 'SUB_4_4'
    | 'SUB_4_3'
    | 'SUB_4_2'
    | 'SUB_6_0'
    | 'SUB_6_1'
    | 'SUB_6_2'
    | 'SUB_6_3'
    | 'SUB_6_5'
    | 'SUB_6_4'
    | 'SUB_2_0'
    | 'SUB_2_3'
  public promoSubTypeEnum2?:
    | 'SUB_1_0'
    | 'SUB_1_8'
    | 'SUB_1_1'
    | 'SUB_1_4'
    | 'SUB_1_10'
    | 'SUB_1_16'
    | 'SUB_1_101'
    | 'SUB_1_103'
    | 'SUB_1_106'
    | 'SUB_1_107'
    | 'SUB_1_999'
    | 'SUB_1_104'
    | 'SUB_10_0'
    | 'SUB_10_1'
    | 'SUB_10_2'
    | 'SUB_10_3'
    | 'SUB_10_4'
    | 'SUB_10_5'
    | 'SUB_10_6'
    | 'SUB_10_13'
    | 'SUB_10_14'
    | 'SUB_10_15'
    | 'SUB_10_115'
    | 'SUB_10_16'
    | 'SUB_10_17'
    | 'SUB_10_20'
    | 'SUB_10_21'
    | 'SUB_10_22'
    | 'SUB_10_23'
    | 'SUB_10_24'
    | 'SUB_4_4'
    | 'SUB_4_3'
    | 'SUB_4_2'
    | 'SUB_6_0'
    | 'SUB_6_1'
    | 'SUB_6_2'
    | 'SUB_6_3'
    | 'SUB_6_5'
    | 'SUB_6_4'
    | 'SUB_2_0'
    | 'SUB_2_3'
  public promoType1: number
  public promoType2?: number
  public pvBand?: Array<string>
  public salesBand?: Array<string>
  public skuId?: string
  public startDate: string
  public startIndex?: number
  public threshold1?: string
  public threshold2?: string
}

/**
 * 选品建议结果集
 */
export class PromoRoVO {
  public blackSize?: number
  /**
   * 黑名单
   */
  public blacklist?: Array<PromoRoDetailVO>
  public fakeSize?: number
  /**
   * 假促销
   */
  public fakelist?: Array<PromoRoDetailVO>
  public whiteSize?: number
  /**
   * 白名单
   */
  public whitelist?: Array<PromoRoDetailVO>
}

/**
 * 效果模拟明细
 */
export class PromoSimulateDetailVO {
  /**
   * 基线销售额
   */
  public baselineGmv?: number
  /**
   * 基线价格(常规价)
   */
  public baselinePrice?: number
  /**
   * 基线销量
   */
  public baselineSales?: number
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * 一级品类名称
   */
  public cname1?: string
  /**
   * 二级品类名称
   */
  public cname2?: string
  /**
   * 三级品类名称
   */
  public cname3?: string
  /**
   * 成本(仓报价)
   */
  public cost?: number
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 销售额模拟
   */
  public gmvSimulation?: number
  /**
   * 毛利额模拟
   */
  public gpSimulation?: number
  /**
   * 提价幅度
   */
  public hikeRatio?: number
  /**
   * 是否有提价风险
   */
  public hikeRisk?: boolean
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 京东价(erp价)
   */
  public jdPrice?: number
  /**
   * 是否有叠加其他促销风险
   */
  public overlayRisk?: boolean
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 真实折扣力度
   */
  public realDiscount?: number
  /**
   * 页面价(红价)
   */
  public redPrice?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * 销量模拟
   */
  public salesSimulation?: number
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 库存
   */
  public stock?: number
  /**
   * 库存周转天数
   */
  public stockTurnoverDay?: string
}

/**
 * 效果模拟汇总
 */
export class PromoSimulateTotalVO {
  /**
   * 销售额模拟
   */
  public gmvSimulation?: number
  /**
   * 销量模拟
   */
  public salesSimulation?: number
}

export class ReplyVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: any
  /**
   * 结果描述
   */
  public message: string
}

/**
 * 报表任务重试查询参数对象
 */
export class ReportRetryQO {
  public taskId: number
}

/**
 * 新增【报表任务】的参数
 */
export class ReportTaskAddDTO {
  /**
   * 开始日期
   */
  public beginDate?: string
  /**
   * 抄送人
   */
  public ccMail?: string
  /**
   * 部门联合id
   */
  public deptUnionId: string
  /**
   * 状态
   */
  public enabled?: number
  /**
   * 结束日期
   */
  public endDate?: string
  /**
   * 友商联合id
   */
  public opponentUnionId?: string
  /**
   * 对标价格
   */
  public priceType?: number
  /**
   * 发送时间
   */
  public sendTime?: string
  /**
   * 模版类型
   */
  public templateType?: number
  /**
   * 时间维度
   */
  public timeType?: number
  /**
   * 定期模式
   */
  public timingType?: number
  /**
   * 收件人
   */
  public toMail?: string
}

/**
 * 任务配置删除查询参数
 */
export class ReportTaskDeleteQO {
  /**
   * taskId集合
   */
  public taskId?: Array<number>
}

/**
 * 【报表任务实例表】详情展示对象
 */
export class ReportTaskInstanceVO {
  /**
   * 任务开始时间
   */
  public beginTime?: string
  /**
   * 任务结束时间
   */
  public endTime?: string
  /**
   * 主键，自增id
   */
  public id?: number
  /**
   * 计划执行时间
   */
  public planTime?: string
  /**
   * 备注
   */
  public remark?: string
  /**
   * 执行状态(0 等待 1 正在运行 2 成功 3 失败 4 取消)
   */
  public status?: string
  /**
   * 任务Id
   */
  public taskId?: number
  /**
   * 运行类型（0 自动 1 手动）
   */
  public type?: string
}

/**
 * 【报表任务】列表展示对象
 */
export class ReportTaskListVO {
  /**
   * 开始日期
   */
  public beginDate?: string
  /**
   * 抄送人
   */
  public ccMail?: string
  /**
   * 创建人【最大长度20】
   */
  public createdBy?: string
  /**
   * 创建时间【yyyy-MM-dd HH:mm:ss】
   */
  public createdTime?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 部门联合id
   */
  public deptUnionId?: string
  /**
   * 状态
   */
  public enabled?: number
  /**
   * 结束日期
   */
  public endDate?: string
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 修改人【最大长度20】
   */
  public operatedBy?: string
  /**
   * 修改时间【yyyy-MM-dd HH:mm:ss】
   */
  public operatedTime?: string
  /**
   * 对标友商
   */
  public opponentName?: string
  /**
   * 友商编码
   */
  public opponentUnionId?: string
  /**
   * 发送时间
   */
  public sendTime?: string
  /**
   * 模版类型
   */
  public templateType?: number
  /**
   * 时间维度
   */
  public timeType?: number
  public timingType?: number
  /**
   * 收件人
   */
  public toMail?: string
}

/**
 * 【报表任务】详情展示对象
 */
export class ReportTaskShowVO {
  /**
   * 开始日期
   */
  public beginDate?: string
  /**
   * 抄送人
   */
  public ccMail?: string
  /**
   * 部门联合id
   */
  public deptUnionId?: string
  /**
   * 状态
   */
  public enabled?: number
  /**
   * 结束日期
   */
  public endDate?: string
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 友商联合id
   */
  public opponentUnionId?: string
  /**
   * 对标价格
   */
  public priceType?: string
  /**
   * 发送时间
   */
  public sendTime?: string
  /**
   * 模版类型
   */
  public templateType?: number
  /**
   * 时间维度
   */
  public timeType?: number
  /**
   * 定期模式
   */
  public timingType?: number
  /**
   * 收件人
   */
  public toMail?: string
}

/**
 * 修改【报表任务】的参数
 */
export class ReportTaskUpdateDTO {
  /**
   * 开始日期
   */
  public beginDate?: string
  /**
   * 抄送人
   */
  public ccMail?: string
  /**
   * 部门联合id
   */
  public deptUnionId: string
  /**
   * 状态
   */
  public enabled?: number
  /**
   * 结束日期
   */
  public endDate?: string
  /**
   * 主键ID
   */
  public id: number
  /**
   * 友商联合id
   */
  public opponentUnionId?: string
  /**
   * 对标价格
   */
  public priceType?: number
  /**
   * 发送时间
   */
  public sendTime?: string
  /**
   * 模版类型
   */
  public templateType?: number
  /**
   * 时间维度
   */
  public timeType?: number
  /**
   * 定期模式
   */
  public timingType?: number
  /**
   * 收件人
   */
  public toMail?: string
}

export class SaleSimulateDetailVO {
  /**
   * 成交价
   */
  public dealPrice?: number
  /**
   * pv
   */
  public pv?: number
  /**
   * 销量
   */
  public saleQtty?: number
  /**
   * 区分是否为用户选择的点
   */
  public type?: number
}

export class SaleSimulateListQO {
  public _blackFilter?: boolean
  public _cidList?: Array<number>
  public _deptIdList?: Array<string>
  public _enabled?: number
  public _saleStatus?: number
  public _salerErp?: Array<string>
  public brandId?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: string
  public deptLevel?: number
  public endIndex?: number
  public exportEmail?: string
  public gmvBand?: Array<string>
  public monthPriceChange?: number
  public pageNo?: number
  public pageSize?: number
  public potentialType?: number
  public pvBand?: Array<string>
  public salesBand?: Array<string>
  public skuIds?: string
  public sortType?: string
  public startIndex?: number
}

export class SaleSimulateTableVO {
  /**
   * 日均成交价
   */
  public avgDealPrice?: number
  /**
   * 日均gmv
   */
  public avgGmv?: number
  /**
   * 日均毛利
   */
  public avgGp?: number
  /**
   * 日均单量
   */
  public avgOrdQtty?: number
  /**
   * 日均销量
   */
  public avgSaleQtty?: number
  /**
   * 真实成交价范围
   */
  public dealPriceRange?: string
  /**
   * 日均pv转化率
   */
  public pvConversionRate?: number
  /**
   * pv范围
   */
  public pvRange?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 日均Uv转化率
   */
  public uvConversionRate?: number
}

export class SaleSimulateVO {
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * 全部用来作图的点(包括用户选择点+扩充的点)
   */
  public drawPoints?: Array<SaleSimulateDetailVO>
  /**
   * 制作量价关系线的点
   */
  public lineData?: Array<SaleSimulateDetailVO>
  /**
   * 扩展时间后的最大pv
   */
  public maxPv?: number
  /**
   * 扩展时间后的的最小pv
   */
  public minPv?: number
  /**
   * skuId
   */
  public skuId?: number
}

export class SimulateSkuVO {
  /**
   * 近28天平均成交价
   */
  public avgMonthDealPrice?: number
  /**
   * 近28天日均销量
   */
  public avgMonthSaleQtty?: number
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 仓报价，实时获取
   */
  public cbj?: number
  /**
   * 品类id
   */
  public cid?: number
  /**
   * 一级品类id
   */
  public cid1?: number
  /**
   * 二级品类id
   */
  public cid2?: number
  /**
   * 三级品类id
   */
  public cid3?: number
  /**
   * 品类名称
   */
  public cname?: string
  /**
   * 一级品类名称
   */
  public cname1?: string
  /**
   * 二级品类名称
   */
  public cname2?: string
  /**
   * 三级品类名称
   */
  public cname3?: string
  /**
   * 日调价次数
   */
  public dayAdjustPriceNum?: number
  /**
   * 弹性
   */
  public ec?: number
  /**
   * 价格敏感度
   */
  public ecTag?: string
  /**
   * 京东价，实时获取
   */
  public erpPrice?: number
  /**
   * 近7天gmv
   */
  public gmv7?: number
  /**
   * 销售额Band
   */
  public gmvBand?: string
  /**
   * 近7天毛利
   */
  public gp7?: number
  /**
   * 商品图片路径
   */
  public imgPath?: string
  /**
   * 近28天最低成交价
   */
  public minMonthDealPrice?: number
  /**
   * 月调价次数
   */
  public monthAdjustPriceNum?: number
  /**
   * 近一个自然月调价次数
   */
  public naturalMonthAdjustPriceNum?: number
  /**
   * 定价潜力
   */
  public potentialType?: string
  /**
   * 定价潜力说明
   */
  public potentialTypeDesc?: string
  /**
   * 点击Band
   */
  public pvBand?: string
  /**
   * 页面价，实时获取
   */
  public redPrice?: number
  /**
   * 近7天销量
   */
  public saleQtty7?: number
  /**
   * 采销ERP
   */
  public salerErp?: string
  /**
   * 销量Band
   */
  public salesBand?: string
  /**
   * skuId
   */
  public skuId?: number
  /**
   * 商品名称
   */
  public skuName?: string
  /**
   * 全国库存，实时获取
   */
  public stockQtty?: number
  /**
   * 周调价次数
   */
  public weekAdjustPriceNum?: number
}

/**
 * 新增【sku黑名单设置】的参数
 */
export class SkuBlacklistAddDTO {
  /**
   * skuId
   */
  public skuId?: Array<number>
}

/**
 * 【sku黑名单设置】删除查询参数
 */
export class SkuBlacklistDeleteQO {
  /**
   * skuId集合
   */
  public skuId?: Array<number>
}

/**
 * 【sku黑名单设置】列表展示对象
 */
export class SkuBlacklistListVO {
  /**
   * 配置人
   */
  public createdBy?: string
  public createdTime?: string
  /**
   * 操作时间
   */
  public createdTimeStr?: string
  /**
   * 一级部门名称
   */
  public deptName1?: string
  /**
   * 二级部门名称
   */
  public deptName2?: string
  /**
   * 三级部门名称
   */
  public deptName3?: string
  /**
   * skuId
   */
  public skuId?: number
}

/**
 * 【SKU详情页】展示对象
 */
export class SkuDetailItemVO {
  /**
   * 平均波动次数
   */
  public avgAlterPriceNum?: number
  /**
   * 平均价高幅度
   */
  public avgPriceGtRange?: number
  /**
   * 平均单促时长
   */
  public avgPromoDays?: number
  /**
   * 常规价
   */
  public basePrice?: number
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * 时间
   */
  public dt?: string
  /**
   * GMV
   */
  public gmv?: number
  /**
   * 诚信得分
   */
  public honestScore?: number
  /**
   * 促销提价幅度
   */
  public jdAvgWeightRiseRange?: number
  /**
   * 是否券促销
   */
  public jdCouponFlag?: string
  /**
   * 是否价高
   */
  public jdGtStatus?: boolean
  /**
   * 后台京东价
   */
  public jdPrice?: number
  /**
   * 后台京东价波动次数
   */
  public jdPriceAlterNum?: number
  /**
   * 是否提价促销
   */
  public jdPromoRaiseFlag?: boolean
  /**
   * 是否总价促销
   */
  public jdTotalFlag?: string
  /**
   * 秒杀波动次数
   */
  public msAlterNum?: number
  /**
   * 最低友商页面价
   */
  public partnerRedPrice?: number
  /**
   * pv
   */
  public pv?: number
  /**
   * 转化率
   */
  public pvRatio?: number
  /**
   * 回调后台京东价次数
   */
  public rebackJdPriceNum?: number
  /**
   * 页面价
   */
  public redPrice?: number
  /**
   * 页面价信息
   */
  public redPriceInfo?: Array<PriceWaveRedPriceListVO>
  /**
   * 销量
   */
  public saleQtty?: number
  /**
   * 是否上柜
   */
  public saleStatus?: string
  /**
   * 闪购波动次数
   */
  public sgAlterNum?: number
  /**
   * 单促波动次数
   */
  public skuPriceAlterNum?: number
  /**
   * 进货价
   */
  public stkPrc?: number
  /**
   * uv
   */
  public uv?: number
  /**
   * 波动得分
   */
  public wciScore?: number
  /**
   * 竞争得分
   */
  public wpiScore?: number
}

export class SkuDetailQO {
  public dt?: PairStringString
  public dtype: string
  public endDt?: string
  public healthDtailDt?: string
  public skuId: number
  public startDt?: string
}

/**
 * 【SKU详情页】展示对象
 */
export class SkuDetailVO {
  /**
   * 销售额BAND
   */
  public gmvBand?: string
  /**
   * sku详情列表页List
   */
  public skuDetailItems?: Array<SkuDetailItemVO>
  /**
   * sku id
   */
  public skuId?: number
  /**
   * sku名称
   */
  public skuName?: string
}

export class SkuHistoryDTO {
  public avgRedPrice?: number
  public dealPrice?: number
  public dt?: string
  public lastRedPrice?: number
  public maxRedPrice?: number
  public minRedPrice?: number
  public ordQtty?: number
  public pv?: number
  public regularPrice?: number
  public saleQtty?: number
  public skuId?: number
  public uv?: number
}

export class SkuListQO {
  public _healthDt?: string
  public _healthDtailDt?: string
  public _skuDt?: string
  public brandIds?: Array<number>
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: Array<number>
  public deptLevel: number
  public dtype?: string
  public endIndex?: number
  public gmvBand?: Array<string>
  public pageNo?: number
  public pageSize?: number
  public pvBand?: Array<string>
  public salerErps?: Array<string>
  public salesBand?: Array<string>
  public skuIds?: Array<number>
  public startIndex?: number
}

/**
 * 分页查询【商品明细】(sku下钻)展示对象
 */
export class SkuListVO {
  /**
   * 平均价高幅度
   */
  public avgPriceGtRange?: number
  /**
   * 平均单促时长
   */
  public avgPromoDays?: number
  /**
   * 平均波动次数
   */
  public avgWaveNum?: number
  /**
   * 常规价
   */
  public basePrice?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 事业群
   */
  public buName?: string
  /**
   * 品类名称1
   */
  public cid1Name?: string
  /**
   * 品类名称2
   */
  public cid2Name?: string
  /**
   * 品类名称3
   */
  public cid3Name?: string
  /**
   * 部门名称1
   */
  public deptName1?: string
  /**
   * 部门名称2
   */
  public deptName2?: string
  /**
   * 部门名称3
   */
  public deptName3?: string
  /**
   * 时间
   */
  public dt?: string
  /**
   * GMV
   */
  public gmv?: number
  /**
   * 销售额BAND
   */
  public gmvBand?: string
  /**
   * 健康总分
   */
  public healthScore?: number
  /**
   * 诚信得分
   */
  public honestScore?: number
  /**
   * 促销提价幅度
   */
  public jdAvgWeightRiseRange?: number
  /**
   * 促销提价幅度分母
   */
  public jdAvgWeightRiseRangeDown?: number
  /**
   * 促销提价幅度分子
   */
  public jdAvgWeightRiseRangeUp?: number
  /**
   * 后台京东价波动次数
   */
  public jdPriceAlterNum?: number
  /**
   * 促销参与率
   */
  public jdPromoRate?: number
  /**
   * 参加促销天数
   */
  public jdPromoSkuDtNum?: number
  /**
   * 促销提价占比
   */
  public jdRisePriceRatio?: number
  /**
   * 促销提价天数
   */
  public jdRisePriceSkuDtNum?: number
  /**
   * 秒杀波动次数
   */
  public msAlterNum?: number
  /**
   * 友商
   */
  public partnerUnionName?: string
  /**
   * 商品价高天数
   */
  public priceGtNum?: number
  /**
   * 价高商品占比
   */
  public priceHighSkuRate?: number
  /**
   * 点击BAND
   */
  public pvBand?: string
  /**
   * 转化率
   */
  public pvRatio?: number
  /**
   * 回调后台京东价次数
   */
  public rebackJdPriceNum?: number
  /**
   * 销量
   */
  public saleQtty?: number
  /**
   * 采销erp
   */
  public salerErp?: string
  /**
   * 销量BAND
   */
  public salesBand?: string
  /**
   * 闪购波动次数
   */
  public sgAlterNum?: number
  /**
   * 商品重合天数
   */
  public skuDtMatchNum?: number
  /**
   * 上柜天数
   */
  public skuDtNum?: number
  /**
   * sku id
   */
  public skuId?: number
  /**
   * 商品重合率
   */
  public skuMatchRate?: number
  /**
   * sku名称
   */
  public skuName?: string
  /**
   * 单促波动次数
   */
  public skuPriceAlterNum?: number
  /**
   * uv
   */
  public uv?: number
  /**
   * 价格波动性指数
   */
  public wci?: number
  /**
   * 价格波动指数分母
   */
  public wciDown?: number
  /**
   * 波动得分
   */
  public wciScore?: number
  /**
   * 价格波动指数分子
   */
  public wciUp?: number
  /**
   * 价格竞争指数
   */
  public wpi?: number
  /**
   * 价格竞争力指数分母
   */
  public wpiDown?: number
  /**
   * 竞争得分
   */
  public wpiScore?: number
  /**
   * 价格竞争力指数分子
   */
  public wpiUp?: number
}

export class SkuPriceChgDetailVO {
  /**
   * 商品价格更新时间
   */
  public chgDate?: string
  /**
   * 价格
   */
  public price?: number
}

export class SkuPriceChgVO {
  /**
   * 价格名称
   */
  public priceName?: string
  /**
   * SKU价格变动明细列表
   */
  public prices?: Array<SkuPriceChgDetailVO>
  /**
   * skuId
   */
  public skuId?: string
}

export class SkuPriceHistoryItemVO {
  /**
   * 常规价
   */
  public basePrice?: number
  /**
   * 结束时间
   */
  public endTime?: string
  /**
   * 后台京东价
   */
  public jdPrice?: number
  /**
   * 页面价
   */
  public redPrice?: number
  /**
   * 开始时间
   */
  public startTime?: string
}

/**
 * 新增【重点品牌监控设置】的参数
 */
export class TopBrandAddDTO {
  /**
   * 品牌集合
   */
  public brands?: Array<BrandVO>
}

/**
 * 重点品牌监控删除参数对象
 */
export class TopBrandDeleteQO {
  public id: number
}

/**
 * 【重点监控品牌配置】列表展示对象
 */
export class TopBrandListVO {
  /**
   * 品牌id
   */
  public brandId?: number
  /**
   * 品牌名称
   */
  public brandName?: string
  /**
   * 主键，自动递增
   */
  public id?: number
}

export class YearHistoryAnalysisExportQO {
  public _healthDt?: string
  public _healthDtailDt?: string
  public _skuDt?: string
  public businessType?: number
  public cid?: Array<number>
  public cidLevel?: number
  public deptId?: Array<number>
  public deptLevel: number
  public dtype?: string
  public endIndex?: number
  public gmvBand?: Array<string>
  public pageNo?: number
  public pageSize?: number
  public pvBand?: Array<string>
  public salesBand?: Array<string>
  public startIndex?: number
}

/**
 * 查询【年度历史趋势】展示对象
 */
export class YearHistoryItemVO {
  /**
   * band
   */
  public band?: string
  /**
   * 品类名称
   */
  public cidName?: string
  /**
   * 部门名称
   */
  public deptName?: string
  /**
   * 促销提价幅度
   */
  public risePriceRangeList?: Array<number>
  /**
   * 促销提价占比
   */
  public risePriceRatioList?: Array<number>
  /**
   * 波动性指数
   */
  public wciList?: Array<number>
  /**
   * 竞争力指数
   */
  public wpiList?: Array<number>
}

/**
 * 图表、列表结果对象
 */
export class ChartResultVOPriceCompeteChartListVO {
  /**
   * 图表数据
   */
  public chartData?: Array<PriceCompeteChartListVO>
  public dtime?: string
  public dtype?: string
}

/**
 * 图表、列表结果对象
 */
export class ChartResultVOPriceHonestChartListVO {
  /**
   * 图表数据
   */
  public chartData?: Array<PriceHonestChartListVO>
  public dtime?: string
  public dtype?: string
}

/**
 * 图表、列表结果对象
 */
export class ChartResultVOPriceWaveChartListVO {
  /**
   * 图表数据
   */
  public chartData?: Array<PriceWaveChartListVO>
  public dtime?: string
  public dtype?: string
}

export interface MapLongBoolean {
  [key: string]: boolean
}

export class PageVOPriceCompeteSkuListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceCompeteSkuListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPriceHealthBrandAnalysisListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceHealthBrandAnalysisListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPriceHealthCategoryAnalysisListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceHealthCategoryAnalysisListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPriceHealthDeptAnalysisListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceHealthDeptAnalysisListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPriceHealthSalerAnalysisListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceHealthSalerAnalysisListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPriceHonestSkuListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceHonestSkuListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPriceWaveSkuListVO {
  /**
   * 数据列表
   */
  public entities: Array<PriceWaveSkuListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPromoAnalysisPromoSkuVO {
  /**
   * 数据列表
   */
  public entities: Array<PromoAnalysisPromoSkuVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPromoAnalysisPromoVO {
  /**
   * 数据列表
   */
  public entities: Array<PromoAnalysisPromoVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPromoAnalysisSkuVO {
  /**
   * 数据列表
   */
  public entities: Array<PromoAnalysisSkuVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOPromoSimulateDetailVO {
  /**
   * 数据列表
   */
  public entities: Array<PromoSimulateDetailVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOReportTaskInstanceVO {
  /**
   * 数据列表
   */
  public entities: Array<ReportTaskInstanceVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOReportTaskListVO {
  /**
   * 数据列表
   */
  public entities: Array<ReportTaskListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOSimulateSkuVO {
  /**
   * 数据列表
   */
  public entities: Array<SimulateSkuVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOSkuBlacklistListVO {
  /**
   * 数据列表
   */
  public entities: Array<SkuBlacklistListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PageVOSkuListVO {
  /**
   * 数据列表
   */
  public entities: Array<SkuListVO>
  /**
   * 总条数
   */
  public entityCount: number
  /**
   * 开始序号
   */
  public firstEntityIndex: number
  /**
   * 结束序号
   */
  public lastEntityIndex: number
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 页码
   */
  public pageNo: number
  /**
   * 每页条数
   */
  public pageSize: number
}

export class PairStringString {
  public key?: string
  public left?: string
  public right?: string
  public value?: string
}

export class ReplyVOChartResultVOPriceCompeteChartListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: ChartResultVOPriceCompeteChartListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOChartResultVOPriceHonestChartListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: ChartResultVOPriceHonestChartListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOChartResultVOPriceWaveChartListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: ChartResultVOPriceWaveChartListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceCompeteSkuDetailVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceCompeteSkuDetailVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceEcAnalysisBrandVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceEcAnalysisBrandVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceEcAnalysisCatVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceEcAnalysisCatVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceEcAnalysisDeptVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceEcAnalysisDeptVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceEcAnalysisSalerVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceEcAnalysisSalerVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceEcAnalysisTopItemVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceEcAnalysisTopItemVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceHonestSkuDetailVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceHonestSkuDetailVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceHonestSkuTopVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceHonestSkuTopVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceWaveSkuDetailVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceWaveSkuDetailVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPriceWaveSkuTopVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PriceWaveSkuTopVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListPromoResponse {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PromoResponse>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListSaleSimulateTableVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<SaleSimulateTableVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListSelectOptionVOInt {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<SelectOptionVOInt>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListSkuHistoryDTO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<SkuHistoryDTO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListSkuPriceChgVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<SkuPriceChgVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOListTopBrandListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<TopBrandListVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOMapLongBoolean {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: any
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOMarkdownPriceCalcVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: MarkdownPriceCalcVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOMarkdownSaleSimulateVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: MarkdownSaleSimulateVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOMarkdownTrendSimulateVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: MarkdownTrendSimulateVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOPriceCompeteSkuListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOPriceCompeteSkuListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOPriceHonestSkuListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOPriceHonestSkuListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOPriceWaveSkuListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOPriceWaveSkuListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOPromoAnalysisPromoSkuVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOPromoAnalysisPromoSkuVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOPromoSimulateDetailVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOPromoSimulateDetailVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOReportTaskInstanceVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOReportTaskInstanceVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOReportTaskListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOReportTaskListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOSimulateSkuVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOSimulateSkuVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPageVOSkuBlacklistListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PageVOSkuBlacklistListVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPriceCompeteSumVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PriceCompeteSumVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPriceEcAnalysisHomeIndexVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PriceEcAnalysisHomeIndexVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPriceEcAnalysisTopVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PriceEcAnalysisTopVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPriceHonestSumVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PriceHonestSumVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPriceWaveSumVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PriceWaveSumVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoAnalysisChartVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoAnalysisChartVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoAnalysisHomeIndexVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoAnalysisHomeIndexVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoAnalysisPromoResultVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoAnalysisPromoResultVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoAnalysisSkuResultVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoAnalysisSkuResultVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoAnalysisSumVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoAnalysisSumVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoRoVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoRoVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOPromoSimulateTotalVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: PromoSimulateTotalVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOReportTaskShowVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: ReportTaskShowVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOSaleSimulateVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: SaleSimulateVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOSetPromoDeptTreeVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: Array<PromoDeptTreeVO>
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOSimulateSkuVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: SimulateSkuVO
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOVoid {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOInt {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: number
  /**
   * 结果描述
   */
  public message: string
}

export class ReplyVOString {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 返回数据
   */
  public data?: string
  /**
   * 结果描述
   */
  public message: string
}

export class SelectOptionVOInt {
  public label?: string
  public value?: number
}
export type EsIndexAddDTO = any
export type String = any
export type ListBrandVO = any
