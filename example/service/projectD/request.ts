import { interceptRequest, interceptResponse } from './interceptor'
import {
  PageVOIndicatorDefListVO,
  IndicatorDefAddDTO,
  IndicatorDefShowVO,
  IndicatorDefUpdateDTO,
  IndicatorDefListVO,
  PageVOIndicatorExeListVO,
  IndicatorExeShowVO,
  PageVOIndicatorTaskListVO,
  IndicatorTaskAddDTO,
  IndicatorTaskShowVO,
  IndicatorTaskUpdateDTO,
} from './definitions'

export interface IGetApiIndicatorDefParam {
  query?: {
    createdTimeSortSign?: number
    enabled?: boolean
    enabledSortSign?: number
    endIndex?: number
    indicatorCat?: number
    indicatorCatSortSign?: number
    indicatorKey?: string
    indicatorKeySortSign?: number
    indicatorName?: string
    indicatorType?: number
    indicatorTypeSortSign?: number
    operatedTimeSortSign?: number
    pageNo?: number
    pageSize?: number
    source?: string
    sourceSortSign?: number
    startIndex?: number
  }
}

/**
 * 分页查询【指标定义】
 */
export function getApiIndicatorDef(param: IGetApiIndicatorDefParam) {
  const [url, option] = interceptRequest('/api/indicatorDef', param)
  option.method = 'get'
  return fetch(url, option).then<PageVOIndicatorDefListVO>(interceptResponse)
}

export interface IPostApiIndicatorDefParam {
  body?: IndicatorDefAddDTO
}

/**
 * 新增【指标定义】
 */
