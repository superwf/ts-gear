"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestFunctionName = void 0;
const lodash_1 = require("lodash");
/** default generate request function method */
exports.generateRequestFunctionName = ({ httpMethod, pathName }) => {
    return `${httpMethod}${lodash_1.upperFirst(lodash_1.camelCase(pathName))}`;
};
