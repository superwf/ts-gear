import { existsSync } from 'fs'
import { join } from 'path'

import { sync } from 'mkdirp'

import { IProject } from '../interface'

export const prepareProjectDirectory = (project: IProject) => {
  const cwd = process.cwd()
  const dest = join(cwd, project.dest, project.name)
  if (!existsSync(dest)) {
    sync(dest)
  }
}
