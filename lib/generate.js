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
const fs = require("fs-extra");
const _ = require("lodash");
const path = require("path");
const reserved = require("reserved-words");
const debugLog_1 = require("./debugLog");
const utils_1 = require("./utils");
const { existsSync } = fs;
class FileStructures {
    constructor(generators, usingMultipleOrigins) {
        this.generators = generators;
        this.usingMultipleOrigins = usingMultipleOrigins;
    }
    getDataSources() {
        return this.generators.map(ge => ge.dataSource);
    }
    getMultipleOriginsFileStructures() {
        const files = {};
        this.generators.forEach(generator => {
            const dsName = generator.dataSource.name;
            const dsFiles = this.getOriginFileStructures(generator, true);
            files[dsName] = dsFiles;
        });
        return Object.assign({}, files, { 'index.ts': this.getDataSourcesTs.bind(this), 'api-lock.json': this.getLockContent.bind(this), 'api.d.ts': this.getDataSourcesDeclarationTs.bind(this) });
    }
    getBaseClassesInDeclaration(originCode, usingMultipleOrigins) {
        if (usingMultipleOrigins) {
            return `
      declare namespace defs {
        export ${originCode}
      };
      `;
        }
        return `
      declare ${originCode}
    `;
    }
    getModsDeclaration(originCode, usingMultipleOrigins) {
        if (usingMultipleOrigins) {
            return `
      declare namespace API {
        export ${originCode}
      };
      `;
        }
        return `
      declare ${originCode}
    `;
    }
    getOriginFileStructures(generator, usingMultipleOrigins = false) {
        const mods = {};
        const dataSource = generator.dataSource;
        dataSource.mods.forEach(mod => {
            const currMod = {};
            mod.interfaces.forEach(inter => {
                currMod[inter.name + '.ts'] = generator.getInterfaceContent.bind(generator, inter);
                currMod['index.ts'] = generator.getModIndex.bind(generator, mod);
            });
            mods[mod.name] = currMod;
            mods['index.ts'] = generator.getModsIndex.bind(generator);
        });
        generator.getBaseClassesInDeclaration = this.getBaseClassesInDeclaration.bind(this, generator.getBaseClassesInDeclaration(), usingMultipleOrigins);
        generator.getModsDeclaration = this.getModsDeclaration.bind(this, generator.getModsDeclaration(), usingMultipleOrigins);
        return {
            'baseClass.ts': generator.getBaseClassesIndex.bind(generator),
            mods,
            'index.ts': generator.getIndex.bind(generator),
            'api.d.ts': generator.getDeclaration.bind(generator),
            'api-lock.json': this.getLockContent.bind(this),
        };
    }
    getFileStructures() {
        if (this.usingMultipleOrigins || this.generators.length > 1) {
            return this.getMultipleOriginsFileStructures();
        }
        else {
            return this.getOriginFileStructures(this.generators[0]);
        }
    }
    getDataSourcesTs() {
        const dsNames = this.generators.map(ge => ge.dataSource.name);
        return `
      ${dsNames
            .map(name => {
            return `import { defs as ${name}Defs, ${name} } from './${name}';
          `;
        })
            .join('\n')}

      (window as any).defs = {
        ${dsNames.map(name => `${name}: ${name}Defs,`).join('\n')}
      };
      (window as any).API = {
        ${dsNames.join(',\n')}
      };
    `;
    }
    getDataSourcesDeclarationTs() {
        const dsNames = this.generators.map(ge => ge.dataSource.name);
        return `
    ${dsNames
            .map(name => {
            return `/// <reference path="./${name}/api.d.ts" />`;
        })
            .join('\n')}
    `;
    }
    getLockContent() {
        return JSON.stringify(this.getDataSources(), null, 2);
    }
}
exports.FileStructures = FileStructures;
class CodeGenerator {
    constructor() { }
    setDataSource(dataSource) {
        this.dataSource = dataSource;
    }
    getBaseClassInDeclaration(base) {
        return `class ${base.name} {
      ${base.properties.map(prop => prop.toPropertyCode(true)).join('\n')}
    }
    `;
    }
    getBaseClassesInDeclaration() {
        const content = `namespace ${this.dataSource.name || 'defs'} {
      ${this.dataSource.baseClasses
            .map(base => `
        export ${this.getBaseClassInDeclaration(base)}
      `)
            .join('\n')}
    }
    `;
        return content;
    }
    getBaseClassesInDeclarationWithMultipleOrigins() {
        return `
      declare namespace defs {
        export ${this.getBaseClassesInDeclaration()}
      }
    `;
    }
    getBaseClassesInDeclarationWithSingleOrigin() {
        return `
      declare ${this.getBaseClassesInDeclaration()}
    `;
    }
    getInterfaceContentInDeclaration(inter) {
        const bodyParmas = inter.getBodyParamsCode();
        const requestParams = bodyParmas
            ? `params: Params, bodyParams: ${bodyParmas}`
            : `params: Params`;
        return `
      export ${inter.getParamsCode()}

      export type Response = ${inter.responseType};
      export const init: Response;
      export function request(${requestParams}): Promise<${inter.responseType}>;
    `;
    }
    getModsDeclaration() {
        const mods = this.dataSource.mods;
        const content = `namespace ${this.dataSource.name || 'API'} {
        ${mods
            .map(mod => `
          /**
           * ${mod.description}
           */
          export namespace ${mod.name} {
            ${mod.interfaces
            .map(this.getInterfaceInDeclaration.bind(this))
            .join('\n')}
          }
        `)
            .join('\n\n')}
      }
    `;
        return content;
    }
    getModsDeclarationWithMultipleOrigins() { }
    getModsDeclarationWithSingleOrigin() { }
    getCommonDeclaration() {
        return '';
    }
    getDeclaration() {
        return `
      ${this.getCommonDeclaration()}

      ${this.getBaseClassesInDeclaration()}

      ${this.getModsDeclaration()}
    `;
    }
    getIndex() {
        let conclusion = `
      import * as defs from './baseClass';
      import './mods/';

      declare var window;
      window.defs = defs;
    `;
        if (this.dataSource.name) {
            conclusion = `
        import { ${this.dataSource.name} as defs } from './baseClass';
        export { ${this.dataSource.name} } from './mods/';
        export { defs };
      `;
        }
        return conclusion;
    }
    getBaseClassesIndex() {
        const clsCodes = this.dataSource.baseClasses.map(base => `
        export class ${base.name} {
          ${base.properties
            .map(prop => {
            return prop.toPropertyCodeWithInitValue(base.name);
        })
            .filter(id => id)
            .join('\n')}
        }
      `);
        if (this.dataSource.name) {
            return `
        ${clsCodes.join('\n')}
        export const ${this.dataSource.name} = {
          ${this.dataSource.baseClasses.map(bs => bs.justName).join(',\n')}
        }
      `;
        }
        return clsCodes.map(cls => `export ${cls}`).join('\n');
    }
    getInterfaceContent(inter) {
        const bodyParmas = inter.getBodyParamsCode();
        const requestParams = bodyParmas ? `params, bodyParams` : `params`;
        const initialValue = inter.response.initialValue === 'undefined'
            ? '{}'
            : inter.response.initialValue;
        return `
    /**
     * @desc ${inter.description}
     * generate an init class instance
     */

    ${inter.response.initialValue === 'undefined'
            ? ''
            : "import * as defs from '../../baseClass';"}

    export ${inter.getParamsCode()}
    export const init = ${inter.response.initialValue};
   `;
    }
    getModIndex(mod) {
        return `
      /**
       * @description ${mod.description}
       */
      ${mod.interfaces
            .map((inter, key) => {
            inter.varName = inter.name;
            if (reserved.check(inter.name, 6)) {
                inter.varName = `${inter.name}${key}`;
            }
            return `import * as ${inter.varName} from './${inter.name}';`;
        })
            .join('\n')}

      export {
        ${mod.interfaces.map(inter => inter.varName).join(', \n')}
      }
    `;
    }
    getModsIndex() {
        let conclusion = `
      declare var window;

      window.API = {
        ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
      };
    `;
        if (this.dataSource.name) {
            conclusion = `
        export const ${this.dataSource.name} = {
          ${this.dataSource.mods.map(mod => mod.name).join(', \n')}
        };
      `;
        }
        return `
      ${this.dataSource.mods
            .map(mod => {
            return `import * as ${mod.name} from './${mod.name}';`;
        })
            .join('\n')}

      ${conclusion}
    `;
    }
    getInterfaceInDeclaration(inter) {
        return `
      /**
        * ${inter.description}
        * ${inter.path}
        */
      export namespace ${inter.name} {
        ${this.getInterfaceContentInDeclaration(inter)}
      }
    `;
    }
}
exports.CodeGenerator = CodeGenerator;
class FilesManager {
    constructor(fileStructures, baseDir) {
        this.fileStructures = fileStructures;
        this.baseDir = baseDir;
        this.report = debugLog_1.info;
        this.created = false;
    }
    regenerate(report) {
        return __awaiter(this, void 0, void 0, function* () {
            if (report) {
                this.report = report;
            }
            const files = this.fileStructures.getFileStructures();
            this.setFormat(files);
            this.clearPath(this.baseDir);
            this.created = true;
            yield this.generateFiles(files);
        });
    }
    saveLock() {
        return __awaiter(this, void 0, void 0, function* () {
            let lockFile = path.join(this.baseDir, 'api-lock.json');
            const isExists = fs.existsSync(lockFile);
            if (!isExists) {
                lockFile = path.join(this.baseDir, 'api.lock');
            }
            const newLockContent = this.fileStructures.getLockContent();
            const lockContent = yield fs.readFile(lockFile, 'utf8');
            if (lockContent !== newLockContent) {
                this.created = true;
                yield fs.writeFile(lockFile, newLockContent);
            }
        });
    }
    generateFiles(files, dir = this.baseDir) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = _.map(files, (value, name) => __awaiter(this, void 0, void 0, function* () {
                if (typeof value === 'function') {
                    yield fs.writeFile(`${dir}/${name}`, value());
                    return;
                }
                yield fs.mkdir(`${dir}/${name}`);
                yield this.generateFiles(value, `${dir}/${name}`);
            }));
            yield Promise.all(promises);
        });
    }
    setFormat(files) {
        _.forEach(files, (value, name) => {
            if (name.endsWith('.json') || name.endsWith('.lock')) {
                return;
            }
            if (typeof value === 'function') {
                files[name] = (content) => utils_1.format(value(content), this.prettierConfig);
            }
            this.setFormat(value);
        });
    }
    clearPath(path) {
        if (fs.existsSync(path)) {
            fs.removeSync(path);
        }
        fs.mkdirpSync(path);
    }
}
exports.FilesManager = FilesManager;
//# sourceMappingURL=generate.js.map