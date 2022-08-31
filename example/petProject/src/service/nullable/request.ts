/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../requester";
import type {
  SaveCheckModel,
  BooleanReturnValue,
  GetCheckListModel,
  WoProduceTaskCheckModelListReturnValue,
  ManufacturerModelListReturnValue,
  GetLineListModel,
  LineModelListReturnValue,
  GetProduceAssignmentListModel,
  WoRecordAssignmentListModelListReturnModel,
  BatchCreateProducrTaskModel,
  DeleteProduceTask,
  GetProduceTaskDetailListModel,
  WoProduceTaskModelListReturnValue,
  GetGetProduceCountModel,
  IntReturnValue,
  UpdateProduceTaskDateModel,
  GetProduceTaskListModel,
  WoProduceTaskListModelListReturnModel,
  StarProduceTaskModel,
  GetTaskLogListModel,
  WoProduceTaskLogListModelListReturnValue,
  CreateReportModel,
  GetReportListModel,
  WoProduceTaskReportListModelListReturnValue,
  GetStarTaskListModel,
  GetStarTaskListResultModelListReturnValue,
  OnLineModel,
  OffLineModel,
  GetProductListModel,
  BomProduceLineStockListListReturnValue,
  GetBomCoreListModel,
  WoBomModelListReturnValue,
  GetProduceTaskModel,
  WoProduceTaskModelReturnValue,
  SnListModel,
  WoSnRecordListModelListReturnModel,
  CreateSnRecordModel,
  CreateSnDetailModel,
  DeleteSnDetailModel,
  GetProduceOtherInfoRequestModel,
  GetProduceOtherInfoModelReturnValue,
  GetBatchInfoModel,
  GetBatchInfoResultModelReturnValue,
  GetSerialNumberModel,
  StringReturnValue,
  GetSnListBySerialNumberModel,
  WoSnRecordListModelListReturnValue,
  SaveWoModel,
  GetBatchWoBomResultModel,
  GetRecordModel,
  WoRecordModelReturnValue,
  GetProdInfoModel,
  GetProdModelByProdCodeResultModelListReturnModel,
  GetWoListModel,
  WoRecordListModelListReturnModel,
  UpdateWoStateModel,
  GetWoRecordListToSelectModelsModel,
  WoRecordListToSelectModelListReturnModel,
  DeleteWoModel,
  GetReportListByWoIdModel,
  GetWoBomSlnModel,
  WoBomSlnModelListReturnValue,
  GetWoBomBySlnModel,
  PKMBomResultModelListReturnValue,
  GetWoSlnAndBomModel,
  WoBomSlnAndBomDetailReturnValue,
  UpdateWoBomCountModel,
  DeleteWoBomDetailModel,
  CreateBomDetailModel,
  GetBomProductListModel,
  BomProductListListReturnValue,
  ComplateReportModel,
  GetNoPlanBomSlnModel,
  WoOtherModel,
  GetWoOtherModel,
  WoOtherModelReturnValue,
  GetLogListModel,
  WoLogModelListReturnValue,
  GetBomModelByTaskIdAndProdCodeModel,
  SupplyProductListReturnValue,
  WoProduceTaskPickModel,
  WoProduceTaskPickPara,
  WoProduceTaskPickModelReturnValue,
  WoProduceTaskPickModelListReturnModel,
} from "./definition";

/** @description request parameter type for postCheckSaveCheck */
export interface PostCheckSaveCheckOption {
  body?: SaveCheckModel;
}

/** @description response type for postCheckSaveCheck */
export interface PostCheckSaveCheckResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostCheckSaveCheckResponseSuccess = PostCheckSaveCheckResponse[200];
/**
 * @description
 *   保存工单送检记录
 * @tags Check
 */
export const postCheckSaveCheck = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Check/SaveCheck";
  function request(
    option?: PostCheckSaveCheckOption
  ): Promise<PostCheckSaveCheckResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostCheckSaveCheckResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postCheckGetCheckList */
export interface PostCheckGetCheckListOption {
  body?: GetCheckListModel;
}

/** @description response type for postCheckGetCheckList */
export interface PostCheckGetCheckListResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskCheckModelListReturnValue;
}

export type PostCheckGetCheckListResponseSuccess =
  PostCheckGetCheckListResponse[200];
/**
 * @description
 *   查询工单送检记录
 * @tags Check
 */
export const postCheckGetCheckList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Check/GetCheckList";
  function request(
    option?: PostCheckGetCheckListOption
  ): Promise<PostCheckGetCheckListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostCheckGetCheckListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postCheckUpdateTaskCheck */
export interface PostCheckUpdateTaskCheckOption {
  body?: {
    /**
        @description
          送检单code */
    check_code: string;
    /**
        @description
          已检数量
        @format int32 */
    checked_count: number;
    /**
        @description
          检验批次号 */
    check_batch_number: string;
    /**
        @description
          不良品数量
        @format int32 */
    rejects_count: number;
  };
}

/** @description response type for postCheckUpdateTaskCheck */
export interface PostCheckUpdateTaskCheckResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostCheckUpdateTaskCheckResponseSuccess =
  PostCheckUpdateTaskCheckResponse[200];
/**
 * @description
 *   更新检验结果
 * @tags Check
 */
export const postCheckUpdateTaskCheck = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Check/UpdateTaskCheck";
  function request(
    option?: PostCheckUpdateTaskCheckOption
  ): Promise<PostCheckUpdateTaskCheckResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostCheckUpdateTaskCheckResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postCommonGetManufacturerNumList */
export interface PostCommonGetManufacturerNumListResponse {
  /**
   * @description
   *   Success
   */
  200: ManufacturerModelListReturnValue;
}

