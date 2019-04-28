"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs-extra");
const prettier = require("prettier");
const ts = require("typescript");
const debugLog_1 = require("./debugLog");
const manage_1 = require("./manage");
const defaultTemplateCode = `
import * as Pont from 'pont-engine';
import { CodeGenerator, Interface } from "pont-engine";

export class FileStructures extends Pont.FileStructures {
}

export default class MyGenerator extends CodeGenerator {
}
`;
const defaultTransformCode = `
import { StandardDataSource } from "pont-engine";

export default function(dataSource: StandardDataSource): StandardDataSource {
  return dataSource;
}
`;
class Config {
    constructor(config) {
        this.originUrl = '';
        this.taggedByName = true;
        this.outDir = 'service';
        this.origins = [];
        this.usingMultipleOrigins = false;
        this.templatePath = 'serviceTemplate';
        Object.keys(config).forEach(key => (this[key] = config[key]));
    }
    static getTransformFromConfig(config) {
        if (config.transformPath) {
            const moduleResult = getTemplate(config.transformPath, defaultTransformCode);
            if (moduleResult) {
                return moduleResult.default;
            }
        }
        return id => id;
    }
    validate() {
        if (this.origins && this.origins.length) {
            this.origins.forEach((origin, index) => {
                if (!origin.originUrl) {
                    return `请在 origins[${index}] 中配置 originUrl `;
                }
                if (!origin.name) {
                    return `请在 origins[${index}] 中配置 originUrl `;
                }
            });
        }
        else {
            if (!this.originUrl) {
                return '请配置 originUrl 来指定远程地址。';
            }
        }
        return '';
    }
    static createFromConfigPath(configPath) {
        const content = fs.readFileSync(configPath, 'utf8');
        try {
            const configObj = JSON.parse(content);
            return new Config(configObj);
        }
        catch (e) {
            throw new Error('pont-config.json is not a validate json');
        }
    }
    getDataSourcesConfig(configDir) {
        const commonConfig = {
            usingOperationId: this.usingOperationId,
            taggedByName: this.taggedByName,
            outDir: path.join(configDir, this.outDir),
            usingMultipleOrigins: this.usingMultipleOrigins,
            templatePath: path.join(configDir, this.templatePath),
            transformPath: this.transformPath ? path.join(configDir, this.transformPath) : undefined,
            prettierConfig: this.prettierConfig
        };
        if (this.origins && this.origins.length) {
            return this.origins.map(origin => {
                return new DataSourceConfig(Object.assign({}, commonConfig, origin));
            });
        }
        return [
            new DataSourceConfig(Object.assign({}, commonConfig, { originUrl: this.originUrl }))
        ];
    }
}
exports.Config = Config;
class DataSourceConfig {
    constructor(config) {
        this.usingOperationId = false;
        this.usingMultipleOrigins = false;
        this.taggedByName = true;
        this.templatePath = 'serviceTemplate';
        this.outDir = 'src/service';
        this.transformPath = 'transformTemplate';
        this.prettierConfig = {};
        Object.keys(config).forEach(key => {
            this[key] = config[key];
        });
    }
}
exports.DataSourceConfig = DataSourceConfig;
function wait(timeout = 100) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
function format(fileContent, prettierOpts = {}) {
    try {
        return prettier.format(fileContent, Object.assign({ parser: 'typescript', trailingComma: 'all', singleQuote: true }, prettierOpts));
    }
    catch (e) {
        debugLog_1.error(`代码格式化报错！${e.toString()}\n代码为：${fileContent}`);
        return fileContent;
    }
}
exports.format = format;
function getDuplicateById(arr, idKey = 'name') {
    if (!arr || !arr.length) {
        return null;
    }
    let result;
    arr.forEach((item, itemIndex) => {
        if (arr.slice(0, itemIndex).find(o => o[idKey] === item[idKey])) {
            result = item;
            return;
        }
    });
    return result;
}
exports.getDuplicateById = getDuplicateById;
function transformModsName(mods) {
    mods.forEach(mod => {
        const currName = mod.name;
        const sameMods = mods.filter(mod => mod.name.toLowerCase() === currName.toLowerCase());
        if (sameMods.length > 1) {
            mod.name = transformDashCase(mod.name);
        }
    });
}
exports.transformModsName = transformModsName;
function transformDashCase(name) {
    return name.replace(/[A-Z]/g, ch => '_' + ch.toLowerCase());
}
function transformCamelCase(name) {
    let words = [];
    let result = '';
    if (name.includes('-')) {
        words = name.split('-');
    }
    else if (name.includes(' ')) {
        words = name.split(' ');
    }
    else {
        if (typeof name === 'string') {
            result = name;
        }
        else {
            throw new Error('mod name is not a string: ' + name);
        }
    }
    if (words && words.length) {
        result = words
            .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
            .join('');
    }
    result = result.charAt(0).toLowerCase() + result.slice(1);
    if (result.endsWith('Controller')) {
        result = result.slice(0, result.length - 'Controller'.length);
    }
    return result;
}
exports.transformCamelCase = transformCamelCase;
function transformDescription(description) {
    const words = description.split(' ').filter(word => word !== 'Controller');
    const [firstWord, ...rest] = words;
    const sFirstWord = firstWord.charAt(0).toLowerCase() + firstWord.slice(1);
    return [sFirstWord, ...rest].join('');
}
exports.transformDescription = transformDescription;
function toUpperFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
exports.toUpperFirstLetter = toUpperFirstLetter;
function getMaxSamePath(paths, samePath = '') {
    if (!paths.length) {
        return samePath;
    }
    if (paths.some(path => !path.includes('/'))) {
        return samePath;
    }
    const segs = paths.map(path => {
        const [firstSeg, ...restSegs] = path.split('/');
        return { firstSeg, restSegs };
    });
    if (segs.every((seg, index) => index === 0 || seg.firstSeg === segs[index - 1].firstSeg)) {
        return getMaxSamePath(segs.map(seg => seg.restSegs.join('/')), samePath + '/' + segs[0].firstSeg);
    }
    return samePath;
}
exports.getMaxSamePath = getMaxSamePath;
function getIdentifierFromUrl(url, requestType, samePath = '') {
    const currUrl = url.slice(samePath.length).match(/([^\.]+)/)[0];
    return (requestType +
        currUrl
            .split('/')
            .map(str => {
            if (str.match(/^{.+}$/gim)) {
                return 'By' + toUpperFirstLetter(str.slice(1, str.length - 1));
            }
            return toUpperFirstLetter(str);
        })
            .join(''));
}
exports.getIdentifierFromUrl = getIdentifierFromUrl;
const TS_KEYWORDS = ['delete'];
const REPLACE_WORDS = ['remove'];
function getIdentifierFromOperatorId(operationId) {
    const identifier = operationId.replace(/(.+)(Using.+)/, '$1');
    const index = TS_KEYWORDS.indexOf(identifier);
    if (index === -1) {
        return identifier;
    }
    return REPLACE_WORDS[index];
}
exports.getIdentifierFromOperatorId = getIdentifierFromOperatorId;
function getTemplate(templatePath, defaultValue = defaultTemplateCode) {
    if (!fs.existsSync(templatePath + '.ts')) {
        fs.writeFileSync(templatePath + '.ts', defaultValue);
    }
    const tsResult = fs.readFileSync(templatePath + '.ts', 'utf8');
    const jsResult = ts.transpileModule(tsResult, {
        compilerOptions: {
            target: ts.ScriptTarget.ES2015,
            module: ts.ModuleKind.CommonJS
        }
    });
    const noCacheFix = (Math.random() + '').slice(2, 5);
    const jsName = templatePath + noCacheFix + '.js';
    let moduleResult;
    try {
        fs.writeFileSync(jsName, jsResult.outputText, 'utf8');
        moduleResult = require(jsName);
        fs.removeSync(jsName);
    }
    catch (e) {
        if (fs.existsSync(jsName)) {
            fs.removeSync(jsName);
        }
        if (!moduleResult) {
            throw new Error(e);
        }
    }
    return moduleResult;
}
exports.getTemplate = getTemplate;
function lookForFiles(dir, fileName) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield fs.readdir(dir);
        for (let file of files) {
            const currName = path.join(dir, file);
            const info = yield fs.lstat(currName);
            if (info.isDirectory()) {
                if (file === '.git' || file === 'node_modules') {
                    continue;
                }
                const result = yield lookForFiles(currName, fileName);
                if (result) {
                    return result;
                }
            }
            else if (info.isFile() && file === fileName) {
                return currName;
            }
        }
    });
}
exports.lookForFiles = lookForFiles;
function toDashCase(name) {
    const dashName = name
        .split(' ')
        .join('')
        .replace(/[A-Z]/g, p => '-' + p.toLowerCase());
    if (dashName.startsWith('-')) {
        return dashName.slice(1);
    }
    return dashName;
}
exports.toDashCase = toDashCase;
function toDashDefaultCase(name) {
    let dashName = name
        .split(' ')
        .join('')
        .replace(/[A-Z]/g, p => '-' + p.toLowerCase());
    if (dashName.startsWith('-')) {
        dashName = dashName.slice(1);
    }
    if (dashName.endsWith('-controller')) {
        return dashName.slice(0, dashName.length - '-controller'.length);
    }
    return dashName;
}
exports.toDashDefaultCase = toDashDefaultCase;
function hasChinese(str) {
    return (str &&
        str.match(/[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uff1a\uff0c\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]|[\uff01-\uff5e\u3000-\u3009\u2026]/));
}
exports.hasChinese = hasChinese;
const PROJECT_ROOT = process.cwd();
const CONFIG_FILE = 'pont-config.json';
function createManager(configFile = CONFIG_FILE) {
    return __awaiter(this, void 0, void 0, function* () {
        const configPath = yield lookForFiles(PROJECT_ROOT, configFile);
        const config = Config.createFromConfigPath(configPath);
        const manager = new manage_1.Manager(config, path.dirname(configPath));
        yield manager.ready();
        return manager;
    });
}
exports.createManager = createManager;
//# sourceMappingURL=utils.js.map