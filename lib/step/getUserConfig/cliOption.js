"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
// import pkg from '../../../package.json'
function collect(value) {
    return value.split(',');
}
/**
 * @remarks collect project names from cli
 * */
exports.getCliOption = () => {
    program
        // .version(pkg.version)
        .usage('tsg or tsg -p projectName')
        .option('-p, --projects <project name>', 'assign project name, more names use comma split, like projectA,projectB', collect)
        .option('-i, --init', 'create tsg.config.ts config file')
        .parse(process.argv);
    const result = {
        names: [],
        init: Boolean(program.init),
    };
    const names = program.projects;
    if (names) {
        result.names = names;
    }
    // if not delete commander cache
    // program will keep cache and break test
    delete program.projects;
    delete program.init;
    return result;
};
