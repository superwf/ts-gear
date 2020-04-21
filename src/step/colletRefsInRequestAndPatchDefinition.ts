import { getGlobal } from '../projectGlobalVariable'
import { traverse$Ref } from '../tool/traverseSchema'
import { IProject } from '../interface'
import { patchGlobalDefinitionMap } from '../tool/patchGlobalDefinitionMap'

/**
 * collect refs in paths
 * run after parseGenericType
 * */
export const collectRefsInRequestAndPatchDefinition = (project: IProject) => {
  const { requestRefSet, requestMap, definitionMap } = getGlobal(project)
  const keepGeneric = Boolean(project.keepGeneric)
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
              patchGlobalDefinitionMap(typeName, definitionMap)
            })
        } else {
          patchGlobalDefinitionMap(value, definitionMap)
        }
      })
    }
  })
  // gather ref definition names from paths
  Object.getOwnPropertyNames(requestMap).forEach(name => {
    const { schema } = requestMap[name]
    traverse$Ref(schema, value => {
      if (keepGeneric) {
        value
          .split(/<|>|,/)
          .filter(Boolean)
          .forEach(typeName => {
            requestRefSet.add(typeName)
            patchGlobalDefinitionMap(typeName, definitionMap)
          })
      } else {
        requestRefSet.add(value)
        patchGlobalDefinitionMap(value, definitionMap)
      }
    })
  })
}
