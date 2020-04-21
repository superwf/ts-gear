"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const { log } = console;
const { blue, red, yellow } = chalk_1.default.bold;
/** log blue message in console */
function info(...messages) {
    log(blue(messages.join('')));
}
exports.info = info;
/** log red message in console */
function error(...messages) {
    log(red(messages.join('')));
}
exports.error = error;
/** log yellow message in console */
function warn(...messages) {
    log(yellow(messages.join('')));
}
exports.warn = warn;
