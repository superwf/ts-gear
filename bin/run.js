"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var definitions_1 = require("./definitions");
var fetchSwagger_1 = require("./fetchSwagger");
var requests_1 = require("./requests");
var prettierWrite_1 = require("./prettierWrite");
var util_1 = require("./util");
var option_1 = require("./option");
var serviceIndexFileContent_1 = require("./serviceIndexFileContent");
var warningComment_1 = require("./warningComment");
var interceptorFilePath = path_1.resolve(util_1.tsGearRoot, 'src/interceptor.ts');
/**
 * step 1: get user config
 * step 2: fetch schema
 * step 3: parse schema to ts template content
 * step 4: write ts file
 * */
exports.run = function () { return __awaiter(void 0, void 0, void 0, function () {
    var cwd, userConfig, config, dest, projectNamesFromCommandLine, projects, _a, _b, _i, i, project, projectPath, schema, _c, $refsNotInDefinitions, $refsInPaths, $refsTypes, definitions, definitionsPath, _d, requestsContent, mockRequestsContent, requestFilePath, mockResponsePath, indexFilePath, projectInterceptorFile;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                cwd = process.cwd();
                userConfig = require(path_1.join(cwd, 'ts-gear'));
                config = (userConfig["default"] ? userConfig["default"] : userConfig);
                dest = path_1.join(cwd, config.dest);
                if (!fs_1.existsSync(dest)) {
                    fs_1.mkdirSync(dest);
                }
                projectNamesFromCommandLine = option_1.getProjectsFromCommmandLine();
                projects = config.projects;
                if (projectNamesFromCommandLine.length > 0) {
                    projects = projectNamesFromCommandLine
                        .map(function (name) {
                        return config.projects.find(function (p) { return p.name === name; });
                    })
                        .filter(Boolean);
                }
                _a = [];
                for (_b in projects)
                    _a.push(_b);
                _i = 0;
                _e.label = 1;
            case 1:
                if (!(_i < _a.length)) return [3 /*break*/, 12];
                i = _a[_i];
                if (!projects.hasOwnProperty(i)) {
                    return [3 /*break*/, 11];
                }
                project = projects[i];
                projectPath = path_1.join(dest, project.name);
                // 在dest文件夹内建立项目文件夹
                if (!fs_1.existsSync(projectPath)) {
                    fs_1.mkdirSync(projectPath);
                }
                return [4 /*yield*/, fetchSwagger_1.fetchSwaggerJSONSchema(project, project.fetchOption)];
            case 2:
                schema = _e.sent();
                return [4 /*yield*/, util_1.initializeSchema(schema)];
            case 3:
                _c = _e.sent(), $refsNotInDefinitions = _c.$refsNotInDefinitions, $refsInPaths = _c.$refsInPaths;
                return [4 /*yield*/, definitions_1.transform$RefsNotInDefinitions($refsNotInDefinitions)
                    // 生成definitions
                ];
            case 4:
                $refsTypes = _e.sent();
                return [4 /*yield*/, definitions_1.transformDefinitionsToTypescript(schema.definitions)];
            case 5:
                definitions = _e.sent();
                definitionsPath = path_1.join(projectPath, 'definitions.ts');
                return [4 /*yield*/, prettierWrite_1.prettierWrite(definitionsPath, warningComment_1.warningComment + definitions + $refsTypes)
                    // 生成request函数与mock request数据
                ];
            case 6:
                _e.sent();
                return [4 /*yield*/, requests_1.generateRequests(schema, $refsInPaths, project.pathMatcher)];
            case 7:
                _d = _e.sent(), requestsContent = _d.requestsContent, mockRequestsContent = _d.mockRequestsContent;
                requestFilePath = path_1.join(projectPath, 'request.ts');
                return [4 /*yield*/, prettierWrite_1.prettierWrite(requestFilePath, warningComment_1.warningComment + requestsContent)];
            case 8:
                _e.sent();
                mockResponsePath = path_1.join(projectPath, 'mockRequest.ts');
                return [4 /*yield*/, prettierWrite_1.prettierWrite(mockResponsePath, warningComment_1.warningComment + mockRequestsContent)];
            case 9:
                _e.sent();
                indexFilePath = path_1.join(projectPath, 'index.ts');
                return [4 /*yield*/, prettierWrite_1.prettierWrite(indexFilePath, warningComment_1.warningComment + serviceIndexFileContent_1.serviceIndexFileContent)
                    // 每个项目的拦截器文件只在第一次生成时copy一次
                    // 这个文件可能会写入一些请求的配置
                    // 不应该被覆盖
                ];
            case 10:
                _e.sent();
                projectInterceptorFile = path_1.join(projectPath, 'interceptor.ts');
                if (!fs_1.existsSync(projectInterceptorFile)) {
                    fs_1.copyFileSync(interceptorFilePath, projectInterceptorFile);
                }
                _e.label = 11;
            case 11:
                _i++;
                return [3 /*break*/, 1];
            case 12: return [2 /*return*/];
        }
    });
}); };
