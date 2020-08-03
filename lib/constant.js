"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.targetFileNames = exports.defaultShouldMockResponseStatement = exports.configFileName = void 0;
exports.configFileName = 'tsg.config';
exports.defaultShouldMockResponseStatement = 'process.env.NODE_ENV === "test"';
exports.targetFileNames = {
    index: 'index.ts',
    definition: 'definition.ts',
    request: 'request.ts',
};
