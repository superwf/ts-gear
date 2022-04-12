import type { Options } from 'prettier'
import type { Project } from '../../../src/type'

const prettierConfig: Options = {
  semi: false,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  // parser: 'babel',
}

const projects: Project[] = [
  {
    name: 'pet',
    dest: 'service',
    source: '../../fixture/pet.json',
    // source: 'http://petstore.swagger.io/v2/swagger.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    simplifyRequestOption: true,
    EOL: '\n',
    withBasePath: true,
  },
  {
    name: 'petv3',
    dest: 'service',
    source: 'https://petstore3.swagger.io/api/v3/openapi.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    simplifyRequestOption: true,
    EOL: '\n',
    withBasePath: true,
  },
  {
    name: 'projectE',
    dest: 'service',
    source: '../../fixture/projectE.json',
    keepGeneric: true,
    importRequesterStatement: 'import { requester } from "fffxx"',
    EOL: '\n',
    translationEngine: 'baidu',
  },
  {
    name: 'v3',
    dest: 'service',
    source: '../../fixture/openapiv3.json',
    keepGeneric: true,
    importRequesterStatement: 'import { requester } from "fffxx"',
    shouldGenerateMock: true,
    useCache: false,
    prettierConfig,
    EOL: '\n',
  },
  {
    name: 'nullable',
    dest: 'service',
    source: '../../fixture/nullable.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    nullableFalseAsRequired: true,
    // prettierConfig,
    // shouldExportRequestOptionType: true,
    // shouldExportResponseType: true,
    // shouldGenerateMock: true,
    // useCache: false,
  },
]

export default projects
