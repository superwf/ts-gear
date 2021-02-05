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
    const firstImport = imports[0]
    const defaultImport = firstImport.getDefaultImport()
    if (defaultImport) {
      defaultImport.rename('requester')
      return harvest(sourceFile)
    }

    const namedImports = firstImport.getNamedImports()
    if (namedImports) {
      namedImports[0].renameAlias('requester')
      // console.log(imp.getDefaultImport())
      return harvest(sourceFile)
    }
  }
  return ''
}
