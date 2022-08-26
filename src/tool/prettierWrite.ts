import { writeFileSync } from 'fs'
import type { Options } from 'prettier'
import { format } from 'prettier'

/**
 * read from tsg config project prettier config
 * write formatted typescript data
 * */
export const prettierWrite = ({ file, data, option }: { file: string; data: string; option?: Options }) => {
  writeFileSync(
    file,
    format(data, {
      ...option,
      parser: 'typescript',
    }),
  )
}
