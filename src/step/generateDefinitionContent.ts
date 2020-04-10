import { OptionalKind, PropertyDeclarationStructure, Scope, PropertySignatureStructure } from 'ts-morph'

import { schemaToTypescript } from 'src/tool/schemaToTypescript'
import { sow, harvest } from 'src/source'
import { IProject } from 'src/interface'
import { definitionMap } from 'src/global'
import { assembleDoc } from 'src/tool/assembleDoc'

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
            type: schemaToTypescript(property),
            scope: Scope.Public,
            hasQuestionToken: !schema.required || !schema.required.includes(name),
            docs: assembleDoc(property),
          }
          /** interface property can not has default value
            so use class as type */
          if (!preferInterface && Reflect.has(property, 'default')) {
            klassStructure.initializer = String(property.default)
          }
          klass.addProperty(klassStructure)
        }
        // 没有properties，会有additionalProperties
      } else if (schema.additionalProperties) {
        const additionalProperties = schema.additionalProperties
        // class doesn`t has "addIndexSignature", so use interface
        source.addInterface({
          isExported: true,
          name: title,
          docs: typeof additionalProperties !== 'boolean' ? assembleDoc(additionalProperties) : [],
          indexSignatures: [
            {
              keyName: 'key',
              keyType: 'string',
              returnType: additionalProperties === true ? 'any' : schemaToTypescript(additionalProperties),
            },
          ],
        })
      } else {
        source.addTypeAlias({
          isExported: true,
          name: title,
          type: schemaToTypescript(schema),
        })
      }
    } else {
      source.addTypeAlias({
        isExported: true,
        name: title,
        type: schemaToTypescript(schema),
      })
    }
    definition.typescriptContent = harvest(source)
  }
}
