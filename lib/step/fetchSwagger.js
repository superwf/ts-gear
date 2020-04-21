"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fetch = require("isomorphic-fetch");
const log_1 = require("../tool/log");
/**
 * fetch remote spec if url starts with "http"
 * or use "require" read local file.
 * when remote swagger doc has auth, the best way is download the spec to local, and assign the local file path.
 * the second param ref is https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * */
exports.fetchSwagger = async (project) => {
    const url = project.source;
    if (url.startsWith('http')) {
        const verbose = `project: ${project.name} url: ${url}`;
        log_1.info(`start fetching ${verbose}`);
        const res = await fetch(url, project.fetchSwaggerDocOption);
        const swaggerSchema = await res.json();
        log_1.info(`got swagger sped from ${verbose}}`);
        return swaggerSchema;
    }
    const cwd = process.cwd();
    const source = path_1.join(cwd, project.source);
    // use require for json file
    if (!source.endsWith('.json')) {
        const message = 'user config file should ends with `.json`';
        log_1.error(message);
        throw new Error(message);
    }
    /* eslint-disable-next-line global-require,import/no-dynamic-require */
    return require(source);
};
