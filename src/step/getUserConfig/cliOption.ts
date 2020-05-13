import * as program from 'commander'

import { configFileName } from '../../constant'

function collectProjects(value: string) {
  return value.split(',')
}

interface IResult {
  names: string[]
  init: boolean
  config: string
}

/**
 * @remarks collect project names from cli
 * */
export const getCliOption = (): IResult => {
  // eslint-disable-next-line
  // const pkg = require('../../../package.json')
  program
    // .version(pkg.version)
    .usage('tsg or tsg -p projectName')
    .option(
      '-p, --projects <project name>',
      'assign project name, more names use comma split, like projectA,projectB',
      collectProjects,
    )
    .option('-i, --init', `create ${configFileName}.ts config file`)
    .option('-c, --config <assign config file>', 'assign config file')
    .parse(process.argv)

  const result: IResult = {
    names: [],
    init: Boolean(program.init),
    config: '',
  }
  const names = program.projects
  if (names) {
    result.names = names
  }
  if (program.config) {
    result.config = String(program.config).trim()
  }
  // if not delete commander cache
  // program will keep cache and break test
  delete program.projects
  delete program.init
  return result
}