export type PostCommonGetManufacturerNumListResponseSuccess =
  PostCommonGetManufacturerNumListResponse[200];
/**
 * @description
 *   获取车间列表
 * @tags Common
 */
export const postCommonGetManufacturerNumList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Common/GetManufacturerNumList";
  function request(): Promise<PostCommonGetManufacturerNumListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<PostCommonGetManufacturerNumListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postCommonGetLineList */
export interface PostCommonGetLineListOption {
  body?: GetLineListModel;
}

/** @description response type for postCommonGetLineList */
export interface PostCommonGetLineListResponse {
  /**
   * @description
   *   Success
   */
  200: LineModelListReturnValue;
}

export type PostCommonGetLineListResponseSuccess =
  PostCommonGetLineListResponse[200];
/**
 * @description
 *   获取产线列表
 * @tags Common
 */
export const postCommonGetLineList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Common/GetLineList";
  function request(
    option?: PostCommonGetLineListOption
  ): Promise<PostCommonGetLineListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostCommonGetLineListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetProduceAssignmentList */
export interface PostProduceGetProduceAssignmentListOption {
  body?: GetProduceAssignmentListModel;
}

/** @description response type for postProduceGetProduceAssignmentList */
export interface PostProduceGetProduceAssignmentListResponse {
  /**
   * @description
   *   Success
   */
  200: WoRecordAssignmentListModelListReturnModel;
}

export type PostProduceGetProduceAssignmentListResponseSuccess =
  PostProduceGetProduceAssignmentListResponse[200];
/**
 * @description
 *   查询生产分配列表
 * @tags Produce
 */
export const postProduceGetProduceAssignmentList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetProduceAssignmentList";
  function request(
    option?: PostProduceGetProduceAssignmentListOption
  ): Promise<PostProduceGetProduceAssignmentListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetProduceAssignmentListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceBatchCreateProducrTask */
export interface PostProduceBatchCreateProducrTaskOption {
  body?: BatchCreateProducrTaskModel;
}

/** @description response type for postProduceBatchCreateProducrTask */
export interface PostProduceBatchCreateProducrTaskResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceBatchCreateProducrTaskResponseSuccess =
  PostProduceBatchCreateProducrTaskResponse[200];
/**
 * @description
 *   指派生产任务
 * @tags Produce
 */
export const postProduceBatchCreateProducrTask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/BatchCreateProducrTask";
  function request(
    option?: PostProduceBatchCreateProducrTaskOption
  ): Promise<PostProduceBatchCreateProducrTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceBatchCreateProducrTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceDeleteProduceTask */
export interface PostProduceDeleteProduceTaskOption {
  body?: DeleteProduceTask;
}

/** @description response type for postProduceDeleteProduceTask */
export interface PostProduceDeleteProduceTaskResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceDeleteProduceTaskResponseSuccess =
  PostProduceDeleteProduceTaskResponse[200];
/**
 * @description
 *   撤回生产任务
 * @tags Produce
 */
export const postProduceDeleteProduceTask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/DeleteProduceTask";
  function request(
    option?: PostProduceDeleteProduceTaskOption
  ): Promise<PostProduceDeleteProduceTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceDeleteProduceTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetProduceTaskDetailList */
export interface PostProduceGetProduceTaskDetailListOption {
  body?: GetProduceTaskDetailListModel;
}

/** @description response type for postProduceGetProduceTaskDetailList */
export interface PostProduceGetProduceTaskDetailListResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskModelListReturnValue;
}

export type PostProduceGetProduceTaskDetailListResponseSuccess =
  PostProduceGetProduceTaskDetailListResponse[200];
/**
 * @description
 *   查看生产任务指派详情\工单生产任务列表
 * @tags Produce
 */
export const postProduceGetProduceTaskDetailList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetProduceTaskDetailList";
  function request(
    option?: PostProduceGetProduceTaskDetailListOption
  ): Promise<PostProduceGetProduceTaskDetailListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetProduceTaskDetailListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetGetProduceCount */
export interface PostProduceGetGetProduceCountOption {
  body?: GetGetProduceCountModel;
}

/** @description response type for postProduceGetGetProduceCount */
export interface PostProduceGetGetProduceCountResponse {
  /**
   * @description
   *   Success
   */
  200: IntReturnValue;
}

export type PostProduceGetGetProduceCountResponseSuccess =
  PostProduceGetGetProduceCountResponse[200];
/**
 * @description
 *   查询工单已经指派生产任务的数量
 * @tags Produce
 */
export const postProduceGetGetProduceCount = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetGetProduceCount";
  function request(
    option?: PostProduceGetGetProduceCountOption
  ): Promise<PostProduceGetGetProduceCountResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetGetProduceCountResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceUpdateProduceTaskDate */
export interface PostProduceUpdateProduceTaskDateOption {
  body?: UpdateProduceTaskDateModel;
}

/** @description response type for postProduceUpdateProduceTaskDate */
export interface PostProduceUpdateProduceTaskDateResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceUpdateProduceTaskDateResponseSuccess =
  PostProduceUpdateProduceTaskDateResponse[200];
/**
 * @description
 *   修改生产任务的计划上线日期和计划完成日期
 * @tags Produce
 */
export const postProduceUpdateProduceTaskDate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/UpdateProduceTaskDate";
  function request(
    option?: PostProduceUpdateProduceTaskDateOption
  ): Promise<PostProduceUpdateProduceTaskDateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceUpdateProduceTaskDateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetProduceTaskList */
export interface PostProduceGetProduceTaskListOption {
  body?: GetProduceTaskListModel;
}

