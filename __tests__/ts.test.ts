import * as ts from 'typescript'

describe('ts', () => {
  it('ts', () => {
    const printer = ts.createPrinter({
      newLine: ts.NewLineKind.LineFeed,
    })
    function printNode(node: ts.Node) {
      const file = ts.createSourceFile(
        'someFileName.ts',
        '',
        ts.ScriptTarget.Latest,
        /*setParentNodes*/ false,
        ts.ScriptKind.TS,
      )
      return printer.printNode(ts.EmitHint.Unspecified, node, file)
    }
    const s1 = ts.createKeywordTypeNode(ts.SyntaxKind.AnyKeyword)
    const s2 = ts.createVariableStatement(
      [],
      ts.createVariableDeclarationList(
        [
          ts.createVariableDeclaration(
            'path',
            ts.createKeywordTypeNode(ts.SyntaxKind.StringKeyword),
            ts.createLiteral('path'),
          ),
        ],
        ts.NodeFlags.Const,
      ),
    )

    const s3 = ts.createTypeLiteralNode(
      [],
    )
    console.log(printNode(s1))
    console.log(printNode(s2))
    console.log(printNode(s3))
  })
})
