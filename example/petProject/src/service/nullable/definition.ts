/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */

/**
 * @description
 *   任务明细
 */
export interface BatchCreateProducrTaskDetailModel {
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   生产数量
   * @format int32
   */
  plan_produce_count: number;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   是否需要库房备料(0 不需要 1 需要)
   * @format int32
   */
  is_ready: number;
}

/**
 * @description
 *   批量创建生产任务
 */
export interface BatchCreateProducrTaskModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   任务明细
   */
  detail?: Array<BatchCreateProducrTaskDetailModel> | null;
}

/**
 * @description
 *   线边仓物料明细
 */
export interface BomProduceLineStockList {
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   用量
   * @format double
   */
  count: number;
  /**
   * @description
   *   线上物料总数
   * @format double
   */
  allcount: number;
}

/** @description */
export interface BomProduceLineStockListListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<BomProduceLineStockList> | null;
}

/**
 * @description
 *   物料明细
 */
export interface BomProductList {
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   用量
   * @format double
   */
  allcount: number;
  /**
   * @description
   *   库存齐套数量
   * @format double
   */
  complete_now_count: number;
  /**
   * @description
   *   库存时序齐套数量
   * @format double
   */
  sequence_now_count: number;
  /**
   * @description
   *   是否是看板料
   * @format int32
   */
  type: number;
}

/** @description */
export interface BomProductListListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<BomProductList> | null;
}

/** @description */
export interface BooleanReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity: boolean;
}

/**
 * @description
 *   完工/强制完工
 */
export interface ComplateReportModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   是否强制完工 0 否 1 是
   * @format int32
   */
  is_force_complate: number;
  /**
   * @description
   *   强制完工备注(非强制完工不用填)
   */
  complate_remark?: string | null;
}

/**
 * @description
 *   添加工单bom子物料
 */
export interface CreateBomDetailModel {
  /**
   * @description
   *   父级物料号
   */
  parent_prod_code?: string | null;
  /**
   * @description
   *   配套方案id
   * @format int32
   */
  wo_bom_sln_id: number;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   用量
   * @format double
   */
  count: number;
  /**
   * @description
   *   计量单位
   */
  unit?: string | null;
  /**
   * @description
   *   创建人
   * @format int32
   */
  create_user: number;
}

/**
 * @description
 *   报工参与人
 */
export interface CreateReportDetailModel {
  /**
   * @description
   *   人员id
   * @format int32
   */
  linkman_id: number;
  /**
   * @description
   *   人员姓名
   */
  linkman_name?: string | null;
}

/**
 * @description
 *   添加报工记录
 */
export interface CreateReportModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
  /**
   * @description
   *   报工数量
   * @format int32
   */
  count: number;
  /**
   * @description
   *   报工备注
   */
  remark?: string | null;
  /**
   * @description
   *   批次ID(零部件报工使用)
   */
  batch_id?: string | null;
  /**
   * @description
   *   单位(零部件报工使用)
   */
  unit?: string | null;
  /**
   * @description
   *   其他信息(零部件报工使用)
   */
  other_info?: string | null;
  /**
   * @description
   *   报工参与人
   */
  details?: Array<CreateReportDetailModel> | null;
}

/**
 * @description
 *   绑定sn信息
 */
export interface CreateSnDetailModel {
  /**
   * @description
   *   主sn码id
   * @format int32
   */
  sn_id: number;
  /**
   * @description
   *   明细sn
   */
  sn?: string | null;
}

/**
 * @description
 *   创建sn码
 */
export interface CreateSnRecordModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   sn
   */
  sn?: string | null;
}

/**
 * @description
 *   撤回生产任务
 */
export interface DeleteProduceTask {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/**
 * @description
 *   解绑sn
 */
export interface DeleteSnDetailModel {
  /** @format int32 */
  detail_id: number;
}

/**
 * @description
 *   删除工单bom物料
 */
export interface DeleteWoBomDetailModel {
  /**
   * @description
   *   id
   * @format int32
   */
  id: number;
}

/**
 * @description
 *   删除工单
 */
export interface DeleteWoModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/**
 * @description
 *   获取生产批次号
 */
export interface GetBatchInfoModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

/**
 * @description
 *   获取批次相关信息
 */
export interface GetBatchInfoResultModel {
  /**
   * @description
   *   前缀
   */
  prefix?: string | null;
  /**
   * @description
   *   分厂简称
   */
  work_shop_shortname?: string | null;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
  /**
   * @description
   *   日期
   */
  date?: string | null;
}

/** @description */
export interface GetBatchInfoResultModelReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: GetBatchInfoResultModel;
}

/**
 * @description
 *   查询批量创建工单结果
 */
export interface GetBatchWoBomResultModel {
  /**
   * @description
   *   guid
   */
  key?: string | null;
}

/**
 * @description
 *   获取核心零部件
 */
export interface GetBomCoreListModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

export interface GetBomModelByTaskIdAndProdCodeModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
}

