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

const { info } = console

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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    currentPage: 1,
    firstIndex: 0,
    lastIndex: 10,
    list: [
      {
        enabled: true,
        formula: 'sum(if(flg_legal_adjust_price,1,0))',
        id: 1,
        indicatorCat: 1,
        indicatorKey: 'ajust_price_num',
        indicatorName: '调价次数',
        indicatorType: 1,
        remark: '备注',
        source: 'table_a',
      },
    ],
    pageCount: 10,
    pageSize: 10,
    total: 100,
  }) as Promise<PageVOIndicatorDefListVO>
}

export interface IPostApiIndicatorDefParam {
  body?: IndicatorDefAddDTO
}

/**
 * 新增【指标定义】
 */
export function postApiIndicatorDef(param: IPostApiIndicatorDefParam) {
  const [url, option] = interceptRequest('/api/indicatorDef', param)
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPutApiIndicatorDefParam {
  body?: IndicatorDefUpdateDTO
}

/**
 * 修改【指标定义】
 */
export function putApiIndicatorDef(param: IPutApiIndicatorDefParam) {
  const [url, option] = interceptRequest('/api/indicatorDef', param)
  info('mock fetch: ', url)
  option.method = 'put'
  return Promise.resolve({
    enabled: true,
    formula: 'sum(if(flg_legal_adjust_price,1,0))',
    id: 1,
    indicatorCat: 1,
    indicatorKey: 'ajust_price_num',
    indicatorName: '调价次数',
    indicatorType: 1,
    remark: '备注',
    source: 'table_a',
  }) as Promise<IndicatorDefShowVO>
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
  info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    additionalProp1: [null],
    additionalProp2: [null],
    additionalProp3: [null],
  }) as Promise<GetApiIndicatorDefAvailableListResponse>
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    currentPage: 1,
    firstIndex: 0,
    lastIndex: 10,
    list: [
      {
        duration: 2000,
        endTime: '2018-01-22 00:00:00',
        exeCode: 12,
        exeStatus: 1,
        id: 1,
        logMsg: '计算资源不足',
        resultUrl: '/job1/123',
        scriptId: 123,
        startTime: '2018-01-22 00:00:00',
      },
    ],
    pageCount: 10,
    pageSize: 10,
    total: 100,
  }) as Promise<PageVOIndicatorExeListVO>
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    duration: 2000,
    endTime: '2018-01-22 00:00:00',
    exeCode: 12,
    exeStatus: 1,
    id: 1,
    logMsg: '计算资源不足',
    resultUrl: '/job1/123',
    scriptId: 123,
    startTime: '2018-01-22 00:00:00',
  }) as Promise<IndicatorExeShowVO>
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    currentPage: 1,
    firstIndex: 0,
    lastIndex: 10,
    list: [
      {
        buId: 737,
        cid1: 1,
        cid2: 1,
        cid3: 1,
        deptId1: 737,
        deptId2: 737,
        deptId3: 737,
        enabled: true,
        erps: 'zhangsan,lisi',
        filterEndTime: '2018-01-22 00:00:00',
        filterStartTime: '2018-01-22 00:00:00',
        filterType: 1,
        id: 1,
        lastEndTime: '2018-01-22 00:00:00',
        lastExeId: 1,
        lastStartTime: '2018-01-22 00:00:00',
        remark: '备注',
        scriptId: 123,
        skuIds: '123,232',
        taskCode: 'TASK001',
        taskName: '任务1',
        taskStatus: 0,
        timeType: 1,
      },
    ],
    pageCount: 10,
    pageSize: 10,
    total: 100,
  }) as Promise<PageVOIndicatorTaskListVO>
}

export interface IPostApiIndicatorTaskParam {
  body?: IndicatorTaskAddDTO
}

/**
 * 新增【指标任务】
 */
export function postApiIndicatorTask(param: IPostApiIndicatorTaskParam) {
  const [url, option] = interceptRequest('/api/indicatorTask', param)
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPutApiIndicatorTaskParam {
  body?: IndicatorTaskUpdateDTO
}

/**
 * 修改【指标任务】
 */
export function putApiIndicatorTask(param: IPutApiIndicatorTaskParam) {
  const [url, option] = interceptRequest('/api/indicatorTask', param)
  info('mock fetch: ', url)
  option.method = 'put'
  return Promise.resolve({
    buId: 737,
    cid1: 1,
    cid2: 1,
    cid3: 1,
    deptId1: 737,
    deptId2: 737,
    deptId3: 737,
    enabled: true,
    erps: 'zhangsan,lisi',
    filterEndTime: '2018-01-22 00:00:00',
    filterStartTime: '2018-01-22 00:00:00',
    filterType: 1,
    id: 1,
    indicatorDefList: [null],
    lastEndTime: '2018-01-22 00:00:00',
    lastExeId: 1,
    lastStartTime: '2018-01-22 00:00:00',
    remark: '备注',
    scriptId: 123,
    skuIds: '123,232',
    taskCode: 'TASK001',
    taskName: '任务1',
    taskStatus: 0,
    timeType: 1,
  }) as Promise<IndicatorTaskShowVO>
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
  info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve('string') as Promise<GetApiIndicatorTaskIdLogResponse>
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve('string') as Promise<
    GetApiIndicatorTaskIdScriptResponse
  >
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
  info('mock fetch: ', url)
  option.method = 'put'
  Promise.resolve(new Response())
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
  info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}
