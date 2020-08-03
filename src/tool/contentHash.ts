import { createHash } from 'crypto'

export const contentHash = (content: string) => {
  return createHash('md5').update(content).digest('hex').toString()
}
