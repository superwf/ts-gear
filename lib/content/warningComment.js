"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
exports.warningComment = [
    '/* eslint-disable */',
    '/* tslint-disable */',
    '/** Do not modify this file manually.',
    'its content will be overwriten next time execute the `tsg` command. */',
].join(os_1.EOL);