/**
 * @description
 *   查询物料明细
 */
export interface GetBomProductListModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/**
 * @description
 *   查询工单送检记录
 */
export interface GetCheckListModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  produce_task_id: number;
}

export interface GetGetProduceCountModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

export interface GetLineListModel {
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
}

/**
 * @description
 *   日志
 */
export interface GetLogListModel {
  /**
   * @description
   *   日志类型 1 工单日志 2 生产日志
   * @format int32
   */
  type: number;
  /**
   * @description
   *   关联id  工单id 或者是 生产任务id
   * @format int32
   */
  join_id: number;
}

/**
 * @description
 *   不使用配套方案
 */
export interface GetNoPlanBomSlnModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/**
 * @description
 *   获取物料信息
 */
export interface GetProdInfoModel {
  /**
   * @description
   *   物料类型 0 成品 1 零部件
   * @format int32
   */
  prod_type: number;
  /**
   * @description
   *   物料编码
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   当前页
   * @format int32
   */
  page: number;
  /**
   * @description
   *   页大小
   * @format int32
   */
  page_size: number;
}

/**
 * @description
 *   获取物料信息返回
 */
export interface GetProdModelByProdCodeResultModel {
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshopId: number;
  /**
   * @description
   *   规格型号
   */
  prod_spec?: string | null;
  /**
   * @description
   *   零部件类型或者是系列
   */
  prod_other?: string | null;
  /**
   * @description
   *   系列ID
   * @format int32
   */
  series_id: number;
  /**
   * @description
   *   计量单位
   */
  unit?: string | null;
}

/** @description */
export interface GetProdModelByProdCodeResultModelListReturnData {
  /** @description */
  list: Array<GetProdModelByProdCodeResultModel>;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface GetProdModelByProdCodeResultModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: GetProdModelByProdCodeResultModelListReturnData;
}

/**
 * @description
 *   查询工单分配列表
 */
export interface GetProduceAssignmentListModel {
  /**
   * @description
   *   当前页
   * @format int32
   */
  page: number;
  /**
   * @description
   *   页大小
   * @format int32
   */
  page_size: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   生产任务号
   */
  task_code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   系列名称
   */
  series_name?: string | null;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date_begin: string;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date_end: string;
  /**
   * @description
   *   计划完工日期
   * @format date-time
   */
  plan_complete_date_begin: string;
  /**
   * @description
   *   计划完工日期
   * @format date-time
   */
  plan_complete_date_end: string;
  /**
   * @description
   *   完工状态 1 已释放, 2 未完工, 3 已完工
   * @format int32
   */
  release_state: number;
  /**
   * @description
   *   工单类型 1=生产工单 2=售后工单 3=返工工单 4=维修工单 5=外协工单 6=其他工单 7=改装工单 8=研发工单
   * @format int32
   */
  wo_type: number;
}

/**
 * @description
 *   工单生产任务的附加信息
 */
export interface GetProduceOtherInfoModel {
  /**
   * @description
   *   关联订单
   */
  order_code?: string | null;
  /**
   * @description
   *   关联工单
   */
  wo_code?: string | null;
  /**
   * @description
   *   客户名称
   */
  customer_name?: string | null;
  /**
   * @description
   *   需求类型 0 订单需求 1库存需求 2其他需求
   * @format int32
   */
  demand_type: number;
  /**
   * @description
   *   生产反馈
   */
  produce_remark?: string | null;
}

/** @description */
export interface GetProduceOtherInfoModelReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: GetProduceOtherInfoModel;
}

/**
 * @description
 *   查询生产任务附加信息
 */
export interface GetProduceOtherInfoRequestModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

export interface GetProduceTaskDetailListModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/**
 * @description
 *   查询生产任务列表
 */
export interface GetProduceTaskListModel {
  /**
   * @description
   *   当前页
   * @format int32
   */
  page: number;
  /**
   * @description
   *   页大小
   * @format int32
   */
  page_size: number;
  /**
   * @description
   *   工单号
   */
  wo_code?: string | null;
  /**
   * @description
   *   生产任务号
   */
  task_code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   系列名称
   */
  series_name?: string | null;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date_begin: string;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date_end: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date_begin: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date_end: string;
  /**
   * @description
   *   完工状态 1 已完工 2 未完工
   * @format int32
   */
  report_state: number;
  /**
   * @description
   *   工单类型 1=生产工单 2=售后工单 3=返工工单 4=维修工单 5=外协工单 6=其他工单 7=改装工单 8=研发工单
   * @format int32
   */
  wo_type: number;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
}

export interface GetProduceTaskModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

/**
 * @description
 *   线边仓物料明细
 */
export interface GetProductListModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

/**
 * @description
 *   查询工单
 */
export interface GetRecordModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  id: number;
}

/**
 * @description
 *   查询报工记录
 */
export interface GetReportListByWoIdModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

export interface GetReportListModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

/**
 * @description
 *   通过sn生成序列号
 */
