interface IResult {
    names: string[];
    init: boolean;
    config: string;
}
/**
 * @remarks collect project names from cli
 * */
export declare const getCliOption: () => IResult;
export {};
