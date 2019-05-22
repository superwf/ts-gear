import { exec } from 'child_process'
import { resolve } from 'path'

const mainFilePath = resolve(__dirname, '../src/main.ts')

/** 直接使用ts-node调用，带类型校验 */
exec(
  `npx ts-node ${mainFilePath}`,
  (err, stdout: string | Buffer, stderr: string | Buffer) => {
    console.log(stdout)
    console.log(stderr)
  },
)
