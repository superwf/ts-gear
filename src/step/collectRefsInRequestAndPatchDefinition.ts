import { getGlobal } from '../projectGlobalVariable'
import { traverse$Ref } from '../tool/traverseSchema'
import type { Project } from '../type'
import { patchGlobalDefinitionMap } from '../tool/patchGlobalDefinitionMap'
import { shouldKeepRequest } from '../tool/shouldKeepRequest'

/**
 * recursively collect all referenced types
 * */
const collectAllReferencedTypes = (
  typeName: string,
  definitionMap: any,
  referencedSet: Set<string>,
  visitedSet: Set<string> = new Set(),
) => {
  if (visitedSet.has(typeName) || !definitionMap[typeName]) {
    return
  }

  visitedSet.add(typeName)
  referencedSet.add(typeName)

  const { schema } = definitionMap[typeName]
  if (schema) {
    traverse$Ref(schema, value => {
      // Handle generic types like "Array<Type>" or "TypeA<TypeB>"
      const genericTypes = value.split(/<|>|,/).filter(Boolean)
      genericTypes.forEach(genericTypeName => {
        if (definitionMap[genericTypeName] && !visitedSet.has(genericTypeName)) {
          collectAllReferencedTypes(genericTypeName, definitionMap, referencedSet, visitedSet)
        }
      })
    })
  }
}

/**
 * collect refs in paths
 * run after parseGenericType
 * */
export const collectRefsInRequestAndPatchDefinition = (project: Project) => {
  const { requestRefSet, requestMap, definitionMap } = getGlobal(project)
  const keepGeneric = project.keepGeneric !== false

  // First, collect all direct references from requests
  const directReferences = new Set<string>()

  // gather ref definition names from paths
  const { apiFilter } = project
  Object.getOwnPropertyNames(requestMap).forEach(name => {
    const request = requestMap[name]
    if (!shouldKeepRequest(request, apiFilter)) {
      return
    }
    const { schema } = request
    traverse$Ref(schema, value => {
      if (keepGeneric) {
        value
          .split(/<|>|,/)
          .filter(Boolean)
          .forEach(typeName => {
            directReferences.add(typeName)
            patchGlobalDefinitionMap({ typeName, definitionMap })
          })
      } else {
        directReferences.add(value)
        patchGlobalDefinitionMap({ typeName: value, definitionMap })
      }
    })
  })

  // Now recursively collect all indirect references
  const allReferencedTypes = new Set<string>()
  directReferences.forEach(typeName => {
    collectAllReferencedTypes(typeName, definitionMap, allReferencedTypes)
  })

  // Add all referenced types to requestRefSet
  allReferencedTypes.forEach(typeName => {
    requestRefSet.add(typeName)
  })

  // when not keepGeneric, definition also need to patch
  Object.getOwnPropertyNames(definitionMap).forEach(name => {
    const { schema } = definitionMap[name]
    if (schema) {
      traverse$Ref(schema, value => {
        if (keepGeneric) {
          value
            .split(/<|>|,/)
            .filter(Boolean)
            .forEach(typeName => {
              patchGlobalDefinitionMap({ typeName, definitionMap })
            })
        } else {
          patchGlobalDefinitionMap({ typeName: value, definitionMap })
        }
      })
    }
  })
}

