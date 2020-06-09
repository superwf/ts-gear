"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requester = void 0;
const os_1 = require("os");
const path = require("path");
const constant_1 = require("../constant");
/** get tsg.config.ts file relative path to import in request
 * */
exports.requester = (project, tsGearConfigPath) => {
    const configFileRelativePath = path.relative(path.join(tsGearConfigPath, project.dest, project.name), tsGearConfigPath);
    return {
        import: `import projects from '${configFileRelativePath}/${constant_1.configFileName}'`,
        code: `const project = projects.find(p => p.name === '${project.name}')!${os_1.EOL}const { requester } = project`,
    };
};
