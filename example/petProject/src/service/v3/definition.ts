/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */

/** 新增【表字段信息】的参数 */
export interface FieldDefAddDTO {
  /** 字段描述 */
  description?: string
  /** 字段Id */
  fieldId: string
  /**
   * 字段名称
   * example: name1
   */
  fieldName: string
  /** 关联 */
  tableId: string
  /** 字段类型：boolean,long,double,string,date */
  type: string
}

export type ReplyVOPageVOFieldDefListVO = any
export type ReplyVOFieldDefShowVO = any
export type ReplyVO = any
