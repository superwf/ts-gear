/** interface A { n: number }
 * type B = PropertyOf<A, 'n'> === type B = number
 * */
type PropertyOf<T extends any, K extends keyof T> = T[K]
