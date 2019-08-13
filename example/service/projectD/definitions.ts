/**
 * 新增【指标定义】的参数
 */
export class IndicatorDefAddDTO {
  /**
   * 是否启用
   */
  public enabled: boolean
  /**
   * 计算逻辑
   */
  public formula: string
  /**
   * 指标分类【1诚信度，2波动性，3竞争力】
   */
  public indicatorCat: '1' | '2' | '3'
  /**
   * 指标KEY
   */
  public indicatorKey: string
  /**
   * 指标名称
   */
  public indicatorName: string
  /**
   * 指标类型【1指标，2维度，3标识】
   */
  public indicatorType: '1' | '2' | '3'
  /**
   * 备注说明
   */
  public remark: string
  /**
   * 数据来源（表名）
   */
  public source: string
}

/**
 * 【指标定义】列表展示对象
 */
export class IndicatorDefListVO {
  /**
   * 是否启用
   */
  public enabled?: boolean
  /**
   * 计算逻辑
   */
  public formula?: string
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 指标分类【1诚信度，2波动性，3竞争力】
   */
  public indicatorCat?: '1' | '2' | '3'
  /**
   * 指标KEY
   */
  public indicatorKey?: string
  /**
   * 指标名称
   */
  public indicatorName?: string
  /**
   * 指标类型【1指标，2维度，3标识】
   */
  public indicatorType?: '1' | '2' | '3'
  /**
   * 备注说明
   */
  public remark?: string
  /**
   * 数据来源（表名）
   */
  public source?: string
}

/**
 * 【指标定义】详情展示对象
 */
export class IndicatorDefShowVO {
  /**
   * 是否启用
   */
  public enabled?: boolean
  /**
   * 计算逻辑
   */
  public formula?: string
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 指标分类【1诚信度，2波动性，3竞争力】
   */
  public indicatorCat?: '1' | '2' | '3'
  /**
   * 指标KEY
   */
  public indicatorKey?: string
  /**
   * 指标名称
   */
  public indicatorName?: string
  /**
   * 指标类型【1指标，2维度，3标识】
   */
  public indicatorType?: '1' | '2' | '3'
  /**
   * 备注说明
   */
  public remark?: string
  /**
   * 数据来源（表名）
   */
  public source?: string
}

/**
 * 修改【指标定义】的参数
 */
export class IndicatorDefUpdateDTO {
  /**
   * 是否启用
   */
  public enabled: boolean
  /**
   * 计算逻辑
   */
  public formula: string
  /**
   * 主键ID
   */
  public id: number
  /**
   * 指标分类【1诚信度，2波动性，3竞争力】
   */
  public indicatorCat: number
  /**
   * 指标KEY
   */
  public indicatorKey: string
  /**
   * 指标名称
   */
  public indicatorName: string
  /**
   * 指标类型【1指标，2维度，3标识】
   */
  public indicatorType: number
  /**
   * 备注说明
   */
  public remark: string
  /**
   * 数据来源（表名）
   */
  public source: string
}

/**
 * 新增【任务执行】的参数
 */
export class IndicatorExeAddDTO {
  /**
   * 耗时【毫秒】
   */
  public duration: number
  /**
   * 结束时间
   */
  public endTime?: string
  /**
   * 执行编号,大数据平台返回
   */
  public exeCode: string
  /**
   * 执行状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public exeStatus: '-2' | '-1' | '2' | '1' | '0'
  /**
   * 日志信息
   */
  public logMsg: string
  /**
   * 执行结果地址
   */
  public resultUrl: string
  /**
   * 运行脚本id
   */
  public scriptId: string
  /**
   * 开始时间
   */
  public startTime?: string
}

/**
 * 【任务执行】列表展示对象
 */
export class IndicatorExeListVO {
  /**
   * 耗时【毫秒】
   */
  public duration?: number
  /**
   * 结束时间
   */
  public endTime?: string
  /**
   * 执行编号,大数据平台返回
   */
  public exeCode?: string
  /**
   * 执行状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public exeStatus?: '-2' | '-1' | '2' | '1' | '0'
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 日志信息
   */
  public logMsg?: string
  /**
   * 执行结果地址
   */
  public resultUrl?: string
  /**
   * 运行脚本id
   */
  public scriptId?: string
  /**
   * 开始时间
   */
  public startTime?: string
}

/**
 * 【任务执行】详情展示对象
 */
export class IndicatorExeShowVO {
  /**
   * 耗时【毫秒】
   */
  public duration?: number
  /**
   * 结束时间
   */
  public endTime?: string
  /**
   * 执行编号,大数据平台返回
   */
  public exeCode?: string
  /**
   * 执行状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public exeStatus?: '-2' | '-1' | '2' | '1' | '0'
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 日志信息
   */
  public logMsg?: string
  /**
   * 执行结果地址
   */
  public resultUrl?: string
  /**
   * 运行脚本id
   */
  public scriptId?: string
  /**
   * 开始时间
   */
  public startTime?: string
}

