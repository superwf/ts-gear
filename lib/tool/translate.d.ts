import { baidu, google } from 'translation.js';
import { TranslationEngine } from '../interface';
export declare const translateEngines: {
    baidu: typeof baidu;
    google: typeof google;
};
/** change the engine, the result will definitely be different.
 * better not use this.
 * */
export declare function translate(text: string, engineName: TranslationEngine): Promise<string>;
