"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Open Api 2.0
 * https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md */
const os_1 = require("os");
const lodash_1 = require("lodash");
const assembleDoc_1 = require("./assembleDoc");
const isBodyParameter = (schema) => 'schema' in schema;
/** generate inline property doc */
const generatePropertyDoc = (schema) => {
    const docs = assembleDoc_1.assembleDoc(schema);
    return docs ? `/**${os_1.EOL}${docs.join(os_1.EOL)} */${os_1.EOL}` : '';
};
/** transform schema to typescript type definition
 * @param schema
 * */
const transform = (schema) => {
    if (isBodyParameter(schema)) {
        return transform(schema.schema);
    }
    const { type, enum: enumValues, items, $ref, properties, additionalProperties, required, allOf } = schema;
    if (enumValues) {
        return enumValues;
        // return `'${enumValues.join("' | '")}'`
    }
    if (allOf) {
        return `${allOf.map((prop) => transform(prop)).join(' & ')}`;
    }
    if ($ref) {
        return $ref;
    }
    switch (type) {
        case 'string':
            return 'string';
        case 'boolean':
            return 'boolean';
        case 'file':
            return 'File';
        case 'integer':
        case 'number':
            return 'number';
        case 'array':
            if (Array.isArray(items)) {
                return `Array<${items.map((item) => transform(item)).join(' | ')}>`;
            }
            if (!items) {
                return `Array<any>`;
            }
            return `Array<${transform(items)}>`;
        case 'object': {
            if (!properties && !additionalProperties) {
                return 'any';
            }
            let objectContent = '';
            if (properties) {
                objectContent = lodash_1.map(properties, (prop, name) => {
                    const questionToken = required && required.includes(name) ? '' : '?';
                    return `${generatePropertyDoc(prop)}'${name}'${questionToken}: ${transform(prop)}`;
                }).join(os_1.EOL);
            }
            if (!additionalProperties) {
                return `{${os_1.EOL}${objectContent}${os_1.EOL}}`;
            }
            let additionalProps = '';
            additionalProps = `${generatePropertyDoc(schema)}[propertyName: string]: ${additionalProperties === true ? 'any' : transform(additionalProperties)}`;
            if (objectContent) {
                return `{${os_1.EOL}${objectContent}${os_1.EOL}} & {${os_1.EOL}${additionalProps}${os_1.EOL}}`;
            }
            return `{${os_1.EOL}${additionalProps}${os_1.EOL}}`;
        }
        default:
            return 'any';
    }
};
exports.schemaToTypescript = transform;
