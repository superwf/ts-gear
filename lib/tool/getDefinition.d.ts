import { Spec, Schema } from 'swagger-schema-official';
declare type ReturnSchema = {
    [definitionsName: string]: Schema;
};
/**
 * return definitions
 * */
export declare const getDefinition: (spec: Spec) => ReturnSchema;
export {};
