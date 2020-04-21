import { Spec } from 'swagger-schema-official';
import { IProject } from '../../interface';
/** from swagger spec paths assemble request functions */
export declare const generateRequestContent: (spec: Spec, project: IProject) => string;
