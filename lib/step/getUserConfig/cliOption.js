"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const constant_1 = require("../../constant");
function collectProjects(value) {
    return value.split(',');
}
/**
 * @remarks collect project names from cli
 * */
exports.getCliOption = () => {
    // eslint-disable-next-line
    // const pkg = require('../../../package.json')
    program
        // .version(pkg.version)
        .usage('tsg or tsg -p projectName')
        .option('-p, --projects <project name>', 'assign project name, more names use comma split, like projectA,projectB', collectProjects)
        .option('-i, --init', `create ${constant_1.configFileName}.ts config file`)
        .option('-c, --config <assign config file>', 'assign config file')
        .parse(process.argv);
    const result = {
        names: [],
        init: Boolean(program.init),
        config: '',
    };
    const names = program.projects;
    if (names) {
        result.names = names;
    }
    if (program.config) {
        result.config = String(program.config).trim();
    }
    // if not delete commander cache
    // program will keep cache and break test
    delete program.projects;
    delete program.init;
    return result;
};
