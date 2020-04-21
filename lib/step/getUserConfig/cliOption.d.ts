interface IResult {
    names: string[];
    init: boolean;
}
/**
 * @remarks collect project names from cli
 * */
export declare const getCliOption: () => IResult;
export {};
