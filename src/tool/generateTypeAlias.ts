import * as ts from 'typescript'
import { tsNodeToString } from './tsNodeToString'

const { factory } = ts

export const generateTypeAlias = (left: string, right: string) => {
  const node = factory.createTypeAliasDeclaration(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    left,
    undefined,
    factory.createTypeReferenceNode(right, []),
  )
  return tsNodeToString(node)
}
