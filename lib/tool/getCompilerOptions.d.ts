import * as ts from 'typescript';
/**
 * get tsconfig compilerOptions from cwd project
 * if not exist, return empty object
 * */
export declare const getCompilerOptions: () => ts.CompilerOptions;
