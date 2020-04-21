/** copy from swagger-ui https://github.com/swagger-api/swagger-ui/blob/master/src/core/plugins/samples/fn.js
 * modify js to ts */
/// <reference types="lodash" />
import { Schema } from 'swagger-schema-official';
import { ISwaggerRequest, IDefinitionMap } from '../../interface';
export declare function deeplyStripKey(input: any, keyToStrip: string, predicate: (...args: any) => boolean): any;
export declare const sampleFromSchema: (schema: Schema, definitions: IDefinitionMap) => any;
export declare const generateMockData: ((request: ISwaggerRequest, definitionMap: IDefinitionMap) => any) & import("lodash").MemoizedFunction;
