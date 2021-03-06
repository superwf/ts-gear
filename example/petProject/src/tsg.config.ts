import type { Options } from 'prettier'
import type { Project } from '../../../src/type'

const prettierConfig: Options = {
  semi: false,
  useTabs: false,
  singleQuote: true,
  trailingComma: 'all',
  jsxBracketSameLine: false,
  // parser: 'babel',
}

const projects: Project[] = [
  {
    name: 'pet',
    dest: 'service',
    source: '../../fixture/pet.json',
    importRequesterStatement: 'import { requester } from "../../requester"',
    // prettierConfig,
    // shouldExportRequestOptionType: true,
    // shouldExportResponseType: true,
    // shouldGenerateMock: true,
    // useCache: false,
    EOL: '\n',
    // source: 'http://petstore.swagger.io/v2/swagger.json',
  },
  {
    name: 'projectE',
    dest: 'service',
    source: '../../fixture/projectE.json',
    keepGeneric: true,
    importRequesterStatement: 'import { requester } from "fffxx"',
    EOL: '\n',
    // prettierConfig,
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
]

export default projects
