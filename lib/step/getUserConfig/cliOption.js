"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const lodash_1 = require("lodash");
// import pkg from '../../../package.json'
function collect(value, previous) {
    if (!previous.includes(value)) {
        return [...previous, value];
    }
    return previous;
}
/**
 * @remarks collect project names from cli
 * */
exports.getCliOption = () => {
    program
        // .version(pkg.version)
        .usage('tsg or tsg -p projectName')
        .option('-p, --projects <project name>', 'assign project name', collect, [])
        .option('-i, --init', 'create ts-gear config file')
        .parse(process.argv);
    const result = {
        names: [],
        init: Boolean(program.init),
    };
    const names = program.projects;
    if (names) {
        result.names = lodash_1.castArray(names);
    }
    return result;
};
