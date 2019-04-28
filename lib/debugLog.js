"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk = require("chalk");
const log = console.log;
function bindInfo(onLog) {
    return (message) => {
        onLog && onLog(message);
        info(message);
    };
}
exports.bindInfo = bindInfo;
function info(info) {
    log(chalk.bold.blue(info));
}
exports.info = info;
function error(info) {
    log(chalk.bold.red(info));
}
exports.error = error;
function warn(info) {
    log(chalk.bold.yellow(info));
}
exports.warn = warn;
//# sourceMappingURL=debugLog.js.map