import { Path, Schema, Operation, Response, Reference, Parameter, BaseParameter, ParameterType } from 'swagger-schema-official';
import { Options } from 'prettier';
/** interface A { n: number }
 * type B = PropertyType<A, 'n'> === type B = number
 * */
export declare type PropertyType<T extends any, K extends keyof T> = T[K];
/** baidu and google can handle different language automatically
 * youdao must assign the language type
 * */
export declare type TranslationEngine = 'baidu' | 'google';
export declare type HttpMethod = Exclude<Exclude<keyof Path, '$ref'>, 'parameters'>;
export declare type RequestParameterPosition = PropertyType<BaseParameter, 'in'>;
/** request parameter option */
export declare type IRequestParameter = {
    method?: HttpMethod;
    basePath?: string;
    host?: string;
} & {
    [position in RequestParameterPosition]?: any;
};
/** requester function signature */
export declare type Requester = (url: string, param?: IRequestParameter) => Promise<any>;
export interface IRequestFunction<T1, T2> {
    (option: T1): Promise<T2>;
    setMockData(data: T2): void;
}
/** json schema traverse datatype */
export interface ITraverseSchemaNode {
    value: any;
    key: string;
    parent: any;
    path: string[];
}
/**
 * general request parameters defined in json schema
 * */
export declare type ParameterPositionMap = {
    [key in RequestParameterPosition]?: {
        type: ParameterType;
        name: RequestParameterPosition;
        required: string[];
        properties?: {
            [propertyName: string]: Omit<Parameter, 'required'> | Reference;
        };
        schema?: Schema;
        docs?: string[];
    };
};
export declare type TPathMatcherFunction = RegExp | ((url: string, httpMethod?: HttpMethod) => boolean);
export interface IProject {
    /** project name
     * will used to mkdir in "dest"
     * */
    name: string;
    /** the api files will be generated to
     * @example './service'
     * */
    dest: string;
    /** swagger doc path
     * could be remote or local json file
     * starts with "http" is remote
     * others are dealed local json file
     * */
    source: string;
    /**
     * the param for fetch swagger doc
     * see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
     * */
    fetchSwaggerDocOption?: RequestInit;
    /** filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     * */
    pathMatcher?: TPathMatcherFunction;
    /** request function
     * ts-gear provide two available requesters out of box.
     * or else use your own function as requester is definitily ok,
     * request function signiture as below
     *   (url: string, param: IRequestParameter) => Promise<any>
     * */
    requester: Requester;
    /**
     * @default false
     * by default, definiton will generate ts "class"
     * "class" can keep the property default value
     * set this to true to generate "interface" instead of "class"
     * */
    preferInterface?: boolean;
    /**
     * @default false
     * when assigned true, the requester function will receive the "host"
     * defined in swagger
     * */
    withHost?: boolean;
    /**
     * @default false
     * when assigned true, the requester function will receive the "basePath" defined in swagger
     * */
    withBasePath?: boolean;
    /**
     * @default true
     * ts-gear try to keep the generic type for all definition
     * but real world swagger doc has many bad definition
     * if generic type make some error
     * assign "false" to this option
     * ts-gear will not generate generic type
     * the process of generating typescript content will be more stable.
     * */
    keepGeneric?: boolean;
    /** if your swagger doc has some non english words in definitions keys or some $ref position,
     * choose an engine to transate those words to english
     * the translated results are not for human reading, but for program variable names.
     * because translation depends on internet, you may need to retry some times to get results successfuly.
     * once your api is generated, change to another engine and regenerate new api, the translate output will definitely be different, so the api content will be different too.
     *
     * most case you don`t need this option, try to persuade your teammate to correct the swagger doc to english is a better way.
     * if there are unregular charator, and you can not fix it,
     * try to use an engine provided by "translation.js"
     * "baidu" or "google"
     * */
    translationEngine?: TranslationEngine;
    /** use swagger sample data mock response data
     * usually usage: process.env.NODE_ENV === 'test'
     * */
    mockResponse?: boolean;
    /** output content prettier config */
    prettierConfig?: Options;
}
export interface IAssembleResponse {
    responseTypeContent: string;
    successTypeContent: string;
    responseTypeName: string;
    successTypeName: string;
}
export interface ISwaggerDefinition {
    typeName: string;
    schema?: Schema;
    typescriptContent?: string;
    typeParameters?: string[];
}
export interface ISwaggerRequest {
    pathName: string;
    httpMethod: HttpMethod;
    schema: Operation;
    typescriptContent?: string;
    parameters?: Array<Parameter | Reference>;
    responses: {
        [responseName: string]: Response | Reference;
    };
}
export interface IGenericNameNode {
    name: string;
    level?: number;
    children?: IGenericNameNode[];
    parent?: IGenericNameNode;
}
/** definition name may be changed when parsing generic type
 * then the ref name can not find the map in definition
 * use this map to link the changed definition and ref name.
 * */
export interface IRefMap {
    /** key: maybe generic, as "A<B>", value: trimed generic symbol, as "AB" */
    [origin: string]: ISwaggerDefinition;
}
export interface IDefinitionMap {
    [definitionName: string]: ISwaggerDefinition;
}
export interface IRequestMap {
    [requestFunctionName: string]: ISwaggerRequest;
}
/** key: origin word, value: translated english word */
export interface IWordsMap {
    [k: string]: string;
}
/** global variables per project */
export interface IProjectGlobal {
    definitionMap: IDefinitionMap;
    /** all Reference $ref name use this map
     * key is original ref name
     * value is definition
     * */
    requestMap: IRequestMap;
    requestRefSet: Set<string>;
}
export interface IProjectGlobalMap {
    [projectName: string]: IProjectGlobal;
}
