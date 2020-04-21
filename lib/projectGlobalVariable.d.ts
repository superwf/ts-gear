import { IProject, HttpMethod } from './interface';
export declare const getGlobal: (project: IProject) => import("./interface").IProjectGlobal;
export declare const restore: (project: IProject) => void;
export declare const httpMethods: HttpMethod[];
