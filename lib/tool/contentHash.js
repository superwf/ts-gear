"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentHash = void 0;
const crypto_1 = require("crypto");
exports.contentHash = (content) => {
    return crypto_1.createHash('md5').update(content).digest('hex').toString();
};