export interface GetSerialNumberModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
  /**
   * @description
   *   sn列表
   */
  sn?: Array<string> | null;
}

/**
 * @description
 *   根据序列号获取sn和核心零部件
 */
export interface GetSnListBySerialNumberModel {
  /**
   * @description
   *   序列号
   */
  serial_number?: string | null;
}

/**
 * @description
 *   查询产线物料列表
 */
export interface GetStarTaskListModel {
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
}

/**
 * @description
 *   线上物料列表
 */
export interface GetStarTaskListResultModel {
  /**
   * @description
   *   物料编码
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   物料总数量
   * @format double
   */
  all_count: number;
  /**
   * @description
   *   当前线上物料数量
   * @format double
   */
  line_count: number;
}

/** @description */
export interface GetStarTaskListResultModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<GetStarTaskListResultModel> | null;
}

export interface GetTaskLogListModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

/**
 * @description
 *   根据配套方案获取bom
 */
export interface GetWoBomBySlnModel {
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   配套方案id
   * @format int32
   */
  sln_id: number;
  /**
   * @description
   *   BomID
   * @format int32
   */
  bom_id: number;
  /**
   * @description
   *   物料类型 0 成品 1 零部件
   * @format int32
   */
  prod_type: number;
}

/**
 * @description
 *   获取配套方案
 */
export interface GetWoBomSlnModel {
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   0成品 1 零部件
   * @format int32
   */
  prod_type: number;
}

/**
 * @description
 *   查询工单列表
 */
export interface GetWoListModel {
  /**
   * @description
   *   当前页
   * @format int32
   */
  page: number;
  /**
   * @description
   *   页大小
   * @format int32
   */
  page_size: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   系列id
   * @format int32
   */
  series_id: number;
  /**
   * @description
   *   开始时间
   * @format date-time
   */
  begin: string;
  /**
   * @description
   *   结束时间
   * @format date-time
   */
  end: string;
  /**
   * @description
   *   是否正序
   * @format int32
   */
  is_asc: number;
}

/**
 * @description
 *   获取工单附加信息
 */
export interface GetWoOtherModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/** @description */
export interface GetWoRecordListToSelectModelsModel {
  /**
   * @description
   *   当前页
   * @format int32
   */
  page: number;
  /**
   * @description
   *   页大小
   * @format int32
   */
  page_size: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
}

/** @description */
export interface GetWoSlnAndBomModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
}

/**
 * @description
 *   产线
 */
export interface LineModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
  /**
   * @description
   *   分厂Id
   * @format int32
   */
  manufacturer_id: number;
  /**
   * @description
   *   线边仓id
   * @format int32
   */
  side_location_id: number;
  /**
   * @description
   *   线边仓编号
   */
  side_location_code?: string | null;
  /**
   * @description
   *   产线仓Id
   * @format int32
   */
  line_location_id: number;
  /**
   * @description
   *   产线仓编号
   */
  line_location_code?: string | null;
  /**
   * @description
   *   成品库位Id
   * @format int32
   */
  product_location_id: number;
  /**
   * @description
   *   成品库位编号
   */
  product_location_code?: string | null;
  /**
   * @description
   *   产线负责人
   * @format int32
   */
  linkman_id: number;
  /**
   * @description
   *   产线负责人
   */
  linkman_name?: string | null;
}

/** @description */
export interface LineModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<LineModel> | null;
}

/**
 * @description
 *   车间信息
 */
export interface ManufacturerModel {
  /**
   * @description
   *   自增ID
   * @format int32
   */
  id: number;
  /**
   * @description
   *   车间名称
   */
  manufacturer_name?: string | null;
  /**
   * @description
   *   分厂简称
   */
  manufacturer_shortname?: string | null;
  /**
   * @description
   *   是否删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   修改人
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  update_time: string;
}

/** @description */
export interface ManufacturerModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<ManufacturerModel> | null;
}

/**
 * @description
 *   物料下线明细
 */
export interface OffLineDetailModel {
  /**
   * @description
   *   批次编号
   */
  batchId?: string | null;
  /**
   * @description
   *   物料号
   */
  productCode?: string | null;
  /**
   * @description
   *   物料名称
   */
  productName?: string | null;
  /**
   * @description
   *   批次信息
   */
  batch?: string | null;
  /**
   * @description
   *   生产组织
   */
  produceOrg?: string | null;
  /**
   * @description
   *   生产日期
   */
  produceDate?: string | null;
  /**
   * @description
   *   供应商
   */
  supplier?: string | null;
  /**
   * @description
   *   班组
   */
  team?: string | null;
  /**
   * @description
   *   数量
   * @format double
   */
  num: number;
  /**
   * @description
   *   单位
   */
  unit?: string | null;
  /**
   * @description
   *   仓库Id
   * @format int32
   */
  warehouseId: number;
  /**
   * @description
   *   区域Id
   * @format int32
   */
  regionId: number;
  /**
   * @description
   *   库位Id
   * @format int32
   */
  locationId: number;
  /**
   * @description
   *   库位编号
   */
  locationCode?: string | null;
  /**
   * @description
   *   父类批次编号
   */
  parentBatchId?: string | null;
  /**
   * @description
   *   关联单据Id
   */
  relId?: string | null;
}

