#! /usr/bin/env node

import { exec } from 'child_process'
import { resolve } from 'path'

const mainFilePath = resolve(__dirname, '../src/main.ts')
const tsConfigPath = resolve(__dirname, '../tsconfig.json')

/** 直接使用ts-node调用，带类型校验 */
exec(
  `npx ts-node --project ${tsConfigPath} ${mainFilePath}`,
  (err, stdout: string | Buffer, stderr: string | Buffer) => {
    console.log('stdout:', stdout)
    console.error('stderr:', stderr)
  },
)
