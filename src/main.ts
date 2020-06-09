#! /usr/bin/env node

import { register } from 'ts-node'

import { run } from './run'

register({
  typeCheck: true,
  compilerOptions: {
    target: 'esnext',
    lib: ['dom', 'esnext'],
    skipLibCheck: true,
    module: 'commonjs',
    moduleResolution: 'node',
    resolveJsonModule: true,
    declarationDir: 'lib',
    outDir: 'lib',
  },
})

run()
