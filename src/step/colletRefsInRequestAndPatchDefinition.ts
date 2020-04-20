import { getGlobal } from 'src/global'
import { traverse$Ref } from 'src/tool/traverseSchema'
import { IProject } from 'src/interface'
import { patchGlobalDefinitionMap } from 'src/tool/patchGlobalDefinitionMap'

/**
 * collect refs in paths
 * run after parseGenericType
 * */
export const collectRefsInRequestAndPatchDefinition = (project: IProject) => {
  const { requestRefSet, requestMap, definitionMap } = getGlobal(project)
  const keepGeneric = Boolean(project.keepGeneric)
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
