/* eslint-disable @typescript-eslint/no-var-requires */
const { sep, join } = require('path')

const { reduce } = require('lodash')

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
