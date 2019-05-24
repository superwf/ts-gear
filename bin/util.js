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
var source_1 = require("./source");
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
    var nonCharatorReg = /[^a-z0-9]/i;
    if (nonCharatorReg.test(name)) {
        return name
            .split(/[^a-z0-9]/i)
            .map(function (n) { return lodash_1.upperFirst(n); })
            .join('');
    }
    return name;
};
/** replace non charator and and return interface name */
exports.getInterfaceName = function (v) {
    return "I" + camelCase(v);
};
/** replace /abc/{id} to /abc/:id */
exports.transformPathParameters = function (v) {
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
};
/** 基础类型或由基础类型构成的数组 */
exports.isPrimitiveType = function (type) {
    return ['number', 'string', 'boolean'].some(function (t) {
        return type === t || type === t + "[]";
    });
};
/** 解析definitions中的title
 * @return [title, 带有泛型格式的title]
 * 例如 ['ReplyVOUser', 'ReplyVO<User>']
 * 例如List转换数组格式 ['ReplyVOListUser', 'ReplyVO<Array<User>>']
 * */
exports.getSafeDefinitionTitle = function (title) {
    if (['number', 'string', 'boolean'].some(function (t) {
        return title === t || title === t + "[]";
    })) {
        return [title, title];
    }
    // 原始类型，非组合类型
    if (/^[a-z\[\]0-9]+$/i.test(title)) {
        return [lodash_1.upperFirst(camelCase(title)), title];
    }
    // 一些可能的类型转换预处理
    // TODO 不完善，之后遇到再添加
    // title = title.replace(/«int»/g, '«number»')
    // title = title.replace(/«Long»/g, '«number»')
    if (/[^a-z0-9]/i.test(title)) {
        var compositeTitle = title.replace(/«/g, '<').replace(/»/g, '>');
        // 将List转换为Array
        if (compositeTitle.includes('List<')) {
            compositeTitle = compositeTitle.replace(/([^a-z])?List/g, '$1Array');
        }
        return [title.replace(/[^a-z\d]/gi, ''), compositeTitle];
    }
    throw new Error(title + " is not valid");
};
/**
 * 从组合类型中获取泛型类型的名称
 * */
exports.getGenericTypeName = function (title) {
    if (title.includes('<')) {
        var result = title.match(/\w+</g);
        if (result) {
            return result.map(function (t) { return t.replace('<', ''); });
        }
    }
    return [];
};
/**
 * 递归处理对象值
 * 比如预先将所有int/Long转换成number
 * */
exports.traverse = function (obj, func, paths) {
    if (!paths) {
        paths = [];
    }
    lodash_1.forOwn(obj, function (val, key) {
        if (Array.isArray(val) && key !== 'required') {
            val.forEach(function (el) {
                exports.traverse(el, func, paths.concat([key]));
            });
            return;
        }
        if (lodash_1.isObject(val)) {
            exports.traverse(val, func, paths.concat([key]));
            return;
        }
        if (!!func) {
            func({ val: val, obj: obj, key: key }, paths);
        }
    });
};
/** return the $refs paths
 * */
exports.getDefinitionRef = function (schema) {
    // let has = false
    var result = [];
    // const refPaths: string[][] = []
    exports.traverse(schema, function (_a, paths) {
        var val = _a.val, obj = _a.obj, key = _a.key;
        if (key === '$ref') {
            result.push({
                type: exports.getSafeDefinitionTitle(val.replace('#/definitions/', ''))[0],
                paths: paths,
                name: paths[1],
                isArray: paths[paths.length - 1] === 'items',
                description: val.description
            });
        }
    });
    return result;
};
/** return true if has $ref
 * */
exports.hasRef = function (schema) {
    // 一旦有$ref，则利用throw中断traverse
    try {
        exports.traverse(schema, function (_a) {
            var val = _a.val, obj = _a.obj, key = _a.key;
            if (key === '$ref') {
                throw new Error('has $ref');
            }
        });
        return false;
    }
    catch (e) {
        return true;
    }
};
/** 在一个项目里有$ref引用了definitins里的Long和Long[]的情况
 * 但definitions里没有Long和Long[]的定义，我认为一定是swagger配置错误了，但java那边说Long是原生类型，框架自动转换过来的。
 * 先这么处理一下
 * 我始终认为$ref里的引用，在definitions中必须有对应的定义，否则应该按throw处理。
 * */
var transform$refName = function ($ref) {
    var name = $ref.replace('#/definitions/', '');
    if (name === 'Long') {
        return 'number';
    }
    if (name === 'Long[]') {
        return 'number[]';
    }
    return name;
};
/** 获取所有$ref的引用
 * 对象key是$ref的名字原始值，例如 #/defintions/name 的 name部分
 * 对象value是 转换成程序可用名称的名字
 * */
exports.getAllRef = function (schema) {
    var refNames = {};
    exports.traverse(schema, function (_a) {
        var val = _a.val, key = _a.key;
        if (key === '$ref' && typeof val === 'string') {
            var refName = exports.getSafeDefinitionTitle(transform$refName(val))[0];
            if (!exports.isPrimitiveType(refName)) {
                refNames[val.replace('#/definitions/', '')] = refName;
            }
        }
    });
    return refNames;
};
/** 将schema转换为ts的类型 */
exports.transformProperty = function (property) {
    var type = property.type, enumValues = property["enum"], items = property.items, schema = property.schema, $ref = property.$ref, oneOf = property.oneOf, anyOf = property.anyOf, allOf = property.allOf, not = property.not;
    if (enumValues) {
        return "'" + enumValues.join("' | '") + "'";
    }
    if ($ref) {
        return exports.getSafeDefinitionTitle(transform$refName($ref))[0];
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
    // 原生类型可以用Exclude处理
    // 其他用any
    if (not) {
        // 说明是原生类型
        if (typeof not === 'string') {
            // json schema里没有symbol，不用放进去
            return "Exclude<number, string, object, boolean, null, undefined, " + not + ">";
        }
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
        // 按array一定有items处理
        case 'array':
            return "Array<" + exports.transformProperty(items) + ">";
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
/** 生产inline的interface结构 */
exports.generatePrimitiveInterface = function (definition, title) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        // const sourceFile = project.createSourceFile(virtualFileName)
        return [2 /*return*/, source_1.compile(function (sourceFile) {
                if (definition.type === 'object') {
                    var inter_1 = sourceFile.addInterface({
                        name: exports.getSafeDefinitionTitle(title)[0]
                    });
                    inter_1.setIsExported(true);
                    lodash_1.forEach(definition.properties, function (property, name) {
                        var p = {
                            name: name,
                            type: exports.transformProperty(property),
                            // initializer: property.default as string,
                            hasQuestionToken: !definition.required || !definition.required.includes(name)
                        };
                        if ('default' in property) {
                            p.initializer = String(property["default"]);
                        }
                        if ('description' in property) {
                            p.docs = [String(property.description)];
                        }
                        inter_1.addProperty(p);
                        // addedProperty.setInitializer(property.default)
                    });
                    if (definition.description) {
                        inter_1.addJsDoc(definition.description);
                    }
                    // 有definition是原始类型的情况吗？
                }
                else {
                    var t = sourceFile.addTypeAlias({
                        name: title,
                        type: exports.transformProperty(definition)
                    });
                    t.setIsExported(true);
                }
            })];
    });
}); };
