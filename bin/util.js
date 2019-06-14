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
var lodash_1 = require("lodash");
var path_1 = require("path");
var translation_js_1 = require("translation.js");
var traverse = require("traverse");
/** 当前项目的根路径，调用其他文件都以该路径为基准 */
exports.tsGearRoot = path_1.resolve(__dirname, '../');
/**
 * lodash的camelCase在处理有非字符存在的时候的不一致行为，
 * 例如 PageVO«CisSkuListVO» => PageVOCisSkuListVO
 * 而本身已经是驼峰格式的名字会转换为尾字母小写
 * 例如 PageVOCisSkuListVO => PageVoCisSkuListVo
 * 形成不一致的命名
 * 这个自定义的camelCase统一该行为
 *  */
var camelCase = function (name) {
    var invalidVariableCharatorReg = /[^a-z0-9]/i;
    if (invalidVariableCharatorReg.test(name)) {
        return name
            .split(/[^a-z0-9]/i)
            .map(function (n) { return lodash_1.upperFirst(n); })
            .join('');
    }
    return lodash_1.upperFirst(name);
};
/** transform /abc/{id} to /abc/:id */
exports.transformPathParameters = function (v) {
    if (v.includes('{')) {
        return v
            .split('/')
            .map(function (s) {
            var reg = /[{}]/g;
            if (reg.test(s)) {
                return ":" + s.replace(reg, '');
            }
            return s;
        })
            .join('/');
    }
    return v;
};
/** 初始化整个schema
 * 针对所有definitions的key，与所有$ref
 * 放在traverseSchema中运行
 * * 翻译
 * * 去空格与不能作为变量名的非法字符
 * * 首字母大写
 * */
exports.initializeSchema = function (schema) { return __awaiter(_this, void 0, void 0, function () {
    var cnReg, $refsNotInDefinitions, $refsInPaths, cnWords, definitions, cnMapToEn, cnEnPairs, nameConfictMap;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                cnReg = /[\u4e00-\u9fa5]/;
                $refsNotInDefinitions = new Set();
                $refsInPaths = new Set();
                cnWords = [];
                definitions = schema.definitions;
                exports.traverseSchema(schema, function (_a) {
                    var value = _a.value, parent = _a.parent, key = _a.key, path = _a.path;
                    return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_b) {
                            if (key === '$ref' && typeof value === 'string') {
                                value = exports.trimDefinitionPrefix(value);
                                // 将所有#/definitions/前缀去掉，之后就不用再处理了
                                parent.$ref = value;
                                if (cnReg.test(value)) {
                                    cnWords.push(value);
                                }
                            }
                            return [2 /*return*/];
                        });
                    });
                });
                Object.getOwnPropertyNames(definitions).forEach(function (key) {
                    if (cnReg.test(key)) {
                        cnWords.push(key);
                    }
                });
                cnWords = lodash_1.uniq(cnWords);
                cnMapToEn = {};
                if (!cnWords) return [3 /*break*/, 2];
                return [4 /*yield*/, Promise.all(cnWords.map(function (word, key) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = [cnWords[key]];
                                    return [4 /*yield*/, exports.translateAsync(word)];
                                case 1: return [2 /*return*/, _a.concat([_b.sent()])];
                            }
                        });
                    }); }))];
            case 1:
                cnEnPairs = _a.sent();
                cnMapToEn = lodash_1.fromPairs(cnEnPairs);
                return [3 /*break*/, 3];
            case 2:
                cnMapToEn = {};
                _a.label = 3;
            case 3:
                nameConfictMap = {};
                // 再次通过两轮循环将$ref与definitions的key替换成中文
                Object.getOwnPropertyNames(definitions).forEach(function (key) {
                    var newKey = Reflect.has(cnMapToEn, key)
                        ? camelCase(cnMapToEn[key])
                        : camelCase(key);
                    if (newKey !== key) {
                        var uniqNewKey = exports.getUniqName(newKey, function (name) {
                            return Reflect.has(definitions, name);
                        });
                        if (uniqNewKey !== newKey) {
                            nameConfictMap[newKey] = uniqNewKey;
                        }
                        definitions[uniqNewKey] = definitions[key];
                        Reflect.deleteProperty(definitions, key);
                    }
                });
                exports.traverseSchema(schema, function (_a) {
                    var value = _a.value, parent = _a.parent, key = _a.key, path = _a.path;
                    return __awaiter(_this, void 0, void 0, function () {
                        var newKey;
                        return __generator(this, function (_b) {
                            if (key === '$ref' && typeof value === 'string') {
                                newKey = Reflect.has(cnMapToEn, value)
                                    ? camelCase(cnMapToEn[value])
                                    : camelCase(value);
                                if (newKey !== value) {
                                    if (Reflect.has(nameConfictMap, newKey)) {
                                        newKey = nameConfictMap[newKey];
                                    }
                                    parent.$ref = newKey;
                                }
                                if (!Reflect.has(definitions, parent.$ref)) {
                                    $refsNotInDefinitions.add(parent.$ref);
                                }
                                if (path[0] === 'paths') {
                                    $refsInPaths.add(parent.$ref);
                                }
                            }
                            return [2 /*return*/];
                        });
                    });
                });
                return [2 /*return*/, {
                        $refsNotInDefinitions: Array.from($refsNotInDefinitions),
                        $refsInPaths: Array.from($refsInPaths)
                    }];
        }
    });
}); };
/**
 * 递归处理对象值
 * 主要用来处理swagger schema中的paths与definitions
 * @param {object} 对象，一般为json schema
 * @param {funnction} 在递归中处理每个节点的函数
 * */
