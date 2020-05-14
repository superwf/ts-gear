"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReference = void 0;
exports.isReference = (value) => {
    return '$ref' in value;
};
