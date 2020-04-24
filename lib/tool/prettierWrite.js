"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const prettier_1 = require("prettier");
/**
 * read from tsg config project prettier config
 * write formatted typescript content
 * */
exports.prettierWrite = (content, destPath, option) => {
    fs_1.writeFileSync(destPath, prettier_1.format(content, {
        ...option,
        parser: 'typescript',
    }));
};
