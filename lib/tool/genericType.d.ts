import { IGenericNameNode, IDefinitionMap } from '../interface';
export declare const hasGenericSymbol: (name: string) => boolean;
export declare const removeGenericSymbol: (name: string) => string;
/** process generic type name */
export declare const parseGenericNames: (name: string) => IGenericNameNode[];
/** from generic name node to name string
 * reverse of parseGenericNames
 * */
export declare const getGenericNameFromNode: (node: IGenericNameNode) => string;
/** try hard to keep every nest level generic name
 * if exist in definitionMap keep it
 * else remove generic symbol: <>
 * */
export declare const guessGenericTypeName: (node: IGenericNameNode, definitionMap: IDefinitionMap) => string;
