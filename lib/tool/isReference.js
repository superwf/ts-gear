"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReference = (value) => {
    return '$ref' in value;
};
