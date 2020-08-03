"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchGlobalDefinitionMap = void 0;
/**
 * add a new type definition to definitionMap
 * */
exports.patchGlobalDefinitionMap = ({ typeName, definitionMap, alias = 'any', originalName, }) => {
    if (!(typeName in definitionMap)) {
        definitionMap[typeName] = {
            originalName,
            typeName,
            typescriptContent: `export type ${typeName} = ${alias}`,
        };
        const originalDefinitionName = Object.getOwnPropertyNames(definitionMap).find(name => definitionMap[name].typeName === typeName);
        if (originalDefinitionName && definitionMap[originalDefinitionName]) {
            definitionMap[typeName].schema = definitionMap[originalDefinitionName].schema;
        }
    }
};
