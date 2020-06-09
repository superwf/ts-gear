"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tuple = void 0;
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
exports.tuple = (...args) => args;