/**
 * @description
 *   物料下线
 */
export interface OffLineModel {
  /**
   * @description
   *   产线id
   * @format int32
   */
  lineId: number;
  /**
   * @description
   *   产线名称
   */
  lineName?: string | null;
  stockPartsBatchModel: OffLineDetailModel;
}

/**
 * @description
 *   上料
 */
export interface OnLineModel {
  /**
   * @description
   *   物料编号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   包装id
   */
  package_id?: string | null;
  /**
   * @description
   *   序列号
   */
  sn_number?: string | null;
  /**
   * @description
   *   批号
   */
  batch_number?: string | null;
  /**
   * @description
   *   数量
   * @format double
   */
  count: number;
  /**
   * @description
   *   来源
   */
  source?: string | null;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
}

export interface PKMBomResultModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   物料编码
   */
  code?: string | null;
  /**
   * @description
   *   物料名称
   */
  name?: string | null;
  /**
   * @description
   *   用量
   * @format double
   */
  number: number;
  /**
   * @description
   *   是否是核心零部件
   * @format int32
   */
  isCore: number;
  /**
   * @description
   *   是否是看板料
   * @format int32
   */
  isCardProduct: number;
  /**
   * @description
   *   单位
   */
  unit?: string | null;
  /**
   * @description
   *   下级
   */
  children?: Array<PKMBomResultModel> | null;
}

/** @description */
export interface PKMBomResultModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<PKMBomResultModel> | null;
}

/**
 * @description
 *   工单配套方案信息
 */
export interface RequestWoBomSlnModel {
  /**
   * @description
   *   配套方案id
   * @format int32
   */
  sln_id: number;
  /**
   * @description
   *   BOMID
   * @format int32
   */
  bom_id: number;
  /**
   * @description
   *   配套方案名称
   */
  sln_name?: string | null;
}

/**
 * @description
 *   保存工单送检
 */
export interface SaveCheckModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  produce_task_id: number;
  /**
   * @description
   *   送检数量
   * @format int32
   */
  check_count: number;
  /**
   * @description
   *   抽样数量
   * @format int32
   */
  sample_count: number;
}

/**
 * @description
 *   创建工单
 */
export interface SaveWoModel {
  /**
   * @description
   *   工单Id
   * @format int32
   */
  id: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   计量单位
   */
  prod_unit?: string | null;
  /**
   * @description
   *   工单类型 1=生产工单 2=售后工单 3=返工工单 4=维修工单 5=外协工单 6=其他工单 7=改装工单 8=研发工单
   * @format int32
   */
  wo_type: number;
  /**
   * @description
   *   计划生产数量
   * @format int32
   */
  plan_count: number;
  /**
   * @description
   *   是否支持超量生产
   * @format int32
   */
  is_overproduction: number;
  /**
   * @description
   *   计划上线日期(格式2022-01-20)
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   计划完成时间(格式2022-01-20)
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   车间ID
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   物料类型 0 成品 1 零部件
   * @format int32
   */
  prod_type: number;
  /**
   * @description
   *   物料规格型号
   */
  prod_spec?: string | null;
  /**
   * @description
   *   物料系列或零部件类型
   */
  prod_other?: string | null;
  /**
   * @description
   *   系列ID
   * @format int32
   */
  series_id: number;
  /**
   * @description
   *   工单BOM
   */
  bom_list?: Array<PKMBomResultModel> | null;
  bom_sln: RequestWoBomSlnModel;
  wo_other: WoOtherModel;
}

/**
 * @description
 *   SN列表
 */
export interface SnListModel {
  /**
   * @description
   *   当前页
   * @format int32
   */
  page: number;
  /**
   * @description
   *   页大小
   * @format int32
   */
  page_size: number;
  /**
   * @description
   *   生产任务id(可不传)
   * @format int32
   */
  task_id: number;
  /**
   * @description
   *   产线id(可不传)
   * @format int32
   */
  line_id: number;
}

/**
 * @description
 *   开始生产任务
 */
export interface StarProduceTaskModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  task_id: number;
}

/** @description */
export interface StringReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: string | null;
}

export interface SupplyProduct {
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   需求总量
   * @format double
   */
  need_count: number;
  /**
   * @description
   *   物料单位
   */
  prod_unit?: string | null;
  /**
   * @description
   *   已领数量
   * @format double
   */
  receive_count: number;
}

/** @description */
export interface SupplyProductListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<SupplyProduct> | null;
}

export interface UpdateProduceTaskDateModel {
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  id: number;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   计划完工日期
   * @format date-time
   */
  plan_complete_date: string;
}

/**
 * @description
 *   修改工单bom用量
 */
