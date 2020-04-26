"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_morph_1 = require("ts-morph");
const schemaToTypescript_1 = require("../tool/schemaToTypescript");
const source_1 = require("../source");
const projectGlobalVariable_1 = require("../projectGlobalVariable");
const assembleDoc_1 = require("../tool/assembleDoc");
/** generate on definition ts content */
exports.generateDefinitionContent = (project) => {
    const { definitionMap } = projectGlobalVariable_1.getGlobal(project);
    Object.values(definitionMap).forEach((definition) => {
        if (definition.typescriptContent || !definition.schema) {
            return;
        }
        const source = source_1.sow();
        const title = definition.typeName;
        const schema = definition.schema;
        if (schema.type === 'object') {
            if (schema.properties) {
                const preferInterface = Boolean(project.preferInterface);
                const declarationOptin = {
                    isExported: true,
                    name: title,
                    typeParameters: definition.typeParameters
                        ? definition.typeParameters.map((t) => ({
                            name: t,
                            default: 'any',
                        }))
                        : undefined,
                    docs: assembleDoc_1.assembleDoc(schema),
                };
                const klass = preferInterface ? source.addInterface(declarationOptin) : source.addClass(declarationOptin);
                Object.getOwnPropertyNames(schema.properties).forEach((name) => {
                    const property = schema.properties[name];
                    const propertyStructure = {
                        name,
                        type: schemaToTypescript_1.schemaToTypescript(property),
                        scope: preferInterface ? undefined : ts_morph_1.Scope.Public,
                        hasQuestionToken: !schema.required || !schema.required.includes(name),
                        docs: assembleDoc_1.assembleDoc(property),
                    };
                    /** interface property can not has default value
                      so use class as type */
                    if (!preferInterface && Reflect.has(property, 'default')) {
                        propertyStructure.initializer = String(property.default);
                    }
                    klass.addProperty(propertyStructure);
                });
                // 没有properties，会有additionalProperties
            }
            else if (schema.additionalProperties) {
                const { additionalProperties } = schema;
                // class doesn`t has "addIndexSignature", so use interface
                source.addInterface({
                    isExported: true,
                    name: title,
                    docs: typeof additionalProperties !== 'boolean' ? assembleDoc_1.assembleDoc(additionalProperties) : [],
                    indexSignatures: [
                        {
                            keyName: 'key',
                            keyType: 'string',
                            returnType: additionalProperties === true ? 'any' : schemaToTypescript_1.schemaToTypescript(additionalProperties),
                        },
                    ],
                });
            }
            else {
                source.addTypeAlias({
                    isExported: true,
                    name: title,
                    type: schemaToTypescript_1.schemaToTypescript(schema),
                    docs: assembleDoc_1.assembleDoc(schema),
                });
            }
        }
        else {
            source.addTypeAlias({
                isExported: true,
                name: title,
                type: schemaToTypescript_1.schemaToTypescript(schema),
                docs: assembleDoc_1.assembleDoc(schema),
            });
        }
        definition.typescriptContent = source_1.harvest(source);
    });
};
