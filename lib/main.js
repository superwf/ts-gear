#! /usr/bin/env node
"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const ts_node_1 = require("ts-node");
const tsConfigPaths = require("tsconfig-paths");
const run_1 = require("./run");
const cwd = process.cwd();
const cwdTsconfigPath = path_1.join(cwd, 'tsconfig.json');
const tsConfig = fs_1.existsSync(cwdTsconfigPath) ? JSON.parse(fs_1.readFileSync(cwdTsconfigPath).toString()) : {};
if ((_a = tsConfig.compilerOptions) === null || _a === void 0 ? void 0 : _a.paths) {
    tsConfigPaths.register({
        baseUrl: cwd,
        paths: tsConfig.compilerOptions.paths,
    });
}
ts_node_1.register({
    typeCheck: true,
    compilerOptions: tsConfig.compilerOptions,
});
run_1.run();
