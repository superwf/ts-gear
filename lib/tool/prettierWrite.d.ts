import { Options } from 'prettier';
/**
 * read from tsg config project prettier config
 * write formatted typescript content
 * */
export declare const prettierWrite: (content: string, destPath: string, option?: Options | undefined) => void;