export interface UpdateWoBomCountModel {
  /**
   * @description
   *   id
   * @format int32
   */
  id: number;
  /**
   * @description
   *   用量
   * @format double
   */
  count: number;
}

/**
 * @description
 *   修改工单状态
 */
export interface UpdateWoStateModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   工单状态 0 未释放 1 已释放 2 未完工 3 已完工 4 关闭
   * @format int32
   */
  type: number;
}

/**
 * @description
 *   工单BOM
 */
export interface WoBomModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   配套方案id
   * @format int32
   */
  sln_id: number;
  /**
   * @description
   *   物料编码
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   用量
   * @format double
   */
  count: number;
  /**
   * @description
   *   上级物料号
   */
  parent_prod_code?: string | null;
  /**
   * @description
   *   是否删除 1删除 0未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
  /**
   * @description
   *   是否需要查询库存
   * @format int32
   */
  is_stock: number;
  /**
   * @description
   *   是否是核心零部件
   * @format int32
   */
  is_core: number;
  /**
   * @description
   *   是否是看板料
   * @format int32
   */
  is_card_product: number;
  /**
   * @description
   *   计量单位
   */
  unit?: string | null;
}

/** @description */
export interface WoBomModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoBomModel> | null;
}

/**
 * @description
 *   返回的工单配套方案和bom明细
 */
export interface WoBomSlnAndBomDetail {
  sln: WoChildBomSlnModel;
  /**
   * @description
   *   BOM明细
   */
  bom_detail?: Array<PKMBomResultModel> | null;
}

/** @description */
export interface WoBomSlnAndBomDetailReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoBomSlnAndBomDetail;
}

/**
 * @description
 *   工单bom配套方案
 */
export interface WoBomSlnModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   配套方案id
   * @format int32
   */
  sln_id: number;
  /**
   * @description
   *   BOMID
   * @format int32
   */
  bom_id: number;
  /**
   * @description
   *   配套方案名称
   */
  sln_name?: string | null;
  /**
   * @description
   *   是否删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   修改人
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   修改时间
   * @format date-time
   */
  update_time: string;
}

/** @description */
export interface WoBomSlnModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoBomSlnModel> | null;
}

/**
 * @description
 *   BOM配套方案
 */
export interface WoChildBomSlnModel {
  /**
   * @description
   *   配套方案表id
   * @format int32
   */
  wo_bom_sln_id: number;
  /**
   * @description
   *   工单ID
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   bomid
   * @format int32
   */
  bom_id: number;
  /**
   * @description
   *   配套方案id
   * @format int32
   */
  sln_id: number;
  /**
   * @description
   *   配套方案名称
   */
  sln_name?: string | null;
}

/**
 * @description
 *   工单日志
 */
export interface WoLogModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   关联id type = 1 工单id type =2 生产任务id
   * @format int32
   */
  join_id: number;
  /**
   * @description
   *   操作内容
   */
  content?: string | null;
  /**
   * @description
   *   日志类型 1 工单日志 2 生产日志
   * @format int32
   */
  type: number;
  /**
   * @description
   *   操作人姓名
   */
  create_username?: string | null;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   是否删除 1删除 0未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
}

/** @description */
export interface WoLogModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoLogModel> | null;
}

/**
 * @description
 *   工单附加信息
 */
export interface WoOtherModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   关联的订单号
   */
  join_order_code?: string | null;
  /**
   * @description
   *   关联工单号
   */
  join_wo_code?: string | null;
  /**
   * @description
   *   需求类型 0 订单需求 1库存需求 2其他需求
   * @format int32
   */
  demand_type: number;
  /**
   * @description
   *   客户名称
   */
  customer_name?: string | null;
  /**
   * @description
   *   是否删除 1删除 0未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
}

/** @description */
export interface WoOtherModelReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoOtherModel;
}

/**
 * @description
 *   工单送检记录
 */
export interface WoProduceTaskCheckModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   生产任务id
   * @format int32
   */
  produce_task_id: number;
  /**
   * @description
   *   送检单号
   */
  code?: string | null;
  /**
   * @description
   *   检验批次号
   */
  check_batch_number?: string | null;
  /**
   * @description
   *   送检数量
   * @format int32
   */
  check_count: number;
  /**
   * @description
   *   抽样数量
   * @format int32
   */
  sample_count: number;
  /**
   * @description
   *   已检数量
   * @format int32
   */
  checked_count: number;
  /**
   * @description
   *   不良品数量
   * @format int32
   */
  rejects_count: number;
  /**
   * @description
   *   检验状态 0 待检验 1 已检验 2 检验中
   * @format int32
   */
  state: number;
  /**
   * @description
   *   是否删除 1=删除 0=未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
}

/** @description */
export interface WoProduceTaskCheckModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoProduceTaskCheckModel> | null;
}

/**
 * @description
 *   工单生产任务列表
 */
