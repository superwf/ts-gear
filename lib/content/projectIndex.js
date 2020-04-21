"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os_1 = require("os");
/** use a index.ts file to export all */
exports.projectIndex = ["export * from './request'", "export * from './definitions'"].join(os_1.EOL);
