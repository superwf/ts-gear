import { IProject } from './interface';
export declare const processProject: (project: IProject, tsGearConfigPath: string) => Promise<void>;
/**
 * run step by step
 * sequence could not be changed
 * every step depends on the pre step
 * */
export declare const run: () => Promise<void>;
