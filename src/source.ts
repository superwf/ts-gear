import {
  // OptionalKind,
  Project,
  // PropertySignatureStructure,
  ScriptTarget,
  SourceFile,
} from 'ts-morph'

const project = new Project({
  useInMemoryFileSystem: true,
  compilerOptions: {
    target: ScriptTarget.ESNext,
  },
})

const virtualFileName = 'file.ts'
const fs = project.getFileSystem()

/** 使用ts-morph编译ts，隐藏细节，只暴露SourceFile */
export const compile = async (func: (s: SourceFile) => void, source?: string) => {
  const sourceFile = project.createSourceFile(virtualFileName, source)
  func(sourceFile)
  await sourceFile.save()
  const result = fs.readFileSync(virtualFileName)
  await sourceFile.deleteImmediately()
  await project.removeSourceFile(sourceFile)
  return result
}
