import { ITraverseSchemaNode } from '../interface';
/**
 * recursively invoked on every schema node
 * update operation will modify the param data
 * @param the json schema object data
 * @param the function will be called recursively on each schema node
 * */
export declare const traverseSchema: (obj: {
    [k: string]: any;
}, func: (v: ITraverseSchemaNode) => void) => void;
/** only travers "$ref" */
export declare const traverse$Ref: (obj: {
    [k: string]: any;
}, func: (v: string) => void) => void;
