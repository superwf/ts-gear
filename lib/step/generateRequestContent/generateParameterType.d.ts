import { Parameter, Reference } from 'swagger-schema-official';
/**
 * @param name request function parameter interface name
 * @param parameters swagger request parameters
 * */
export declare const generateParameterType: (functionName: string, parameters: Array<Parameter | Reference>) => {
    parameterTypeName: string;
    parameterTypeContent: string;
};
