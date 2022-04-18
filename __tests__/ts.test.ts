/** try some ts methods */
import * as ts from 'typescript'

describe('ts', () => {
  it('ts', () => {
    const printer = ts.createPrinter({
      newLine: ts.NewLineKind.LineFeed,
    })
    const { factory } = ts
    function printNode(node: ts.Node) {
      const file = ts.createSourceFile('someFileName.ts', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS)
      return printer.printNode(ts.EmitHint.Unspecified, node, file)
    }
    const s1 = factory.createUnionTypeNode([
      factory.createLiteralTypeNode(factory.createStringLiteral('a')),
      factory.createLiteralTypeNode(factory.createStringLiteral('b')),
    ])
    const s2 = factory.createTypeAliasDeclaration(
      undefined,
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      'TypeA',
      undefined,
      s1,
    )
    expect(printNode(s2)).toBe('export type TypeA = "a" | "b";')

    const s3 = factory.createTypeAliasDeclaration(
      undefined,
      [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
      'TypeB',
      undefined,
      factory.createTypeReferenceNode('TypeA', []),
    )
    expect(printNode(s3)).toBe('export type TypeB = TypeA;')
  })
})
