import { join } from 'path'

import 'cross-fetch/polyfill'

import { error, info } from '../tool/log'
import type { Project } from '../type'

/**
 * fetch remote spec if url starts with "http"
 * or use "require" read local file.
 * when remote swagger doc has auth, the best way is download the spec to local, and assign the local file path.
 * the second param ref is https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * */
export const fetchSwagger = async (project: Project, tsGearConfigPath: string) => {
  const url = project.source
  if (url.startsWith('http')) {
    const verbose = `project: ${project.name} url: ${url}`
    info(`start fetching ${verbose}`)
    const res = await fetch(url, project.fetchSwaggerDocOption)
    const swaggerSchema = await res.json()
    info(`got swagger spec doc from ${verbose}}`)
    return swaggerSchema
  }
  const source = join(tsGearConfigPath, project.source)
  // use require for json file
  if (!source.endsWith('.json')) {
    const message = 'user config file should ends with `.json`'
    error(message)
    throw new Error(message)
  }
  /* eslint-disable-next-line global-require,import/no-dynamic-require */
  return require(source)
}
