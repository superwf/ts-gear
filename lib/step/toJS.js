"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJS = void 0;
const path_1 = require("path");
const ts = require("typescript");
const constant_1 = require("../constant");
const log_1 = require("../tool/log");
function toJS(project, tsGearConfigPath) {
    const compilerOptions = {
        module: ts.ModuleKind.ESNext,
        target: ts.ScriptTarget.ESNext,
    };
    const targetPath = path_1.join(tsGearConfigPath, project.dest, project.name);
    const fileNames = [path_1.join(targetPath, constant_1.targetFileNames.index)];
    const program = ts.createProgram(fileNames, compilerOptions);
    const emitResult = program.emit();
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
    const exitCode = emitResult.emitSkipped ? 1 : 0;
    if (exitCode === 0) {
        log_1.info(`project "${project.name}" transpiled to javascript success.`);
    }
}
exports.toJS = toJS;
