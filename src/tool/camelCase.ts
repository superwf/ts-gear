import { upperFirst } from 'lodash'
/**
 * lodash camelCase will convert non word first charator lower case
 * e.g. lodash camelCase will convert "PageVOListVO" to "PageVoListVo"
 * use this camelCase to convert only every words first charator upper case.
 * e.g. "PageVOListVO" to "PageVOListVO"
 *  */
export const camelCase = (name: string) => {
  const invalidVariableCharatorReg = /[^a-z0-9]/i
  if (invalidVariableCharatorReg.test(name)) {
    return name
      .split(/[^a-z0-9]/i)
      .map(n => upperFirst(n))
      .join('')
  }
  return upperFirst(name)
}
