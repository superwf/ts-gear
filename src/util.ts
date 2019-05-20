import RefParser from 'json-schema-ref-parser'
import { forEach, forOwn, isObject, map, upperFirst } from 'lodash'
import { OptionalKind, PropertySignatureStructure, SourceFile } from 'ts-morph'
import { JSONSchema } from './interface'
import { compile } from './source'

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
 * @return [title, 带有泛型格式的title]
 * 例如 ['ReplyVOUser', 'ReplyVO<User>']
 * 例如List转换数组格式 ['ReplyVOListUser', 'ReplyVO<Array<User>>']
 * */
export const getSafeDefinitionTitle = (title: string): [string, string] => {
  // 原始类型，非组合类型
  if (/^[a-z\[\]]+$/i.test(title)) {
    return [upperFirst(camelCase(title)), title]
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

const transform$refName = ($ref: string) => {
  const name = $ref.replace('#/definitions/', '')
  if (name === 'Long') {
    return 'number'
  }
  if (name === 'Long[]') {
    return 'number[]'
  }
  return name
}

export const getAllRef = (schema: JSONSchema) => {
  const refNames: Set<string> = new Set()
  traverse(schema, ({ val, key }: { val: any; key: string }) => {
    if (key === '$ref' && typeof val === 'string') {
      const refName = getSafeDefinitionTitle(transform$refName(val))[0]
      // console.log(val, refName)
      refNames.add(refName)
    }
  })
  return Array.from(refNames)
}

/** 将schema的type转换为ts的类型 */
export const transformProperty = (property: JSONSchema): string => {
  const { type, enum: enumValues, items, schema } = property
  if (enumValues) {
    return `'${enumValues.join("' | '")}'`
  }
  if (schema) {
    if (schema.$ref) {
      return getSafeDefinitionTitle(transform$refName(schema.$ref))[0]
    }
    if (schema.type) {
      return transformProperty(schema)
    }
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
    // 没见过后端真的用过这几个数据类型
    // 参照https://swagger.io/docs/specification/data-models/oneof-anyof-allof-not/ 例子先处理一下
    // oneOf, anyOf, allOf对应的应该是数组，每个成员有$ref
    case 'oneOf':
      if (Array.isArray(property.oneOf)) {
        return property.oneOf.map(prop => transformProperty(prop)).join(' | ')
      }
      return 'any'
    case 'anyOf':
      if (Array.isArray(property.oneOf)) {
        return `Partial<${property.oneOf
          .map(prop => transformProperty(prop))
          .join(' & ')}>`
      }
      return 'any'
    case 'allOf':
      if (Array.isArray(property.oneOf)) {
        return `Required<${property.oneOf
          .map(prop => transformProperty(prop))
          .join(' & ')}>`
      }
      return 'any'
    case 'not':
      return 'any'
    default:
      throw new Error(`not valid json schema type: ${type}`)
  }
}

/** 生产inline的interface结构 */
export const generatePrimitiveInterface = async (
  definition: JSONSchema,
  title: string,
) => {
  // const sourceFile = project.createSourceFile(virtualFileName)

  return compile((sourceFile: SourceFile) => {
    if (definition.type === 'object') {
      const inter = sourceFile.addInterface({
        name: getSafeDefinitionTitle(title)[0],
      })
      inter.setIsExported(true)
      forEach(definition.properties, (property, name) => {
        const p: OptionalKind<PropertySignatureStructure> = {
          name,
          type: transformProperty(property as JSONSchema),
          // initializer: property.default as string,
          hasQuestionToken:
            !definition.required || !definition.required.includes(name),
        }
        if ('default' in property) {
          p.initializer = String(property.default)
        }
        if ('description' in property) {
          p.docs = [String(property.description)]
        }
        inter.addProperty(p)
        // addedProperty.setInitializer(property.default)
      })
      if (definition.description) {
        inter.addJsDoc(definition.description)
      }
      // 有definition是原始类型的情况吗？
    } else {
      const t = sourceFile.addTypeAlias({
        name: title,
        type: transformProperty(definition as JSONSchema),
      })
      t.setIsExported(true)
    }
  })
}
