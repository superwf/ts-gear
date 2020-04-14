import { join } from 'path'

import fetch from 'isomorphic-fetch'

import { error, info } from 'src/tool/log'
import { IProject } from 'src/interface'

/**
 * fetch remote spec if url starts with "http"
 * or use "require" read local file.
 * when remote swagger doc has auth, the best way is download the spec to local, and assign the local file path.
 * the second param ref is https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * */
export const fetchSwagger = async (project: IProject) => {
  const url = project.source
  if (url.startsWith('http')) {
    const verbose = `project: ${project.name} url: ${url}`
    info(`start fetching ${verbose}`)
    const res = await fetch(url, project.fetchSwaggerDocOption)
    const swaggerSchema = await res.json()
    info(`got ${verbose}}`)
    return swaggerSchema
  }
  const cwd = process.cwd()
  const source = join(cwd, project.source)
  // use require for json file
  if (!source.endsWith('.json')) {
    error('user config file should ends with `.json`')
  }
  return require(source)
}
