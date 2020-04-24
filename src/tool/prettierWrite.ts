import { writeFileSync } from 'fs'

import { format, Options } from 'prettier'

/**
 * read from tsg config project prettier config
 * write formatted typescript content
 * */
export const prettierWrite = (content: string, destPath: string, option?: Options) => {
  writeFileSync(
    destPath,
    format(content, {
      ...option,
      parser: 'typescript',
    }),
  )
}
