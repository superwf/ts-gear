"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assembleSchemaToGlobal = void 0;
const lodash_1 = require("lodash");
const traverseSchema_1 = require("../tool/traverseSchema");
const getDefinition_1 = require("../tool/getDefinition");
const interface_1 = require("../interface");
const projectGlobalVariable_1 = require("../projectGlobalVariable");
const enumType_1 = require("../tool/enumType");
const generateRequestFunctionName_1 = require("../tool/generateRequestFunctionName");
/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
exports.assembleSchemaToGlobal = (spec, project) => {
    const { definitionMap, requestMap, enumMap, requestEnumSet } = projectGlobalVariable_1.getGlobal(project);
    const definitions = getDefinition_1.getDefinition(spec);
    traverseSchema_1.traverseSchema(spec, ({ value, key, path, parent }) => {
        if (key === 'enum' && value) {
            const name = enumType_1.generateEnumName(path, spec);
            const existEnumName = lodash_1.findKey(enumMap, ({ originalContent }) => originalContent === value);
            parent[key] = name;
            if (path[0] === 'paths') {
                requestEnumSet.add(name);
            }
            // add enum type alias
            if (existEnumName) {
                enumMap[name] = {
                    originalContent: value,
                    typescriptContent: `export type ${name} = ${existEnumName}`,
                };
            }
            else {
                const tsContent = enumType_1.generateEnumTypescriptContent(value);
                enumMap[name] = {
                    originalContent: value,
                    typescriptContent: `export type ${name} = ${tsContent}`,
                };
            }
        }
    });
    Object.getOwnPropertyNames(definitions).forEach(name => {
        definitionMap[name] = {
            typeName: name,
            schema: definitions[name],
        };
    });
    lodash_1.forEach(spec.paths, (pathSchema /** Path */, pathName) => {
        const genFunctionName = project.generateRequestFunctionName || generateRequestFunctionName_1.generateRequestFunctionName;
        lodash_1.forEach(interface_1.httpMethods, httpMethod => {
            const operation = pathSchema[httpMethod];
            if (operation && !operation.deprecated) {
                requestMap[genFunctionName({
                    httpMethod,
                    pathName,
                    schema: operation,
                })] = {
                    pathName,
                    httpMethod,
                    schema: operation,
                    responses: operation.responses,
                    parameters: operation.parameters,
                };
            }
        });
    });
};