/** @description response type for postProduceGetProduceTaskList */
export interface PostProduceGetProduceTaskListResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskListModelListReturnModel;
}

export type PostProduceGetProduceTaskListResponseSuccess =
  PostProduceGetProduceTaskListResponse[200];
/**
 * @description
 *   查看生产任务列表
 * @tags Produce
 */
export const postProduceGetProduceTaskList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetProduceTaskList";
  function request(
    option?: PostProduceGetProduceTaskListOption
  ): Promise<PostProduceGetProduceTaskListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetProduceTaskListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceStarProduceTask */
export interface PostProduceStarProduceTaskOption {
  body?: StarProduceTaskModel;
}

/** @description response type for postProduceStarProduceTask */
export interface PostProduceStarProduceTaskResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceStarProduceTaskResponseSuccess =
  PostProduceStarProduceTaskResponse[200];
/**
 * @description
 *   开始生产任务
 * @tags Produce
 */
export const postProduceStarProduceTask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/StarProduceTask";
  function request(
    option?: PostProduceStarProduceTaskOption
  ): Promise<PostProduceStarProduceTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceStarProduceTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceStopProduceTask */
export interface PostProduceStopProduceTaskOption {
  body?: StarProduceTaskModel;
}

/** @description response type for postProduceStopProduceTask */
export interface PostProduceStopProduceTaskResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceStopProduceTaskResponseSuccess =
  PostProduceStopProduceTaskResponse[200];
/**
 * @description
 *   停止生产任务
 * @tags Produce
 */
export const postProduceStopProduceTask = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/StopProduceTask";
  function request(
    option?: PostProduceStopProduceTaskOption
  ): Promise<PostProduceStopProduceTaskResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceStopProduceTaskResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetTaskLogList */
export interface PostProduceGetTaskLogListOption {
  body?: GetTaskLogListModel;
}

/** @description response type for postProduceGetTaskLogList */
export interface PostProduceGetTaskLogListResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskLogListModelListReturnValue;
}

export type PostProduceGetTaskLogListResponseSuccess =
  PostProduceGetTaskLogListResponse[200];
/**
 * @description
 *   查询生产任务日志
 * @tags Produce
 */
export const postProduceGetTaskLogList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetTaskLogList";
  function request(
    option?: PostProduceGetTaskLogListOption
  ): Promise<PostProduceGetTaskLogListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetTaskLogListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceCreateReport */
export interface PostProduceCreateReportOption {
  body?: CreateReportModel;
}

/** @description response type for postProduceCreateReport */
export interface PostProduceCreateReportResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceCreateReportResponseSuccess =
  PostProduceCreateReportResponse[200];
/**
 * @description
 *   报工
 * @tags Produce
 */
export const postProduceCreateReport = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/CreateReport";
  function request(
    option?: PostProduceCreateReportOption
  ): Promise<PostProduceCreateReportResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceCreateReportResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetReportList */
export interface PostProduceGetReportListOption {
  body?: GetReportListModel;
}

/** @description response type for postProduceGetReportList */
export interface PostProduceGetReportListResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskReportListModelListReturnValue;
}

export type PostProduceGetReportListResponseSuccess =
  PostProduceGetReportListResponse[200];
/**
 * @description
 *   查询报工记录
 * @tags Produce
 */
export const postProduceGetReportList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetReportList";
  function request(
    option?: PostProduceGetReportListOption
  ): Promise<PostProduceGetReportListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetReportListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetStarTaskList */
export interface PostProduceGetStarTaskListOption {
  body?: GetStarTaskListModel;
}

/** @description response type for postProduceGetStarTaskList */
export interface PostProduceGetStarTaskListResponse {
  /**
   * @description
   *   Success
   */
  200: GetStarTaskListResultModelListReturnValue;
}

export type PostProduceGetStarTaskListResponseSuccess =
  PostProduceGetStarTaskListResponse[200];
/**
 * @description
 *   产线物料列表
 * @tags Produce
 */
export const postProduceGetStarTaskList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetStarTaskList";
  function request(
    option?: PostProduceGetStarTaskListOption
  ): Promise<PostProduceGetStarTaskListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetStarTaskListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceOnLine */
export interface PostProduceOnLineOption {
  body?: OnLineModel;
}

/** @description response type for postProduceOnLine */
export interface PostProduceOnLineResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceOnLineResponseSuccess = PostProduceOnLineResponse[200];
/**
 * @description
 *   物料上线
 * @tags Produce
 */
export const postProduceOnLine = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/OnLine";
  function request(
    option?: PostProduceOnLineOption
  ): Promise<PostProduceOnLineResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceOnLineResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceOffLine */
export interface PostProduceOffLineOption {
  body?: OffLineModel;
}

/** @description response type for postProduceOffLine */
export interface PostProduceOffLineResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceOffLineResponseSuccess = PostProduceOffLineResponse[200];
/**
 * @description
 *   物料下线
 * @tags Produce
 */
export const postProduceOffLine = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/OffLine";
  function request(
    option?: PostProduceOffLineOption
  ): Promise<PostProduceOffLineResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceOffLineResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetProductList */
export interface PostProduceGetProductListOption {
  body?: GetProductListModel;
}

/** @description response type for postProduceGetProductList */
export interface PostProduceGetProductListResponse {
  /**
   * @description
   *   Success
   */
  200: BomProduceLineStockListListReturnValue;
}

export type PostProduceGetProductListResponseSuccess =
  PostProduceGetProductListResponse[200];
/**
 * @description
 *   生产任务物料明细
 * @tags Produce
 */
