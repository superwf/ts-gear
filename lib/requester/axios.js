"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** use axios fetch to request */
const axios_1 = require("axios");
const lodash_1 = require("lodash");
const pathToRegexp = require("path-to-regexp");
/** transform parseUrl('/api/abc/:id', { path: { id: '123' } }) to '/api/abc/123'
 * */
exports.parseUrl = (url, option) => {
    if (option) {
        if (option.path) {
            for (const k of Object.getOwnPropertyNames(option.path)) {
                option.path[k] = encodeURIComponent(String(option.path[k]));
            }
            url = pathToRegexp.compile(url)(option.path);
        }
    }
    return url;
};
class InterceptError extends Error {
    constructor(message, hideStackFunc) {
        super(message);
        Error.captureStackTrace(this, hideStackFunc);
    }
}
/** assign request body to axios option */
function interceptRequest(url, option) {
    try {
        url = exports.parseUrl(url, option);
    }
    catch (e) {
        // skip this function
        // throw error to above stack, at fetch caller function position
        throw new InterceptError(e.message, interceptRequest);
    }
    const requestOption = {
        method: option.method,
    };
    if (option) {
        if (option.body) {
            requestOption.data = option.body;
        }
    }
    if (option && option.formData) {
        const formData = new FormData();
        // 这种上传文件的情况，应该只有一维的键值对应，只用forEach处理第一层数据
        lodash_1.forEach(option.formData, (v, k) => {
            formData.append(k, v);
        });
        requestOption.data = formData;
    }
    return [url, requestOption];
}
exports.interceptRequest = interceptRequest;
exports.requester = (axiosInit) => {
    const request = axios_1.default.create(axiosInit);
    return (apiUrl, param) => {
        const [url, option] = interceptRequest(apiUrl, param);
        return request(url, option).then(res => res.data);
    };
};
