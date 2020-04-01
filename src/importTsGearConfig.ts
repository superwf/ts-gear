import { EOL } from 'os'
import path from 'path'

import { IUserConfig } from './interface'

/** generate ts-gear.ts file path for import in request
 * @return i
 * */
export const importTsGearConfig = (cwd: string, config: IUserConfig, projectName: string) => {
  const configFileRelativePath = path.relative(path.join(cwd, config.dest, projectName), cwd)
  console.log(configFileRelativePath)
  return {
    import: `${EOL}import config from '${configFileRelativePath}/ts-gear'${EOL}`,
    code: [
      `const project = config.projects.find(p => p.name === '${projectName}')`,
      `const { fetcher } = project${EOL}`,
    ].join(EOL),
  }
}
