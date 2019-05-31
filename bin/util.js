"use strict";
exports.__esModule = true;
var lodash_1 = require("lodash");
var path_1 = require("path");
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
/** 收集所有$ref
 * */
exports.getDefinitionRef = function (schema) {
    // let has = false
    var result = [];
    exports.traverseSchema(schema, function (_a) {
        var value = _a.value, parent = _a.parent, key = _a.key, path = _a.path;
        if (key === '$ref') {
            // console.log(key, path, path[path.length - 2] === 'items')
            result.push({
                type: exports.getSafeDefinitionTitle(value.replace('#/definitions/', ''))[0],
                path: path,
                name: path[1],
                // isArray: path[path.length - 2] === 'items',
                description: value.description
            });
        }
    });
    return result;
};
/** ~~在一个项目里有$REF引用了DEFINITINS里的lONG和lONG[]的情况
 * 但definitions里没有Long和Long[]的定义，我认为一定是swagger配置错误了，但java那边说Long是原生类型，框架自动转换过来的。
 * 先这么处理一下~~
 * 后来经过多次交流，确认Long是后端swagger配置错了，不再对Long做处理
 *
 * $ref里的引用，在definitions中必须有对应的定义，否则应该按throw处理。
 * */
var transform$refName = function ($ref) { return $ref.replace('#/definitions/', ''); };
/** 获取所有$ref的引用
 * 返回对象
 * key是$ref的名字原始值，例如 #/defintions/name 的 name部分
 * value是 转换成程序可用名称的名字
 * */
exports.getAllRef = function (schema) {
    var refNames = {};
    exports.traverseSchema(schema, function (_a) {
        var value = _a.value, key = _a.key;
        if (key === '$ref' && typeof value === 'string') {
            var keyInDefinitions = transform$refName(value);
            var refName = exports.getSafeDefinitionTitle(transform$refName(value))[0];
            refNames[keyInDefinitions] = refName;
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
