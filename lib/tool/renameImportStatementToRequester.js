"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameImportStatementToRequester = void 0;
const source_1 = require("../source");
/**
 * read a import statement string
 * rename its default import to "requester"
 * or rename its first named import to alias "requester"
 * */
exports.renameImportStatementToRequester = (importStatement) => {
    const sourceFile = source_1.sow(importStatement);
    const imports = sourceFile.getImportDeclarations();
    if (imports.length > 0) {
        const imp = imports[0];
        const defaultImport = imp.getDefaultImport();
        if (defaultImport) {
            defaultImport.rename('requester');
            return source_1.harvest(sourceFile);
        }
        const namedImports = imp.getNamedImports();
        if (namedImports) {
            namedImports[0].renameAlias('requester');
            // console.log(imp.getDefaultImport())
            return source_1.harvest(sourceFile);
        }
    }
    return '';
};
