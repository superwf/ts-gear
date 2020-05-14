"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareProjectDirectory = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const mkdirp_1 = require("mkdirp");
exports.prepareProjectDirectory = (project, tsGearConfigPath) => {
    const dest = path_1.join(tsGearConfigPath, project.dest, project.name);
    if (!fs_1.existsSync(dest)) {
        mkdirp_1.sync(dest);
    }
};
