import { Response, Reference } from 'swagger-schema-official';
import { IAssembleResponse } from '../../interface';
/**
 * when has responses spec, get an interface type and use the first 2xx member as successType
 * when has not responses, use any as successType
 * */
export declare const generateResponseType: (functionName: string, responses: {
    [responseName: string]: Reference | Response;
}) => IAssembleResponse;
