export class vo {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
}
export class abc {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
}
export class Vo {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
}
export class {
  /**
   * 开卡日
   */
  public dueDay: string
  /**
   * 进件渠道
   */
  public requestChannel: string
  data: DataTransOutput
}
export class tokenvo {
  bizParamVo: vo
}
/**
 * 带数据的返回数据
 */
export class DataTransOutputvo {
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
  data: vo
}
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
  public returnCode?: number
  result: Map[]
}
