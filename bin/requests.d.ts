import { TPathMatcherFunction } from './interface';
/** 将paths里的各种请求参数组装成IProperty的数据结构 */
export declare const generateRequests: (schema: import("json-schema").JSONSchema4, $RefsInPaths: string[], pathMatcher?: TPathMatcherFunction) => Promise<{
    requestsContent: string;
    mockRequestsContent: string;
}>;
