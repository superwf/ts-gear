"use strict";
exports.__esModule = true;
// copy from swagger-ui and modified to ts
var lodash_1 = require("lodash");
// Deeply strips a specific key from an object.
//
// `predicate` can be used to discriminate the stripping further,
// by preserving the key's place in the object based on its value.
function deeplyStripKey(input, keyToStrip, predicate) {
    if (typeof input !== 'object' || Array.isArray(input) || input === null || !keyToStrip) {
        return input;
    }
    var obj = Object.assign({}, input);
    Object.keys(obj).forEach(function (k) {
        if (k === keyToStrip && predicate(obj[k], k)) {
            delete obj[k];
            return;
        }
        obj[k] = deeplyStripKey(obj[k], keyToStrip, predicate);
    });
    return obj;
}
exports.deeplyStripKey = deeplyStripKey;
function objectify(thing) {
    if (!lodash_1.isObject(thing))
        return {};
    return thing;
}
/* eslint-disable @typescript-eslint/camelcase */
var primitives = {
    string: function () { return 'string'; },
    string_email: function () { return 'user@example.com'; },
    'string_date-time': function () { return new Date('2019-09-03').toISOString(); },
    string_date: function () { return new Date('2019-09-03').toISOString().substring(0, 10); },
    string_uuid: function () { return '3fa85f64-5717-4562-b3fc-2c963f66afa6'; },
    string_hostname: function () { return 'example.com'; },
    string_ipv4: function () { return '198.51.100.42'; },
    string_ipv6: function () { return '2001:0db8:5b96:0000:0000:426f:8e17:642a'; },
    number: function () { return 0; },
    number_float: function () { return 0.0; },
    integer: function () { return 0; },
    boolean: function (schema) { return (typeof schema["default"] === 'boolean' ? schema["default"] : true); }
};
var primitive = function (schema) {
    schema = objectify(schema);
    var type = schema.type, format = schema.format;
    var key = type + "_" + format;
    var fn = primitives[key] || primitives[type];
    if (lodash_1.isFunction(fn))
        return fn(schema);
    throw new Error('Unknown Type: ' + schema.type);
};
/** schema的$ref会有互相包含的情况，需要检查循环引用 */
var schemaSet = new Set();
exports.sampleFromSchema = function (schema, definitions) {
    if (schemaSet.has(schema)) {
        return;
    }
    schemaSet.add(schema);
    var type = objectify(schema).type;
    var _a = objectify(schema), example = _a.example, properties = _a.properties, additionalProperties = _a.additionalProperties, items = _a.items, $ref = _a.$ref, schemaSchema = _a.schema;
    if (example !== undefined) {
        return deeplyStripKey(example, '$$ref', function (val) {
            // do a couple of quick sanity tests to ensure the value
            // looks like a $$ref that swagger-client generates.
            return typeof val === 'string' && val.indexOf('#') > -1;
        });
    }
    if (!type) {
        if (properties) {
            type = 'object';
        }
        else if (items) {
            type = 'array';
        }
        else if (definitions && $ref) {
            var definition = definitions[$ref];
            if (definition) {
                return exports.sampleFromSchema(definition, definitions);
            }
            return;
        }
        else if (schemaSchema) {
            return exports.sampleFromSchema(schemaSchema, definitions);
        }
        else {
            return;
        }
    }
    if (type === 'object') {
        var props = objectify(properties);
        var obj = {};
        for (var name_1 in props) {
            if (props[name_1] && props[name_1].deprecated) {
                continue;
            }
            obj[name_1] = exports.sampleFromSchema(props[name_1], definitions);
        }
        if (additionalProperties === true) {
            obj.additionalProp1 = {};
        }
        else if (additionalProperties) {
            var additionalProps = objectify(additionalProperties);
            var additionalPropVal = exports.sampleFromSchema(additionalProps, definitions);
            for (var i = 1; i < 4; i++) {
                obj['additionalProp' + i] = additionalPropVal;
            }
        }
        return obj;
    }
    if (type === 'array') {
        if (Array.isArray(items.anyOf)) {
            return items.anyOf.map(function (i) { return exports.sampleFromSchema(i, definitions); });
        }
        if (Array.isArray(items.oneOf)) {
            return items.oneOf.map(function (i) { return exports.sampleFromSchema(i, definitions); });
        }
        return [exports.sampleFromSchema(items, definitions)];
    }
    if (schema['enum']) {
        if (schema['default'])
            return schema['default'];
        return lodash_1.castArray(schema['enum'])[0];
    }
    if (type === 'file') {
        return;
    }
    return primitive(schema);
};
exports.generateMockData = lodash_1.memoize(exports.sampleFromSchema);
