import { IRequestParameter } from '../interface';
/** add query and path parameters to url
 * e.g.
 * parseUrl('/api/abc/:id', { path: { id: '123' }, query: { name: 'def' } }) => '/api/abc/123?name=def'
 * */
export declare const parseUrl: (url: string, option?: IRequestParameter | undefined) => string;
/** 请求拦截器
 * 每个请求的通用设置放到这里
 * 如果请求体是普通对象，用json格式化并添加json的http header
 * 如果请求体有formData项，自动添加成FormData
 * */
export declare function interceptRequest(url: string, option: IRequestParameter, requestInit?: RequestInit): [string, RequestInit];
/** 根据response的header处理各种返回数据
 * 目前只是转了json和text两种，需要其他自行添加
 * */
export declare function interceptResponse<T extends any>(res: Response): Promise<T>;
/** native fetch wrappper */
export declare const requester: (requestInit?: RequestInit | undefined) => (apiUrl: string, param: IRequestParameter) => Promise<any>;
