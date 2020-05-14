"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserConfig = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const prompts = require("prompts");
const constant_1 = require("../../constant");
const initConfig_1 = require("../../content/initConfig");
const log_1 = require("../../tool/log");
const cliOption_1 = require("./cliOption");
/** get user config
 * filter if any cli option
 * */
exports.getUserConfig = async () => {
    const cwd = process.cwd();
    const cliOption = cliOption_1.getCliOption();
    const configFilePath = path_1.join(cwd, 'src', `${constant_1.configFileName}.ts`);
    if (cliOption.init) {
        if (fs_1.existsSync(configFilePath)) {
            const { overwrite } = await prompts({
                type: 'confirm',
                name: 'overwrite',
                message: `${configFilePath} already exist, overwrite?`,
                initial: true,
            });
            if (overwrite) {
                fs_1.writeFileSync(configFilePath, initConfig_1.initConfig);
            }
        }
        else {
            fs_1.writeFileSync(configFilePath, initConfig_1.initConfig);
        }
        return {
            projects: [],
            tsGearConfigPath: '',
        };
    }
    const tsGearConfigPath = path_1.join(cwd, cliOption.config || path_1.join('src', constant_1.configFileName));
    /* eslint-disable */
    const config = require(tsGearConfigPath);
    /* eslint-enable */
    let projects = (config.default ? config.default : config);
    const projectNamesFromCommandLine = cliOption.names;
    if (projectNamesFromCommandLine.length > 0) {
        projects = projects.filter((project) => {
            return projectNamesFromCommandLine.some((name) => name === project.name);
        });
        if (projects.length === 0) {
            log_1.warn(`your input names "${cliOption.names.join(', ')}" match 0 projects, checkout and retry.`);
        }
    }
    return {
        tsGearConfigPath: path_1.dirname(tsGearConfigPath),
        projects,
    };
};
