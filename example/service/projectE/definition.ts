/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type BodyBuilder = any

export type PageVOListVO = PageVO<ListVO>
export type ReplyVOPageVOFollowRecordVO = ReplyVO<PageVO<FollowRecordVO>>
export class PageVO<ListVO = any> {
  /** 数据列表 */
  public entities: Array<ListVO>

  /**
   * 总条数
   * format: int32
   */
  public entityCount: number

  /**
   * 开始序号
   * format: int32
   */
  public firstEntityIndex: number

  /**
   * 结束序号
   * format: int32
   */
  public lastEntityIndex: number

  /**
   * 总页数
   * format: int32
   */
  public pageCount: number

  /**
   * 页码
   * format: int32
   */
  public pageNo: number

  /**
   * 每页条数
   * format: int32
   */
  public pageSize: number
}

export type ListVO = any
export class ReplyVO<PageVOFollowRecordVO = any> {
  /** 响应代码【0正确,非0错误】 */
  public code: string

  /** 返回数据 */
  public data?: PageVOFollowRecordVO

  /** 结果描述 */
  public message: string
}

export type FollowRecordVO = any
export type Int = any
export type PageVOFollowRecordVO = any
