import { join } from 'path'

import * as ts from 'typescript'

import { targetFileNames } from '../constant'
import { Project } from '../type'
import { info } from '../tool/log'

export function toJS(project: Project, tsGearConfigPath: string): void {
  const compilerOptions: ts.CompilerOptions = {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ESNext,
  }
  const targetPath = join(tsGearConfigPath, project.dest, project.name)
  const fileNames = [join(targetPath, targetFileNames.index)]
  const program = ts.createProgram(fileNames, compilerOptions)
  const emitResult = program.emit()

  // const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics)

  // allDiagnostics.forEach(diagnostic => {
  //   if (diagnostic.file) {
  //     const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!)
  //     const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
  //     console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`)
  //   } else {
  //     console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'))
  //   }
  // })

  const exitCode = emitResult.emitSkipped ? 1 : 0
  if (exitCode === 0) {
    info(`project "${project.name}" transpiled to javascript success.`)
  }
}
