#! /usr/bin/env node

import { join } from 'path'
import { existsSync, readFileSync } from 'fs'

import { register } from 'ts-node'
import * as tsConfigPaths from 'tsconfig-paths'

import { run } from './run'

const cwd = process.cwd()
const cwdTsconfigPath = join(cwd, 'tsconfig.json')
const tsConfig = existsSync(cwdTsconfigPath) ? JSON.parse(readFileSync(cwdTsconfigPath).toString()) : {}

if (tsConfig.compilerOptions?.paths) {
  tsConfigPaths.register({
    baseUrl: cwd,
    paths: tsConfig.compilerOptions.paths,
  })
}

register({
  typeCheck: true,
  compilerOptions: tsConfig.compilerOptions,
})

run()
