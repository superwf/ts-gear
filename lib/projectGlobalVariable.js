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
            requestEnumSet: new Set(),
            enumMap: {},
        };
    }
    return projectGlobal[project.name];
};
exports.restore = (project) => {
    const g = projectGlobal[project.name];
    clearObject_1.clearObject(g.definitionMap);
    clearObject_1.clearObject(g.requestMap);
    clearObject_1.clearObject(g.enumMap);
    g.requestRefSet.clear();
    g.requestEnumSet.clear();
};
