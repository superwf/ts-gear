/** a type helper for extract a property type of interface */
export const propertyOf = `export type PropertyOf<T extends any, K extends keyof T> = T[K]`
