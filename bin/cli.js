"use strict";
exports.__esModule = true;
var child_process_1 = require("child_process");
var path_1 = require("path");
var runFilePath = path_1.resolve(__dirname, '../src/run.ts');
// console.log(`npx ts-node ${runFilePath}`)
child_process_1.exec("npx ts-node " + runFilePath, function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});
