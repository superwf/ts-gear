import { Options } from 'prettier';
/** read your current project prettier config
 * write formatted typescript content
 * */
export declare const prettierWrite: (content: string, destPath: string, option?: Options | undefined) => void;
