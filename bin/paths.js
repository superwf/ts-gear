"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
// import { JSONSchema4TypeName } from 'json-schema'
var lodash_1 = require("lodash");
var path_1 = require("path");
var assembleRequestParam_1 = require("./assembleRequestParam");
var interceptor_1 = require("./interceptor");
var source_1 = require("./source");
var util_1 = require("./util");
/** 将paths里的各种请求参数组装成IProperty的数据结构 */
// const assembleRequestParam = () => {}
exports.generatePaths = function (schema) { return __awaiter(_this, void 0, void 0, function () {
    var paths, basePath, url, tsContent, _a, _b, _i, path, _loop_1, _c, _d, _e, action, dependents, importTsContent;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                paths = schema.paths;
                basePath = schema.basePath;
                tsContent = [];
                _a = [];
                for (_b in paths)
                    _a.push(_b);
                _i = 0;
                _f.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 6];
                url = _a[_i];
                if (!paths.hasOwnProperty(url)) {
                    return [3 /*break*/, 5];
                }
                path = paths[url];
                _loop_1 = function (action) {
                    var request, functionName, paramInterfaceName, parameterSchema_1, paramDefTsContent, responseType, response200Schema, response200, responseTsContent, functTsContent;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!path.hasOwnProperty(action) || path[action].deprecated) {
                                    return [2 /*return*/, "continue"];
                                }
                                request = path[action];
                                functionName = "" + action + lodash_1.upperFirst(lodash_1.camelCase(url));
                                paramInterfaceName = '';
                                if (!(request.parameters && request.parameters.length > 0)) return [3 /*break*/, 2];
                                parameterSchema_1 = assembleRequestParam_1.assembleRequestParam(request.parameters);
                                // console.log(JSON.stringify(parameterSchema))
                                paramInterfaceName = "I" + lodash_1.upperFirst(functionName) + "Param";
                                return [4 /*yield*/, source_1.compile(function (source) {
                                        var inter = source.addInterface({
                                            name: paramInterfaceName
                                        });
                                        lodash_1.forEach(parameterSchema_1, function (property, name) {
                                            inter.addProperty({
                                                name: name,
                                                type: util_1.transformProperty(property),
                                                hasQuestionToken: !property.required || property.required.length === 0
                                            });
                                        });
                                    })];
                            case 1:
                                paramDefTsContent = _a.sent();
                                tsContent.push(paramDefTsContent);
                                _a.label = 2;
                            case 2:
                                responseType = '';
                                response200Schema = lodash_1.get(request.responses, '200.schema.$ref', null);
                                if (response200Schema) {
                                    responseType = util_1.transformProperty(request.responses[200]);
                                    // 否则可能是response中行内定义的数据结构
                                    // 再单独生成一个type
                                }
                                else {
                                    response200 = lodash_1.get(request.responses, '200', null);
                                    if (response200) {
                                        responseType = lodash_1.upperFirst(functionName) + "Response";
                                        responseTsContent = "type " + responseType + " = " + util_1.transformProperty(response200);
                                        tsContent.push(responseTsContent);
                                    }
                                }
                                return [4 /*yield*/, source_1.compile(function (source) {
                                        var functionData = {
                                            name: functionName,
                                            isExported: true,
                                            statements: "\n            const [ url, option ] = " + interceptor_1.interceptRequest.name + "('" + path_1.join(basePath, util_1.transformPathParameters(String(url))) + "'" + (paramInterfaceName ? ', param' : '') + ")\n            option.method = '" + action + "'\n            return fetch(url, option).then" + (responseType ? '<' + responseType + '>' : '') + "(" + interceptor_1.interceptResponse.name + ")\n          "
                                        };
                                        if (paramInterfaceName) {
                                            functionData.parameters = [
                                                {
                                                    name: 'param',
                                                    type: paramInterfaceName
                                                },
                                            ];
                                        }
                                        if (request.summary || request.description) {
                                            functionData.docs = [
                                                lodash_1.remove([request.summary || '', request.description || ''], function (s) { return !!s; }).join('\n'),
                                            ];
                                        }
                                        source.addFunction(functionData);
                                    })];
                            case 3:
                                functTsContent = _a.sent();
                                tsContent.push(functTsContent);
                                return [2 /*return*/];
                        }
                    });
                };
                _c = [];
                for (_d in path)
                    _c.push(_d);
                _e = 0;
                _f.label = 2;
            case 2:
                if (!(_e < _c.length)) return [3 /*break*/, 5];
                action = _c[_e];
                return [5 /*yield**/, _loop_1(action)];
            case 3:
                _f.sent();
                _f.label = 4;
            case 4:
                _e++;
                return [3 /*break*/, 2];
            case 5:
                _i++;
                return [3 /*break*/, 1];
            case 6:
                dependents = util_1.getAllRef(schema.paths);
                return [4 /*yield*/, source_1.compile(function (source) {
                        // 添加interptor拦截器依赖
                        source.addImportDeclarations([
                            {
                                namedImports: [
                                    {
                                        name: interceptor_1.interceptRequest.name
                                    },
                                    {
                                        name: interceptor_1.interceptResponse.name
                                    },
                                ],
                                moduleSpecifier: './interceptor'
                            },
                        ]);
                        // 是否存在在definitions中没定义的$ref
                        var depententsNotInDefinitions = [];
                        source.addImportDeclarations([
                            {
                                namedImports: Object.keys(dependents).reduce(function (r, $ref) {
                                    if (schema.definitions && $ref in schema.definitions) {
                                        r.push({
                                            name: dependents[$ref]
                                        });
                                    }
                                    else {
                                        depententsNotInDefinitions.push(dependents[$ref]);
                                    }
                                    return r;
                                }, []),
                                moduleSpecifier: './definitions'
                            },
                        ]);
                        // 如果存在在definitions中没定义的$ref
                        // 全都定义成any的别名
                        if (depententsNotInDefinitions.length > 0) {
                            source.addTypeAliases(depententsNotInDefinitions.map(function (def) { return ({
                                name: def,
                                type: 'any'
                            }); }));
                        }
                    })];
            case 7:
                importTsContent = _f.sent();
                tsContent.unshift(importTsContent);
                return [2 /*return*/, tsContent.join('\n')];
        }
    });
}); };
