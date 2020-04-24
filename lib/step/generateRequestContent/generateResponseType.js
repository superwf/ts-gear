"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const source_1 = require("../../source");
const schemaToTypescript_1 = require("../../tool/schemaToTypescript");
const assembleDoc_1 = require("../../tool/assembleDoc");
/**
 * when has responses spec, get an interface type and use the first 2xx member as successType
 * when has not responses, use any as successType
 * */
exports.generateResponseType = (functionName, responses) => {
    const responseTypeName = `I${lodash_1.upperFirst(functionName)}Response`;
    // use first 2xx response type as success response type
    let successTypeContent = `export type ${responseTypeName}Success = any`;
    let responseTypeContent = `export type ${responseTypeName} = any`;
    const successTypeName = `${responseTypeName}Success`;
    const responseStatuses = Object.getOwnPropertyNames(responses).sort();
    if (responseStatuses.length > 0) {
        const source = source_1.sow();
        const inter = source.addInterface({
            name: responseTypeName,
            isExported: true,
        });
        responseStatuses.forEach(status => {
            inter.addProperty({
                name: String(status),
                type: schemaToTypescript_1.schemaToTypescript(responses[status]),
                docs: assembleDoc_1.assembleDoc(responses[status]),
            });
        });
        responseTypeContent = source_1.harvest(source);
        const firstResponseStatus = responseStatuses[0];
        if (firstResponseStatus.startsWith('2') || firstResponseStatus === 'default') {
            if (Number.isNaN(Number(firstResponseStatus))) {
                successTypeContent = `export type ${responseTypeName}Success = PropertyType<${responseTypeName}, '${firstResponseStatus}'>`;
            }
            else {
                successTypeContent = `export type ${responseTypeName}Success = PropertyType<${responseTypeName}, ${firstResponseStatus}>`;
            }
        }
    }
    return {
        responseTypeContent,
        successTypeContent,
        responseTypeName,
        successTypeName,
    };
};
