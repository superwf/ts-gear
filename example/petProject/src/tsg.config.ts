import { Options } from 'prettier'

import { Project, fetchRequester } from 'ts-gear'

const prettierConfig: Options = {
  semi: false,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: false,
}

const projects: Project[] = [
  {
    name: 'pet',
    dest: 'service',
    source: '../../fixture/pet.json',
    requester: fetchRequester(),
    prettierConfig,
    skipCache: true,
    transformJS: true,
    // source: 'http://petstore.swagger.io/v2/swagger.json',
  },
  {
    name: 'projectE',
    dest: 'service',
    source: '../../fixture/projectE.json',
    keepGeneric: true,
    importRequesterStatement: 'import { requester } from "fffxx"',
    prettierConfig,
    skipCache: true,
  },
  {
    name: 'v3',
    dest: 'service',
    source: '../../fixture/openapiv3.json',
    keepGeneric: true,
    importRequesterStatement: 'import { requester } from "fffxx"',
    prettierConfig,
    skipCache: true,
  },
]

export default projects
