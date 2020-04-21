import { Spec } from 'swagger-schema-official';
/** use cleanName for all "$ref" and "definitions" names
 * mutate the spec data
 * */
export declare const cleanRefAndDefinitionName: (spec: Spec, keepGeneric: boolean) => void;
