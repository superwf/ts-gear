/* eslint-disable no-console */
import chalk from 'chalk'

const { blue, red, yellow } = chalk.bold

/** log blue message in console */
export function info(...messages: string[]) {
  console.log(blue(messages.join('')))
}

/** log red message in console */
export function error(...messages: string[]) {
  console.log(red(messages.join('')))
}

/** log yellow message in console */
export function warn(...messages: string[]) {
  console.log(yellow(messages.join('')))
}
