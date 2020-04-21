import { EOL } from 'os'
import { writeFileSync } from 'fs'
import { createInterface } from 'readline'

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const result: string[] = []
let recording = false
rl.on('line', line => {
  if (
    line.startsWith('Statements') ||
    line.startsWith('Branches') ||
    line.startsWith('Functions') ||
    line.startsWith('Lines')
  ) {
    result.push(`##${line}${EOL}${EOL}`)
  }
  if (line.startsWith('File')) {
    recording = true
  }
  if (line.startsWith('Done')) {
    recording = false
  }
  if (recording) {
    result.push(line + EOL)
  }
})
rl.on('close', () => {
  result.pop()
  writeFileSync('./coverage.md', result.join(''), {
    encoding: 'utf8',
  })
})
