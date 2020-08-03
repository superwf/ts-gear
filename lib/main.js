#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_node_1 = require("ts-node");
const tsConfigPaths = require("tsconfig-paths");
const getCompilerOptions_1 = require("./tool/getCompilerOptions");
const run_1 = require("./run");
const cwd = process.cwd();
const compilerOptions = getCompilerOptions_1.getCompilerOptions();
if (compilerOptions.paths) {
    tsConfigPaths.register({
        baseUrl: cwd,
        paths: compilerOptions.paths,
    });
}
ts_node_1.register({
    typeCheck: true,
    compilerOptions,
});
run_1.run();
