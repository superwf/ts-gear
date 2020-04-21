/** use axios fetch to request */
import { AxiosRequestConfig } from 'axios';
import { IRequestParameter } from '../interface';
/** transform parseUrl('/api/abc/:id', { path: { id: '123' } }) to '/api/abc/123'
 * */
export declare const parseUrl: (url: string, option?: IRequestParameter | undefined) => string;
/** assign request body to axios option */
export declare function interceptRequest(url: string, option: IRequestParameter): [string, AxiosRequestConfig];
export declare const requester: (axiosInit?: AxiosRequestConfig | undefined) => (apiUrl: string, param: IRequestParameter) => Promise<any>;
