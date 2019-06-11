"use strict";
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
var lodash_1 = require("lodash");
var ts_morph_1 = require("ts-morph");
var source_1 = require("./source");
var util_1 = require("./util");
/** 转换简单原生类型 */
var transformPrimitiveProperty = function (property) {
    var type = property.type, enumValue = property["enum"], items = property.items;
    if (enumValue) {
        return "'" + enumValue.join("' | '") + "'";
    }
    switch (type) {
        case 'string':
            return 'string';
        case 'boolean':
            return 'boolean';
        case 'null':
            return 'null';
        case 'integer':
        case 'number':
            return 'number';
        case 'object':
            return 'any';
        case 'array':
            return transformPrimitiveProperty(items) + "[]";
        default:
            throw new Error("not primitive type: " + type);
    }
};
/** 生成一维property为原始类型的interface
 * */
exports.generatePrimitiveDefinition = function (definition, title) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // const sourceFile = project.createSourceFile(virtualFileName)
        return [2 /*return*/, source_1.compile(function (sourceFile) {
                if (definition.type === 'object') {
                    var klass_1 = sourceFile.addClass({
                        name: util_1.getSafeDefinitionTitle(title)[0]
                    });
                    if (definition.description) {
                        klass_1.addJsDoc(definition.description);
                    }
                    klass_1.setIsExported(true);
                    lodash_1.forEach(definition.properties, function (property, name) {
                        var p = {
                            name: name,
                            type: transformPrimitiveProperty(property),
                            scope: ts_morph_1.Scope.Public,
                            // initializer: property.default as string,
                            hasQuestionToken: !definition.required || !definition.required.includes(name)
                        };
                        // interface不能有初始化的值
                        // 考虑用class代替interface的话可以加上
                        if ('default' in property) {
                            p.initializer = String(property["default"]);
                        }
                        if ('description' in property) {
                            p.docs = [String(property.description)];
                        }
                        klass_1.addProperty(p);
                    });
                    // 有definition是原始类型的情况吗？
                    // 虽然没见过
                    // 如果有的话按别名处理
                }
                else {
                    var t = sourceFile.addTypeAlias({
                        name: title,
                        type: transformPrimitiveProperty(definition)
                    });
                    t.setIsExported(true);
                }
            })];
    });
}); };
/** 将definition的properties分为两组，一组是primitive，另一组是有$ref的类型 */
exports.generateDefinition = function (definition, title) { return __awaiter(_this, void 0, void 0, function () {
    var refResult, refNames_1, primitiveDefinition, primitiveInterface;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                refResult = util_1.getAllRefsInDefinitions(definition);
                if (!(refResult.length > 0)) return [3 /*break*/, 2];
                refNames_1 = refResult.map(function (r) { return r.name; });
                primitiveDefinition = __assign({}, definition, { properties: lodash_1.reduce(definition.properties, function (r, v, k) {
                        if (!refNames_1.includes(k)) {
                            r[k] = v;
                        }
                        return r;
                    }, {}) });
                return [4 /*yield*/, exports.generatePrimitiveDefinition(primitiveDefinition, title)];
            case 1:
                primitiveInterface = _a.sent();
                return [2 /*return*/, source_1.compile(function (sourceFile) {
                        var klass = sourceFile.getClasses()[0];
                        refResult.forEach(function (r) {
                            // console.log(r)
                            var isArray = r.path[r.path.length - 2] === 'items';
                            klass.addProperty({
                                name: r.name,
                                type: isArray ? r.type + "[]" : r.type
                            });
                        });
                    }, primitiveInterface)];
            case 2: return [2 /*return*/, exports.generatePrimitiveDefinition(definition, title)];
        }
    });
}); };
/**
 * 解析整个definitions
 * */
exports.generateDefinitions = function (definitions) { return __awaiter(_this, void 0, void 0, function () {
    var results, _i, _a, name_1, d, result;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                results = [];
                _i = 0, _a = Object.getOwnPropertyNames(definitions);
                _b.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 4];
                name_1 = _a[_i];
                d = definitions[name_1];
                return [4 /*yield*/, exports.generateDefinition(d, name_1)];
            case 2:
                result = _b.sent();
                results.push(result);
                _b.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, results.join('')];
        }
    });
}); };
