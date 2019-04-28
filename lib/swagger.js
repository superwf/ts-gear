"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const standard_1 = require("./standard");
const _ = require("lodash");
const utils_1 = require("./utils");
const compiler_1 = require("./compiler");
const debugLog = require("./debugLog");
var SwaggerType;
(function (SwaggerType) {
    SwaggerType["integer"] = "integer";
    SwaggerType["string"] = "string";
    SwaggerType["file"] = "string";
    SwaggerType["array"] = "array";
    SwaggerType["number"] = "number";
    SwaggerType["boolean"] = "boolean";
    SwaggerType["object"] = "object";
})(SwaggerType = exports.SwaggerType || (exports.SwaggerType = {}));
class SwaggerProperty {
    constructor() {
        this.enum = [];
        this.items = null;
        this.$ref = '';
        this.description = '';
    }
}
exports.SwaggerProperty = SwaggerProperty;
class SwaggerParameter {
    constructor() {
        this.name = '';
        this.description = '';
        this.items = null;
    }
}
exports.SwaggerParameter = SwaggerParameter;
class Schema {
    static swaggerSchema2StandardDataType(schema, templateName = '', originName = '', isResponse = false) {
        const { items, $ref, type } = schema;
        let primitiveType = schema.type;
        if (type === 'array') {
            primitiveType === _.get(items, 'type', '');
            if (primitiveType === 'array') {
                primitiveType = '';
            }
        }
        if (primitiveType === 'object') {
            primitiveType = '';
        }
        if (primitiveType === 'integer') {
            primitiveType = 'number';
        }
        if (primitiveType === 'file') {
            primitiveType = 'File';
        }
        let reference = compiler_1.generateTemplate($ref || _.get(items, '$ref', ''), originName);
        if (reference === 'Model') {
            reference = '';
        }
        if (reference === 'Array') {
            primitiveType = 'any[]';
            reference = '';
        }
        let isTemplateRef = false;
        const reg = new RegExp(`defs\\.${originName}\\.`, 'g');
        const templateCompareName = reference.replace(reg, 'defs.') || primitiveType;
        if ((templateCompareName && templateCompareName === templateName) ||
            templateCompareName === 'defs.' + templateName) {
            reference = 'T0';
            isTemplateRef = true;
        }
        else if (reference) {
            if (originName && !reference.includes(originName)) {
                reference = 'defs.' + originName + '.' + reference;
            }
            else if (isResponse && !reference.startsWith('defs.')) {
                reference = 'defs.' + reference;
            }
        }
        return new standard_1.DataType({
            isArr: type === 'array',
            enum: fixSwaggerEnum(schema.enum),
            primitiveType: primitiveType,
            reference,
            isTemplateRef
        });
    }
}
exports.Schema = Schema;
function fixSwaggerEnum(enumStrs) {
    if (!enumStrs) {
        return enumStrs;
    }
    let enums = enumStrs;
    enumStrs.forEach(str => {
        if (!Number.isNaN(Number(str))) {
            enums.push(Number(str));
        }
    });
    return enums.filter(str => {
        return String(str).match(/^[0-9a-zA-Z\_\-\$]+$/);
    });
}
exports.fixSwaggerEnum = fixSwaggerEnum;
class SwaggerInterface {
    constructor() {
        this.consumes = [];
        this.parameters = [];
        this.summary = '';
        this.tags = [];
    }
    static transformSwaggerInterface2Standard(inter, usingOperationId, samePath, originName) {
        let name = utils_1.getIdentifierFromOperatorId(inter.operationId);
        if (!usingOperationId) {
            name = utils_1.getIdentifierFromUrl(inter.path, inter.method, samePath);
        }
        const responseSchema = _.get(inter, 'responses.200.schema', {});
        const response = Schema.swaggerSchema2StandardDataType(responseSchema, '', originName, true);
        const parameters = (inter.parameters || []).map(param => {
            const { description, items, name, type, schema = {}, required } = param;
            return new standard_1.Property({
                in: param.in,
                description,
                name,
                required,
                dataType: Schema.swaggerSchema2StandardDataType({
                    enum: param.enum,
                    items,
                    type,
                    $ref: _.get(schema, '$ref')
                }, '', originName, param.in === 'body')
            });
        });
        const standardInterface = new standard_1.Interface({
            consumes: inter.consumes,
            description: inter.summary,
            name,
            method: inter.method,
            path: inter.path,
            response,
            parameters: _.unionBy(parameters, 'name')
        });
        return standardInterface;
    }
}
exports.SwaggerInterface = SwaggerInterface;
class SwaggerDataSource {
}
exports.SwaggerDataSource = SwaggerDataSource;
function transformSwaggerData2Standard(swagger, usingOperationId = true, originName = '') {
    const allSwaggerInterfaces = [];
    _.forEach(swagger.paths, (methodInters, path) => {
        _.forEach(methodInters, (inter, method) => {
            inter.path = path;
            inter.method = method;
            allSwaggerInterfaces.push(inter);
        });
    });
    const mods = swagger.tags
        .filter(tag => {
        return true;
    })
        .map(tag => {
        const modInterfaces = allSwaggerInterfaces.filter(inter => {
            return (inter.tags.includes(tag.name) ||
                inter.tags.includes(tag.name.toLowerCase()) ||
                inter.tags.includes(tag.description.toLowerCase()) ||
                inter.tags.includes(utils_1.toDashCase(tag.description)));
        });
        const samePath = utils_1.getMaxSamePath(modInterfaces.map(inter => inter.path.slice(1)));
        const standardInterfaces = modInterfaces.map(inter => {
            return SwaggerInterface.transformSwaggerInterface2Standard(inter, usingOperationId, samePath, originName);
        });
        if (utils_1.hasChinese(tag.name)) {
            return new standard_1.Mod({
                description: tag.name,
                interfaces: _.uniqBy(standardInterfaces, 'name'),
                name: utils_1.transformCamelCase(tag.description)
            });
        }
        else {
            return new standard_1.Mod({
                description: tag.description,
                interfaces: _.uniqBy(standardInterfaces, 'name'),
                name: utils_1.transformCamelCase(tag.name)
            });
        }
    })
        .filter(mod => {
        return mod.interfaces.length;
    });
    utils_1.transformModsName(mods);
    const baseClasses = _.map(swagger.definitions, (def, defName) => {
        const templateName = compiler_1.findDefinition(defName);
        defName = compiler_1.generateTemplateDef(defName);
        const properties = _.map(def.properties, (prop, propName) => {
            const { $ref, description, name, type, required, items } = prop;
            let primitiveType = type;
            const dataType = Schema.swaggerSchema2StandardDataType({
                $ref,
                enum: prop.enum,
                items,
                type
            }, templateName, originName);
            return new standard_1.Property({
                dataType,
                name: propName,
                description,
                required
            });
        });
        if (defName.replace(/(.+)<.+/, '$1') === 'Map') {
            return null;
        }
        return new standard_1.BaseClass({
            description: def.description,
            name: defName,
            properties
        });
    }).filter(id => id);
    baseClasses.sort((pre, next) => {
        if (pre.justName === next.justName) {
            return pre.name.length > next.name.length ? -1 : 1;
        }
        return next.justName > pre.justName ? 1 : -1;
    });
    mods.forEach(mod => {
        mod.interfaces.forEach(inter => {
            inter.parameters = inter.parameters.map(param => {
                if (param.in === 'body') {
                    const dataType = param.dataType.reference;
                    let ref = dataType;
                    if (ref.includes('«')) {
                        ref = ref.slice(0, ref.indexOf('«'));
                    }
                    if (ref.includes('<')) {
                        ref = ref.slice(0, ref.indexOf('<'));
                    }
                    if (ref.includes('defs.')) {
                        ref = ref.slice(ref.lastIndexOf('.') + 1);
                    }
                    if (ref &&
                        !baseClasses.find(base => base.name === ref || base.justName === ref)) {
                        debugLog.warn(`baseClasses not contains ${dataType} in ${param.name} param of ${inter.name} interface `);
                        return Object.assign({}, param, { dataType: Object.assign({}, param.dataType, { reference: '' }) });
                    }
                }
                return param;
            });
        });
    });
    return new standard_1.StandardDataSource({
        baseClasses: _.uniqBy(baseClasses, base => base.justName),
        mods,
        name: swagger.name
    });
}
exports.transformSwaggerData2Standard = transformSwaggerData2Standard;
//# sourceMappingURL=swagger.js.map