import { IParameter, IParameterSchema } from './interface';
/** 将paths里的各种请求参数组装成IParameterSchema的结构 */
export declare const assembleRequestParam: (parameters: IParameter[]) => IParameterSchema;
