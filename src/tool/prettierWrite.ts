import { writeFileSync } from 'fs'
import type { Options } from 'prettier'
import { format } from 'prettier'

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
