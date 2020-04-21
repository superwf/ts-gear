import { Spec } from 'swagger-schema-official';
import { IProject } from '../interface';
/**
 * collect definition to definitionMap
 * collect request to requestMap, skip deprecated
 * */
export declare const assembleSchemaToGlobal: (spec: Spec, project: IProject) => void;
