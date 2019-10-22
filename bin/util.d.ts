import { MemoizedFunction } from 'lodash';
import { ISchemaNode } from './interface';
/** 将一些definitinos与$ref中的中文翻印成可作为变量名的英文
 * 使用memoize避免重复翻译
 * */
export declare const translateAsync: ((text: string, index?: number) => Promise<string>) & MemoizedFunction;
/** 当前项目的根路径，调用其他文件都以该路径为基准 */
export declare const tsGearRoot: string;
/**
 * 返回$ref里的去掉`#/definitions/`部分剩下的字符串
 * */
export declare const trimDefinitionPrefix: ($ref: string) => string;
/** transform /abc/{id} to /abc/:id */
export declare const transformPathParameters: (v: string) => string;
/**
 * 递归处理对象值
 * 主要用来处理swagger schema中的paths与definitions
 * @param {object} 对象，一般为json schema
 * @param {funnction} 在递归中处理每个节点的函数
 * */
export declare const traverseSchema: (obj: {
    [k: string]: any;
}, func: (v: ISchemaNode) => void) => void;
/** 生成唯一的名字
 * 如果已经存在则名称后面的数字累加
 * 搭配翻译功能用，因为翻译完的英文很可能重复
 * */
export declare const getUniqName: (text: string, exist: (t: string) => boolean, accumulator?: number) => string;
/** 初始化整个schema
 * 针对所有definitions的key，与所有$ref
 * 放在traverseSchema中运行
 * * 翻译
 * * 去空格与不能作为变量名的非法字符
 * * 首字母大写
 * */
export declare const initializeSchema: (schema: import("json-schema").JSONSchema4) => Promise<{
    $refsNotInDefinitions: string[];
    $refsInPaths: string[];
}>;
/** 将schema转换为ts的类型 */
export declare const transformProperty: (property: import("json-schema").JSONSchema4) => string;
