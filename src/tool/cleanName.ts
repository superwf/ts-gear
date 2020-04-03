/** remove "#/definitions/"
 * remove all space
 * replace all "«" to "<", "»" to ">"
 * */
export const cleanName = (name: string, keepGeneric = true) => {
  return name.replace(/(^#\/\w+\/)|\s|«|»/g, target => {
    if (keepGeneric) {
      if (target === '«') {
        return '<'
      }
      if (target === '»') {
        return '>'
      }
    }
    return ''
  })
}
