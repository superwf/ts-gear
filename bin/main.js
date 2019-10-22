#! /usr/bin/env node
"use strict";
exports.__esModule = true;
var ts_node_1 = require("ts-node");
var run_1 = require("./run");
ts_node_1.register({
    typeCheck: true
});
run_1.run();
