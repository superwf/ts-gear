"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRequestContent = void 0;
const os_1 = require("os");
const source_1 = require("../../source");
const transformSwaggerPathToRouterPath_1 = require("../../tool/transformSwaggerPathToRouterPath");
const projectGlobalVariable_1 = require("../../projectGlobalVariable");
const assembleDoc_1 = require("../../tool/assembleDoc");
const constant_1 = require("../../constant");
const generateMockData_1 = require("./generateMockData");
const generateResponseType_1 = require("./generateResponseType");
const generateParameterType_1 = require("./generateParameterType");
const join = require("url-join");
/** from swagger spec paths assemble request functions */
exports.generateRequestContent = (spec, project) => {
    const { pathMatcher, withBasePath, withHost } = project;
    const { requestMap, definitionMap, enumMap } = projectGlobalVariable_1.getGlobal(project);
    const shouldMockResponseStatement = project.shouldMockResponseStatement || constant_1.defaultShouldMockResponseStatement;
    const resultContent = [];
    Object.getOwnPropertyNames(requestMap).forEach((requestFunctionName) => {
        const requestTypeScriptContent = [];
        const request = requestMap[requestFunctionName];
        const { httpMethod } = request;
        if (pathMatcher) {
            if (typeof pathMatcher === 'function') {
                if (!pathMatcher(request.pathName, httpMethod)) {
                    return;
                }
            }
            else if (!pathMatcher.test(request.pathName)) {
                return;
            }
        }
        let parameterTypeName = '';
        let parameterRequired = false;
        if (request.parameters && request.parameters.length > 0) {
            const parameterType = generateParameterType_1.generateParameterType(requestFunctionName, request.parameters);
            parameterTypeName = parameterType.parameterTypeName;
            parameterRequired = parameterType.parameterRequired;
            requestTypeScriptContent.push(parameterType.parameterTypeContent);
        }
        const responseType = generateResponseType_1.generateResponseType(requestFunctionName, request.responses);
        requestTypeScriptContent.push(responseType.responseTypeContent);
        requestTypeScriptContent.push(responseType.successTypeContent);
        const urlPath = join(spec.basePath || '', transformSwaggerPathToRouterPath_1.transformSwaggerPathToRouterPath(String(request.pathName)));
        const source = source_1.sow();
        const requesterStatment = `return requester('${urlPath}', {${withHost ? `, host: '${spec.host}'` : ''}${withBasePath ? `, basePath: '${spec.basePath}'` : ''}method: '${httpMethod}'${parameterTypeName ? ', ...option' : ''}}) as Promise<any>`;
        const functionStatment = `if (${shouldMockResponseStatement}) {
      return Promise.resolve(${requestFunctionName}.mockData as any)
    }
    ${requesterStatment}`;
        const functionData = {
            name: requestFunctionName,
            isExported: true,
            returnType: `Promise<${responseType.successTypeName}>`,
            statements: functionStatment,
            docs: assembleDoc_1.assembleDoc(request.schema),
        };
        functionData.parameters = [];
        if (parameterTypeName) {
            functionData.parameters.push({
                hasQuestionToken: !parameterRequired,
                name: 'option',
                type: parameterTypeName,
            });
        }
        source.addFunction(functionData);
        const mockStatment = `${requestFunctionName}.mockData = (${JSON.stringify(generateMockData_1.generateMockData(request, definitionMap, enumMap))} as any)`;
        source.addStatements(`
if (${shouldMockResponseStatement}) {
  ${mockStatment}
}
${requestFunctionName}.method = '${httpMethod}'
`);
        requestTypeScriptContent.push(source_1.harvest(source));
        /** store typescript content to requestMap */
        request.typescriptContent = requestTypeScriptContent.join(os_1.EOL);
        resultContent.push(request.typescriptContent);
    });
    /** return value only for test and debug */
    return resultContent.join(os_1.EOL);
};
