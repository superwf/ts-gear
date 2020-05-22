import { IDefinitionMap } from '../interface';
/**
 * add a new type definition to definitionMap
 * */
export declare const patchGlobalDefinitionMap: ({ typeName, definitionMap, alias, originalName, }: {
    typeName: string;
    definitionMap: IDefinitionMap;
    alias?: string | undefined;
    originalName?: string | undefined;
}) => void;
