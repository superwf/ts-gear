import { getGlobal } from '../projectGlobalVariable'
import { traverse$Ref } from '../tool/traverseSchema'
import type { Project } from '../type'
import { patchGlobalDefinitionMap } from '../tool/patchGlobalDefinitionMap'
import { shouldKeepRequest } from '../tool/shouldKeepRequest'

/**
 * collect refs in paths
 * run after parseGenericType
 * */
export const collectRefsInRequestAndPatchDefinition = (project: Project) => {
  const { requestRefSet, requestMap, definitionMap } = getGlobal(project)
  const keepGeneric = project.keepGeneric !== false
  // when not keepGeneric, definition alse need to patch
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
            requestRefSet.add(typeName)
            patchGlobalDefinitionMap({ typeName, definitionMap })
          })
      } else {
        requestRefSet.add(value)
        patchGlobalDefinitionMap({ typeName: value, definitionMap })
      }
    })
  })
}
