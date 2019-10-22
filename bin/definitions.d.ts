/** 生成一维property为原始类型的interface
 * */
export declare const transformDefinitionToTsClass: (definition: import("json-schema").JSONSchema4, title: string) => Promise<string>;
/**
 * 解析整个definitions
 * */
export declare const transformDefinitionsToTypescript: (definitions: {
    [k: string]: import("json-schema").JSONSchema4;
}) => Promise<string>;
/** 将所有$refsNames添加为any的别名 */
export declare const transform$RefsNotInDefinitions: ($refNames: string[]) => Promise<string>;
