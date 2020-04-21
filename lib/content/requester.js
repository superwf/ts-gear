"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
const path = require("path");
/** get ts-gear.ts file relative path to import in request
 * */
exports.requester = (project) => {
    const configFileRelativePath = path.relative(path.join(project.dest, project.name), '');
    return {
        import: `import projects from '${configFileRelativePath}/ts-gear'`,
        code: `const project = projects.find(p => p.name === '${project.name}')!${os_1.EOL}const { requester } = project`,
    };
};
