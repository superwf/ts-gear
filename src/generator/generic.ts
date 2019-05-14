// import * as ts from 'typescript'

// const generateGenericType = (v: string) => {

//   ts.createDo

// }
// declare module traverse {}
import * as ts from 'typescript'

// const printer: ts.Printer = ts.createPrinter()
const sourceFile: ts.SourceFile = ts.createSourceFile(
  'test.ts',
  `export interface ReplyVO {
  /**
   * 响应代码【0正确,非0错误】
   */
  code: string;
  /**
   * 返回数据
   */
  data?: {
    [k: string]: any;
  };
  /**
   * 结果描述
   */
  message: string;
  [k: string]: any;
}`,
  ts.ScriptTarget.ES2015,
  true,
  ts.ScriptKind.TS,
)
// console.log(sourceFile.statements[0].members)
ts.forEachChild(sourceFile, node => {
  // console.log(node.kind)
  node.forEachChild(n => {
    console.log(1, n.getFullText())
  })
})

// ts.createInterfaceDeclaration()

// console.log(printer.printFile(sourceFile))
