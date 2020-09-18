"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefinition = void 0;
/**
 * return definitions
 * */
exports.getDefinition = (spec) => {
    var _a;
    if ('components' in spec) {
        const v3spec = spec;
        return (_a = v3spec.components) === null || _a === void 0 ? void 0 : _a.schemas;
    }
    return spec.definitions;
};
