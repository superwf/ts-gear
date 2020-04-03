import { upperFirst } from 'lodash'
/**
 * lodash的camelCase在处理有非字符存在的时候的不一致行为，
 * 例如 PageVO«CisSkuListVO» => PageVOCisSkuListVO
 * 而本身已经是驼峰格式的名字会转换为尾字母小写
 * 例如 PageVOCisSkuListVO => PageVoCisSkuListVo
 * 形成不一致的命名
 * 这个自定义的camelCase统一该行为
 *  */
export const camelCase = (name: string) => {
  const invalidVariableCharatorReg = /[^a-z0-9]/i
  if (invalidVariableCharatorReg.test(name)) {
    return name
      .split(/[^a-z0-9]/i)
      .map(n => upperFirst(n))
      .join('')
  }
  return upperFirst(name)
}
