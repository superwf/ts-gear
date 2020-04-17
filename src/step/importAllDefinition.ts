import { getGlobal } from 'src/global'
import { IProject } from 'src/interface'

export const importAllDefinition = (project: IProject) => {
  const { requestRefMap } = getGlobal(project)
  const refSet = new Set<string>()
  Object.getOwnPropertyNames(requestRefMap).forEach(name => {
    name
      .split(/<|>|,/)
      .filter(Boolean)
      .forEach(n => {
        refSet.add(n)
      })
  })
  const importNames: string[] = ['PropertyOf']
  importNames.push(...Array.from(refSet))
  return `import { ${importNames.join(',')} } from './definition'`
}
