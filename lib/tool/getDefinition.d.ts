import { Spec } from 'swagger-schema-official';
/**
 * return definitions
 * */
export declare const getDefinition: (spec: Spec) => {
    [definitionsName: string]: import("swagger-schema-official").Schema;
};
