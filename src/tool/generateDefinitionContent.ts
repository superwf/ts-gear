import { IndexSignatureDeclarationStructure, OptionalKind, PropertyDeclarationStructure, Scope } from 'ts-morph'
import { Schema } from 'swagger-schema-official'

import { schemaToTypescript } from './schemaToTypescript'

import { hasGenericSymbol } from 'src/tool/genericType'
import { sow, harvest } from 'src/source'
import { definitionMap } from 'src/global'

/** generate on definition ts content */
export const generateDefinitionContent = (definition: Schema, title: string) => {
  const source = sow()
  if (hasGenericSymbol(title)) {
    const names = title.split(/<|>/).filter(Boolean)
    /** generac type */
    const [parentTypeName, ...typeParameters] = names
    if (!(parentTypeName in definitionMap)) {
      const klass = source.addClass({
        isExported: true,
        name: parentTypeName,
        typeParameters: typeParameters,
      })
      // definitionMap[parentTypeName] = ''
      if (definition.description) {
        klass.addJsDoc(definition.description)
      }
      for (const name of Object.getOwnPropertyNames(definition.properties)) {
        const property = definition!.properties![name]
        const klassStructure: OptionalKind<PropertyDeclarationStructure> = {
          name,
          type: schemaToTypescript(property),
          scope: Scope.Public,
          hasQuestionToken: !definition.required || !definition.required.includes(name),
        }
        /** interface property can not has default value
            so use class as type */
        if (Reflect.has(property, 'default')) {
          klassStructure.initializer = String(property.default)
        }
        if (Reflect.has(property, 'description')) {
          klassStructure.docs = [String(property.description)]
        }
        klass.addProperty(klassStructure)
      }
    }
  } else {
    if (definition.type === 'object') {
      if (definition.properties) {
        const klass = source.addClass({
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
            type: schemaToTypescript(property),
            scope: Scope.Public,
            hasQuestionToken: !definition.required || !definition.required.includes(name),
          }
          /** interface property can not has default value
            so use class as type */
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
        // class doesn`t has "addIndexSignature", so use interface
        const interFace = source.addInterface({
          isExported: true,
          name: title,
        })
        const additionalProperties = definition.additionalProperties as Schema
        const interfaceStructure: OptionalKind<IndexSignatureDeclarationStructure> = {
          keyName: 'key',
          keyType: 'string',
          returnType: schemaToTypescript(additionalProperties),
        }
        if (Reflect.has(additionalProperties, 'description')) {
          interfaceStructure.docs = [String(additionalProperties.description)]
        }
        interFace.addIndexSignature(interfaceStructure)
      } else {
        source.addTypeAlias({
          isExported: true,
          name: title,
          type: schemaToTypescript(definition),
        })
      }
    } else {
      source.addTypeAlias({
        isExported: true,
        name: title,
        type: schemaToTypescript(definition),
      })
    }
  }
  return harvest(source)
}
