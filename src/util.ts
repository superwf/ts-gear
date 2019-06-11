import {
  fromPairs,
  map,
  memoize,
  MemoizedFunction,
  uniq,
  upperFirst,
} from 'lodash'
const { youdao, baidu, google } = require('translation.js')
import { resolve } from 'path'
import traverse = require('traverse')
import { IRef, ISchemaNode, JSONSchema } from './interface'

/** 当前项目的根路径，调用其他文件都以该路径为基准 */
export const tsGearRoot = resolve(__dirname, '../')

/**
 * lodash的camelCase在处理有非字符存在的时候的不一致行为，
 * 例如 PageVO«CisSkuListVO» => PageVOCisSkuListVO
 * 而本身已经是驼峰格式的名字会转换为尾字母小写
 * 例如 PageVOCisSkuListVO => PageVoCisSkuListVo
 * 形成不一致的命名
 * 这个自定义的camelCase统一该行为
 *  */
const camelCase = (name: string) => {
  const nonCharatorReg = /[^a-z0-9]/i
  if (nonCharatorReg.test(name)) {
    return name
      .split(/[^a-z0-9]/i)
      .map(n => upperFirst(n))
      .join('')
  }
  return name
}

/** replace non charator and and return interface name */
export const getInterfaceName = (v: string) => {
  return `I${camelCase(v)}`
}

/** replace /abc/{id} to /abc/:id */
export const transformPathParameters = (v: string) => {
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

/** 解析definitions中的每个对象的名称
 * title 可能是`#/definitions/xxxx`，或去掉了`#/definitionsd/`之后的`xxxx`部分
 * @return [可以作为合法变量名的title, 带有泛型格式的title, title原始值]
 * 例如 Reply«VO«User»» ['ReplyVOUser', 'ReplyVO<User>', 'Reply«VO«User»»']
 * 将List转换为Array，
 * 例如 ReplyVO«List«User»» ['ReplyVOListUser', 'ReplyVO<Array<User>>', 'ReplyVO«List«User»»']
 * */
export const getSafeDefinitionTitle = (
  title: string,
): [string, string, string] => {
  const originTitle = title
  title = trimDefinitionPrefix(title)
  // 没有泛型的简单类型，全部由字母组成的类型名称
  if (/^[a-z0-9_\-]+$/i.test(title)) {
    return [upperFirst(camelCase(title)), title, originTitle]
  }

  // 一些可能的类型转换预处理
  // TODO 不完善，之后遇到再添加
  // title = title.replace(/«int»/g, '«number»')

  if (/[^a-z0-9]/i.test(title)) {
    let compositeTitle = title.replace(/«/g, '<').replace(/»/g, '>')

    // 将List转换为Array
    if (compositeTitle.includes('List<')) {
      compositeTitle = compositeTitle.replace(/([^a-z])?List/g, '$1Array')
    }
    return [title.replace(/[^a-z\d]/gi, ''), compositeTitle, originTitle]
  }
  throw new Error(`${title} is not valid`)
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

  const NotInDefinitions: string[] = []

  let cnWords: string[] = []
  const definitions = schema.definitions!

  traverseSchema(schema, async ({ value, parent, key, path }) => {
    if (key === '$ref' && typeof value === 'string') {
      value = trimDefinitionPrefix(value)
      // 将所有#/definitions/前缀去掉，之后就不用再处理了
      parent.$ref = value
      if (cnReg.test(value)) {
        cnWords.push(value)
      }
    }
  })
  Reflect.ownKeys(definitions).forEach(key => {
    if (typeof key === 'string' && cnReg.test(key)) {
      cnWords.push(key)
    }
  })
  cnWords = uniq(cnWords)

  const cnEnPairs = await Promise.all(
    uniq(cnWords).map(async (word, key) => {
      return [cnWords[key], await translateAsync(word)]
    }),
  )
  const cnMapToEn = fromPairs(cnEnPairs)
  console.log(cnMapToEn)

  // 再次通过两轮循环替换成中文
  Reflect.ownKeys(definitions).forEach(key => {
    if (typeof key === 'string' && Reflect.has(cnMapToEn, key)) {
      definitions[cnMapToEn[key]] = definitions[key]
      Reflect.deleteProperty(definitions, key)
    }
  })
  traverseSchema(schema, async ({ value, parent, key, path }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (Reflect.has(cnMapToEn, value)) {
        parent.$ref = cnMapToEn[value]
      }
      if (!Reflect.has(definitions, parent.$ref)) {
        NotInDefinitions.push(parent.$ref)
      }
    }
  })
}

/**
 * 从组合类型中获取泛型类型的名称
 * */
export const getGenericTypeName = (title: string): string[] => {
  if (title.includes('<')) {
    const result = title.match(/\w+</g)
    if (result) {
      return result.map(t => t.replace('<', ''))
    }
  }
  return []
}

