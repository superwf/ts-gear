import { requestRefs } from 'src/global'

export const importAllDefinition = () => {
  const importNames: string[] = ['PropertyOf']
  if (requestRefs.size > 0) {
    importNames.push(...Array.from(requestRefs))
  }
  return `import { ${importNames.join(',')} } from './definition'`
}
