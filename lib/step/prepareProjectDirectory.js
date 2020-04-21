"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.prepareProjectDirectory = (project) => {
    const cwd = process.cwd();
    const dest = path_1.join(cwd, project.dest, project.name);
    if (!fs_1.existsSync(dest)) {
        fs_1.mkdirSync(dest);
    }
};
