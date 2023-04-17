#! /usr/bin/env node

import { register } from 'ts-node'
import * as tsConfigPaths from 'tsconfig-paths'
import { getCompilerOptions } from './tool/getCompilerOptions'
import { runByCommand } from './run'

const cwd = process.cwd()

const compilerOptions = getCompilerOptions()

if (compilerOptions.paths) {
  tsConfigPaths.register({
    baseUrl: cwd,
    paths: compilerOptions.paths,
  })
}

register({
  typeCheck: true,
  compilerOptions: {
    ...compilerOptions,
    /** 必须使用commonjs，否则在nodejs环境跑不起来 */
    module: 'commonjs',
    /** 5.0 cjs有这个参数就会编译失败 */
    verbatimModuleSyntax: false,
  },
})

runByCommand()
