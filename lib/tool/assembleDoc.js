"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assembleDoc = void 0;
const os_1 = require("os");
/** add many possible properties to doc */
exports.assembleDoc = (schema) => {
    const docs = [];
    if ('description' in schema) {
        docs.push(String(schema.description));
    }
    if ('summary' in schema) {
        docs.push(String(schema.summary));
    }
    if ('format' in schema) {
        docs.push(`format: ${schema.format}`);
    }
    if ('tags' in schema && schema.tags) {
        docs.push(`tags: ${schema.tags.join()}`);
    }
    if ('default' in schema) {
        docs.push(`default: ${schema.default}`);
    }
    if ('produces' in schema) {
        docs.push(`produces: ${schema.produces}`);
    }
    if ('consumes' in schema) {
        docs.push(`consumes: ${schema.consumes}`);
    }
    if ('example' in schema) {
        docs.push(`example: ${schema.example}`);
    }
    if (docs.length === 0) {
        return undefined;
    }
    return [
        docs
            .filter(Boolean)
            /** replace invalid comment charator */
            .map(doc => doc.replace('/', '／'))
            .join(os_1.EOL),
    ];
};
