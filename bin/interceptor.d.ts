/** url query
 * 只支持一维结构的键值对或数组
 * */
export interface IQuery {
    [k: string]: string | string[] | number | number[] | boolean | boolean[] | undefined;
}
/** url param in path
 * 例如/api/abc/:id
 * 如果是/:ids数组的情况
 * 应先手动转成string再带入
 * */
export interface IPath {
    [k: string]: string | number | undefined;
}
/** request parameter option */
export interface IRequestParameter {
    query?: IQuery;
    body?: any;
    path?: IPath;
    formData?: any;
    header?: any;
}
/** 将query与path参数都挂到url上去
 * transform parseUrl('/api/abc/:id', { path: { id: '123' }, query: { name: 'def' } }) to '/api/abc/123?name=def'
 * */
export declare const parseUrl: (url: string, option?: IRequestParameter) => string;
/** 请求拦截器
 * 每个请求的通用设置放到这里
 * 如果请求体是普通对象，用json格式化并添加json的http header
 * 如果请求体有formData项，自动添加成FormData
 * */
export declare function interceptRequest(url: string, option?: IRequestParameter): [string, RequestInit];
/** 根据response的header处理各种返回数据
 * 目前只是转了json和text两种，需要其他自行添加
 * */
export declare function interceptResponse<T extends any>(res: Response): Promise<T>;
