import { fetchRequester } from 'ts-gear';
const prettierConfig = {
    semi: false,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'all',
    jsxBracketSameLine: false,
};
const projects = [
    {
        name: 'pet',
        dest: 'service',
        source: '../../fixture/pet.json',
        requester: fetchRequester(),
        prettierConfig,
        transformJS: true,
    },
    {
        name: 'projectE',
        dest: 'service',
        source: '../../fixture/projectE.json',
        keepGeneric: true,
        importRequesterStatement: 'import { fetcher } from "fffxx"',
        prettierConfig,
    },
];
export default projects;
