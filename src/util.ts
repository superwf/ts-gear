import { resolve } from 'path'
import { EOL } from 'os'

import { fromPairs, map, memoize, MemoizedFunction, uniq, upperFirst } from 'lodash'
import { baidu, google, youdao } from 'translation.js'

import traverse = require('traverse')
import { ISchemaNode, JSONSchema } from './interface'

const translateEngines = [baidu, youdao, google]

const translate: (text: string, index?: number) => Promise<string> = async (text: string, engineIndex = 0) => {
  if (engineIndex >= translateEngines.length) {
    throw new Error('translate error, all translate engine can not access')
  }

  const index = engineIndex

  try {
    const res = await translateEngines[index].translate({
      text,
      // from: 'zh-CN',
      to: 'en',
    })
    return res
      .result![0].split(' ')
      .map(upperFirst)
      .join('')

    // return enKey
  } catch (err) {
    return translate(text, index + 1)
  }
}

/** 将一些definitinos与$ref中的中文翻印成可作为变量名的英文
 * 使用memoize避免重复翻译
 * */
export const translateAsync: ((text: string, index?: number) => Promise<string>) & MemoizedFunction = memoize(translate)

/** 当前项目的根路径，调用其他文件都以该路径为基准 */
export const tsGearRoot = resolve(__dirname, '..')

/**
 * lodash的camelCase在处理有非字符存在的时候的不一致行为，
 * 例如 PageVO«CisSkuListVO» => PageVOCisSkuListVO
 * 而本身已经是驼峰格式的名字会转换为尾字母小写
 * 例如 PageVOCisSkuListVO => PageVoCisSkuListVo
 * 形成不一致的命名
 * 这个自定义的camelCase统一该行为
 *  */
const camelCase = (name: string) => {
  const invalidVariableCharatorReg = /[^a-z0-9]/i
  if (invalidVariableCharatorReg.test(name)) {
    return name
      .split(/[^a-z0-9]/i)
      .map(n => upperFirst(n))
      .join('')
  }
  return upperFirst(name)
}

/**
 * 返回$ref里的去掉`#/definitions/`部分剩下的字符串
 * transform '#/definitions/Order' to 'Order'
 * */
export const trimDefinitionPrefix = ($ref: string) => $ref.replace('#/definitions/', '')

/** transform /abc/{id} to /abc/:id */
export const transformPathParameters = (v: string) => {
  if (v.includes('{')) {
    return v
      .split('/')
      .map(s => {
        const reg = /[{}]/g
        if (reg.test(s)) {
          return `:${s.replace(reg, '')}`
        }
        return s
      })
      .join('/')
  }
  return v
}

/**
 * 递归处理对象值
 * 主要用来处理swagger schema中的paths与definitions
 * @param {object} 对象，一般为json schema
 * @param {funnction} 在递归中处理每个节点的函数
 * */
export const traverseSchema = (obj: { [k: string]: any }, func: (v: ISchemaNode) => void): void => {
  traverse(obj).forEach(function(this: any, value: any) {
    // schema是从json来的应该没有circular
    // 既然可以检查就还是校验一下
    if (this.circular || !this.key || this.key === 'required') {
      return
    }
    const node = {
      value,
      key: this.key,
      parent: (this.parent || {}).node,
      path: this.path,
    }
    func(node)
  })
}

/** 生成唯一的名字
 * 如果已经存在则名称后面的数字累加
 * 搭配翻译功能用，因为翻译完的英文很可能重复
 * */
export const getUniqName = (text: string, exist: (t: string) => boolean, accumulator?: number): string => {
  if (!accumulator) {
    if (!exist(text)) {
      return text
    }
    accumulator = 1
  } else {
    const newText = `${text}${accumulator}`
    if (!exist(newText)) {
      return newText
    }
    accumulator += 1
  }
  return getUniqName(text, exist, accumulator)
}

/** 初始化整个schema
 * 针对所有definitions的key，与所有$ref
 * 放在traverseSchema中运行
 * * 翻译
 * * 去空格与不能作为变量名的非法字符
 * * 首字母大写
 * */
