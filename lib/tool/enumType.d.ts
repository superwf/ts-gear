import { Spec } from 'swagger-schema-official';
/** use traverse spec path to generate an available enum type name */
export declare const generateEnumName: (traversePath: string[], spec: Spec) => string;
/** convert enum member to enum type
 * e.g.
 *   `[1,2,3]` => `1 | 2 | 3`
 *   `['a', 'b', 'c']` => `'a' | 'b' | 'c'`
 * */
export declare const generateEnumTypescriptContent: (value: any[]) => string;
