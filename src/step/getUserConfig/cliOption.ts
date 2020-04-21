import * as program from 'commander'
import { castArray } from 'lodash'

// import pkg from '../../../package.json'

function collect(value: string, previous: string[]) {
  if (!previous.includes(value)) {
    return [...previous, value]
  }
  return previous
}

interface IResult {
  names: string[]
  init: boolean
}

/**
 * @remarks collect project names from cli
 * */
export const getCliOption = (): IResult => {
  program
    // .version(pkg.version)
    .usage('tsg or tsg -p projectName')
    .option('-p, --projects <project name>', 'assign project name', collect, [])
    .option('-i, --init', 'create ts-gear config file')
    .parse(process.argv)

  const result: IResult = {
    names: [],
    init: Boolean(program.init),
  }
  const names = program.projects
  if (names) {
    result.names = castArray(names)
  }
  return result
}
