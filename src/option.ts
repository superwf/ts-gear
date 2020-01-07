import program from 'commander'

/** 收集项目名称参数 */
function collect(value: string, previous: string[]) {
  if (!previous.includes(value)) {
    return [...previous, value]
  }
  return previous
}

/**
 * @remarks 从命令行获取指定的项目名称
 * @return string[]
 * */
export const getProjectsFromCommmandLine = (): string[] => {
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