export const postProduceGetProductList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetProductList";
  function request(
    option?: PostProduceGetProductListOption
  ): Promise<PostProduceGetProductListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetProductListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetBomCoreList */
export interface PostProduceGetBomCoreListOption {
  body?: GetBomCoreListModel;
}

/** @description response type for postProduceGetBomCoreList */
export interface PostProduceGetBomCoreListResponse {
  /**
   * @description
   *   Success
   */
  200: WoBomModelListReturnValue;
}

export type PostProduceGetBomCoreListResponseSuccess =
  PostProduceGetBomCoreListResponse[200];
/**
 * @description
 *   获取核心零部件列表
 * @tags Produce
 */
export const postProduceGetBomCoreList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetBomCoreList";
  function request(
    option?: PostProduceGetBomCoreListOption
  ): Promise<PostProduceGetBomCoreListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetBomCoreListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetProduceTaskModel */
export interface PostProduceGetProduceTaskModelOption {
  body?: GetProduceTaskModel;
}

/** @description response type for postProduceGetProduceTaskModel */
export interface PostProduceGetProduceTaskModelResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskModelReturnValue;
}

export type PostProduceGetProduceTaskModelResponseSuccess =
  PostProduceGetProduceTaskModelResponse[200];
/**
 * @description
 *   查询生产任务详情根据task_id
 * @tags Produce
 */
export const postProduceGetProduceTaskModel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetProduceTaskModel";
  function request(
    option?: PostProduceGetProduceTaskModelOption
  ): Promise<PostProduceGetProduceTaskModelResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetProduceTaskModelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceSnList */
export interface PostProduceSnListOption {
  body?: SnListModel;
}

/** @description response type for postProduceSnList */
export interface PostProduceSnListResponse {
  /**
   * @description
   *   Success
   */
  200: WoSnRecordListModelListReturnModel;
}

export type PostProduceSnListResponseSuccess = PostProduceSnListResponse[200];
/**
 * @description
 *   SN列表
 * @tags Produce
 */
export const postProduceSnList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/SnList";
  function request(
    option?: PostProduceSnListOption
  ): Promise<PostProduceSnListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceSnListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceCreateAndGetSnRecord */
export interface PostProduceCreateAndGetSnRecordOption {
  body?: CreateSnRecordModel;
}

/** @description response type for postProduceCreateAndGetSnRecord */
export interface PostProduceCreateAndGetSnRecordResponse {
  /**
   * @description
   *   Success
   */
  200: IntReturnValue;
}

export type PostProduceCreateAndGetSnRecordResponseSuccess =
  PostProduceCreateAndGetSnRecordResponse[200];
/**
 * @description
 *   创建sn
 * @tags Produce
 */
export const postProduceCreateAndGetSnRecord = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/CreateAndGetSnRecord";
  function request(
    option?: PostProduceCreateAndGetSnRecordOption
  ): Promise<PostProduceCreateAndGetSnRecordResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceCreateAndGetSnRecordResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceCreateSnDetail */
export interface PostProduceCreateSnDetailOption {
  body?: CreateSnDetailModel;
}

/** @description response type for postProduceCreateSnDetail */
export interface PostProduceCreateSnDetailResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceCreateSnDetailResponseSuccess =
  PostProduceCreateSnDetailResponse[200];
/**
 * @description
 *   关联sn明细
 * @tags Produce
 */
export const postProduceCreateSnDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/CreateSnDetail";
  function request(
    option?: PostProduceCreateSnDetailOption
  ): Promise<PostProduceCreateSnDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceCreateSnDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceDeleteSnDetail */
export interface PostProduceDeleteSnDetailOption {
  body?: DeleteSnDetailModel;
}

/** @description response type for postProduceDeleteSnDetail */
export interface PostProduceDeleteSnDetailResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostProduceDeleteSnDetailResponseSuccess =
  PostProduceDeleteSnDetailResponse[200];
/**
 * @description
 *   解绑sn明细
 * @tags Produce
 */
export const postProduceDeleteSnDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/DeleteSnDetail";
  function request(
    option?: PostProduceDeleteSnDetailOption
  ): Promise<PostProduceDeleteSnDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceDeleteSnDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetProduceOtherInfo */
export interface PostProduceGetProduceOtherInfoOption {
  body?: GetProduceOtherInfoRequestModel;
}

/** @description response type for postProduceGetProduceOtherInfo */
export interface PostProduceGetProduceOtherInfoResponse {
  /**
   * @description
   *   Success
   */
  200: GetProduceOtherInfoModelReturnValue;
}

export type PostProduceGetProduceOtherInfoResponseSuccess =
  PostProduceGetProduceOtherInfoResponse[200];
/**
 * @description
 *   查询生产任务附加信息
 * @tags Produce
 */
export const postProduceGetProduceOtherInfo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetProduceOtherInfo";
  function request(
    option?: PostProduceGetProduceOtherInfoOption
  ): Promise<PostProduceGetProduceOtherInfoResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetProduceOtherInfoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetBatchInfo */
export interface PostProduceGetBatchInfoOption {
  body?: GetBatchInfoModel;
}

/** @description response type for postProduceGetBatchInfo */
export interface PostProduceGetBatchInfoResponse {
  /**
   * @description
   *   Success
   */
  200: GetBatchInfoResultModelReturnValue;
}

export type PostProduceGetBatchInfoResponseSuccess =
  PostProduceGetBatchInfoResponse[200];
/**
 * @description
 *   获取生产批次号
 * @tags Produce
 */
export const postProduceGetBatchInfo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetBatchInfo";
  function request(
    option?: PostProduceGetBatchInfoOption
  ): Promise<PostProduceGetBatchInfoResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetBatchInfoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetSerialNumber */
