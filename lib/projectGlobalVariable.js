"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clearObject_1 = require("./tool/clearObject");
const projectGlobal = {};
exports.getGlobal = (project) => {
    if (!projectGlobal[project.name]) {
        projectGlobal[project.name] = {
            definitionMap: {},
            requestMap: {},
            requestRefSet: new Set(),
        };
    }
    return projectGlobal[project.name];
};
exports.restore = (project) => {
    const g = projectGlobal[project.name];
    clearObject_1.clearObject(g.definitionMap);
    clearObject_1.clearObject(g.requestMap);
    g.requestRefSet.clear();
};
exports.httpMethods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'];
