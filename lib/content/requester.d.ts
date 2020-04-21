import { IProject } from '../interface';
/** get ts-gear.ts file relative path to import in request
 * */
export declare const requester: (project: IProject) => {
    import: string;
    code: string;
};
