import { forEach, reduce } from 'lodash'
import {
  OptionalKind,
  PropertyDeclarationStructure,
  SourceFile,
} from 'ts-morph'
import { JSONSchema } from './interface'
import { compile } from './source'
import { getDefinitionRef, getSafeDefinitionTitle } from './util'

interface IPrimitiveProperty {
  type: string
  format?: string
  enum?: string[]
  items?: {
    type: string
    // 简单类型应预先过滤掉含有$ref的definition，
    // 不应该有$ref
    // $ref: string
  }
}

/** 转换简单原生类型 */
const transformPrimitiveProperty = (property: IPrimitiveProperty): string => {
  const { type, enum: enumValue, items } = property
  if (enumValue) {
    return `'${enumValue.join("' | '")}'`
  }
  switch (type) {
    case 'string':
      return 'string'
    case 'boolean':
      return 'boolean'
    case 'null':
      return 'null'
    case 'integer':
    case 'number':
      return 'number'
    case 'object':
      return 'any'
    case 'array':
      return `${transformPrimitiveProperty(items!)}[]`
    default:
      throw new Error(`not primitive type: ${type}`)
  }
}

/** 生成一维property为原始类型的interface
 * */
export const generatePrimitiveDefinition = async (
  definition: JSONSchema,
  title: string,
) => {
  // const sourceFile = project.createSourceFile(virtualFileName)

  return compile((sourceFile: SourceFile) => {
    if (definition.type === 'object') {
      const klass = sourceFile.addClass({
        name: getSafeDefinitionTitle(title)[0],
      })
      if (definition.description) {
        klass.addJsDoc(definition.description)
      }
      klass.setIsExported(true)
      forEach(definition.properties, (property, name) => {
        const p: OptionalKind<PropertyDeclarationStructure> = {
          name,
          type: transformPrimitiveProperty(property as IPrimitiveProperty),
          // initializer: property.default as string,
          hasQuestionToken:
            !definition.required || !definition.required.includes(name),
        }
        // interface不能有初始化的值
        // 考虑用class代替interface的话可以加上
        if ('default' in property) {
          p.initializer = String(property.default)
        }
        if ('description' in property) {
          p.docs = [String(property.description)]
        }
        klass.addProperty(p)
        // addedProperty.setInitializer(property.default)
      })

      // 有definition是原始类型的情况吗？
      // 虽然没见过
      // 如果有的话按别名处理
    } else {
      const t = sourceFile.addTypeAlias({
        name: title,
        type: transformPrimitiveProperty(definition as IPrimitiveProperty),
      })
      t.setIsExported(true)
    }
  })
}

/** 将definition的properties分为两组，一组是primitive，另一组是有$ref的类型 */
export const generateDefinition = async (
  definition: JSONSchema,
  title: string,
) => {
  const refResult = getDefinitionRef(definition)
  if (refResult.length > 0) {
    // 先将不是$ref类型的property统计好
    // 生成只包含简单类型的结构
    const refNames = refResult.map(r => r.name)
    const primitiveDefinition = {
      ...definition,
      properties: reduce<
        { [k: string]: JSONSchema },
        { [k: string]: JSONSchema }
      >(
        definition.properties,
        (r, v: JSONSchema, k: string) => {
          if (!refNames.includes(k)) {
            r[k] = v
          }
          return r
        },
        {},
      ),
    }
    // console.log(primitiveDefinition)
    // 先生成只带原始类型的接口定义
    const primitiveInterface = await generatePrimitiveDefinition(
      primitiveDefinition,
      title,
    )
    return compile((sourceFile: SourceFile) => {
      const klass = sourceFile.getClasses()[0]!
      refResult.forEach(r => {
        // console.log(r)
        klass.addProperty({
          name: r.name,
          type: r.isArray ? `${r.type}[]` : r.type,
        })
      })
    }, primitiveInterface)
  }

  return generatePrimitiveDefinition(definition, title)
}

/**
 * 解析整个definitions
 * */
export const generateDefinitions = async (definitions: {
  [k: string]: JSONSchema
}) => {
  const results: string[] = []
  for (const name in definitions) {
    if (definitions.hasOwnProperty(name)) {
      const d = definitions[name]
      const result = await generateDefinition(d as JSONSchema, name)
      results.push(result)
    }
  }
  return results.join('')
}