/**
 * 修改【任务执行】的参数
 */
export class IndicatorExeUpdateDTO {
  /**
   * 耗时【毫秒】
   */
  public duration: number
  /**
   * 结束时间
   */
  public endTime?: string
  /**
   * 执行编号,大数据平台返回
   */
  public exeCode: string
  /**
   * 执行状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public exeStatus: number
  /**
   * 主键ID
   */
  public id: number
  /**
   * 日志信息
   */
  public logMsg: string
  /**
   * 执行结果地址
   */
  public resultUrl: string
  /**
   * 运行脚本id
   */
  public scriptId: string
  /**
   * 开始时间
   */
  public startTime?: string
}

/**
 * 新增【指标任务】的参数
 */
export class IndicatorTaskAddDTO {
  /**
   * 事业群（过滤条件）
   */
  public buId: string
  /**
   * 一级品类id（过滤条件）
   */
  public cid1: number
  /**
   * 二级品类id（过滤条件）
   */
  public cid2: number
  /**
   * 三级品类id（过滤条件）
   */
  public cid3: number
  /**
   * 一级部门（过滤条件）
   */
  public deptId1: string
  /**
   * 二级部门（过滤条件）
   */
  public deptId2: string
  /**
   * 三级部门（过滤条件）
   */
  public deptId3: string
  /**
   * 是否启用
   */
  public enabled: boolean
  /**
   * 收件人erp【英文逗号分隔】
   */
  public erps: string
  /**
   * 结束时间（过滤条件）
   */
  public filterEndTime: string
  /**
   * 开始时间（过滤条件）
   */
  public filterStartTime: string
  /**
   * 过滤类型【1部门,2品类,3sku】
   */
  public filterType: '1' | '2' | '3'
  public indicatorDefList?: Array<number>
  /**
   * 上次执行id
   */
  public lastExeId?: number
  /**
   * 备注说明
   */
  public remark: string
  /**
   * 运行脚本id
   */
  public scriptId: string
  /**
   * skuId列表（过滤条件）
   */
  public skuIds: string
  /**
   * 任务编号,外部传入
   */
  public taskCode: string
  /**
   * 任务名称
   */
  public taskName: string
  /**
   * 任务状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public taskStatus: '-2' | '-1' | '2' | '1' | '0'
  /**
   * 时间类型【1日，2周，3月】
   */
  public timeType: '1' | '2' | '3'
}

/**
 * 【指标任务】列表展示对象
 */
export class IndicatorTaskListVO {
  /**
   * 事业群（过滤条件）
   */
  public buId?: string
  /**
   * 一级品类id（过滤条件）
   */
  public cid1?: number
  /**
   * 二级品类id（过滤条件）
   */
  public cid2?: number
  /**
   * 三级品类id（过滤条件）
   */
  public cid3?: number
  /**
   * 一级部门（过滤条件）
   */
  public deptId1?: string
  /**
   * 二级部门（过滤条件）
   */
  public deptId2?: string
  /**
   * 三级部门（过滤条件）
   */
  public deptId3?: string
  /**
   * 是否启用
   */
  public enabled?: boolean
  /**
   * 收件人erp【英文逗号分隔】
   */
  public erps?: string
  /**
   * 结束时间（过滤条件）
   */
  public filterEndTime?: string
  /**
   * 开始时间（过滤条件）
   */
  public filterStartTime?: string
  /**
   * 过滤类型【1部门,2品类,3sku】
   */
  public filterType?: '1' | '2' | '3'
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 结束时间
   */
  public lastEndTime?: string
  /**
   * 上次执行id
   */
  public lastExeId?: number
  /**
   * 开始时间
   */
  public lastStartTime?: string
  /**
   * 备注说明
   */
  public remark?: string
  /**
   * 运行脚本id
   */
  public scriptId?: string
  /**
   * skuId列表（过滤条件）
   */
  public skuIds?: string
  /**
   * 任务编号,外部传入
   */
  public taskCode?: string
  /**
   * 任务名称
   */
  public taskName?: string
  /**
   * 任务状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public taskStatus?: '-2' | '-1' | '2' | '1' | '0'
  /**
   * 时间类型【1日，2周，3月】
   */
  public timeType?: '1' | '2' | '3'
}

/**
 * 【指标任务】详情展示对象
 */
