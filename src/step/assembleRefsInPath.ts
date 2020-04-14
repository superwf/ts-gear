import { Spec } from 'swagger-schema-official'

import { requestRefs, definitionMap, refMap } from 'src/global'
import { traverseSchema } from 'src/tool/traverseSchema'
import { hasGenericSymbol, removeGenericSymbol } from 'src/tool/genericType'

/**
 * collect refs in paths
 * run after parseGenericType
 * */
export const assembleRefsInPath = (spec: Spec) => {
  // gather ref definition names from paths
  traverseSchema(spec.paths, ({ value, key }) => {
    if (key === '$ref' && typeof value === 'string') {
      if (hasGenericSymbol(value)) {
        const values = value.split(/<|>/).filter(Boolean)
        const [parentTypeName, ...subTypeNames] = values

        const definitions = Object.values(definitionMap)
        const parentTypeInDefinition = definitions.find(d => d.typeName === parentTypeName)
        /** the parent type must exist
         * and has generic type parameters
         * */
        if (
          parentTypeInDefinition &&
          parentTypeInDefinition.typeParameters &&
          parentTypeInDefinition.typeParameters.length > 0
        ) {
          requestRefs.add(parentTypeName)
          subTypeNames.forEach(name => {
            if (!definitions.some(d => d.typeName === name)) {
              definitionMap[`${name}Any`] = {
                typeName: name,
                typescriptContent: `export type ${name} = any`,
              }
            }
            requestRefs.add(name)
          })
        } else {
          const typeName = removeGenericSymbol(value)
          requestRefs.add(typeName)
          definitionMap[`${typeName}Any`] = {
            typeName,
            typescriptContent: `export type ${typeName} = any`,
          }
          if (value in refMap) {
            refMap[value] = typeName
          }
        }
      } else {
        requestRefs.add(value)
      }
    }
  })
}
