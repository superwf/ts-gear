export const clearObject = (o: Record<string, any>) => {
  Reflect.ownKeys(o).forEach(k => {
    Reflect.deleteProperty(o, k)
  })
}
