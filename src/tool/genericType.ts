export const hasGenericSymbol = (name: string) => {
  return name.includes('<')
}

export const removeGenericSymbol = (name: string) => name.replace(/<|>|,/g, '')