export const initializeSchema = async (schema: JSONSchema) => {
  // copy some translate part from pont src/scripts/base.ts
  const cnReg = /[\u4e00-\u9fa5]/

  // 所有没有在definitions定义的$ref，都转换成type any
  const $refsNotInDefinitions: Set<string> = new Set()
  // 所有paths中的$ref
  const $refsInPaths: Set<string> = new Set()

  let cnWords: string[] = []
  const definitions = schema.definitions!

  traverseSchema(schema, async ({ value, parent, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      value = trimDefinitionPrefix(value)
      // 将所有#/definitions/前缀去掉，之后就不用再处理了
      parent.$ref = value
      if (cnReg.test(value)) {
        cnWords.push(value)
      }
    }
  })
  Object.getOwnPropertyNames(definitions).forEach(key => {
    if (cnReg.test(key)) {
      cnWords.push(key)
    }
  })
  cnWords = uniq(cnWords)

  let cnMapToEn: any = {}
  if (cnWords) {
    const cnEnPairs = await Promise.all(
      cnWords.map(async (word, key) => {
        return [cnWords[key], await translateAsync(word)]
      }),
    )
    cnMapToEn = fromPairs(cnEnPairs)
  } else {
    cnMapToEn = {}
  }

  /** 转换后如果有重名的情况
   * 记录重名之后的新名字与原名字的映射关系
   * */
  const nameConfictMap: { [key: string]: string } = {}

  // 再次通过两轮循环将$ref与definitions的key替换成中文
  Object.getOwnPropertyNames(definitions).forEach(key => {
    const newKey = Reflect.has(cnMapToEn, key) ? camelCase(cnMapToEn[key]) : camelCase(key)
    if (newKey !== key) {
      const uniqNewKey = getUniqName(newKey, name => Reflect.has(definitions, name))
      if (uniqNewKey !== newKey) {
        nameConfictMap[newKey] = uniqNewKey
      }
      definitions[uniqNewKey] = definitions[key]
      Reflect.deleteProperty(definitions, key)
    }
  })

  traverseSchema(schema, async ({ value, parent, key, path }) => {
    if (key === '$ref' && typeof value === 'string') {
      let newKey = Reflect.has(cnMapToEn, value) ? camelCase(cnMapToEn[value]) : camelCase(value)
      if (newKey !== value) {
        if (Reflect.has(nameConfictMap, newKey)) {
          newKey = nameConfictMap[newKey]
        }
        parent.$ref = newKey
      }
      if (!Reflect.has(definitions, parent.$ref)) {
        $refsNotInDefinitions.add(parent.$ref)
      }
      if (path[0] === 'paths') {
        $refsInPaths.add(parent.$ref)
      }
    }
  })

  return {
    $refsNotInDefinitions: Array.from($refsNotInDefinitions),
    $refsInPaths: Array.from($refsInPaths),
  }
}

/** 将schema转换为ts的类型 */
export const transformProperty = (property: JSONSchema): string => {
  const { type, enum: enumValues, items, schema, $ref, oneOf, anyOf, allOf, not } = property
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
  }
  if ($ref) {
    return $ref
  }
  if (schema) {
    return transformProperty(schema)
  }

  // 没见过后端真的用过这几个数据类型
  // 参照https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/ 例子先处理一下
  // oneOf, anyOf, allOf对应的应该是数组，每个成员有$ref
  // TODO 处理discriminator的情况
  if (oneOf) {
    if (Array.isArray(property.oneOf)) {
      return property.oneOf.map(prop => transformProperty(prop)).join(' | ')
    }
    return 'any'
  }

  // 拥有任何一个对象中的任何一个属性即可
  if (anyOf) {
    if (Array.isArray(property.oneOf)) {
      return `Partial<${property.oneOf.map(prop => transformProperty(prop)).join(' & ')}>`
    }
    return 'any'
  }
  // 必须拥有所有对象属性的并集
  if (allOf) {
    if (Array.isArray(property.oneOf)) {
      return `Required<${property.oneOf.map(prop => transformProperty(prop)).join(' & ')}>`
    }
    return 'any'
  }

  // 这个做不到覆盖所有情况，用any，更省心
  if (not) {
    return `any`
  }

  switch (type) {
    case 'string':
      return 'string'
    case 'boolean':
      return 'boolean'
    case 'file':
      return 'File'
    case 'null':
      return 'null'
    case 'integer':
    case 'number':
      return 'number'
    case 'array':
      // array可以没有items，但在同级有$ref
      if ($ref) {
        return `Array<${$ref}>`
      }
      // 使用Array<>而不是[]，因为里面的内容可能是复杂结构，例如枚举
      // 使用[]作为结尾时会产生错误结果
      return `Array<${transformProperty(items!)}>`
    case 'object':
      const { properties, additionalProperties, required } = property
      if (properties) {
        const obj = map(properties, (prop: JSONSchema, name: string) => {
          const optionalMark = required && required.includes(name) ? '' : '?'
          return `${name}${optionalMark}: ${transformProperty(prop)}`
        }).join(EOL)
        let additionalProps = ''
        if (additionalProperties) {
          if (additionalProperties === true) {
            additionalProps = `${EOL}[k: string]: any`
          } else {
            additionalProps = `${EOL}[k: string]: ${transformProperty(additionalProperties)}`
          }
        }
        return `{${EOL}${obj}${additionalProps}${EOL}}`
      }
      return 'any'
    default:
      if (type !== undefined) {
        throw new Error(`not valid json schema type: ${type}`)
      }
      return 'any'
  }
}
