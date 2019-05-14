import { reduce } from 'lodash'
import { IDefinitions, JSONSchema } from './interface'

/** pre process the definitions
 * because definition may not has title
 * add property name as title when it has no title
 * */
export const addTitle = (definitions: IDefinitions) => {
  return reduce<{ [k: string]: JSONSchema }, IDefinitions>(
    definitions,
    (r, definition, title) => {
      r[title] = {
        ...definition,
        title: definition.title ? definition.title : title,
      }
      return r
    },
    {},
  )
}
