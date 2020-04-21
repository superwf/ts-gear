"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projectGlobalVariable_1 = require("../projectGlobalVariable");
const traverseSchema_1 = require("../tool/traverseSchema");
const patchGlobalDefinitionMap_1 = require("../tool/patchGlobalDefinitionMap");
/**
 * collect refs in paths
 * run after parseGenericType
 * */
exports.collectRefsInRequestAndPatchDefinition = (project) => {
    const { requestRefSet, requestMap, definitionMap } = projectGlobalVariable_1.getGlobal(project);
    const keepGeneric = Boolean(project.keepGeneric);
    // when not keepGeneric, definition alse need to patch
    Object.getOwnPropertyNames(definitionMap).forEach(name => {
        const { schema } = definitionMap[name];
        if (schema) {
            traverseSchema_1.traverse$Ref(schema, value => {
                if (keepGeneric) {
                    value
                        .split(/<|>|,/)
                        .filter(Boolean)
                        .forEach(typeName => {
                        patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(typeName, definitionMap);
                    });
                }
                else {
                    patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(value, definitionMap);
                }
            });
        }
    });
    // gather ref definition names from paths
    Object.getOwnPropertyNames(requestMap).forEach(name => {
        const { schema } = requestMap[name];
        traverseSchema_1.traverse$Ref(schema, value => {
            if (keepGeneric) {
                value
                    .split(/<|>|,/)
                    .filter(Boolean)
                    .forEach(typeName => {
                    requestRefSet.add(typeName);
                    patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(typeName, definitionMap);
                });
            }
            else {
                requestRefSet.add(value);
                patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(value, definitionMap);
            }
        });
    });
};
