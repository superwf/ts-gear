import program from 'commander'

function collect(value: string, previous: string[]) {
  if (!previous.includes(value)) {
    return [...previous, value]
  }
  return previous
}

/**
 * @remarks collect project names from cli
 * */
export const getProjectNamesFromCommmandLine = (): string[] => {
  program
    .usage('tsg or tsg -p projectName')
    .option('-p, --projects <project name>', 'assign project name', collect, [])
    .parse(process.argv)

  const names = program.projects
  if (!names) {
    return []
  }
  if (names && typeof names === 'string') {
    return [names]
  }
  return names
}
