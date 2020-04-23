/* eslint-disable @typescript-eslint/no-var-requires */
const { sep, join } = require('path')

const { reduce } = require('lodash')
const { defaults: tsjPreset } = require('ts-jest/presets')

const tsconfig = require('./tsconfig.json')
/* eslint-enable @typescript-eslint/no-var-requires */

const pathAlias = reduce(
  tsconfig.compilerOptions.paths,
  (r, v, k) => ({
    ...r,
    [k.replace(`${sep}*`, '')]: join(__dirname, v[0].replace(`${sep}*`, '')),
  }),
  {},
)

module.exports = {
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['tmp', 'example'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverageFrom: ['src/**/*.{ts,tsx}', '!*.d.ts', '!src/main.ts'],
  transform: {
    ...tsjPreset.transform,
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
  },
  coverageReporters: ['text-summary', 'text', 'json', 'lcov', 'clover', 'json-summary'],
  testRegex: '__tests__/.*\\.test\\.(ts|tsx)$',
  moduleNameMapper: {
    ...reduce(
      pathAlias,
      (r, v, k) => {
        r[`^${k}/(.+)$`] = `${v.replace(__dirname, '<rootDir>')}/$1`
        return r
      },
      {},
    ),
  },
}
