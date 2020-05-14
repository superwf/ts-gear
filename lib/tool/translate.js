"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = exports.translateEngines = void 0;
const translation_js_1 = require("translation.js");
exports.translateEngines = {
    baidu: translation_js_1.baidu,
    google: translation_js_1.google,
};
/** change the engine, the result will definitely be different.
 * better not use this.
 * */
async function translate(text, engineName) {
    try {
        const res = await exports.translateEngines[engineName].translate({
            text,
            // from: 'zh-CN',
            to: 'en',
        });
        return res.result.join('');
    }
    catch (e) {
        throw new Error(`translate word "${text}" by engine "${engineName}" fail, original error: ${e.message}`);
    }
}
exports.translate = translate;
