/** convert array to tuple type
 * used as type definition, not runtime function
 *
 * @example
 * ```typescript
 * const tabs = tuple('get', 'post')
 * type TAB_TYPE = typeof tabs[number]
 * ```
 *
 * */
export declare const tuple: <T extends string[]>(...args: T) => T;
