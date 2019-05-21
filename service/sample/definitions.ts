export class CisMatchInfoDTO {
  public jdSkuId: number
  public opponentId: number
  public opponentSkuUrl?: string
  public uuid?: string
}
export class CisSkuDTO {
  public brandId?: number[]
  public cid?: number[]
  public cidLevel?: number
  public deptId?: string[]
  public deptLevel?: number
  public endIndex?: number
  public gmvBand?: string[]
  public orderBy?: string
  public orderType?: string
  public pageNo?: number
  public pageSize?: number
  public pvBand?: string[]
  public salesBand?: string[]
  public skuId?: number[]
  public startIndex?: number
}
/**
 * 【比价sku】列表展示对象
 */
export class CisSkuListVO {
  /**
   * 页面基线价
   */
  public basePrice?: number
  /**
   * 黑名单状态
   */
  public blackListStatus?: boolean
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * uv转化率
   */
  public conversion?: number
  /**
   * 成交价
   */
  public dealPrice?: number
  public dealPriceLastTime?: string
  /**
   * 成交价价差幅度
   */
  public dealPriceMargin?: number
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 商品图片地址
   */
  public imgUrl?: string
  /**
   * 京东价
   */
  public jdPrice?: number
  /**
   * 匹配状态
   */
  public matchStatus?: boolean
  /**
   * 监控状态
   */
  public monitorStatus?: boolean
  /**
   * 价格标签
   */
  public priceTag?: number
  /**
   * 促销信息
   */
  public promoInfo?: string
  /**
   * pv
   */
  public pv?: number
  /**
   * 红价
   */
  public redPrice?: number
  /**
   * 红价价差幅度
   */
  public redPriceMargin?: number
  /**
   * 红价更新时间
   */
  public redPriceUpdatedTime?: string
  /**
   * 销量
   */
  public saleQtty?: number
  /**
   * 采销账号
   */
  public salerErp?: string
  /**
   * 京东sku
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
   * uv
   */
  public uv?: number
  public opponentMin: OpponentSkuShowVO
}
/**
 * 【比价sku】详情展示对象
 */
export class CisSkuShowVO {
  /**
   * 页面基线价
   */
  public basePrice?: number
  /**
   * 黑名单状态
   */
  public blackListStatus?: boolean
  /**
   * 仓报价
   */
  public cbj?: number
  /**
   * uv转化率
   */
  public conversion?: number
  /**
   * 成交价
   */
  public dealPrice?: number
  public dealPriceLastTime?: string
  /**
   * 成交价价差幅度
   */
  public dealPriceMargin?: number
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 商品图片地址
   */
  public imgUrl?: string
  /**
   * 京东价
   */
  public jdPrice?: number
  /**
   * 匹配状态
   */
  public matchStatus?: boolean
  /**
   * 监控状态
   */
  public monitorStatus?: boolean
  /**
   * 价格标签
   */
  public priceTag?: number
  /**
   * 促销信息
   */
  public promoInfo?: string
  /**
   * pv
   */
  public pv?: number
  /**
   * 红价
   */
  public redPrice?: number
  /**
   * 红价价差幅度
   */
  public redPriceMargin?: number
  /**
   * 红价更新时间
   */
  public redPriceUpdatedTime?: string
  /**
   * 销量
   */
  public saleQtty?: number
  /**
   * 采销账号
   */
  public salerErp?: string
  /**
   * 京东sku
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
   * uv
   */
  public uv?: number
  public opponentMin: OpponentSkuShowVO
}
export class ConfigVO {
  public hour?: number
  public num?: number
}
/**
 * 匹配【友商sku】的参数
 */
export class OpponentMatchDTO {
  /**
   * 友商Id
   */
  public opponentId: number
  /**
   * 友商sku
   */
  public opponentSkuId: string
}
/**
 * 【友商sku】列表展示对象
 */
export class OpponentSkuListVO {
  /**
   * 重点友商标记
   */
  public attentionType?: boolean
  /**
   * 成交价
   */
  public dealPrice?: number
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 友商图片url
   */
  public imgUrl?: string
  /**
   * 友商Id
   */
  public opponentId?: number
  /**
   * 友商名称
   */
  public opponentName?: string
  /**
   * 友商商品id
   */
  public opponentProductId?: number
  /**
   * 友商sku
   */
  public opponentSkuId?: string
  /**
   * 商品名称
   */
  public opponentSkuName?: string
  /**
   * 友商商品价格更新时间
   */
  public opponentUpdatedTime?: string
  /**
   * 促销信息
   */
  public promoInfo?: string
  /**
   * 红价
   */
  public redPrice?: number
  /**
   * 友商url
   */
  public url?: string
}
/**
 * 【友商sku】详情展示对象
 */
export class OpponentSkuShowVO {
  /**
   * 重点友商标记
   */
  public attentionType?: boolean
  /**
   * 页面基线价
   */
  public basePrice?: number
  /**
   * 成交价
   */
  public dealPrice?: number
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 友商图片url
   */
  public imgUrl?: string
  /**
   * 友商Id
   */
  public opponentId?: number
  /**
   * 友商商品id
   */
  public opponentProductId?: number
  /**
   * 店铺类型名称
   */
  public opponentShopTypeName?: string
  /**
   * 友商sku
   */
  public opponentSkuId?: string
  /**
   * 商品名称
   */
  public opponentSkuName?: string
  /**
   * 友商商品价格更新时间
   */
  public opponentUpdatedTime?: string
  /**
   * 促销信息
   */
  public promoInfo?: string
  /**
   * 红价
   */
  public redPrice?: number
  /**
   * 友商url
   */
  public url?: string
}
/**
 * 【友商】详情展示对象
 */
export class OpponentVO {
  /**
   * 友商Id
   */
  public opponentId?: number
  /**
   * 友商名称
   */
  public opponentName?: string
}
export class PageVOCisSkuListVO {
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
  public entities: CisSkuListVO[]
}
export class PriceHisDetailVO {
  /**
   * 商品价格更新时间
   */
  public date?: string
  /**
   * 价格
   */
  public price?: number
}
export class PriceHistoryVO {
  /**
   * 友商ID
   */
  public opponentId?: number
  /**
   * 友商名称
   */
  public opponentName?: string
  /**
   * 商品编码,含京东自己
   */
  public sku?: string
  public prices: PriceHisDetailVO[]
}
export class ReplyVOCisSkuShowVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: CisSkuShowVO
}
export class ReplyVOConfigVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: ConfigVO
}
export class ReplyVOListOpponentSkuListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: OpponentSkuListVO[]
}
export class ReplyVOListOpponentVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: OpponentVO[]
}
export class ReplyVOListPriceHistoryVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PriceHistoryVO[]
}
export class ReplyVOPageVOCisSkuListVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  public code: string
  /**
   * 结果描述
   */
  public message: string
  public data: PageVOCisSkuListVO
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
/**
 * 匹配【京东sku】的参数
 */
export class SkuMatchDTO {
  /**
   * 京东sku
   */
  public skuId: number
  public opponent: OpponentMatchDTO[]
}
