"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCache = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const contentHash_1 = require("../tool/contentHash");
exports.checkCache = (project, tsGearConfigPath, spec) => {
    const dest = path_1.join(tsGearConfigPath, project.dest, project.name);
    const cacheFile = path_1.join(dest, '.cache');
    const hash = contentHash_1.contentHash(JSON.stringify([project, spec]));
    if (!fs_1.existsSync(cacheFile)) {
        fs_1.writeFileSync(cacheFile, hash);
        return false;
    }
    const cacheContent = fs_1.readFileSync(cacheFile, { encoding: 'utf8' });
    if (cacheContent === hash) {
        return true;
    }
    fs_1.writeFileSync(cacheFile, hash);
    return false;
};