export function postApiIndicatorDef(param: IPostApiIndicatorDefParam) {
  const [url, option] = interceptRequest('/api/indicatorDef', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

export interface IPutApiIndicatorDefParam {
  body?: IndicatorDefUpdateDTO
}

/**
 * 修改【指标定义】
 */
export function putApiIndicatorDef(param: IPutApiIndicatorDefParam) {
  const [url, option] = interceptRequest('/api/indicatorDef', param)
  option.method = 'put'
  return fetch(url, option).then<IndicatorDefShowVO>(interceptResponse)
}

export interface IDeleteApiIndicatorDefParam {
  body?: number
}

type DeleteApiIndicatorDefResponse = number
/**
 * 批量删除【指标定义】
 */
export function deleteApiIndicatorDef(param: IDeleteApiIndicatorDefParam) {
  const [url, option] = interceptRequest('/api/indicatorDef', param)
  option.method = 'delete'
  return fetch(url, option).then<DeleteApiIndicatorDefResponse>(
    interceptResponse,
  )
}

export interface IGetApiIndicatorDefAvailableListParam {
  query?: {
    indicatorType?: number
  }
}

type GetApiIndicatorDefAvailableListResponse = any
/**
 * 按类型查询有效指标【按不同分类分组后返回】
 */
export function getApiIndicatorDefAvailableList(
  param: IGetApiIndicatorDefAvailableListParam,
) {
  const [url, option] = interceptRequest(
    '/api/indicatorDef/availableList',
    param,
  )
  option.method = 'get'
  return fetch(url, option).then<GetApiIndicatorDefAvailableListResponse>(
    interceptResponse,
  )
}

export interface IGetApiIndicatorDefIdParam {
  path?: {
    id?: number
  }
}

/**
 * 查看【指标定义】详情
 */
export function getApiIndicatorDefId(param: IGetApiIndicatorDefIdParam) {
  const [url, option] = interceptRequest('/api/indicatorDef/:id', param)
  option.method = 'get'
  return fetch(url, option).then<IndicatorDefShowVO>(interceptResponse)
}

export interface IDeleteApiIndicatorDefIdParam {
  path?: {
    id?: number
  }
}

type DeleteApiIndicatorDefIdResponse = number
/**
 * 删除单个【指标定义】
 */
export function deleteApiIndicatorDefId(param: IDeleteApiIndicatorDefIdParam) {
  const [url, option] = interceptRequest('/api/indicatorDef/:id', param)
  option.method = 'delete'
  return fetch(url, option).then<DeleteApiIndicatorDefIdResponse>(
    interceptResponse,
  )
}

export interface IGetApiIndicatorExeParam {
  query?: {
    createdTimeSortSign?: number
    durationEnd?: number
    durationSortSign?: number
    durationStart?: number
    endIndex?: number
    endTimeEnd?: string
    endTimeStart?: string
    exeCode?: string
    exeStatus?: number
    exeStatusSortSign?: number
    operatedTimeSortSign?: number
    pageNo?: number
    pageSize?: number
    startIndex?: number
    startTimeEnd?: string
    startTimeStart?: string
  }
}

/**
 * 分页查询【任务执行】
 */
export function getApiIndicatorExe(param: IGetApiIndicatorExeParam) {
  const [url, option] = interceptRequest('/api/indicatorExe', param)
  option.method = 'get'
  return fetch(url, option).then<PageVOIndicatorExeListVO>(interceptResponse)
}

export interface IGetApiIndicatorExeIdParam {
  path?: {
    id?: number
  }
}

/**
 * 查看【任务执行】详情
 */
export function getApiIndicatorExeId(param: IGetApiIndicatorExeIdParam) {
  const [url, option] = interceptRequest('/api/indicatorExe/:id', param)
  option.method = 'get'
  return fetch(url, option).then<IndicatorExeShowVO>(interceptResponse)
}

export interface IGetApiIndicatorTaskParam {
  query?: {
    cid1?: number
    cid1SortSign?: number
    cid2?: number
    cid2SortSign?: number
    cid3?: number
    cid3SortSign?: number
    createdTimeSortSign?: number
    enabled?: boolean
    enabledSortSign?: number
    endIndex?: number
    lastEndTimeEnd?: string
    lastEndTimeStart?: string
    lastStartTimeEnd?: string
    lastStartTimeStart?: string
    operatedTimeSortSign?: number
    pageNo?: number
    pageSize?: number
    startIndex?: number
    taskCode?: string
    taskName?: string
    taskStatus?: number
    taskStatusSortSign?: number
  }
}

/**
 * 分页查询【指标任务】
 */
export function getApiIndicatorTask(param: IGetApiIndicatorTaskParam) {
  const [url, option] = interceptRequest('/api/indicatorTask', param)
  option.method = 'get'
  return fetch(url, option).then<PageVOIndicatorTaskListVO>(interceptResponse)
}

export interface IPostApiIndicatorTaskParam {
  body?: IndicatorTaskAddDTO
}

/**
 * 新增【指标任务】
 */
export function postApiIndicatorTask(param: IPostApiIndicatorTaskParam) {
  const [url, option] = interceptRequest('/api/indicatorTask', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

export interface IPutApiIndicatorTaskParam {
  body?: IndicatorTaskUpdateDTO
}

/**
 * 修改【指标任务】
 */
export function putApiIndicatorTask(param: IPutApiIndicatorTaskParam) {
  const [url, option] = interceptRequest('/api/indicatorTask', param)
  option.method = 'put'
  return fetch(url, option).then<IndicatorTaskShowVO>(interceptResponse)
}

export interface IDeleteApiIndicatorTaskParam {
  body?: number
}

type DeleteApiIndicatorTaskResponse = number
/**
 * 批量删除【指标任务】
 */
export function deleteApiIndicatorTask(param: IDeleteApiIndicatorTaskParam) {
  const [url, option] = interceptRequest('/api/indicatorTask', param)
  option.method = 'delete'
  return fetch(url, option).then<DeleteApiIndicatorTaskResponse>(
    interceptResponse,
  )
}

export interface IGetApiIndicatorTaskIdParam {
  path?: {
    id?: number
  }
}

/**
 * 查看【指标任务】详情
 */
export function getApiIndicatorTaskId(param: IGetApiIndicatorTaskIdParam) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id', param)
  option.method = 'get'
  return fetch(url, option).then<IndicatorTaskShowVO>(interceptResponse)
}

export interface IDeleteApiIndicatorTaskIdParam {
  path?: {
    id?: number
  }
}

type DeleteApiIndicatorTaskIdResponse = number
/**
 * 删除单个【指标任务】
 */
export function deleteApiIndicatorTaskId(
  param: IDeleteApiIndicatorTaskIdParam,
) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id', param)
  option.method = 'delete'
  return fetch(url, option).then<DeleteApiIndicatorTaskIdResponse>(
    interceptResponse,
  )
}

export interface IGetApiIndicatorTaskIdLogParam {
  path?: {
    id?: number
  }
}

type GetApiIndicatorTaskIdLogResponse = string
/**
 * 查看日志
 */
export function getApiIndicatorTaskIdLog(
  param: IGetApiIndicatorTaskIdLogParam,
) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id/log', param)
  option.method = 'get'
  return fetch(url, option).then<GetApiIndicatorTaskIdLogResponse>(
    interceptResponse,
  )
}

export interface IPostApiIndicatorTaskIdRunParam {
  path?: {
    id?: number
  }
}

type PostApiIndicatorTaskIdRunResponse = any
/**
 * 执行任务
 */
export function postApiIndicatorTaskIdRun(
  param: IPostApiIndicatorTaskIdRunParam,
) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id/run', param)
  option.method = 'post'
  return fetch(url, option).then<PostApiIndicatorTaskIdRunResponse>(
    interceptResponse,
  )
}

export interface IGetApiIndicatorTaskIdScriptParam {
  path?: {
    id?: number
  }
}

type GetApiIndicatorTaskIdScriptResponse = string
/**
 * 查看脚本
 */
export function getApiIndicatorTaskIdScript(
  param: IGetApiIndicatorTaskIdScriptParam,
) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id/script', param)
  option.method = 'get'
  return fetch(url, option).then<GetApiIndicatorTaskIdScriptResponse>(
    interceptResponse,
  )
}

export interface IPutApiIndicatorTaskIdScriptParam {
  path?: {
    id?: number
  }
  body?: string
}

type PutApiIndicatorTaskIdScriptResponse = any
/**
 * 编辑脚本
 */
export function putApiIndicatorTaskIdScript(
  param: IPutApiIndicatorTaskIdScriptParam,
) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id/script', param)
  option.method = 'put'
  return fetch(url, option).then<PutApiIndicatorTaskIdScriptResponse>(
    interceptResponse,
  )
}

export interface IPostApiIndicatorTaskIdStopParam {
  path?: {
    id?: number
  }
}

type PostApiIndicatorTaskIdStopResponse = any
/**
 * 终止任务
 */
export function postApiIndicatorTaskIdStop(
  param: IPostApiIndicatorTaskIdStopParam,
) {
  const [url, option] = interceptRequest('/api/indicatorTask/:id/stop', param)
  option.method = 'post'
  return fetch(url, option).then<PostApiIndicatorTaskIdStopResponse>(
    interceptResponse,
  )
}
