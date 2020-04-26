"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const interface_1 = require("../interface");
const cleanName_1 = require("./cleanName");
const filterPaths = ['definitions', 'properties', 'parameters', 'responses', 'paths'];
exports.generateEnumName = (path, spec) => {
    path.pop();
    if (path[0] === 'paths') {
        if (path.includes('parameters')) {
            const parameterNode = lodash_1.get(spec, path);
            if (parameterNode.name) {
                const parameterIndex = path.findIndex((p) => p === 'parameters');
                path[parameterIndex] = parameterNode.name;
            }
        }
        path.find((p, index) => {
            if (interface_1.httpMethods.includes(p)) {
                const requestPath = path[index - 1];
                path[index - 1] = p;
                path[index] = requestPath;
                return true;
            }
            return false;
        });
    }
    lodash_1.remove(path, (p) => {
        return filterPaths.includes(p);
    });
    return path.map((p) => lodash_1.upperFirst(cleanName_1.cleanName(p, false))).join('');
};
exports.generateEnumTypescriptContent = (value) => {
    return value
        .map((v) => {
        return typeof v === 'string' ? `'${v}'` : v;
    })
        .join('|');
};