export interface WoProduceTaskListModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   工单id 查询工单bom时使用
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   生产任务编号
   */
  code?: string | null;
  /**
   * @description
   *   物料编码
   */
  prod_code?: string | null;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   加工车间
   */
  workshop_name?: string | null;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   加工产线
   */
  line_name?: string | null;
  /**
   * @description
   *   产品名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   系列
   */
  prod_series?: string | null;
  /**
   * @description
   *   生产进度
   */
  produce_rate?: string | null;
  /**
   * @description
   *   工单类型
   */
  wo_type?: string | null;
  /**
   * @description
   *   生产状态
   */
  produce_state?: string | null;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   实际完工日期
   * @format date-time
   */
  complete_date: string;
  /**
   * @description
   *   不合格品数量
   * @format int32
   */
  unqualified_count: number;
}

/** @description */
export interface WoProduceTaskListModelListReturnData {
  /** @description */
  list?: Array<WoProduceTaskListModel> | null;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface WoProduceTaskListModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoProduceTaskListModelListReturnData;
}

/**
 * @description
 *   生产任务日志列表
 */
export interface WoProduceTaskLogListModel {
  /**
   * @description
   *   时间
   * @format date-time
   */
  time: string;
  /**
   * @description
   *   产线
   */
  line_name?: string | null;
  /**
   * @description
   *   操作人
   */
  username?: string | null;
  /**
   * @description
   *   状态 0 已停止 1 生产中
   */
  state?: string | null;
}

/** @description */
export interface WoProduceTaskLogListModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoProduceTaskLogListModel> | null;
}

/**
 * @description
 *   工单生产任务
 */
export interface WoProduceTaskModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   生产任务编号
   */
  code?: string | null;
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
  /**
   * @description
   *   产线负责人id
   * @format int32
   */
  line_admin_id: number;
  /**
   * @description
   *   产线负责人名称
   */
  line_admin_name?: string | null;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   计划生产数量
   * @format int32
   */
  plan_produce_count: number;
  /**
   * @description
   *   已报工生产数量
   * @format int32
   */
  report_produce_count: number;
  /**
   * @description
   *   生产状态 0 未生产 1 生产中 2 已停止
   * @format int32
   */
  produce_state: number;
  /**
   * @description
   *   报工状态 0 未报工 1 已报工 2 部分报工
   * @format int32
   */
  report_state: number;
  /**
   * @description
   *   拣货状态，0未启动，1拣货中，2部分到货，3已完成  4已取消
   * @format int32
   */
  pick_state: number;
  /**
   * @description
   *   是否删除 1删除 0未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
  /**
   * @description
   *   工单号
   */
  wo_code?: string | null;
  /**
   * @description
   *   创建人姓名
   */
  create_user_name?: string | null;
  line: LineModel;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
}

/** @description */
export interface WoProduceTaskModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoProduceTaskModel> | null;
}

/** @description */
export interface WoProduceTaskModelReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoProduceTaskModel;
}

/**
 * @description
 *   工单-任务拣货任务明细
 */
export interface WoProduceTaskPickDetailModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   生产任务编号
   */
  task_code?: string | null;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   拣货任务Id
   * @format int32
   */
  pick_id: number;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   物料单位
   */
  prod_unit?: string | null;
  /**
   * @description
   *   数量
   * @format double
   */
  count: number;
  /**
   * @description
   *   已拣货数量
   * @format double
   */
  pick_count: number;
  /**
   * @description
   *   已取货数量
   * @format double
   */
  send_count: number;
  /**
   * @description
   *   是否删除 1删除 0未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
}

/**
 * @description
 *   工单任务拣货实体
 */
export interface WoProduceTaskPickModel {
  /**
   * @description
   * @format int32
   */
  id: number;
  /**
   * @description
   *   生产任务拣货编号
   */
  code?: string | null;
  /**
   * @description
   *   生产任务编号
   */
  task_code?: string | null;
  /**
   * @description
   *   工单号
   */
  wo_code?: string | null;
  /**
   * @description
   *   工单id
   * @format int32
   */
  wo_record_id: number;
  /**
   * @description
   *   物料号
   */
  product_code?: string | null;
  /**
   * @description
   *   类型  1工单拣货  2看板料拣货  3补料拣货
   * @format int32
   */
  pick_type: number;
  /**
   * @description
   *   类型 描述
   * @example
   * @readonly
   */
  pick_type_des?: string | null;
  /**
   * @description
   *   产线id
   * @format int32
   */
  line_id: number;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
  /**
   * @description
   *   拣货状态，0未启动，1拣货中，2部分到货，3已完成  4已取消
   * @format int32
   */
  pick_state: number;
  /**
   * @description
   *   是否删除 1=删除 0=未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
  /**
   * @description
   *   任务物料列表
   */
  productList?: Array<WoProduceTaskPickDetailModel> | null;
  /**
   * @description
   *   拣货状态描述
   * @example
   * @readonly
   */
  pick_state_des?: string | null;
  /**
   * @description
   *   总数
   * @format double
   */
  count: number;
  /**
   * @description
   *   拣货总数
   * @format double
   */
  pick_count: number;
  /**
   * @description
   *   已到货总数
   * @format double
   */
  send_count: number;
  line: LineModel;
  /**
   * @description
   *   创建人姓名
   */
  create_user_name?: string | null;
}

