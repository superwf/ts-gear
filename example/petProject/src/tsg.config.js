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
        // prettierConfig,
        transformJS: true,
    },
    {
        name: 'projectE',
        dest: 'service',
        source: '../../fixture/projectE.json',
        keepGeneric: true,
        importRequesterStatement: 'import { requester } from "fffxx"',
    },
    {
        name: 'v3',
        dest: 'service',
        source: '../../fixture/openapiv3.json',
        keepGeneric: true,
        importRequesterStatement: 'import { requester } from "fffxx"',
        useCache: false,
    },
];
export default projects;
