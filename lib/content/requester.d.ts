import { IProject } from '../interface';
/** get tsg.config.ts file relative path to import in request
 * */
export declare const requester: (project: IProject, tsGearConfigPath: string) => {
    import: string;
    code: string;
};
