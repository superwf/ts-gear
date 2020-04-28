"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
/**
 * lodash camelCase will convert non word first charator lower case
 * e.g. lodash camelCase will convert "PageVOListVO" to "PageVoListVo"
 * use this camelCase to convert only every words first charator upper case.
 * e.g. "PageVOListVO" to "PageVOListVO"
 *  */
exports.camelCase = (name) => {
    const invalidVariableCharatorReg = /[^a-z0-9]/i;
    if (invalidVariableCharatorReg.test(name)) {
        return name
            .split(/[^a-z0-9]/i)
            .map((n) => lodash_1.upperFirst(n))
            .join('');
    }
    return lodash_1.upperFirst(name);
};
