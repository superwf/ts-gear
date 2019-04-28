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
const _ = require("lodash");
const { youdao, baidu, google } = require('translation.js');
const fs = require("fs-extra");
const path = require("path");
const os = require("os");
const assert = require("assert");
const debugLog = require("./debugLog");
class Translate {
    constructor(dictName = 'dict.json') {
        this.localDictDir = os.homedir() + '/.pont';
        this.dict = {};
        this.dictFullPath = '';
        this.engines = [google, youdao, baidu];
        fs.mkdirpSync(this.localDictDir);
        this.dictFullPath = path.normalize(this.localDictDir + '/' + dictName);
        this.dict = fs.pathExistsSync(this.dictFullPath) ? this.loadDict() : {};
    }
    loadDict() {
        let dictstr = fs.readFileSync(this.dictFullPath, { encoding: 'utf8' });
        dictstr = dictstr.slice(0, dictstr.length - 2);
        try {
            return JSON.parse(`{${dictstr}}`);
        }
        catch (err) {
            debugLog.error('[translate] local dict is invalid, attempting auto fix');
            fs.remove(this.dictFullPath);
            return {};
        }
    }
    appendToDict(pairKey) {
        if (!this.dict[pairKey.cn]) {
            this.dict[pairKey.cn] = pairKey.en;
            fs.appendFileSync(this.dictFullPath, `"${pairKey.cn}": "${pairKey.en}",\n`);
        }
    }
    startCaseClassName(result) {
        let wordArray = _.startCase(result).split(' ');
        if (wordArray.length > 6) {
            wordArray = [].concat(wordArray.slice(0, 5), wordArray.slice(-1));
        }
        return wordArray.join('');
    }
    translateAsync(text, engineIndex = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dict[text]) {
                return this.dict[text];
            }
            if (engineIndex >= this.engines.length) {
                throw new Error('translate error, all translate engine can not access');
            }
            let enKey;
            let index = engineIndex;
            try {
                let res = yield this.engines[index].translate(text);
                enKey = this.startCaseClassName(res.result[0]);
                assert.ok(enKey);
                this.appendToDict({ cn: text, en: enKey });
                return enKey;
            }
            catch (err) {
                return this.translateAsync(text, index + 1);
            }
        });
    }
}
exports.Translate = Translate;
exports.default = new Translate();
//# sourceMappingURL=translate.js.map