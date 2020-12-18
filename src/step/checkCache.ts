import { join } from 'path'
import { readFileSync, existsSync, writeFileSync } from 'fs'

import type { Project } from '../type'
import { contentHash } from '../tool/contentHash'

export const checkCache = (project: Project, tsGearConfigPath: string, spec: any): boolean => {
  const dest = join(tsGearConfigPath, project.dest, project.name)
  const cacheFile = join(dest, '.cache')
  const hash = contentHash(JSON.stringify([project, spec]))
  if (!existsSync(cacheFile)) {
    writeFileSync(cacheFile, hash)
    return false
  }
  const cacheContent = readFileSync(cacheFile, { encoding: 'utf8' })
  if (cacheContent === hash) {
    return true
  }
  writeFileSync(cacheFile, hash)
  return false
}
