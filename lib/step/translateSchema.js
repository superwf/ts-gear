"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateSchema = exports.updateSchema = exports.generateTranslationMap = exports.gatherNonEnglishWords = exports.cnReg = void 0;
const lodash_1 = require("lodash");
const traverseSchema_1 = require("../tool/traverseSchema");
const translate_1 = require("../tool/translate");
exports.cnReg = /[\u4e00-\u9fa5]/;
/** gather all words those need to be translated in spec */
exports.gatherNonEnglishWords = (spec) => {
    const originWordSet = new Set();
    Object.getOwnPropertyNames(spec.definitions).forEach((k) => {
        k = String(k);
        if (exports.cnReg.test(k)) {
            originWordSet.add(k);
        }
    });
    traverseSchema_1.traverseSchema(spec, ({ value, key }) => {
        if (key === '$ref' && typeof value === 'string') {
            if (exports.cnReg.test(value)) {
                // remove "#/definition/" prefix
                originWordSet.add(value.replace(/^#\/.+\//, ''));
            }
        }
    });
    return Array.from(originWordSet);
};
// when the translation result repeat, add a unique number as suffix.
// make every word uniq.
let $wordCount = 1;
/**
 * generate a translation map, as
 *
 * @return translation map
 * {
 *   "结果": "Result",
 * }
 * */
exports.generateTranslationMap = async (originWords, engine) => {
    const wordsMap = {};
    if (originWords.length > 0) {
        await Promise.all(originWords.map(async (word) => {
            let newWord = String(await translate_1.translate(word, engine));
            // if translated word repeat, add number as suffix
            if (lodash_1.find(wordsMap, (v) => v === newWord)) {
                newWord = `${newWord}${$wordCount}`;
                $wordCount += 1;
            }
            wordsMap[word] = newWord;
        }));
    }
    return wordsMap;
};
/** update words those need to be translated in spec */
exports.updateSchema = (spec, wordsMap) => {
    const { definitions } = spec;
    Object.getOwnPropertyNames(definitions).forEach((k) => {
        if (k in wordsMap) {
            definitions[wordsMap[k]] = definitions[k];
            delete definitions[k];
        }
    });
    traverseSchema_1.traverseSchema(spec, ({ value, parent, key }) => {
        if (key === '$ref' && typeof value === 'string') {
            const translatedWord = value.replace(/^#\/.+\//, '');
            if (translatedWord in wordsMap) {
                const matched = value.match(/^#\/.+\//);
                if (matched && matched.length > 0) {
                    parent.$ref = `${matched[0]}${wordsMap[translatedWord]}`;
                }
                else {
                    parent.$ref = wordsMap[translatedWord];
                }
            }
        }
    });
};
/** translate "$ref" value and keys in "definitions" in spec
 * just update the spec parame object
 * not return a new object
 * */
exports.translateSchema = async (spec, engineName) => {
    const words = exports.gatherNonEnglishWords(spec);
    const map = await exports.generateTranslationMap(words, engineName);
    exports.updateSchema(spec, map);
};
