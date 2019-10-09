"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
// import { forEach, reduce } from 'lodash'
var ts_morph_1 = require("ts-morph");
var source_1 = require("./source");
var util_1 = require("./util");
/** 生成一维property为原始类型的interface
 * */
exports.transformDefinitionToTsClass = function (definition, title) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, source_1.compile(function (sourceFile) {
                if (definition.type === 'object') {
                    if (definition.properties) {
                        var klass = sourceFile.addClass({
                            isExported: true,
                            name: title
                        });
                        if (definition.description) {
                            klass.addJsDoc(definition.description);
                        }
                        for (var _i = 0, _a = Object.getOwnPropertyNames(definition.properties); _i < _a.length; _i++) {
                            var name_1 = _a[_i];
                            var property = definition.properties[name_1];
                            var klassStructure = {
                                name: name_1,
                                type: util_1.transformProperty(property),
                                scope: ts_morph_1.Scope.Public,
                                // initializer: property.default as string,
                                hasQuestionToken: !definition.required || !definition.required.includes(name_1)
                            };
                            // interface不能有初始化的值
                            // 考虑用class代替interface的话可以加上
                            if (Reflect.has(property, 'default')) {
                                klassStructure.initializer = String(property["default"]);
                            }
                            if (Reflect.has(property, 'description')) {
                                klassStructure.docs = [String(property.description)];
                            }
                            klass.addProperty(klassStructure);
                        }
                        // 没有properties，会有additionalProperties
                    }
                    else if (definition.additionalProperties) {
                        // ts-morph的class没有addIndexSignature，改用interface
                        var interFace = sourceFile.addInterface({
                            isExported: true,
                            name: title
                        });
                        var additionalProperties = definition.additionalProperties;
                        var interfaceStructure = {
                            keyName: 'key',
                            keyType: 'string',
                            returnType: util_1.transformProperty(additionalProperties)
                        };
                        if (Reflect.has(additionalProperties, 'description')) {
                            interfaceStructure.docs = [String(additionalProperties.description)];
                        }
                        interFace.addIndexSignature(interfaceStructure);
                    }
                    else {
                        sourceFile.addTypeAlias({
                            isExported: true,
                            name: title,
                            type: util_1.transformProperty(definition)
                        });
                    }
                }
                else {
                    sourceFile.addTypeAlias({
                        isExported: true,
                        name: title,
                        type: util_1.transformProperty(definition)
                    });
                }
            })
            /**
             * 解析整个definitions
             * */
        ];
    });
}); };
/**
 * 解析整个definitions
 * */
exports.transformDefinitionsToTypescript = function (definitions) { return __awaiter(void 0, void 0, void 0, function () {
    var results, _i, _a, name_2, definition, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                results = [];
                _i = 0, _a = Object.getOwnPropertyNames(definitions);
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                name_2 = _a[_i];
                definition = definitions[name_2];
                return [4 /*yield*/, exports.transformDefinitionToTsClass(definition, name_2)];
            case 2:
                result = _b.sent();
                results.push(result);
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, results.join('\n')];
        }
    });
}); };
/** 将所有$refsNames添加为any的别名 */
exports.transform$RefsNotInDefinitions = function ($refNames) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if ($refNames.length > 0) {
            return [2 /*return*/, source_1.compile(function (sourceFile) {
                    $refNames.forEach(function (name) {
                        sourceFile.addTypeAlias({
                            isExported: true,
                            name: name,
                            type: 'any'
                        });
                    });
                })];
        }
        return [2 /*return*/, ''];
    });
}); };
