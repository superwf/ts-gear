"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompilerOptions = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
/**
 * get tsconfig compilerOptions from cwd project
 * if not exist, return empty object
 * */
exports.getCompilerOptions = () => {
    const cwd = process.cwd();
    const cwdTsconfigPath = path_1.join(cwd, 'tsconfig.json');
    const tsConfig = fs_1.existsSync(cwdTsconfigPath) ? JSON.parse(fs_1.readFileSync(cwdTsconfigPath).toString()) : {};
    return (tsConfig.compilerOptions || {});
};
