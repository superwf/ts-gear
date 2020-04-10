/* eslint-disable @typescript-eslint/no-var-requires */
const reduce = require('lodash/reduce')

const tsconfig = require('./tsconfig.json')

/* eslint-enable @typescript-eslint/no-var-requires */

// 处理tsconfig的路径别名
const pathAlias = reduce(
  tsconfig.compilerOptions.paths,
  (r, v, k) => {
    r.push([k.replace('/*', ''), v[0].replace('/*', '')])
    return r
  },
  [],
)

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended',
  ],

  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        eslintIntegration: true,
        stylelintIntegration: true,
        printWidth: 120,
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        semi: false,
        trailingComma: 'all',
        jsxBracketSameLine: false,
        endOfLine: 'lf',
      },
    ],
    'import/order': ['error', { 'newlines-between': 'always' }],

    '@typescript-eslint/camelcase': [
      'error',
      {
        properties: 'always',
      },
    ],

    'import/prefer-default-export': 0,
    'import/no-unresolved': ['error', { ignore: ['swagger-schema-official'] }],
    'no-param-reassign': 0,

    // let prettier handle indent
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/interface-name-prefix': [1, 'always'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],

    // skip check var starts with "_"
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true, varsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: pathAlias,
        extensions: ['.ts', '.js', '.jsx', '.json', '.tsx'],
      },
    },
  },
}
