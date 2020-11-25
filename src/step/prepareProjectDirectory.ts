import { existsSync, writeFileSync } from 'fs'
import { join } from 'path'

import { sync } from 'mkdirp'

import { Project } from '../type'

export const prepareProjectDirectory = (project: Project, tsGearConfigPath: string) => {
  const dest = join(tsGearConfigPath, project.dest, project.name)
  if (!existsSync(dest)) {
    sync(dest)
    writeFileSync(join(dest, '.gitignore'), '.cache')
  }
}
