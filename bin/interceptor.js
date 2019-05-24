"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/** 该文件只生产一次，之后可根据项目自行更改，不会被覆盖 */
var lodash_1 = require("lodash");
var pathToRegexp = require("path-to-regexp");
var URL = require("url");
var jsonType = 'application/json';
/** 将query与path参数都挂到url上去
 * transform parseUrl('/api/abc/:id', { path: { id: '123' }, query: { name: 'def' } }) to '/api/abc/123?name=def'
 * */
exports.parseUrl = function (url, option) {
    if (option) {
        if (option.path) {
            for (var _i = 0, _a = Object.keys(option.path); _i < _a.length; _i++) {
                var k = _a[_i];
                option.path[k] = encodeURIComponent(String(option.path[k]));
            }
            url = pathToRegexp.compile(url)(option.path);
        }
        if (option.query) {
            var urlObject = URL.parse(url, true); // true: let the urlObject.query is object
            // see url#format, only search is absent, query will be used
            delete urlObject.search;
            url = URL.format(__assign({}, urlObject, { query: __assign({}, urlObject.query, option.query) }));
        }
    }
    return url;
};
var InterceptError = /** @class */ (function (_super) {
    __extends(InterceptError, _super);
    function InterceptError(message, hideStackFunc) {
        var _this = _super.call(this, message) || this;
        Error.captureStackTrace(_this, hideStackFunc);
        return _this;
    }
    return InterceptError;
}(Error));
/** 请求拦截器
 * 每个请求的通用设置放到这里
 * 如果请求体是普通对象，用json格式化并添加json的http header
 * 如果请求体有formData项，自动添加成FormData
 * */
function interceptRequest(url, option) {
    try {
        url = exports.parseUrl(url, option);
    }
    catch (e) {
        // skip this function
        // throw error to above stack, at fetch caller function position
        throw new InterceptError(e.message, interceptRequest);
    }
    var requestOption = {
    // add the default request option here
    };
    if (option && option.body) {
        var body = option.body;
        // add application/json header when body is plain object
        // and auto json stringify the body
        if (lodash_1.isPlainObject(body)) {
            requestOption.headers = {
                'Content-Type': jsonType
            };
            body = JSON.stringify(body);
        }
        requestOption.body = option.body;
    }
    // body 与 formData 不能同时存在
    // 所以如果有formData时，直接给requestOption.body赋值即可
    if (option && option.formData) {
        var formData_1 = new FormData();
        lodash_1.forEach(option.formData, function (v, k) {
            formData_1.append(k, v);
        });
        requestOption.body = formData_1;
    }
    return [url, requestOption];
}
exports.interceptRequest = interceptRequest;
/** transform response code here */
function interceptResponse(res) {
    if (!res.ok) {
        throw new InterceptError("response not ok, status: " + res.status + ", " + res.statusText + ", url: " + res.url, interceptResponse);
    }
    var contentType = res.headers.get('Content-Type');
    if (contentType) {
        if (contentType.includes(jsonType)) {
            return res.json();
        }
        if (contentType.includes('text/plain')) {
            return res.text();
        }
        // 在此处添加处理更多的response类型
    }
    return res;
}
exports.interceptResponse = interceptResponse;
