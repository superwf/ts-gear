import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

import { IProject } from 'src/interface'

export const prepareProjectDirectory = (project: IProject) => {
  const cwd = process.cwd()
  const dest = join(cwd, project.dest, project.name)
  if (!existsSync(dest)) {
    mkdirSync(dest)
  }
}
