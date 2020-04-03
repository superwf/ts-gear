/** transform /abc/{id} to /abc/:id */
export const transformSwaggerPathToRouterPath = (v: string) => {
  if (v.includes('{')) {
    return v
      .split('/')
      .map(s => {
        const reg = /[{}]/g
        if (reg.test(s)) {
          return `:${s.replace(reg, '')}`
        }
        return s
      })
      .join('/')
  }
  return v
}
