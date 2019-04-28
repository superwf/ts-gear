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
const standard_1 = require("./standard");
const utils_1 = require("./utils");
const fs = require("fs-extra");
const path = require("path");
const node_fetch_1 = require("node-fetch");
const swagger_1 = require("./swagger");
const diff_1 = require("./diff");
const generate_1 = require("./generate");
const debugLog_1 = require("./debugLog");
const _ = require("lodash");
const translate_1 = require("./translate");
const generate_2 = require("./generate");
class Manager {
    constructor(config, configDir = process.cwd()) {
        this.lockFilename = 'api-lock.json';
        this.allLocalDataSources = [];
        this.diffs = {
            modDiffs: [],
            boDiffs: []
        };
        this.report = debugLog_1.info;
        this.allConfigs = config.getDataSourcesConfig(configDir);
        this.currConfig = this.allConfigs[0];
    }
    setReport(report) {
        this.report = report;
        if (this.fileManager) {
            this.fileManager.report = report;
        }
    }
    mapModel(model) {
        return Object.assign({}, model, { details: [] });
    }
    selectDataSource(name) {
        return __awaiter(this, void 0, void 0, function* () {
            this.currConfig = this.allConfigs.find(conf => conf.name === name);
            yield this.readLocalDataSource();
            yield this.readRemoteDataSource();
        });
    }
    makeAllSame() {
        const remoteName = this.remoteDataSource.name;
        const remoteDsIndex = this.allLocalDataSources.findIndex(ds => ds.name === remoteName);
        if (remoteDsIndex === -1) {
            this.allLocalDataSources.push(this.remoteDataSource);
        }
        else {
            this.allLocalDataSources[remoteDsIndex] = this.remoteDataSource;
        }
        this.currLocalDataSource = this.remoteDataSource;
        this.setFilesManager();
    }
    makeSameMod(modName) {
        const isRemoteModExists = this.remoteDataSource.mods.find(iMod => iMod.name === modName);
        const isLocalModExists = this.currLocalDataSource.mods.find(iMod => iMod.name === modName);
        if (!isRemoteModExists) {
            this.currLocalDataSource.mods = this.currLocalDataSource.mods.filter(mod => mod.name !== modName);
            return;
        }
        const remoteMod = this.remoteDataSource.mods.find(iMod => iMod.name === modName);
        if (isLocalModExists) {
            const index = this.currLocalDataSource.mods.findIndex(iMod => iMod.name === modName);
            this.currLocalDataSource.mods[index] = remoteMod;
        }
        else {
            this.currLocalDataSource.mods.push(remoteMod);
            this.currLocalDataSource.reOrder();
        }
    }
    makeSameBase(baseName) {
        const isRemoteExists = this.remoteDataSource.baseClasses.find(base => base.name === baseName);
        const isLocalExists = this.currLocalDataSource.baseClasses.find(base => base.name === baseName);
        if (!isRemoteExists) {
            this.currLocalDataSource.baseClasses = this.currLocalDataSource.baseClasses.filter(base => base.name !== baseName);
            return;
        }
        const remoteBase = this.remoteDataSource.baseClasses.find(base => base.name === baseName);
        if (isLocalExists) {
            const index = this.currLocalDataSource.baseClasses.findIndex(base => base.name === baseName);
            this.currLocalDataSource.baseClasses[index] = remoteBase;
        }
        else {
            this.currLocalDataSource.baseClasses.push(remoteBase);
            this.currLocalDataSource.reOrder();
        }
    }
    calDiffs() {
        const modDiffs = diff_1.diff(this.currLocalDataSource.mods.map(this.mapModel), this.remoteDataSource.mods.map(this.mapModel));
        const boDiffs = diff_1.diff(this.currLocalDataSource.baseClasses.map(this.mapModel), this.remoteDataSource.baseClasses.map(this.mapModel), false);
        this.diffs = {
            modDiffs,
            boDiffs
        };
    }
    ready() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.existsLocal()) {
                yield this.readLocalDataSource();
                yield this.readRemoteDataSource();
            }
            else {
                const promises = this.allConfigs.map(config => {
                    return this.readRemoteDataSource(config);
                });
                this.allLocalDataSources = yield Promise.all(promises);
                this.currLocalDataSource = this.allLocalDataSources[0];
                this.remoteDataSource = this.currLocalDataSource;
                yield this.regenerateFiles();
            }
        });
    }
    existsLocal() {
        return (fs.existsSync(path.join(this.currConfig.outDir, this.lockFilename)) ||
            fs.existsSync(path.join(this.currConfig.outDir, 'api.lock')));
    }
    readLockFile() {
        return __awaiter(this, void 0, void 0, function* () {
            let lockFile = path.join(this.currConfig.outDir, 'api-lock.json');
            const isExists = fs.existsSync(lockFile);
            if (!isExists) {
                lockFile = path.join(this.currConfig.outDir, 'api.lock');
            }
            const localDataStr = yield fs.readFile(lockFile, {
                encoding: 'utf8'
            });
            return localDataStr;
        });
    }
    readLocalDataSource() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.report('读取本地数据中...');
                const localDataStr = yield this.readLockFile();
                this.report('读取本地完成');
                const localDataObjects = JSON.parse(localDataStr);
                this.allLocalDataSources = localDataObjects.map(ldo => {
                    return standard_1.StandardDataSource.constructorFromLock(ldo);
                });
                if (this.allLocalDataSources.length < this.allConfigs.length) {
                    this.allConfigs.forEach(config => {
                        if (!this.allLocalDataSources.find(ds => ds.name === config.name)) {
                            this.allLocalDataSources.push(new standard_1.StandardDataSource({
                                mods: [],
                                name: config.name,
                                baseClasses: []
                            }));
                        }
                    });
                }
                this.currLocalDataSource = this.allLocalDataSources[0];
                if (this.currConfig.name && this.allLocalDataSources.length > 1) {
                    this.currLocalDataSource =
                        this.allLocalDataSources.find(ds => ds.name === this.currConfig.name) ||
                            new standard_1.StandardDataSource({
                                mods: [],
                                name: this.currConfig.name,
                                baseClasses: []
                            });
                }
                this.setFilesManager();
                this.report('本地对象创建成功');
            }
            catch (e) {
                throw new Error('读取 lock 文件错误！' + e.toString());
            }
        });
    }
    checkDataSource(dataSource) {
        const { mods, baseClasses } = dataSource;
        const errorModNames = [];
        const errorBaseNames = [];
        mods.forEach(mod => {
            if (utils_1.hasChinese(mod.name)) {
                errorModNames.push(mod.name);
            }
        });
        baseClasses.forEach(base => {
            if (utils_1.hasChinese(base.name)) {
                errorBaseNames.push(base.name);
            }
        });
        if (errorBaseNames.length && errorModNames.length) {
            const errMsg = ['当前数据源有如下项不符合规范，需要后端修改'];
            errorModNames.forEach(modName => errMsg.push(`模块名${modName}应该改为英文名！`));
            errorBaseNames.forEach(baseName => errMsg.push(`基类名${baseName}应该改为英文名！`));
            throw new Error(errMsg.join('\n'));
        }
    }
    translateChinese(jsonString) {
        return __awaiter(this, void 0, void 0, function* () {
            let retString = jsonString;
            try {
                let chineseKeyCollect = jsonString
                    .match(/"[a-z0-9\s-]*[\u4e00-\u9fa5]+[a-z0-9\s-«»\u4e00-\u9fa5]*":/gi)
                    .map(item => item.replace(/["":]/g, ''));
                chineseKeyCollect = _.uniq(chineseKeyCollect.map(item => (item.includes('«') ? item.split('«')[0] : item)));
                chineseKeyCollect.sort((pre, next) => next.length - pre.length);
                let result = yield Promise.all(chineseKeyCollect.map(text => translate_1.default.translateAsync(text)));
                result.forEach((enKey, index) => {
                    const chineseKey = chineseKeyCollect[index];
                    this.report(chineseKey + ' ==> ' + enKey);
                    if (enKey) {
                        retString = retString.replace(eval(`/${chineseKey}/g`), enKey);
                    }
                });
                return retString;
            }
            catch (err) {
                return retString;
            }
        });
    }
    readRemoteDataSource(config = this.currConfig) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.report('获取远程数据中...');
                const response = yield node_fetch_1.default(config.originUrl);
                this.report('自动翻译中文基类中...');
                let swaggerJsonStr = yield response.text();
                swaggerJsonStr = yield this.translateChinese(swaggerJsonStr);
                this.report('自动翻译中文基类完成！');
                const data = yield JSON.parse(swaggerJsonStr);
                this.report('远程数据获取成功！');
                data.name = config.name;
                this.remoteDataSource = swagger_1.transformSwaggerData2Standard(data, config.usingOperationId, config.name);
                const transformProgram = utils_1.Config.getTransformFromConfig(config);
                this.remoteDataSource = transformProgram(this.remoteDataSource);
                this.checkDataSource(this.remoteDataSource);
                this.report('远程对象创建完毕！');
                return this.remoteDataSource;
            }
            catch (e) {
                throw new Error('读取远程接口数据失败！' + e.toString());
            }
        });
    }
    lock() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.fileManager.saveLock();
        });
    }
    regenerateFiles() {
        return __awaiter(this, void 0, void 0, function* () {
            this.setFilesManager();
            yield this.fileManager.regenerate();
        });
    }
    setFilesManager() {
        this.report('文件生成器创建中...');
        const { default: Generator, FileStructures: MyFileStructures } = utils_1.getTemplate(this.currConfig.templatePath);
        const generators = this.allLocalDataSources.map(dataSource => {
            const generator = new Generator();
            generator.setDataSource(dataSource);
            return generator;
        });
        let FileStructuresClazz = generate_2.FileStructures;
        if (MyFileStructures) {
            FileStructuresClazz = MyFileStructures;
        }
        this.fileManager = new generate_1.FilesManager(new FileStructuresClazz(generators, this.currConfig.usingMultipleOrigins), this.currConfig.outDir);
        this.fileManager.prettierConfig = this.currConfig.prettierConfig;
        this.report('文件生成器创建成功！');
        this.fileManager.report = this.report;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manage.js.map