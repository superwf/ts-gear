import { Schema, BodyParameter, Response, Parameter } from 'swagger-schema-official';
declare type SchemaOption = Schema | BodyParameter | Response | Parameter;
export declare const schemaToTypescript: (schema: SchemaOption) => string;
export {};
