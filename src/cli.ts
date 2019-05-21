import { exec } from 'child_process'
import { resolve } from 'path'

const runFilePath = resolve(__dirname, '../src/run.ts')

// console.log(`npx ts-node ${runFilePath}`)
exec(
  `npx ts-node ${runFilePath}`,
  (err, stdout: string | Buffer, stderr: string | Buffer) => {
    console.log(stdout)
    console.log(stderr)
  },
)
