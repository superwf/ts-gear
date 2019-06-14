/**
 * 带数据的返回数据
 */
export class DataTransOutput {
  /**
   * 返回数据
   */
  public data?: any
  /**
   * 错误码。
   * 100000 成功
   * 200000 入参不合法
   * 400000 权限不足
   * 500000 服务失败
   */
  public transCode: number
  /**
   * 错误信息。成功：“成功” 失败：“失败对应的msg”
   */
  public transMessage: string
  /**
   * 信息详情”
   */
  public transMessageDetail: string
}

export class ResultListMap {
  public description?: string
}

export class OutputParameterVo {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
}

export class ABCOutputParameter {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
}

export class ChineseAndEnglishMixedWithBlankVo {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
}

export class QueryParameters {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
  public data?: any
}

export class TheGenericRequestParameterTokenOutputParameterVo {
  public bizParamVo?: OutputParameterVo
}

/**
 * 带数据的返回数据
 */
export class DataTransOutputOutputParameterVo {
  /**
   * 返回数据
   */
  public data?: OutputParameterVo
  /**
   * 错误码。
   * 100000 成功
   * 200000 入参不合法
   * 400000 权限不足
   * 500000 服务失败
   */
  public transCode: number
  /**
   * 错误信息。成功：“成功” 失败：“失败对应的msg”
   */
  public transMessage: string
  /**
   * 信息详情”
   */
  public transMessageDetail: string
}

export class ResultListMap1 {
  public description?: string
  public result?: Map[]
  public returnCode?: number
}
export type TheGenericRequestParameterQueryParameters = any
export type Map = any
