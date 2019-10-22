/// <reference types="lodash" />
import { JSONSchema } from './interface';
export declare function deeplyStripKey(input: any, keyToStrip: string, predicate: (...args: any) => boolean): any;
export declare const sampleFromSchema: (schema: JSONSchema, definitions?: JSONSchema) => any;
export declare const generateMockData: ((schema: import("json-schema").JSONSchema4, definitions?: import("json-schema").JSONSchema4) => any) & import("lodash").MemoizedFunction;
