"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectGlobalVariable_1 = require("../projectGlobalVariable");
exports.importAllDefinition = (project) => {
    const { requestRefSet, requestEnumSet } = projectGlobalVariable_1.getGlobal(project);
    const refSet = new Set();
    [...Array.from(requestEnumSet), ...Array.from(requestRefSet)].forEach((name) => {
        name
            .split(/<|>|,/)
            .filter(Boolean)
            .forEach((n) => {
            refSet.add(n);
        });
    });
    const importNames = Array.from(refSet);
    return `import { ${importNames.join(',')} } from './definition'`;
};
