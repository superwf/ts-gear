/** remove "#/definitions/"
 * remove "#/components/schema/"
 * remove all spaces
 * replace "«" with "<"
 * replace "»" with ">"
 * upper case each word
 * */
export const cleanName = (name: string, keepGeneric = true) => {
  return name.replace(/^#\/.+\//, '').replace(/./g, (target, index, str) => {
    // console.log(target, index, str)
    if (/[a-z]/i.test(target) && (index === 0 || /\s|«|»>/.test(str[index - 1]))) {
      return target.toUpperCase()
    }
    if (/\s/.test(target)) {
      return ''
    }
    if (keepGeneric) {
      switch (target) {
        case '«':
          return '<'
        case '»':
          return '>'
      }
    }
    return target
  })
}
