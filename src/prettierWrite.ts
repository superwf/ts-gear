import cosmiconfig from 'cosmiconfig'
import { writeFileSync } from 'fs'
import { format } from 'prettier'
// import defaultPrettierConfig from '../prettier.config'

/** 读取用prettier格式化写入文件
 * 使用ts-gear的prettier作为默认配置
 * 用cosmiconfig加载当前项目prettier配置
 * */
const prettierWrite = async (destPath: string, content: string) => {
  const result = await cosmiconfig('prettier').search()
  const config = result && result.config ? result.config : {}
  return writeFileSync(
    destPath,
    format(content, {
      // ...(defaultPrettierConfig as Options),
      ...config,
      parser: 'typescript',
    }),
  )
}

export default prettierWrite
