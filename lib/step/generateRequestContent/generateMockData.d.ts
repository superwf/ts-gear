/** copy from swagger-ui https://github.com/swagger-api/swagger-ui/blob/master/src/core/plugins/samples/fn.js
 * swagger-ui "license": "Apache-2.0"
 * modify js to ts and some ts-gear project part change
 * */
/// <reference types="lodash" />
import { Schema } from 'swagger-schema-official';
import { ISwaggerRequest, IDefinitionMap, IEnumMap } from '../../interface';
export declare function deeplyStripKey(input: any, keyToStrip: string, predicate: (...args: any) => boolean): any;
export declare const sampleFromSchema: (schema: Schema, definitionMap: IDefinitionMap, enumMap: IEnumMap) => any;
export declare const generateMockData: ((request: ISwaggerRequest, definitionMap: IDefinitionMap, enumMap: IEnumMap) => any) & import("lodash").MemoizedFunction;