export class IndicatorTaskShowVO {
  /**
   * 事业群（过滤条件）
   */
  public buId?: string
  /**
   * 一级品类id（过滤条件）
   */
  public cid1?: number
  /**
   * 二级品类id（过滤条件）
   */
  public cid2?: number
  /**
   * 三级品类id（过滤条件）
   */
  public cid3?: number
  /**
   * 一级部门（过滤条件）
   */
  public deptId1?: string
  /**
   * 二级部门（过滤条件）
   */
  public deptId2?: string
  /**
   * 三级部门（过滤条件）
   */
  public deptId3?: string
  /**
   * 是否启用
   */
  public enabled?: boolean
  /**
   * 收件人erp【英文逗号分隔】
   */
  public erps?: string
  /**
   * 结束时间（过滤条件）
   */
  public filterEndTime?: string
  /**
   * 开始时间（过滤条件）
   */
  public filterStartTime?: string
  /**
   * 过滤类型【1部门,2品类,3sku】
   */
  public filterType?: '1' | '2' | '3'
  /**
   * 主键ID
   */
  public id?: number
  /**
   * 【指标定义】列表
   */
  public indicatorDefList?: Array<IndicatorDefListVO>
  /**
   * 结束时间
   */
  public lastEndTime?: string
  /**
   * 上次执行id
   */
  public lastExeId?: number
  /**
   * 开始时间
   */
  public lastStartTime?: string
  /**
   * 备注说明
   */
  public remark?: string
  /**
   * 运行脚本id
   */
  public scriptId?: string
  /**
   * skuId列表（过滤条件）
   */
  public skuIds?: string
  /**
   * 任务编号,外部传入
   */
  public taskCode?: string
  /**
   * 任务名称
   */
  public taskName?: string
  /**
   * 任务状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public taskStatus?: '-2' | '-1' | '2' | '1' | '0'
  /**
   * 时间类型【1日，2周，3月】
   */
  public timeType?: '1' | '2' | '3'
}

/**
 * 修改【指标任务】的参数
 */
export class IndicatorTaskUpdateDTO {
  /**
   * 事业群（过滤条件）
   */
  public buId: string
  /**
   * 一级品类id（过滤条件）
   */
  public cid1: number
  /**
   * 二级品类id（过滤条件）
   */
  public cid2: number
  /**
   * 三级品类id（过滤条件）
   */
  public cid3: number
  /**
   * 一级部门（过滤条件）
   */
  public deptId1: string
  /**
   * 二级部门（过滤条件）
   */
  public deptId2: string
  /**
   * 三级部门（过滤条件）
   */
  public deptId3: string
  /**
   * 是否启用
   */
  public enabled: boolean
  /**
   * 收件人erp【英文逗号分隔】
   */
  public erps: string
  /**
   * 结束时间（过滤条件）
   */
  public filterEndTime: string
  /**
   * 开始时间（过滤条件）
   */
  public filterStartTime: string
  /**
   * 过滤类型【1部门,2品类,3sku】
   */
  public filterType: number
  /**
   * 主键ID
   */
  public id: number
  public indicatorDefList?: Array<number>
  /**
   * 上次执行id
   */
  public lastExeId?: number
  /**
   * 备注说明
   */
  public remark: string
  /**
   * 运行脚本id
   */
  public scriptId: string
  /**
   * skuId列表（过滤条件）
   */
  public skuIds: string
  /**
   * 任务编号,外部传入
   */
  public taskCode: string
  /**
   * 任务名称
   */
  public taskName: string
  /**
   * 任务状态【0未开始，1进行中，2成功，-1失败，-2取消】
   */
  public taskStatus: number
  /**
   * 时间类型【1日，2周，3月】
   */
  public timeType: number
}

export class PageVOIndicatorDefListVO {
  /**
   * 页码
   */
  public currentPage: number
  /**
   * 开始序号
   */
  public firstIndex: number
  /**
   * 结束序号
   */
  public lastIndex: number
  /**
   * 数据列表
   */
  public list: Array<IndicatorDefListVO>
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 每页条数
   */
  public pageSize: number
  /**
   * 总条数
   */
  public total: number
}

export class PageVOIndicatorExeListVO {
  /**
   * 页码
   */
  public currentPage: number
  /**
   * 开始序号
   */
  public firstIndex: number
  /**
   * 结束序号
   */
  public lastIndex: number
  /**
   * 数据列表
   */
  public list: Array<IndicatorExeListVO>
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 每页条数
   */
  public pageSize: number
  /**
   * 总条数
   */
  public total: number
}

export class PageVOIndicatorTaskListVO {
  /**
   * 页码
   */
  public currentPage: number
  /**
   * 开始序号
   */
  public firstIndex: number
  /**
   * 结束序号
   */
  public lastIndex: number
  /**
   * 数据列表
   */
  public list: Array<IndicatorTaskListVO>
  /**
   * 总页数
   */
  public pageCount: number
  /**
   * 每页条数
   */
  public pageSize: number
  /**
   * 总条数
   */
  public total: number
}
