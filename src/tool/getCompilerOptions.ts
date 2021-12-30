import { join } from 'path'
import { existsSync, readFileSync } from 'fs'
import { parse } from 'json5'
import appRoot = require('app-root-path')
import type * as ts from 'typescript'

/**
 * get tsconfig compilerOptions from cwd project
 * if not exist, return empty object
 * */
export const getCompilerOptions = () => {
  const cwdTsconfigPath = join(appRoot.path, 'tsconfig.json')
  const tsConfig = existsSync(cwdTsconfigPath) ? parse(readFileSync(cwdTsconfigPath).toString()) : {}
  return (tsConfig.compilerOptions || {}) as ts.CompilerOptions
}
