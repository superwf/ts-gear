"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const traverseSchema_1 = require("../tool/traverseSchema");
const cleanName_1 = require("../tool/cleanName");
const getDefinition_1 = require("../tool/getDefinition");
/** use cleanName for all "$ref" and "definitions" names
 * mutate the spec data
 * */
exports.cleanRefAndDefinitionName = (spec, keepGeneric) => {
    const definitions = getDefinition_1.getDefinition(spec);
    Object.getOwnPropertyNames(definitions).forEach((name) => {
        const cleanedName = cleanName_1.cleanName(name, keepGeneric);
        if (cleanedName !== name) {
            const origin = definitions[name];
            delete definitions[name];
            definitions[cleanedName] = origin;
        }
    });
    traverseSchema_1.traverseSchema(spec, ({ value, parent, key }) => {
        if (key === '$ref' && typeof value === 'string') {
            parent.$ref = cleanName_1.cleanName(value, keepGeneric);
        }
    });
};
