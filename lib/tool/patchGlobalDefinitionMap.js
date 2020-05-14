"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchGlobalDefinitionMap = void 0;
/**
 * add a new type definition to definitionMap
 * */
exports.patchGlobalDefinitionMap = (typeName, definitionMap, alias = 'any') => {
    if (!(typeName in definitionMap)) {
        definitionMap[typeName] = {
            typeName,
            typescriptContent: `export type ${typeName} = ${alias}`,
        };
    }
};
