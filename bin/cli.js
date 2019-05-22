"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var path_1 = require("path");
var mainFilePath = path_1.resolve(__dirname, '../src/main.ts');
/** 直接使用ts-node调用，带类型校验 */
child_process_1.exec("npx ts-node " + mainFilePath, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});
