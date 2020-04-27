"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const path_1 = require("path");
const projectGlobalVariable_1 = require("../projectGlobalVariable");
const prettierWrite_1 = require("../tool/prettierWrite");
const warningComment_1 = require("../content/warningComment");
const projectIndex_1 = require("../content/projectIndex");
const requester_1 = require("../content/requester");
const propertyTypeHelper_1 = require("../content/propertyTypeHelper");
const importAllDefinition_1 = require("./importAllDefinition");
/** gather global typescript content
 * write to project dir */
exports.writeProject = (project) => {
    const { definitionMap, requestMap, enumMap } = projectGlobalVariable_1.getGlobal(project);
    const cwd = process.cwd();
    const dest = path_1.join(cwd, project.dest, project.name);
    const definitionTypeNameSet = new Set();
    const definitionContent = Object.getOwnPropertyNames(definitionMap)
        .map((name) => {
        // prevent repeat definition
        const typeName = definitionMap[name].typeName;
        if (definitionTypeNameSet.has(typeName)) {
            return '';
        }
        definitionTypeNameSet.add(typeName);
        return definitionMap[name].typescriptContent;
    })
        .join(os_1.EOL);
    const enumContent = Object.values(enumMap)
        .map(({ typescriptContent }) => typescriptContent)
        .join(os_1.EOL);
    prettierWrite_1.prettierWrite([warningComment_1.warningComment, enumContent, definitionContent].join(os_1.EOL), path_1.join(dest, 'definition.ts'), project.prettierConfig);
    const requestContent = Object.getOwnPropertyNames(requestMap)
        .map((name) => {
        return requestMap[name].typescriptContent;
    })
        .join(os_1.EOL);
    const requesterResult = requester_1.requester(project);
    prettierWrite_1.prettierWrite([
        warningComment_1.warningComment,
        propertyTypeHelper_1.propertyTypeHelper,
        requesterResult.import,
        importAllDefinition_1.importAllDefinition(project),
        requesterResult.code,
        requestContent,
    ].join(os_1.EOL), path_1.join(dest, 'request.ts'), project.prettierConfig);
    prettierWrite_1.prettierWrite([warningComment_1.warningComment, projectIndex_1.projectIndex].join(os_1.EOL), path_1.join(dest, 'index.ts'), project.prettierConfig);
};
