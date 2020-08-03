"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateParameterType = void 0;
const lodash_1 = require("lodash");
const schemaToTypescript_1 = require("../../tool/schemaToTypescript");
const source_1 = require("../../source");
const assembleRequestParam_1 = require("./assembleRequestParam");
/**
 * @param name request function parameter interface name
 * @param parameters swagger request parameters
 * */
exports.generateParameterType = (functionName, parameters) => {
    const source = source_1.sow();
    const parameterTypeName = `I${lodash_1.upperFirst(functionName)}Option`;
    const inter = source.addInterface({
        isExported: true,
        name: parameterTypeName,
        docs: [`request parameter type for ${functionName}`],
    });
    const assembledParameters = assembleRequestParam_1.assembleRequestParam(parameters);
    let parameterRequired = false;
    Object.getOwnPropertyNames(assembledParameters).forEach(position => {
        const param = assembledParameters[position];
        if (!parameterRequired) {
            parameterRequired = !lodash_1.isEmpty(param.required);
        }
        inter.addProperty({
            name: position,
            type: schemaToTypescript_1.schemaToTypescript(param),
            hasQuestionToken: lodash_1.isEmpty(param.required),
            docs: param.docs,
        });
    });
    return {
        parameterTypeName,
        parameterTypeContent: source_1.harvest(source),
        parameterRequired,
    };
};