exports.traverseSchema = function (obj, func) {
    traverse(obj).forEach(function (value) {
        // schema是从json来的应该没有circular
        // 既然可以检查就还是校验一下
        if (this.circular || !this.key || this.key === 'required') {
            return;
        }
        var node = {
            value: value,
            key: this.key,
            parent: (this.parent || {}).node,
            path: this.path
        };
        func(node);
    });
};
/**
 * 返回$ref里的去掉`#/definitions/`部分剩下的字符串
 * */
exports.trimDefinitionPrefix = function ($ref) {
    return $ref.replace('#/definitions/', '');
};
/** 将schema转换为ts的类型 */
exports.transformProperty = function (property) {
    var type = property.type, enumValues = property["enum"], items = property.items, schema = property.schema, $ref = property.$ref, oneOf = property.oneOf, anyOf = property.anyOf, allOf = property.allOf, not = property.not;
    if (enumValues) {
        return "'" + enumValues.join("' | '") + "'";
    }
    if ($ref) {
        return $ref;
    }
    if (schema) {
        return exports.transformProperty(schema);
    }
    // 没见过后端真的用过这几个数据类型
    // 参照https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/ 例子先处理一下
    // oneOf, anyOf, allOf对应的应该是数组，每个成员有$ref
    // TODO 处理discriminator的情况
    if (oneOf) {
        if (Array.isArray(property.oneOf)) {
            return property.oneOf.map(function (prop) { return exports.transformProperty(prop); }).join(' | ');
        }
        return 'any';
    }
    // 拥有任何一个对象中的任何一个属性即可
    if (anyOf) {
        if (Array.isArray(property.oneOf)) {
            return "Partial<" + property.oneOf
                .map(function (prop) { return exports.transformProperty(prop); })
                .join(' & ') + ">";
        }
        return 'any';
    }
    // 必须拥有所有对象属性的并集
    if (allOf) {
        if (Array.isArray(property.oneOf)) {
            return "Required<" + property.oneOf
                .map(function (prop) { return exports.transformProperty(prop); })
                .join(' & ') + ">";
        }
        return 'any';
    }
    // 这个做不到覆盖所有情况，用any，更省心
    if (not) {
        return "any";
    }
    switch (type) {
        case 'string':
            return 'string';
        case 'boolean':
            return 'boolean';
        case 'file':
            return 'File';
        case 'null':
            return 'null';
        case 'integer':
        case 'number':
            return 'number';
        case 'array':
            // array可以没有items，但在同级有$ref
            if ($ref) {
                return $ref + "[]";
            }
            return exports.transformProperty(items) + "[]";
        case 'object':
            var properties = property.properties, additionalProperties = property.additionalProperties, required_1 = property.required;
            if (properties) {
                var obj = lodash_1.map(properties, function (prop, name) {
                    var optionalMark = required_1 && required_1.includes(name) ? '' : '?';
                    return "" + name + optionalMark + ": " + exports.transformProperty(prop);
                }).join('\n');
                var additionalProps = '';
                if (additionalProperties) {
                    if (additionalProperties === true) {
                        additionalProps = "\n[k: string]: any";
                    }
                    else {
                        additionalProps = "\n[k: string]: " + exports.transformProperty(additionalProperties);
                    }
                }
                return "{\n" + obj + additionalProps + "\n}";
            }
            return 'any';
        default:
            throw new Error("not valid json schema type: " + type);
    }
};
var translateEngines = [translation_js_1.youdao, translation_js_1.baidu, translation_js_1.google];
/** 将一些definitinos与$ref中的中文翻印成可作为变量名的英文
 * 使用memoize避免重复翻译
 * */
exports.translateAsync = lodash_1.memoize(function (text, engineIndex) {
    if (engineIndex === void 0) { engineIndex = 0; }
    return __awaiter(_this, void 0, void 0, function () {
        var index, res, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (engineIndex >= translateEngines.length) {
                        throw new Error('translate error, all translate engine can not access');
                    }
                    index = engineIndex;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, translateEngines[index].translate(text)];
                case 2:
                    res = _a.sent();
                    return [2 /*return*/, res.result[0]
                            .split(' ')
                            .map(lodash_1.upperFirst)
                            .join('')
                        // return enKey;
                    ];
                case 3:
                    err_1 = _a.sent();
                    return [2 /*return*/, exports.translateAsync(text, index + 1)];
                case 4: return [2 /*return*/];
            }
        });
    });
});
/** 生成唯一的名字
 * 如果已经存在则名称后面的数字累加
 * 搭配翻译功能用，因为翻译完的英文很可能重复
 * */
exports.getUniqName = function (text, exist, accumulator) {
    if (!accumulator) {
        if (!exist(text)) {
            return text;
        }
        accumulator = 1;
    }
    else {
        var newText = "" + text + accumulator;
        if (!exist(newText)) {
            return newText;
        }
        accumulator += 1;
    }
    return exports.getUniqName(text, exist, accumulator);
};
