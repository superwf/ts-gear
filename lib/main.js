#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_node_1 = require("ts-node");
const run_1 = require("./run");
ts_node_1.register({
    typeCheck: true,
    compilerOptions: {
        module: 'commonjs',
    },
});
run_1.run();
