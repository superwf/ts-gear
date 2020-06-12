import { sow, harvest } from '../source'

/**
 * read a import statement string
 * rename its default import to "requester"
 * or rename its first named import to alias "requester"
 * */
export const renameImportStatementToRequester = (importStatement: string) => {
  const sourceFile = sow(importStatement)
  const imports = sourceFile.getImportDeclarations()
  if (imports.length > 0) {
    const imp = imports[0]
    const defaultImport = imp.getDefaultImport()
    if (defaultImport) {
      defaultImport.rename('requester')
      return harvest(sourceFile)
    }

    const namedImports = imp.getNamedImports()
    if (namedImports) {
      namedImports[0].renameAlias('requester')
      // console.log(imp.getDefaultImport())
      return harvest(sourceFile)
    }
  }
  return ''
}
