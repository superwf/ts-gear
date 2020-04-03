/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const reduce = require('lodash/reduce')

const tsconfig = require('./tsconfig.json')
/* eslint-enable @typescript-eslint/no-var-requires */

const { sep } = path

const pathAlias = reduce(
  tsconfig.compilerOptions.paths,
  (r, v, k) => ({
    ...r,
    [k.replace(`${sep}*`, '')]: path.join(__dirname, v[0].replace(`${sep}*`, '')),
  }),
  {},
)

module.exports = {
  presets: ['react-app'],
  plugins: [
    // 与tsconfig.json统一加载路径别名
    [
      'module-resolver',
      {
        alias: pathAlias,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.es', '.es6', '.mjs'],
      },
    ],
  ],
}
