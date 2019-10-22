import { SourceFile } from 'ts-morph';
/** 使用ts-morph编译ts，隐藏细节，只暴露SourceFile */
export declare const compile: (func: (s: SourceFile) => void, source?: string) => Promise<string>;
