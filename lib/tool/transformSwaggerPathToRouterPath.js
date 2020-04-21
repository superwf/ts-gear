"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** transform /abc/{id} to /abc/:id */
exports.transformSwaggerPathToRouterPath = (v) => {
    if (v.includes('{')) {
        return v
            .split('/')
            .map(s => {
            const reg = /[{}]/g;
            if (reg.test(s)) {
                return `:${s.replace(reg, '')}`;
            }
            return s;
        })
            .join('/');
    }
    return v;
};
