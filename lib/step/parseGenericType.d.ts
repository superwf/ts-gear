import { IProject, IProjectGlobal } from '../interface';
/** check generic type
 * support nest level, as A<B> or A<B,C<D>>
 * if the type parameter does not exist in the definition schema, convert the name to normal type, remove all "<" and ">".
 * */
export declare const checkAndUpdateDefinitionTypeName: (projectGlobal: IProjectGlobal) => void;
export declare const checkAndUpdateRequestRef: (projectGlobal: IProjectGlobal) => void;
export declare const parseGenericType: (project: IProject) => void;
