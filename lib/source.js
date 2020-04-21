"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_morph_1 = require("ts-morph");
const project = new ts_morph_1.Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
        target: ts_morph_1.ScriptTarget.ESNext,
    },
});
const fs = project.getFileSystem();
// make virtualFileName uniq
let virtualFileNameId = 0;
/** 使用ts-morph编译ts，隐藏细节，只暴露SourceFile */
exports.compile = async (func, source) => {
    const fileName = `file${virtualFileNameId++}.ts`;
    const sourceFile = project.createSourceFile(fileName, source);
    func(sourceFile);
    await sourceFile.save();
    const result = fs.readFileSync(fileName);
    await sourceFile.deleteImmediately();
    await project.removeSourceFile(sourceFile);
    return result;
};
/** get SourceFile */
exports.sow = (content) => {
    const name = `file${virtualFileNameId++}.ts`;
    const sourceFile = project.createSourceFile(name, content);
    sourceFile.$$fileName = name;
    return sourceFile;
};
/** remove SourceFile and get typescript content */
exports.harvest = (sourceFile) => {
    sourceFile.saveSync();
    const result = fs.readFileSync(sourceFile.$$fileName);
    sourceFile.deleteImmediatelySync();
    project.removeSourceFile(sourceFile);
    return result;
};
