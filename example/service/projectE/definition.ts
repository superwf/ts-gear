/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type PropertyOf<T extends any, K extends keyof T> = T[K];
export type BodyBuilder = any;

export class PageVO<ListVO> {
  /** 数据列表 */
  public entities: Array<ListVO>;
  /**
   * 总条数
   * format: int32
   */
  public entityCount: number;
  /**
   * 开始序号
   * format: int32
   */
  public firstEntityIndex: number;
  /**
   * 结束序号
   * format: int32
   */
  public lastEntityIndex: number;
  /**
   * 总页数
   * format: int32
   */
  public pageCount: number;
  /**
   * 页码
   * format: int32
   */
  public pageNo: number;
  /**
   * 每页条数
   * format: int32
   */
  public pageSize: number;
}

export type Int = any;
