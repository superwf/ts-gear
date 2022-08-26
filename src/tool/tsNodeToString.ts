/** try some ts methods */
import * as ts from 'typescript'

const printer = ts.createPrinter({
  newLine: ts.NewLineKind.LineFeed,
})
const file = ts.createSourceFile('someFileName.ts', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)

export const tsNodeToString = (node: ts.Node) => printer.printNode(ts.EmitHint.Unspecified, node, file)
