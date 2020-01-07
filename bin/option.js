"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var commander_1 = __importDefault(require("commander"));
/** 收集项目名称参数 */
function collect(value, previous) {
    if (!previous.includes(value)) {
        return __spreadArrays(previous, [value]);
    }
    return previous;
}
/**
 * @remarks 从命令行获取指定的项目名称
 * @return string[]
 * */
exports.getProjectsFromCommmandLine = function () {
    commander_1["default"]
        .usage('tsg or tsg -p projectName')
        .option('-p, --projects <project name>', 'assign project name', collect, [])
        .parse(process.argv);
    var names = commander_1["default"].projects;
    if (!names) {
        return [];
    }
    if (names && typeof names === 'string') {
        return [names];
    }
    return names;
};