export interface PostProduceGetSerialNumberOption {
  body?: GetSerialNumberModel;
}

/** @description response type for postProduceGetSerialNumber */
export interface PostProduceGetSerialNumberResponse {
  /**
   * @description
   *   Success
   */
  200: StringReturnValue;
}

export type PostProduceGetSerialNumberResponseSuccess =
  PostProduceGetSerialNumberResponse[200];
/**
 * @description
 *   sn生成序列号
 * @tags Produce
 */
export const postProduceGetSerialNumber = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetSerialNumber";
  function request(
    option?: PostProduceGetSerialNumberOption
  ): Promise<PostProduceGetSerialNumberResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetSerialNumberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postProduceGetSnListBySerialNumber */
export interface PostProduceGetSnListBySerialNumberOption {
  body?: GetSnListBySerialNumberModel;
}

/** @description response type for postProduceGetSnListBySerialNumber */
export interface PostProduceGetSnListBySerialNumberResponse {
  /**
   * @description
   *   Success
   */
  200: WoSnRecordListModelListReturnValue;
}

export type PostProduceGetSnListBySerialNumberResponseSuccess =
  PostProduceGetSnListBySerialNumberResponse[200];
/**
 * @description
 *   根据序列号获取sn和核心零部件列表
 * @tags Produce
 */
export const postProduceGetSnListBySerialNumber = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Produce/GetSnListBySerialNumber";
  function request(
    option?: PostProduceGetSnListBySerialNumberOption
  ): Promise<PostProduceGetSnListBySerialNumberResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostProduceGetSnListBySerialNumberResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoSaveWo */
export interface PostWoSaveWoOption {
  body?: SaveWoModel;
}

/** @description response type for postWoSaveWo */
export interface PostWoSaveWoResponse {
  /**
   * @description
   *   Success
   */
  200: IntReturnValue;
}

export type PostWoSaveWoResponseSuccess = PostWoSaveWoResponse[200];
/**
 * @description
 *   保存工单
 * @tags Wo
 */
export const postWoSaveWo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/SaveWo";
  function request(
    option?: PostWoSaveWoOption
  ): Promise<PostWoSaveWoResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoSaveWoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postWoGetWoCode */
export interface PostWoGetWoCodeResponse {
  /**
   * @description
   *   Success
   */
  200: StringReturnValue;
}

export type PostWoGetWoCodeResponseSuccess = PostWoGetWoCodeResponse[200];
/**
 * @description
 *   获取工单号
 * @tags Wo
 */
export const postWoGetWoCode = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoCode";
  function request(): Promise<PostWoGetWoCodeResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<PostWoGetWoCodeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postWoSaveWoBatch */
export interface PostWoSaveWoBatchResponse {
  /**
   * @description
   *   Success
   */
  200: StringReturnValue;
}

export type PostWoSaveWoBatchResponseSuccess = PostWoSaveWoBatchResponse[200];
/**
 * @description
 *   批量保存工单
 * @tags Wo
 */
export const postWoSaveWoBatch = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/SaveWoBatch";
  function request(): Promise<PostWoSaveWoBatchResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<PostWoSaveWoBatchResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetBatchWoBomResult */
export interface PostWoGetBatchWoBomResultOption {
  body?: GetBatchWoBomResultModel;
}

/** @description response type for postWoGetBatchWoBomResult */
export interface PostWoGetBatchWoBomResultResponse {
  /**
   * @description
   *   Success
   */
  200: StringReturnValue;
}

export type PostWoGetBatchWoBomResultResponseSuccess =
  PostWoGetBatchWoBomResultResponse[200];
/**
 * @description
 *   查询批量创建工单结果
 * @tags Wo
 */
export const postWoGetBatchWoBomResult = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetBatchWoBomResult";
  function request(
    option?: PostWoGetBatchWoBomResultOption
  ): Promise<PostWoGetBatchWoBomResultResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetBatchWoBomResultResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetRecordModel */
export interface PostWoGetRecordModelOption {
  body?: GetRecordModel;
}

/** @description response type for postWoGetRecordModel */
export interface PostWoGetRecordModelResponse {
  /**
   * @description
   *   Success
   */
  200: WoRecordModelReturnValue;
}

export type PostWoGetRecordModelResponseSuccess =
  PostWoGetRecordModelResponse[200];
/**
 * @description
 *   查询工单
 * @tags Wo
 */
export const postWoGetRecordModel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetRecordModel";
  function request(
    option?: PostWoGetRecordModelOption
  ): Promise<PostWoGetRecordModelResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetRecordModelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetProdInfo */
export interface PostWoGetProdInfoOption {
  body?: GetProdInfoModel;
}

/** @description response type for postWoGetProdInfo */
export interface PostWoGetProdInfoResponse {
  /**
   * @description
   *   Success
   */
  200: GetProdModelByProdCodeResultModelListReturnModel;
}

export type PostWoGetProdInfoResponseSuccess = PostWoGetProdInfoResponse[200];
/**
 * @description
 *   获取物料信息
 * @tags Wo
 */
export const postWoGetProdInfo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetProdInfo";
  function request(
    option?: PostWoGetProdInfoOption
  ): Promise<PostWoGetProdInfoResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetProdInfoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetWoList */
export interface PostWoGetWoListOption {
  body?: GetWoListModel;
}

/** @description response type for postWoGetWoList */
export interface PostWoGetWoListResponse {
  /**
   * @description
   *   Success
   */
  200: WoRecordListModelListReturnModel;
}

export type PostWoGetWoListResponseSuccess = PostWoGetWoListResponse[200];
/**
 * @description
 *   查询工单列表
 * @tags Wo
 */
