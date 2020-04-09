import {
  IndexSignatureDeclarationStructure,
  OptionalKind,
  PropertyDeclarationStructure,
  Scope,
  PropertySignatureStructure,
} from 'ts-morph'

import { transformSwaggerPropertyToTsType } from 'src/tool/transformSwaggerPropertyToTsType'
// import { hasGenericSymbol } from 'src/tool/genericType'
import { sow, harvest } from 'src/source'
import { JSONSchema, IProject } from 'src/interface'
import { definitionMap } from 'src/global'

/** generate on definition ts content */
export const generateDefinitionContent = (project: IProject) => {
  for (const key in definitionMap) {
    const definition = definitionMap[key]
    if (definition.typescriptContent) {
      continue
    }
    const source = sow()
    const title = definition.typeName!
    const schema = definition.schema!
    if (schema.type === 'object') {
      if (schema.properties) {
        const preferInterface = Boolean(project.preferInterface)
        const klass = preferInterface
          ? source.addInterface({
              isExported: true,
              name: title,
              typeParameters: definition.typeParameters,
            })
          : source.addClass({
              isExported: true,
              name: title,
              typeParameters: definition.typeParameters,
            })
        if (schema.description) {
          klass.addJsDoc(schema.description)
        }
        for (const name of Object.getOwnPropertyNames(schema.properties)) {
          const property = schema!.properties![name]
          const klassStructure: OptionalKind<PropertyDeclarationStructure & PropertySignatureStructure> = {
            name,
            type: transformSwaggerPropertyToTsType(property),
            scope: Scope.Public,
            hasQuestionToken: !schema.required || !schema.required.includes(name),
            docs: [],
          }
          /** interface property can not has default value
            so use class as type */
          if (!preferInterface && Reflect.has(property, 'default')) {
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
      } else if (schema.additionalProperties) {
        // class doesn`t has "addIndexSignature", so use interface
        const interFace = source.addInterface({
          isExported: true,
          name: title,
          docs: [],
        })
        const additionalProperties = schema.additionalProperties as JSONSchema
        const interfaceStructure: OptionalKind<IndexSignatureDeclarationStructure> = {
          keyName: 'key',
          keyType: 'string',
          returnType: transformSwaggerPropertyToTsType(additionalProperties),
        }
        if (Reflect.has(additionalProperties, 'description')) {
          interfaceStructure.docs!.push(String(additionalProperties.description))
        }
        if (Reflect.has(additionalProperties, 'format')) {
          interfaceStructure.docs!.push(`format: ${additionalProperties.format!}`)
        }
        interFace.addIndexSignature(interfaceStructure)
      } else {
        source.addTypeAlias({
          isExported: true,
          name: title,
          type: transformSwaggerPropertyToTsType(schema),
        })
      }
    } else {
      source.addTypeAlias({
        isExported: true,
        name: title,
        type: transformSwaggerPropertyToTsType(schema),
      })
    }
    definition.typescriptContent = harvest(source)
  }
}
