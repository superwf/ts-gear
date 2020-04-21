"use strict";
/** copy from swagger-ui https://github.com/swagger-api/swagger-ui/blob/master/src/core/plugins/samples/fn.js
 * modify js to ts */
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
// Deeply strips a specific key from an object.
//
// `predicate` can be used to discriminate the stripping further,
// by preserving the key's place in the object based on its value.
function deeplyStripKey(input, keyToStrip, predicate) {
    if (typeof input !== 'object' || Array.isArray(input) || input === null || !keyToStrip) {
        return input;
    }
    const obj = { ...input };
    Object.keys(obj).forEach(k => {
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
const primitives = {
    string: () => 'string',
    string_email: () => 'user@example.com',
    'string_date-time': () => new Date('2019-09-03').toISOString(),
    string_date: () => new Date('2019-09-03').toISOString().substring(0, 10),
    string_uuid: () => '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    string_hostname: () => 'example.com',
    string_ipv4: () => '198.51.100.42',
    string_ipv6: () => '2001:0db8:5b96:0000:0000:426f:8e17:642a',
    number: () => 0,
    number_float: () => 0.0,
    integer: () => 0,
    boolean: (schema) => (typeof schema.default === 'boolean' ? schema.default : true),
};
const primitive = (schema) => {
    schema = objectify(schema);
    const { type, format } = schema;
    const key = `${type}_${format}`;
    const fn = primitives[key] || primitives[type];
    if (lodash_1.isFunction(fn))
        return fn(schema);
    throw new Error(`Unknown Type: ${schema.type}`);
};
/**
 * prevent schema circle reference
 * */
const schemaSet = new Set();
exports.sampleFromSchema = (schema, definitions) => {
    if (schemaSet.has(schema)) {
        return '';
    }
    schemaSet.add(schema);
    let { type } = objectify(schema);
    const { example, properties, additionalProperties, items, $ref, schema: schemaSchema } = objectify(schema);
    if (example !== undefined) {
        const r = deeplyStripKey(example, '$$ref', (val) => {
            // do a couple of quick sanity tests to ensure the value
            // looks like a $$ref that swagger-client generates.
            return typeof val === 'string' && val.indexOf('#') > -1;
        });
        return r;
    }
    if (!type) {
        if (properties) {
            type = 'object';
        }
        else if (items) {
            type = 'array';
        }
        else if ($ref) {
            const definitionSchema = definitions[$ref] && definitions[$ref].schema;
            if (definitionSchema) {
                return exports.sampleFromSchema(definitionSchema, definitions);
            }
            return '';
        }
        else if (schemaSchema) {
            return exports.sampleFromSchema(schemaSchema, definitions);
        }
        else {
            return '';
        }
    }
    if (type === 'object') {
        const props = objectify(properties);
        const obj = {};
        Object.getOwnPropertyNames(props).forEach(name => {
            if (!(props[name] && props[name].deprecated)) {
                obj[name] = exports.sampleFromSchema(props[name], definitions);
            }
        });
        if (additionalProperties === true) {
            obj.additionalProp1 = {};
        }
        else if (additionalProperties) {
            const additionalProps = objectify(additionalProperties);
            const additionalPropVal = exports.sampleFromSchema(additionalProps, definitions);
            for (let i = 1; i < 4; i += 1) {
                obj[`additionalProp${i}`] = additionalPropVal;
            }
        }
        return obj;
    }
    if (type === 'array') {
        if (Array.isArray(items.anyOf)) {
            return items.anyOf.map((i) => exports.sampleFromSchema(i, definitions));
        }
        if (Array.isArray(items.oneOf)) {
            return items.oneOf.map((i) => exports.sampleFromSchema(i, definitions));
        }
        return [exports.sampleFromSchema(items, definitions)];
    }
    if (schema.enum) {
        if (schema.default) {
            return schema.default;
        }
        return lodash_1.castArray(schema.enum)[0];
    }
    if (type === 'file') {
        return '';
    }
    return primitive(schema);
};
exports.generateMockData = lodash_1.memoize((request, definitionMap) => {
    schemaSet.clear();
    if (request.responses) {
        const schema = lodash_1.find(request.responses, (v, k) => k === 'default' || k.startsWith('2'));
        if (schema) {
            return exports.sampleFromSchema(schema, definitionMap);
        }
    }
    return '';
});
