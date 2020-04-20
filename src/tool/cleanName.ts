/**
 * clean type name for typescript definition
 * remove "#/definitions/"
 * remove "#/components/schema/"
 * remove all spaces
 * remove all non english charator, like "😝"
 * replace "«" with "<" when keepGeneric
 * replace "»" with ">" when keepGeneric
 * upper case each word first charator
 * */
export const cleanName = (name: string, keepGeneric: boolean) => {
  return name.replace(/^#\/.+\//, '').replace(/./g, (target, index, str) => {
    // console.log(target, index, str)
    if (/[a-z]/i.test(target) && (index === 0 || /[^a-z]/i.test(str[index - 1]))) {
      return target.toUpperCase()
    }
    if (/\s/.test(target)) {
      return ''
    }
    if (keepGeneric) {
      /* eslint-disable-next-line default-case */
      switch (target) {
        case '«':
        case '<':
          return '<'
        case '»':
        case '>':
          return '>'
      }
    }
    if (/[^a-z]/i.test(target)) {
      return ''
    }
    return target
  })
}
