import { IProject } from '../../interface';
/** get user config
 * filter if any cli option
 * */
export declare const getUserConfig: () => Promise<{
    tsGearConfigPath: string;
    projects: IProject[];
}>;
