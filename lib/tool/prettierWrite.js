"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const prettier_1 = require("prettier");
/** read your current project prettier config
 * write formatted typescript content
 * */
exports.prettierWrite = (content, destPath) => {
    const config = {};
    fs_1.writeFileSync(destPath, prettier_1.format(content, {
        // ...(defaultPrettierConfig as Options),
        ...config,
        parser: 'typescript',
    }));
};
