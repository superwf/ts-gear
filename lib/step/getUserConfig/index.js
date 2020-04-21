"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const initConfig_1 = require("../../content/initConfig");
const cliOption_1 = require("./cliOption");
/** get user config
 * filter if any cli option
 * return project mapped by name
 * */
exports.getUserConfig = () => {
    const cwd = process.cwd();
    const cliOption = cliOption_1.getCliOption();
    if (cliOption.init) {
        fs_1.writeFileSync(path_1.join(cwd, 'ts-gear.ts'), initConfig_1.initConfig);
        return [];
    }
    const tsGearConfigPath = path_1.join(cwd, 'ts-gear');
    /* eslint-disable */
    const config = require(tsGearConfigPath);
    /* eslint-enable */
    const projects = (config.default ? config.default : config);
    const projectNamesFromCommandLine = cliOption.names;
    if (projectNamesFromCommandLine.length > 0) {
        return projects.filter(project => {
            return projectNamesFromCommandLine.some(name => name === project.name);
        });
    }
    return projects;
};
