import { Parameter, Reference } from 'swagger-schema-official';
import { ParameterPositionMap } from '../../interface';
/** assemble parameters to type ParameterPositionMap
 *
 * NOTD: body has a useless nest 'body' property, will generate type as
 * { body: { body: Pet } }
 * remove it to generate as below
 * { body: Pet }
 * */
export declare const assembleRequestParam: (parameters: Array<Parameter | Reference>) => ParameterPositionMap;
