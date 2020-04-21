"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const traverse = require("traverse");
/**
 * recursively invoked on every schema node
 * update operation will modify the param data
 * @param the json schema object data
 * @param the function will be called recursively on each schema node
 * */
exports.traverseSchema = (obj, func) => {
    traverse(obj).forEach(function traverseSchemaNode(value) {
        // check circular
        if (this.circular || !this.key || this.key === 'required') {
            return;
        }
        const node = {
            value,
            key: this.key,
            parent: (this.parent || {}).node,
            path: this.path,
        };
        func(node);
    });
};
/** only travers "$ref" */
exports.traverse$Ref = (obj, func) => {
    exports.traverseSchema(obj, ({ key, value }) => {
        if (key === '$ref' && typeof value === 'string') {
            func(value);
        }
    });
};
