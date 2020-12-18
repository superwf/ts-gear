import { getGlobal } from '../projectGlobalVariable'
import type { Project } from '../type'

export const importAllDefinition = (project: Project) => {
  const { requestRefSet, requestEnumSet } = getGlobal(project)
  const refSet = new Set<string>()
  ;[...Array.from(requestEnumSet), ...Array.from(requestRefSet)].forEach(name => {
    name
      .split(/<|>|,/)
      .filter(Boolean)
      .forEach(n => {
        refSet.add(n)
      })
  })
  const importNames = Array.from(refSet)
  return `import type { ${importNames.join(',')} } from './definition'`
}