export const postWoGetWoList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoList";
  function request(
    option?: PostWoGetWoListOption
  ): Promise<PostWoGetWoListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetWoListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoUpdateWoState */
export interface PostWoUpdateWoStateOption {
  body?: UpdateWoStateModel;
}

/** @description response type for postWoUpdateWoState */
export interface PostWoUpdateWoStateResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoUpdateWoStateResponseSuccess =
  PostWoUpdateWoStateResponse[200];
/**
 * @description
 *   修改工单状态(支持 释放,撤回释放,关闭 操作)
 * @tags Wo
 */
export const postWoUpdateWoState = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/UpdateWoState";
  function request(
    option?: PostWoUpdateWoStateOption
  ): Promise<PostWoUpdateWoStateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoUpdateWoStateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for getWoDownWoTemplate */
export interface GetWoDownWoTemplateResponse {
  /**
   * @description
   *   Success
   */
  200: any;
}

export type GetWoDownWoTemplateResponseSuccess =
  GetWoDownWoTemplateResponse[200];
/**
 * @description
 *   下载批量创建工单模板
 * @tags Wo
 */
export const getWoDownWoTemplate = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/Wo/DownWoTemplate";
  function request(): Promise<GetWoDownWoTemplateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<GetWoDownWoTemplateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description response type for postWoDownWoTemplate */
export interface PostWoDownWoTemplateResponse {
  /**
   * @description
   *   Success
   */
  200: any;
}

export type PostWoDownWoTemplateResponseSuccess =
  PostWoDownWoTemplateResponse[200];
/**
 * @description
 *   下载批量创建工单模板
 * @tags Wo
 */
export const postWoDownWoTemplate = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/DownWoTemplate";
  function request(): Promise<PostWoDownWoTemplateResponseSuccess> {
    return requester(request.url, {
      method: request.method,
    }) as unknown as Promise<PostWoDownWoTemplateResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetWoRecordListToSelectModels */
export interface PostWoGetWoRecordListToSelectModelsOption {
  body?: GetWoRecordListToSelectModelsModel;
}

/** @description response type for postWoGetWoRecordListToSelectModels */
export interface PostWoGetWoRecordListToSelectModelsResponse {
  /**
   * @description
   *   Success
   */
  200: WoRecordListToSelectModelListReturnModel;
}

export type PostWoGetWoRecordListToSelectModelsResponseSuccess =
  PostWoGetWoRecordListToSelectModelsResponse[200];
/**
 * @description
 *   获取工单列表,选择关联工单时使用
 * @tags Wo
 */
export const postWoGetWoRecordListToSelectModels = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoRecordListToSelectModels";
  function request(
    option?: PostWoGetWoRecordListToSelectModelsOption
  ): Promise<PostWoGetWoRecordListToSelectModelsResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetWoRecordListToSelectModelsResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoDeleteWo */
export interface PostWoDeleteWoOption {
  body?: DeleteWoModel;
}

/** @description response type for postWoDeleteWo */
export interface PostWoDeleteWoResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoDeleteWoResponseSuccess = PostWoDeleteWoResponse[200];
/**
 * @description
 *   删除工单
 * @tags Wo
 */
export const postWoDeleteWo = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/DeleteWo";
  function request(
    option?: PostWoDeleteWoOption
  ): Promise<PostWoDeleteWoResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoDeleteWoResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetReportListByWoId */
export interface PostWoGetReportListByWoIdOption {
  body?: GetReportListByWoIdModel;
}

/** @description response type for postWoGetReportListByWoId */
export interface PostWoGetReportListByWoIdResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskReportListModelListReturnValue;
}

export type PostWoGetReportListByWoIdResponseSuccess =
  PostWoGetReportListByWoIdResponse[200];
/**
 * @description
 *   查询报工记录(工单使用)
 * @tags Wo
 */
export const postWoGetReportListByWoId = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetReportListByWoId";
  function request(
    option?: PostWoGetReportListByWoIdOption
  ): Promise<PostWoGetReportListByWoIdResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetReportListByWoIdResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetWoBomSln */
export interface PostWoGetWoBomSlnOption {
  body?: GetWoBomSlnModel;
}

/** @description response type for postWoGetWoBomSln */
export interface PostWoGetWoBomSlnResponse {
  /**
   * @description
   *   Success
   */
  200: WoBomSlnModelListReturnValue;
}

export type PostWoGetWoBomSlnResponseSuccess = PostWoGetWoBomSlnResponse[200];
/**
 * @description
 *   获取物料配套方案
 * @tags Wo
 */
export const postWoGetWoBomSln = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoBomSln";
  function request(
    option?: PostWoGetWoBomSlnOption
  ): Promise<PostWoGetWoBomSlnResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetWoBomSlnResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetWoBomBySln */
export interface PostWoGetWoBomBySlnOption {
  body?: GetWoBomBySlnModel;
}

/** @description response type for postWoGetWoBomBySln */
export interface PostWoGetWoBomBySlnResponse {
  /**
   * @description
   *   Success
   */
  200: PKMBomResultModelListReturnValue;
}

export type PostWoGetWoBomBySlnResponseSuccess =
  PostWoGetWoBomBySlnResponse[200];
/**
 * @description
 *   根据配套方案查询bom
 * @tags Wo
 */
export const postWoGetWoBomBySln = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoBomBySln";
  function request(
    option?: PostWoGetWoBomBySlnOption
  ): Promise<PostWoGetWoBomBySlnResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetWoBomBySlnResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetWoSlnAndBom */
export interface PostWoGetWoSlnAndBomOption {
  body?: GetWoSlnAndBomModel;
}

