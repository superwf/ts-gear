import chalk from 'chalk'
const { log } = console

const { blue, red, yellow } = chalk.bold

/** log blue message in console */
export function info(message: string) {
  log(blue(message))
}

/** log red message in console */
export function error(message: string) {
  log(red(message))
}

/** log yellow message in console */
export function warn(message: string) {
  log(yellow(message))
}
