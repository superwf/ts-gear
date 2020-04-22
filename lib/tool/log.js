"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const chalk_1 = require("chalk");
const { blue, red, yellow } = chalk_1.default.bold;
/** log blue message in console */
function info(...messages) {
    console.log(blue(messages.join('')));
}
exports.info = info;
/** log red message in console */
function error(...messages) {
    console.log(red(messages.join('')));
}
exports.error = error;
/** log yellow message in console */
function warn(...messages) {
    console.log(yellow(messages.join('')));
}
exports.warn = warn;