/** @description */
export interface WoProduceTaskPickModelListReturnData {
  /** @description */
  list?: Array<WoProduceTaskPickModel> | null;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface WoProduceTaskPickModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoProduceTaskPickModelListReturnData;
}

/** @description */
export interface WoProduceTaskPickModelReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoProduceTaskPickModel;
}

/**
 * @description
 *   工单拣货任务参数
 */
export interface WoProduceTaskPickPara {
  /**
   * @description
   *   id
   * @format int32
   */
  id: number;
  /**
   * @description
   *   当前页数
   * @format int32
   */
  page: number;
  /**
   * @description
   *   每页数量
   * @format int32
   */
  pageSize: number;
  /**
   * @description
   *   单号
   */
  code?: string | null;
  /**
   * @description
   *   工单号
   */
  woCode?: string | null;
  /**
   * @description
   *   创建开始时间
   * @format date-time
   */
  createBegin: string;
  /**
   * @description
   *   任务号
   */
  taskCode?: string | null;
  /**
   * @description
   *   拣货状态
   * @format int32
   */
  pickState: number;
  /**
   * @description
   *   创建结束时间
   * @format date-time
   */
  createEnd: string;
  /**
   * @description
   *   产线名称
   */
  lineName?: string | null;
}

/**
 * @description
 *   报工列表
 */
export interface WoProduceTaskReportListModel {
  /**
   * @description
   *   生产任务号
   */
  task_code?: string | null;
  /** @format int32 */
  id: number;
  /**
   * @description
   *   时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   报工数量
   * @format int32
   */
  count: number;
  /**
   * @description
   *   产线名称
   */
  line_name?: string | null;
  /**
   * @description
   *   生产批次号
   */
  batch_number?: string | null;
  /**
   * @description
   *   入库状态
   */
  instock_state?: string | null;
  /**
   * @description
   *   送检单号
   */
  check_code?: string | null;
  /**
   * @description
   *   入库申请单号
   */
  instock_code?: string | null;
  /**
   * @description
   *   操作人
   */
  create_username?: string | null;
  /**
   * @description
   *   报工人
   */
  operation_name?: string | null;
}

/** @description */
export interface WoProduceTaskReportListModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoProduceTaskReportListModel> | null;
}

/**
 * @description
 *   工单分配列表
 */
export interface WoRecordAssignmentListModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  id: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   物料类型 0 成品 1 零部件
   * @format int32
   */
  prod_type: number;
  /**
   * @description
   *   系列
   */
  prod_series?: string | null;
  /**
   * @description
   *   零部件类型
   */
  prod_mttype?: string | null;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   加工车间
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   产线名称
   */
  line_names?: string | null;
  /**
   * @description
   *   指派进度
   */
  assignment_info?: string | null;
  /**
   * @description
   *   生产进度
   */
  produce_info?: string | null;
  /**
   * @description
   *   工单类型
   */
  type?: string | null;
  /**
   * @description
   *   指派状态
   */
  assignment_state?: string | null;
  /**
   * @description
   *   实际完成时间
   * @format date-time
   */
  complete_date: string;
  /**
   * @description
   *   车间名称
   */
  workshop_name?: string | null;
}

/** @description */
export interface WoRecordAssignmentListModelListReturnData {
  /** @description */
  list?: Array<WoRecordAssignmentListModel> | null;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface WoRecordAssignmentListModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoRecordAssignmentListModelListReturnData;
}

/**
 * @description
 *   工单列表
 */
export interface WoRecordListModel {
  /**
   * @description
   *   工单id
   * @format int32
   */
  id: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   车间名称
   */
  workshop_name?: string | null;
  /**
   * @description
   *   车间ID
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   规格型号
   */
  prod_spec?: string | null;
  /**
   * @description
   *   系列
   */
  prod_series?: string | null;
  /**
   * @description
   *   生产进度
   */
  speed?: string | null;
  /**
   * @description
   *   工单类型
   */
  type?: string | null;
  /**
   * @description
   *   工单状态
   */
  release_state?: string | null;
  /**
   * @description
   *   工单分配生产状态(0未分配 1 已分配 2部分分配)
   */
  assignment_state?: string | null;
  /**
   * @description
   *   计划完工时间
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   实际完工时间
   * @format date-time
   */
  complete_date: string;
  /**
   * @description
   *   入库数量
   * @format double
   */
  instock_count: number;
  /**
   * @description
   *   入库状态
   */
  instock_state?: string | null;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   关联订单
   */
  join_order_code?: string | null;
}

