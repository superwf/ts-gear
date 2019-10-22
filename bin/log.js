"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var chalk_1 = __importDefault(require("chalk"));
var log = console.log;
var _a = chalk_1["default"].bold, blue = _a.blue, red = _a.red, yellow = _a.yellow;
/** log blue message in console */
function info() {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    log(blue(messages.join('')));
}
exports.info = info;
/** log red message in console */
function error() {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    log(red(messages.join('')));
}
exports.error = error;
/** log yellow message in console */
function warn() {
    var messages = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        messages[_i] = arguments[_i];
    }
    log(yellow(messages.join('')));
}
exports.warn = warn;
