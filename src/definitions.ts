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
import { transformSwaggerPropertyToTsType } from './tool/transformSwaggerPropertyToTsType'

/** 生成一维property为原始类型的interface
 * */
export const transformDefinitionToTsClass = async (definition: JSONSchema, title: string) =>
  compile((sourceFile: SourceFile) => {
    if (definition.type === 'object') {
      if (definition.properties) {
        const klass = sourceFile.addClass({
          isExported: true,
          name: title,
        })
        if (definition.description) {
          klass.addJsDoc(definition.description)
        }
        for (const name of Object.getOwnPropertyNames(definition.properties)) {
          const property = definition!.properties![name]
          const klassStructure: OptionalKind<PropertyDeclarationStructure> = {
            name,
            type: transformSwaggerPropertyToTsType(property),
            scope: Scope.Public,
            hasQuestionToken: !definition.required || !definition.required.includes(name),
            docs: [],
          }
          /** interface property can not has default value
            so use class as type */
          if (Reflect.has(property, 'default')) {
            klassStructure.initializer = String(property.default)
          }
          if (Reflect.has(property, 'description')) {
            klassStructure.docs!.push(String(property.description))
          }
          if (Reflect.has(property, 'format')) {
            klassStructure.docs!.push(`format: ${property.format!}`)
          }
          klass.addProperty(klassStructure)
        }
        // 没有properties，会有additionalProperties
      } else if (definition.additionalProperties) {
        // ts-morph的class没有addIndexSignature，改用interface
        const interFace = sourceFile.addInterface({
          isExported: true,
          name: title,
        })
        const additionalProperties = definition.additionalProperties as JSONSchema
        const interfaceStructure: OptionalKind<IndexSignatureDeclarationStructure> = {
          keyName: 'key',
          keyType: 'string',
          returnType: transformSwaggerPropertyToTsType(additionalProperties),
        }
        if (Reflect.has(additionalProperties, 'description')) {
          interfaceStructure.docs = [String(additionalProperties.description)]
        }
        interFace.addIndexSignature(interfaceStructure)
      } else {
        sourceFile.addTypeAlias({
          isExported: true,
          name: title,
          type: transformSwaggerPropertyToTsType(definition),
        })
      }
    } else {
      sourceFile.addTypeAlias({
        isExported: true,
        name: title,
        type: transformSwaggerPropertyToTsType(definition),
      })
    }
  })

/**
 * 解析整个definitions
 * */
export const transformDefinitionsToTypescript = async (definitions: { [k: string]: JSONSchema }) => {
  const results: string[] = []
  for (const name of Object.getOwnPropertyNames(definitions)) {
    const definition = definitions[name]
    const result = await transformDefinitionToTsClass(definition as JSONSchema, name)
    results.push(result)
  }
  return results.join('\n')
}

/** 将所有$refsNames添加为any的别名 */
export const transform$RefsNotInDefinitions = async ($refNames: string[]) => {
  if ($refNames.length > 0) {
    return compile((sourceFile: SourceFile) => {
      $refNames.forEach(name => {
        sourceFile.addTypeAlias({
          isExported: true,
          name,
          type: 'any',
        })
      })
    })
  }
  return ''
}