/** @description */
export interface WoRecordListModelListReturnData {
  /** @description */
  list?: Array<WoRecordListModel> | null;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface WoRecordListModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoRecordListModelListReturnData;
}

/**
 * @description
 *   工单列表，选工单时使用
 */
export interface WoRecordListToSelectModel {
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料编码
   */
  prod_code?: string | null;
  /**
   * @description
   *   计划完工日期
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   工单状态 0 未释放 1 已释放 2 未完工 3 已完工 4 关闭
   */
  release_state?: string | null;
}

/** @description */
export interface WoRecordListToSelectModelListReturnData {
  /** @description */
  list?: Array<WoRecordListToSelectModel> | null;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface WoRecordListToSelectModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoRecordListToSelectModelListReturnData;
}

/**
 * @description
 *   工单主表
 */
export interface WoRecordModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   工单号
   */
  code?: string | null;
  /**
   * @description
   *   物料号
   */
  prod_code?: string | null;
  /**
   * @description
   *   物料名称
   */
  prod_name?: string | null;
  /**
   * @description
   *   计量单位
   */
  prod_unit?: string | null;
  /**
   * @description
   *   物料类型 0 成品 1 零部件
   * @format int32
   */
  prod_type: number;
  /**
   * @description
   *   系列ID
   * @format int32
   */
  series_id: number;
  /**
   * @description
   *   工单类型 1=生产工单 2=售后工单 3=返工工单 4=维修工单 5=外协工单 6=其他工单 7=改装工单 8=研发工单
   * @format int32
   */
  type: number;
  /**
   * @description
   *   工单计划生产数量
   * @format int32
   */
  plan_count: number;
  /**
   * @description
   *   实际生产数量(强制完工等操作，会导致生产数量与实际生产数量不符)
   * @format int32
   */
  actual_count: number;
  /**
   * @description
   *   工单状态 0 未释放 1 已释放 2 未完工 3 已完工 4 关闭
   * @format int32
   */
  release_state: number;
  /**
   * @description
   *   工单入库状态 0 未入库 1 已入库 2 部分入库
   * @format int32
   */
  instock_state: number;
  /**
   * @description
   *   工单分配生产状态(0未分配 1 已分配 2部分分配)
   * @format int32
   */
  assignment_state: number;
  /**
   * @description
   *   是否支持超量生产 0 不支持 1 支持
   * @format int32
   */
  is_overproduction: number;
  /**
   * @description
   *   计划上线日期
   * @format date-time
   */
  plan_online_date: string;
  /**
   * @description
   *   实际上线日期
   * @format date-time
   */
  online_date: string;
  /**
   * @description
   *   计划完成日期
   * @format date-time
   */
  plan_complete_date: string;
  /**
   * @description
   *   实际完成时间
   * @format date-time
   */
  complete_date: string;
  /**
   * @description
   *   车间id
   * @format int32
   */
  workshop_id: number;
  /**
   * @description
   *   是否删除 1删除 0未删除
   * @format int32
   */
  is_delete: number;
  /**
   * @description
   *   创建人ID
   * @format int32
   */
  create_user: number;
  /**
   * @description
   *   创建时间
   * @format date-time
   */
  create_time: string;
  /**
   * @description
   *   更新人ID
   * @format int32
   */
  update_user: number;
  /**
   * @description
   *   更新时间
   * @format date-time
   */
  update_time: string;
  /**
   * @description
   *   物料规格型号
   */
  prod_spec?: string | null;
  /**
   * @description
   *   物料系列
   */
  prod_series?: string | null;
  /**
   * @description
   *   零部件类型
   */
  prod_mttype?: string | null;
}

/** @description */
export interface WoRecordModelReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoRecordModel;
}

export interface WoSnDetailListModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   核心部件sn
   */
  detail_sn?: string | null;
  /**
   * @description
   *   上级id
   * @format int32
   */
  sn_id: number;
}

/**
 * @description
 *   sn列表
 */
export interface WoSnRecordListModel {
  /** @format int32 */
  id: number;
  /**
   * @description
   *   sn码
   */
  record_sn?: string | null;
  /**
   * @description
   *   核心部件明细
   */
  detail?: Array<WoSnDetailListModel> | null;
}

/** @description */
export interface WoSnRecordListModelListReturnData {
  /** @description */
  list?: Array<WoSnRecordListModel> | null;
  /**
   * @description
   * @format int32
   */
  recordCount: number;
}

/**
 * @description
 *   用于返回数据的实体
 */
export interface WoSnRecordListModelListReturnModel {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  entity: WoSnRecordListModelListReturnData;
}

/** @description */
export interface WoSnRecordListModelListReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   */
  entity?: Array<WoSnRecordListModel> | null;
}

/** @description */
export interface IntReturnValue {
  /**
   * @description
   *   返回结果 1.成功 0.失败
   * @format int32
   */
  code: number;
  /**
   * @description
   *   结果描述
   */
  msg?: string | null;
  /**
   * @description
   *   返回数据
   * @format int32
   */
  entity: number;
}