/** @description response type for postWoGetWoSlnAndBom */
export interface PostWoGetWoSlnAndBomResponse {
  /**
   * @description
   *   Success
   */
  200: WoBomSlnAndBomDetailReturnValue;
}

export type PostWoGetWoSlnAndBomResponseSuccess =
  PostWoGetWoSlnAndBomResponse[200];
/**
 * @description
 *   根据工单id获取工单bom配套方案和bom明细
 * @tags Wo
 */
export const postWoGetWoSlnAndBom = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoSlnAndBom";
  function request(
    option?: PostWoGetWoSlnAndBomOption
  ): Promise<PostWoGetWoSlnAndBomResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetWoSlnAndBomResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoUpdateWoBomCount */
export interface PostWoUpdateWoBomCountOption {
  body?: UpdateWoBomCountModel;
}

/** @description response type for postWoUpdateWoBomCount */
export interface PostWoUpdateWoBomCountResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoUpdateWoBomCountResponseSuccess =
  PostWoUpdateWoBomCountResponse[200];
/**
 * @description
 *   修改工单bom用量
 * @tags Wo
 */
export const postWoUpdateWoBomCount = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/UpdateWoBomCount";
  function request(
    option?: PostWoUpdateWoBomCountOption
  ): Promise<PostWoUpdateWoBomCountResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoUpdateWoBomCountResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoDeleteWoBomDetail */
export interface PostWoDeleteWoBomDetailOption {
  body?: DeleteWoBomDetailModel;
}

/** @description response type for postWoDeleteWoBomDetail */
export interface PostWoDeleteWoBomDetailResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoDeleteWoBomDetailResponseSuccess =
  PostWoDeleteWoBomDetailResponse[200];
/**
 * @description
 *   删除工单bom物料
 * @tags Wo
 */
export const postWoDeleteWoBomDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/DeleteWoBomDetail";
  function request(
    option?: PostWoDeleteWoBomDetailOption
  ): Promise<PostWoDeleteWoBomDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoDeleteWoBomDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoCreateBomDetail */
export interface PostWoCreateBomDetailOption {
  body?: CreateBomDetailModel;
}

/** @description response type for postWoCreateBomDetail */
export interface PostWoCreateBomDetailResponse {
  /**
   * @description
   *   Success
   */
  200: IntReturnValue;
}

export type PostWoCreateBomDetailResponseSuccess =
  PostWoCreateBomDetailResponse[200];
/**
 * @description
 *   添加工单子物料
 * @tags Wo
 */
export const postWoCreateBomDetail = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/CreateBomDetail";
  function request(
    option?: PostWoCreateBomDetailOption
  ): Promise<PostWoCreateBomDetailResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoCreateBomDetailResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetBomProductList */
export interface PostWoGetBomProductListOption {
  body?: GetBomProductListModel;
}

/** @description response type for postWoGetBomProductList */
export interface PostWoGetBomProductListResponse {
  /**
   * @description
   *   Success
   */
  200: BomProductListListReturnValue;
}

export type PostWoGetBomProductListResponseSuccess =
  PostWoGetBomProductListResponse[200];
/**
 * @description
 *   查询物料明细
 * @tags Wo
 */
export const postWoGetBomProductList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetBomProductList";
  function request(
    option?: PostWoGetBomProductListOption
  ): Promise<PostWoGetBomProductListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetBomProductListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoComplateReport */
export interface PostWoComplateReportOption {
  body?: ComplateReportModel;
}

/** @description response type for postWoComplateReport */
export interface PostWoComplateReportResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoComplateReportResponseSuccess =
  PostWoComplateReportResponse[200];
/**
 * @description
 *   完工/强制完工
 * @tags Wo
 */
export const postWoComplateReport = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/ComplateReport";
  function request(
    option?: PostWoComplateReportOption
  ): Promise<PostWoComplateReportResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoComplateReportResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetNoPlanBomSln */
export interface PostWoGetNoPlanBomSlnOption {
  body?: GetNoPlanBomSlnModel;
}

/** @description response type for postWoGetNoPlanBomSln */
export interface PostWoGetNoPlanBomSlnResponse {
  /**
   * @description
   *   Success
   */
  200: IntReturnValue;
}

export type PostWoGetNoPlanBomSlnResponseSuccess =
  PostWoGetNoPlanBomSlnResponse[200];
/**
 * @description
 *   不使用配套方案(勾选不使用配套方案时调用，返回一个wo_bom_sln_id)
 * @tags Wo
 */
export const postWoGetNoPlanBomSln = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetNoPlanBomSln";
  function request(
    option?: PostWoGetNoPlanBomSlnOption
  ): Promise<PostWoGetNoPlanBomSlnResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetNoPlanBomSlnResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoSaveWoOther */
export interface PostWoSaveWoOtherOption {
  body?: WoOtherModel;
}

/** @description response type for postWoSaveWoOther */
export interface PostWoSaveWoOtherResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoSaveWoOtherResponseSuccess = PostWoSaveWoOtherResponse[200];
/**
 * @description
 *   添加工单附加信息,参数id大于0是更新
 * @tags Wo
 */
export const postWoSaveWoOther = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/SaveWoOther";
  function request(
    option?: PostWoSaveWoOtherOption
  ): Promise<PostWoSaveWoOtherResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoSaveWoOtherResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetWoOther */
export interface PostWoGetWoOtherOption {
  body?: GetWoOtherModel;
}

/** @description response type for postWoGetWoOther */
export interface PostWoGetWoOtherResponse {
  /**
   * @description
   *   Success
   */
  200: WoOtherModelReturnValue;
}

