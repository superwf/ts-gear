import type {
  OptionalKind,
  PropertyDeclarationStructure,
  PropertySignatureStructure,
  InterfaceDeclarationStructure,
  ClassDeclarationStructure,
} from 'ts-morph'
import { Scope } from 'ts-morph'
import { schemaToTypescript } from '../tool/schemaToTypescript'
import { sow, harvest } from '../source'
import type { Project } from '../type'
import { getGlobal } from '../projectGlobalVariable'
import { assembleDoc } from '../tool/assembleDoc'

/** generate on definition ts content */
export const generateDefinitionContent = (project: Project) => {
  const { definitionMap } = getGlobal(project)
  Object.values(definitionMap).forEach(definition => {
    if (definition.typescriptContent || !definition.schema) {
      return
    }
    const source = sow()
    const title = definition.typeName!
    const schema = definition.schema!
    if (schema.type === 'object') {
      if (schema.properties) {
        const preferClass = Boolean(project.preferClass)
        const declarationOptin: OptionalKind<InterfaceDeclarationStructure> & OptionalKind<ClassDeclarationStructure> =
          {
            isExported: true,
            name: title,
            typeParameters: definition.typeParameters
              ? definition.typeParameters.map(t => ({
                  name: t,
                  default: 'any',
                }))
              : undefined,
            docs: assembleDoc(schema),
          }
        const klass = preferClass ? source.addClass(declarationOptin) : source.addInterface(declarationOptin)
        Object.getOwnPropertyNames(schema.properties).forEach(name => {
          const property = schema!.properties![name]
          const propertyStructure: OptionalKind<PropertyDeclarationStructure> &
            OptionalKind<PropertySignatureStructure> = {
            name,
            type: schemaToTypescript(property),
            scope: preferClass ? Scope.Public : undefined,
            hasQuestionToken: !schema.required || !schema.required.includes(name),
            docs: assembleDoc(property),
          }
          /** interface property can not has default value
            so use class as type */
          if (preferClass && Reflect.has(property, 'default')) {
            propertyStructure.initializer = String(property.default)
          }
          klass.addProperty(propertyStructure)
        })
        // 没有properties，会有additionalProperties
      } else if (schema.additionalProperties) {
        const { additionalProperties } = schema
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
          docs: assembleDoc(schema),
        })
      }
    } else {
      source.addTypeAlias({
        isExported: true,
        name: title,
        type: schemaToTypescript(schema),
        docs: assembleDoc(schema),
      })
    }
    definition.typescriptContent = harvest(source)
  })
}