/**
 * 递归处理对象值
 * 主要用来处理swagger schema中的paths与definitions
 * @param {object} 对象，一般为json schema
 * @param {funnction} 在递归中处理每个节点的函数
 * */
export const traverseSchema = (
  obj: { [k: string]: any },
  func: (v: ISchemaNode) => void,
): void => {
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

/** 收集swagger schema中`definitions`中的所有`$ref`
 * */
export const getAllRefsInDefinitions = (schema: JSONSchema): IRef[] => {
  // let has = false
  const result: IRef[] = []
  traverseSchema(schema, ({ value, parent, key, path }) => {
    if (key === '$ref') {
      // console.log(key, path, path[path.length - 2] === 'items')
      result.push({
        type: getSafeDefinitionTitle(trimDefinitionPrefix(value))[0],
        path,
        // 见过的样例中中的所有definitions中的properties都只有一层属性，复杂属性的结构都会用$ref表示，因此path[1]可以表示该`properties`下的属性名字
        name: path[1],
        // isArray: path[path.length - 2] === 'items',
        description: value.description,
      })
    }
  })
  return result
}

/**
 * 返回$ref里的去掉`#/definitions/`部分剩下的字符串
 * */
export const trimDefinitionPrefix = ($ref: string) =>
  $ref.replace('#/definitions/', '')

/** 获取所有$ref的引用
 * 返回对象
 * key是$ref的名字原始值，例如 #/defintions/name 的 name部分
 * value是 转换成程序可用名称的名字
 * */
export const getAllRef = (schema: JSONSchema) => {
  const refNames: { [k: string]: string } = {}
  traverseSchema(schema, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      const keyInDefinitions = trimDefinitionPrefix(value)
      const refName = getSafeDefinitionTitle(trimDefinitionPrefix(value))[0]
      refNames[keyInDefinitions] = refName
    }
  })
  return refNames
}

/** 将schema转换为ts的类型 */
export const transformProperty = async (
  property: JSONSchema,
): Promise<string> => {
  const {
    type,
    enum: enumValues,
    items,
    schema,
    $ref,
    oneOf,
    anyOf,
    allOf,
    not,
  } = property
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
  }
  if ($ref) {
    return getSafeDefinitionTitle(trimDefinitionPrefix($ref))[0]
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
      return `Partial<${property.oneOf
        .map(prop => transformProperty(prop))
        .join(' & ')}>`
    }
    return 'any'
  }
  // 必须拥有所有对象属性的并集
  if (allOf) {
    if (Array.isArray(property.oneOf)) {
      return `Required<${property.oneOf
        .map(prop => transformProperty(prop))
        .join(' & ')}>`
    }
    return 'any'
  }
  // 原生类型可以用Exclude处理
  // 其他用any
  // TODO 这段估计有错误，有测试用例再说
  if (not) {
    // 说明是原生类型
    if (typeof not === 'string') {
      // json schema里没有symbol，不用放进去
      return `Exclude<number, string, object, boolean, null, undefined, ${not}>`
    }
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
    // 按array一定有items处理
    case 'array':
      return `Array<${transformProperty(items!)}>`
    case 'object':
      const { properties, additionalProperties, required } = property
      if (properties) {
        const obj = map(properties, (prop: JSONSchema, name: string) => {
          const optionalMark = required && required.includes(name) ? '' : '?'
          return `${name}${optionalMark}: ${transformProperty(prop)}`
        }).join('\n')
        let additionalProps = ''
        if (additionalProperties) {
          if (additionalProperties === true) {
            additionalProps = `\n[k: string]: any`
          } else {
            additionalProps = `\n[k: string]: ${transformProperty(
              additionalProperties,
            )}`
          }
        }
        return `{\n${obj}${additionalProps}\n}`
      }
      return 'any'
    default:
      throw new Error(`not valid json schema type: ${type}`)
  }
}

const translateEngines = [youdao, baidu, google]

/** 将一些definitinos与$ref中的中文翻印成可作为变量名的英文 */
export const translateAsync: ((
  text: string,
  index?: number,
) => Promise<string>) &
  MemoizedFunction = memoize(async (text: string, engineIndex: number = 0) => {
  if (engineIndex >= translateEngines.length) {
    throw new Error('translate error, all translate engine can not access')
  }

  const index = engineIndex

  try {
    const res = await translateEngines[index].translate(text)
    return res.result[0]
      .split(' ')
      .map(upperFirst)
      .join('')

    // return enKey;
  } catch (err) {
    return translateAsync(text, index + 1)
  }
})

/** 生成唯一的名字
 * 如果已经存在则名称后面的数字累加
 * 搭配翻译功能用，因为翻译完的英文很可能重复
 * */
export const getUniqName = (
  text: string,
  exist: (t: string, acc?: number) => boolean,
  accumulator?: number,
): string => {
  if (!exist(text, accumulator)) {
    return text + accumulator
  }
  if (!accumulator) {
    accumulator = 0
  }
  return getUniqName(text, exist, accumulator + 1)
}
