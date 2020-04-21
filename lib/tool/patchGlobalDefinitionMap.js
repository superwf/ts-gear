"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchGlobalDefinitionMap = (typeName, definitionMap, alias = 'any') => {
    if (!(typeName in definitionMap)) {
        definitionMap[typeName] = {
            typeName,
            typescriptContent: `export type ${typeName} = ${alias}`,
        };
    }
};
