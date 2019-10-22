/** 读取用prettier格式化写入文件
 * 使用ts-gear的prettier作为默认配置
 * 用cosmiconfig加载当前项目prettier配置
 * */
declare const prettierWrite: (destPath: string, content: string) => Promise<void>;
export default prettierWrite;
