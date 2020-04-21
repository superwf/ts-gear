"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const traverseSchema_1 = require("../tool/traverseSchema");
const projectGlobalVariable_1 = require("../projectGlobalVariable");
const genericType_1 = require("../tool/genericType");
const patchGlobalDefinitionMap_1 = require("../tool/patchGlobalDefinitionMap");
/** check generic type
 * support nest level, as A<B> or A<B,C<D>>
 * if the type parameter does not exist in the definition schema, convert the name to normal type, remove all "<" and ">".
 * */
exports.checkAndUpdateDefinitionTypeName = (projectGlobal) => {
    const { definitionMap } = projectGlobal;
    /** store parse failed definitions
     * e.g.
     * name is PageVO<List<User>>，but "List" or "User" does not exist in schema $ref, then it is a failed one.
     * */
    const parseFailedDefinitions = [];
    Object.getOwnPropertyNames(projectGlobal.definitionMap).forEach(definitionName => {
        const definition = definitionMap[definitionName];
        if (genericType_1.hasGenericSymbol(definitionName)) {
            if (definition.schema) {
                const [parentNode] = genericType_1.parseGenericNames(definitionName);
                if (parentNode.name in definition) {
                    return;
                }
                const typeParameters = parentNode.children.map(node => genericType_1.getGenericNameFromNode(node));
                const refNames = new Set();
                traverseSchema_1.traverse$Ref(definition.schema, value => {
                    refNames.add(value);
                });
                // console.log(typeParameters)
                const allTypeParametersInSchemaRef = typeParameters.every(typeName => refNames.has(typeName));
                if (allTypeParametersInSchemaRef) {
                    definition.typeParameters = typeParameters.map(subTypeName => {
                        traverseSchema_1.traverseSchema(definition.schema, ({ value, key, parent }) => {
                            if (key === '$ref' && value === subTypeName) {
                                parent.$ref = genericType_1.removeGenericSymbol(subTypeName);
                            }
                        });
                        return genericType_1.removeGenericSymbol(subTypeName);
                    });
                    /**
                     * add an alias definition with the typeName as key
                     * no schema, no typescriptcontent
                     * */
                    definitionMap[parentNode.name] = {
                        typeName: parentNode.name,
                        schema: definition.schema,
                        typeParameters: definition.typeParameters,
                    };
                    delete definition.schema;
                    // add an alias for original generic type name
                    definition.typescriptContent = `export type ${genericType_1.removeGenericSymbol(definitionName)} = ${parentNode.name}<${typeParameters.join(',')}>`;
                    // typeParameters name may be nest generic type
                    // e.g A<B<C>>
                    typeParameters.forEach(typeName => {
                        if (!(typeName in definitionMap)) {
                            const nodes = genericType_1.parseGenericNames(typeName);
                            nodes.forEach(node => {
                                patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(node.name, definitionMap);
                            });
                        }
                    });
                }
                else {
                    parseFailedDefinitions.push(definition);
                }
            }
        }
    });
    if (parseFailedDefinitions.length > 0) {
        /** process the failed definition
         * add to definitionMap an "any" alias.
         * */
        parseFailedDefinitions.forEach(definition => {
            definition.typeName = genericType_1.removeGenericSymbol(definition.typeName);
            traverseSchema_1.traverseSchema(definition.schema, ({ value, key, parent }) => {
                if (key === '$ref' && !(value in definitionMap)) {
                    if (genericType_1.hasGenericSymbol(value)) {
                        const nodes = genericType_1.parseGenericNames(value);
                        if (!nodes.every(node => node.name in definitionMap)) {
                            const name = genericType_1.guessGenericTypeName(nodes[0], definitionMap);
                            parent.$ref = name;
                            name
                                .split(/<|>|,/g)
                                .filter(Boolean)
                                .forEach(n => {
                                if (!(n in definitionMap)) {
                                    patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(n, definitionMap);
                                }
                            });
                        }
                    }
                    else {
                        patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(value, definitionMap);
                    }
                }
            });
        });
    }
};
exports.checkAndUpdateRequestRef = (projectGlobal) => {
    const { definitionMap, requestMap } = projectGlobal;
    Object.values(requestMap).forEach(request => {
        traverseSchema_1.traverseSchema(request.schema, ({ value, key, parent }) => {
            if (key === '$ref' && typeof value === 'string') {
                if (value in definitionMap) {
                    parent.$ref = definitionMap[value].typeName;
                }
                else if (genericType_1.hasGenericSymbol(value)) {
                    const nodes = genericType_1.parseGenericNames(value);
                    const allExistInDefinitionMap = nodes.every(node => {
                        return node.name in definitionMap;
                    });
                    if (!allExistInDefinitionMap) {
                        const name = genericType_1.guessGenericTypeName(nodes[0], definitionMap);
                        parent.$ref = name;
                        name
                            .split(/<|>|,/g)
                            .filter(Boolean)
                            .forEach(n => {
                            if (!(n in definitionMap)) {
                                patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(n, definitionMap);
                            }
                        });
                    }
                }
                else {
                    patchGlobalDefinitionMap_1.patchGlobalDefinitionMap(value, definitionMap);
                }
            }
        });
    });
};
exports.parseGenericType = (project) => {
    const projectGlobal = projectGlobalVariable_1.getGlobal(project);
    // first process definition
    exports.checkAndUpdateDefinitionTypeName(projectGlobal);
    // then process $ref in requestMap
    exports.checkAndUpdateRequestRef(projectGlobal);
};
