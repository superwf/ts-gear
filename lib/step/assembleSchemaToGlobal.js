"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const getDefinition_1 = require("../tool/getDefinition");
const projectGlobalVariable_1 = require("../projectGlobalVariable");
const camelCase_1 = require("../tool/camelCase");
/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
exports.assembleSchemaToGlobal = (spec, project) => {
    const { definitionMap, requestMap } = projectGlobalVariable_1.getGlobal(project);
    const definitions = getDefinition_1.getDefinition(spec);
    Object.getOwnPropertyNames(definitions).forEach(name => {
        definitionMap[name] = {
            typeName: name,
            schema: definitions[name],
        };
    });
    lodash_1.forEach(spec.paths, (pathSchema /** Path */, pathName) => {
        lodash_1.forEach(projectGlobalVariable_1.httpMethods, httpMethod => {
            const operation = pathSchema[httpMethod];
            if (operation && !operation.deprecated) {
                requestMap[`${httpMethod}${lodash_1.upperFirst(camelCase_1.camelCase(pathName))}`] = {
                    pathName,
                    httpMethod: httpMethod,
                    schema: operation,
                    responses: operation.responses,
                    parameters: operation.parameters,
                };
            }
        });
    });
};
