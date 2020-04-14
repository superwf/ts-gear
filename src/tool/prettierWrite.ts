import { writeFileSync } from 'fs'

import { format } from 'prettier'

/** read your current project prettier config
 * write formatted typescript content
 * */
export const prettierWrite = (content: string, destPath: string) => {
  const config = {}
  writeFileSync(
    destPath,
    format(content, {
      // ...(defaultPrettierConfig as Options),
      ...config,
      parser: 'typescript',
    }),
  )
}
