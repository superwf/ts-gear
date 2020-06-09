/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */

export type BodyBuilder = any

export type PageVOListVO = PageVO<ListVO>
export type ReplyVOPageVOFollowRecordVO = ReplyVO<PageVO<FollowRecordVO>>
export interface PageVO<ListVO = any> {
  /** 数据列表 */
  entities: Array<ListVO>
  /**
   * 总条数
   * format: int32
   * example: 100
   */
  entityCount: number
  /**
   * 开始序号
   * format: int32
   * example: 0
   */
  firstEntityIndex: number
  /**
   * 结束序号
   * format: int32
   * example: 10
   */
  lastEntityIndex: number
  /**
   * 总页数
   * format: int32
   * example: 10
   */
  pageCount: number
  /**
   * 页码
   * format: int32
   * example: 1
   */
  pageNo: number
  /**
   * 每页条数
   * format: int32
   * example: 10
   */
  pageSize: number
}

export type ListVO = any
export interface ReplyVO<PageVOFollowRecordVO = any> {
  /**
   * 响应代码【0正确,非0错误】
   * example: 000000
   */
  code: string
  /** 返回数据 */
  data?: PageVOFollowRecordVO
  /**
   * 结果描述
   * example: success
   */
  message: string
}

export type FollowRecordVO = any
export type ReplyVOInt = any
export type PageVOFollowRecordVO = any
