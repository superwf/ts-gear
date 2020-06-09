import { Spec } from 'swagger-schema-official';
import { TranslationEngine, IWordsMap } from '../interface';
export declare const cnReg: RegExp;
/** gather all words those need to be translated in spec */
export declare const gatherNonEnglishWords: (spec: Spec) => string[];
/**
 * generate a translation map, as
 *
 * @return translation map
 * {
 *   "结果": "Result",
 * }
 * */
export declare const generateTranslationMap: (originWords: string[], engine: TranslationEngine) => Promise<IWordsMap>;
/** update words those need to be translated in spec */
export declare const updateSchema: (spec: Spec, wordsMap: IWordsMap) => void;
/** translate "$ref" value and keys in "definitions" in spec
 * just update the spec parame object
 * not return a new object
 * */
export declare const translateSchema: (spec: Spec, engineName: TranslationEngine) => Promise<void>;
