export const clearObject = (o: object) => {
  Reflect.ownKeys(o).forEach(k => {
    Reflect.deleteProperty(o, k)
  })
}
