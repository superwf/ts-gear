import * as program from 'commander'

import { configFileName } from '../../constant'

function collect(value: string) {
  return value.split(',')
}

interface IResult {
  names: string[]
  init: boolean
}

/**
 * @remarks collect project names from cli
 * */
export const getCliOption = (): IResult => {
  // eslint-disable-next-line
  const pkg = require('../../../package.json')
  program
    .version(pkg.version)
    .usage('tsg or tsg -p projectName')
    .option(
      '-p, --projects <project name>',
      'assign project name, more names use comma split, like projectA,projectB',
      collect,
    )
    .option('-i, --init', `create ${configFileName}.ts config file`)
    .parse(process.argv)

  const result: IResult = {
    names: [],
    init: Boolean(program.init),
  }
  const names = program.projects
  if (names) {
    result.names = names
  }
  // if not delete commander cache
  // program will keep cache and break test
  delete program.projects
  delete program.init
  return result
}
