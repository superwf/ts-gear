import { Schema, Operation, Parameter } from 'swagger-schema-official';
/** add many possible properties to doc */
export declare const assembleDoc: (schema: Schema | Operation | Parameter) => string[] | undefined;