export type PostWoGetWoOtherResponseSuccess = PostWoGetWoOtherResponse[200];
/**
 * @description
 *   查询工单附加信息
 * @tags Wo
 */
export const postWoGetWoOther = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetWoOther";
  function request(
    option?: PostWoGetWoOtherOption
  ): Promise<PostWoGetWoOtherResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetWoOtherResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetLogList */
export interface PostWoGetLogListOption {
  body?: GetLogListModel;
}

/** @description response type for postWoGetLogList */
export interface PostWoGetLogListResponse {
  /**
   * @description
   *   Success
   */
  200: WoLogModelListReturnValue;
}

export type PostWoGetLogListResponseSuccess = PostWoGetLogListResponse[200];
/**
 * @description
 *   查询日志
 * @tags Wo
 */
export const postWoGetLogList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetLogList";
  function request(
    option?: PostWoGetLogListOption
  ): Promise<PostWoGetLogListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetLogListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoGetBomModelByTaskIdAndProdCode */
export interface PostWoGetBomModelByTaskIdAndProdCodeOption {
  body?: GetBomModelByTaskIdAndProdCodeModel;
}

/** @description response type for postWoGetBomModelByTaskIdAndProdCode */
export interface PostWoGetBomModelByTaskIdAndProdCodeResponse {
  /**
   * @description
   *   Success
   */
  200: SupplyProductListReturnValue;
}

export type PostWoGetBomModelByTaskIdAndProdCodeResponseSuccess =
  PostWoGetBomModelByTaskIdAndProdCodeResponse[200];
/**
 * @description
 *   根据生产任务和物料号查询bom明细
 * @tags Wo
 */
export const postWoGetBomModelByTaskIdAndProdCode = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/Wo/GetBomModelByTaskIdAndProdCode";
  function request(
    option?: PostWoGetBomModelByTaskIdAndProdCodeOption
  ): Promise<PostWoGetBomModelByTaskIdAndProdCodeResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoGetBomModelByTaskIdAndProdCodeResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoTaskPickSaveTaskPick */
export interface PostWoTaskPickSaveTaskPickOption {
  body?: Array<WoProduceTaskPickModel>;
}

/** @description response type for postWoTaskPickSaveTaskPick */
export interface PostWoTaskPickSaveTaskPickResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoTaskPickSaveTaskPickResponseSuccess =
  PostWoTaskPickSaveTaskPickResponse[200];
/**
 * @description
 *   保存工单拣货任务
 * @tags WoTaskPick
 */
export const postWoTaskPickSaveTaskPick = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/WoTaskPick/SaveTaskPick";
  function request(
    option?: PostWoTaskPickSaveTaskPickOption
  ): Promise<PostWoTaskPickSaveTaskPickResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoTaskPickSaveTaskPickResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoTaskPickCancelTaskPick */
export interface PostWoTaskPickCancelTaskPickOption {
  body?: WoProduceTaskPickPara;
}

/** @description response type for postWoTaskPickCancelTaskPick */
export interface PostWoTaskPickCancelTaskPickResponse {
  /**
   * @description
   *   Success
   */
  200: BooleanReturnValue;
}

export type PostWoTaskPickCancelTaskPickResponseSuccess =
  PostWoTaskPickCancelTaskPickResponse[200];
/**
 * @description
 *   取消工单拣货任务
 * @tags WoTaskPick
 */
export const postWoTaskPickCancelTaskPick = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/WoTaskPick/CancelTaskPick";
  function request(
    option?: PostWoTaskPickCancelTaskPickOption
  ): Promise<PostWoTaskPickCancelTaskPickResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoTaskPickCancelTaskPickResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoTaskPickGetWoTaskPickModel */
export interface PostWoTaskPickGetWoTaskPickModelOption {
  body?: WoProduceTaskPickPara;
}

/** @description response type for postWoTaskPickGetWoTaskPickModel */
export interface PostWoTaskPickGetWoTaskPickModelResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskPickModelReturnValue;
}

export type PostWoTaskPickGetWoTaskPickModelResponseSuccess =
  PostWoTaskPickGetWoTaskPickModelResponse[200];
/**
 * @description
 *   获取工单任务
 * @tags WoTaskPick
 */
export const postWoTaskPickGetWoTaskPickModel = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/WoTaskPick/GetWoTaskPickModel";
  function request(
    option?: PostWoTaskPickGetWoTaskPickModelOption
  ): Promise<PostWoTaskPickGetWoTaskPickModelResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoTaskPickGetWoTaskPickModelResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();

/** @description request parameter type for postWoTaskPickGetPickTaskList */
export interface PostWoTaskPickGetPickTaskListOption {
  body?: WoProduceTaskPickPara;
}

/** @description response type for postWoTaskPickGetPickTaskList */
export interface PostWoTaskPickGetPickTaskListResponse {
  /**
   * @description
   *   Success
   */
  200: WoProduceTaskPickModelListReturnModel;
}

export type PostWoTaskPickGetPickTaskListResponseSuccess =
  PostWoTaskPickGetPickTaskListResponse[200];
/**
 * @description
 *   获取拣货任务列表
 * @tags WoTaskPick
 */
export const postWoTaskPickGetPickTaskList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/WoTaskPick/GetPickTaskList";
  function request(
    option?: PostWoTaskPickGetPickTaskListOption
  ): Promise<PostWoTaskPickGetPickTaskListResponseSuccess> {
    return requester(request.url, {
      method: request.method,
      ...option,
    }) as unknown as Promise<PostWoTaskPickGetPickTaskListResponseSuccess>;
  }

  /** http method */
  request.method = method;
  /** request url */
  request.url = url;
  return request;
})();
