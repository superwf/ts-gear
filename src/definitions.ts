// import { forEach, reduce } from 'lodash'
import {
  IndexSignatureDeclarationStructure,
  OptionalKind,
  PropertyDeclarationStructure,
  Scope,
  SourceFile,
} from 'ts-morph'
import { JSONSchema } from './interface'
import { compile } from './source'
import { transformProperty } from './util'

/** 生成一维property为原始类型的interface
 * */
export const transformDefinitionToTsClass = async (
  definition: JSONSchema,
  title: string,
) =>
  compile((sourceFile: SourceFile) => {
    if (definition.type === 'object') {
      if (definition.properties) {
        const klass = sourceFile.addClass({
          name: title,
        })
        if (definition.description) {
          klass.addJsDoc(definition.description)
        }
        klass.setIsExported(true)
        for (const name of Object.getOwnPropertyNames(definition.properties)) {
          const property = definition!.properties![name]
          const klassStructure: OptionalKind<PropertyDeclarationStructure> = {
            name,
            type: transformProperty(property),
            scope: Scope.Public,
            // initializer: property.default as string,
            hasQuestionToken:
              !definition.required || !definition.required.includes(name),
          }
          // interface不能有初始化的值
          // 考虑用class代替interface的话可以加上
          if (Reflect.has(property, 'default')) {
            klassStructure.initializer = String(property.default)
          }
          if (Reflect.has(property, 'description')) {
            klassStructure.docs = [String(property.description)]
          }
          klass.addProperty(klassStructure)
        }
        // 没有properties，会有additionalProperties
      } else if (definition.additionalProperties) {
        // ts-morph的class没有addIndexSignature，改用interface
        const interFace = sourceFile.addInterface({
          name: title,
        })
        const additionalProperties = definition.additionalProperties as JSONSchema
        interFace.setIsExported(true)
        const interfaceStructure: OptionalKind<
          IndexSignatureDeclarationStructure
        > = {
          keyName: 'key',
          keyType: 'string',
          returnType: transformProperty(additionalProperties),
        }
        if (Reflect.has(additionalProperties, 'description')) {
          interfaceStructure.docs = [String(additionalProperties.description)]
        }
        interFace.addIndexSignature(interfaceStructure)
      }
    } else {
      const t = sourceFile.addTypeAlias({
        name: title,
        type: transformProperty(definition),
      })
      t.setIsExported(true)
    }
  })

/**
 * 解析整个definitions
 * */
export const transformDefinitionsToTsClasses = async (definitions: {
  [k: string]: JSONSchema
}) => {
  const results: string[] = []
  for (const name of Object.getOwnPropertyNames(definitions)) {
    const definition = definitions[name]
    const result = await transformDefinitionToTsClass(
      definition as JSONSchema,
      name,
    )
    results.push(result)
  }
  return results.join('\n')
}
