/**
 * clean type name for typescript definition
 * remove "#/definitions/"
 * remove "#/components/schema/"
 * remove all spaces
 * remove all non english charator, like "😝"
 * replace "«" with "<" when keepGeneric
 * replace "»" with ">" when keepGeneric
 * upper case each word first charator
 * */
export declare const cleanName: (name: string, keepGeneric: boolean) => string;
