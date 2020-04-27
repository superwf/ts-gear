#! /usr/bin/env node

import { register } from 'ts-node'

import { run } from './run'

register({
  typeCheck: true,
  compilerOptions: {
    module: 'commonjs',
  },
})

run()
