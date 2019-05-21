import chalk from 'chalk'
const { log } = console

const { blue, red, yellow } = chalk.bold

/** log blue message in console */
export function info(...messages: string[]) {
  log(blue(messages.join('')))
}

/** log red message in console */
export function error(...messages: string[]) {
  log(red(messages.join('')))
}

/** log yellow message in console */
export function warn(...messages: string[]) {
  log(yellow(messages.join('')))
}
