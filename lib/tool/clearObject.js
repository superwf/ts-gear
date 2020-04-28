"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearObject = (o) => {
    Reflect.ownKeys(o).forEach((k) => {
        Reflect.deleteProperty(o, k);
    });
};
