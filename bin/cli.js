#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var path_1 = require("path");
var mainFilePath = path_1.resolve(__dirname, '../src/main.ts');
var tsConfigPath = path_1.resolve(__dirname, '../tsconfig.json');
/** 直接使用ts-node调用，带类型校验 */
child_process_1.exec("npx ts-node --project " + tsConfigPath + " " + mainFilePath, function (err, stdout, stderr) {
    // console.log('stdout:', stdout)
    if (stderr) {
        console.error('stderr:', stderr);
    }
});
