import RefParser from 'json-schema-ref-parser'
import { camelCase, forOwn, isObject } from 'lodash'
import { JSONSchema } from './interface'

/** replace non charator and and return a valid function name */
export const getFunctionName = (v: string) => {
  return camelCase(v)
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

// parse all $ref property
const parser = new RefParser()

/** transform all $ref to plain schema */
export const parseRef = (schema: JSONSchema) => {
  return parser.dereference(schema) as Promise<JSONSchema>
}

/** 解析definitions中的title
 * @return [title, 被解析后的title]
 * */
export const getSafeDefinitionTitle = (title: string): [string, string] => {
  // 原始类型，非组合类型
  if (/^[a-z]+$/i.test(title)) {
    return [title, title]
  }

  // 一些可能的类型转换预处理
  // TODO 不完善，之后遇到再添加
  // title = title.replace(/«int»/g, '«number»')
  // title = title.replace(/«Long»/g, '«number»')

  if (title.includes('«')) {
    let compositeTitle = title.replace(/«/g, '<').replace(/»/g, '>')

    // 将List转换为Array
    if (compositeTitle.includes('List<')) {
      compositeTitle = compositeTitle.replace(/([^a-z])?List/g, '$1Array')
    }
    return [title.replace(/[^a-z\d]/gi, ''), compositeTitle]
  }
  throw new Error(`${title} is not valid`)
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
 * 比如预先将所有int/Long转换成number
 * */
export const traverse = (
  obj: { [k: string]: any },
  func: any,
  paths?: string[],
) => {
  if (!paths) {
    paths = []
  }
  forOwn(obj, (val, key) => {
    if (Array.isArray(val) && key !== 'required') {
      val.forEach(el => {
        traverse(el, func, [...paths!, key])
      })
      return
    }
    if (isObject(val)) {
      traverse(val, func, [...paths!, key])
      return
    }
    if (!!func) {
      func({ val, obj, key }, paths)
    }
  })
}

interface IRefResult {
  type: string
  paths: string[]
  name: string
  description?: string
  isArray: boolean
}

/** return the $refs paths
 * */
export const getDefinitionRef = (schema: JSONSchema): IRefResult[] => {
  // let has = false
  const result: IRefResult[] = []
  // const refPaths: string[][] = []
  traverse(schema, ({ val, obj, key }: any, paths: string[]) => {
    if (key === '$ref') {
      result.push({
        type: getSafeDefinitionTitle(val.replace('#/definitions/', ''))[0],
        paths,
        name: paths[1],
        isArray: paths[paths.length - 1] === 'items',
        description: val.description,
      })
    }
  })
  return result
}

/** return true if has $ref
 * */
export const hasRef = (schema: JSONSchema) => {
  // 一旦有$ref，则利用throw中断traverse
  try {
    traverse(schema, ({ val, obj, key }: any) => {
      if (key === '$ref') {
        throw new Error('has $ref')
      }
    })
    return false
  } catch (e) {
    return true
  }
}
