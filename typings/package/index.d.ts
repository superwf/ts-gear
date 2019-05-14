declare module 'ast-traverse'

// 集成T，但忽略T的K属性
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
