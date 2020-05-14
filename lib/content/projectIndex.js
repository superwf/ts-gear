"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectIndex = void 0;
const os_1 = require("os");
/** use a index.ts file to export all */
exports.projectIndex = ["export * from './request'", "export * from './definition'"].join(os_1.EOL);
