import { copyFileSync, existsSync, mkdirSync } from 'fs'
import { join, resolve } from 'path'

import { transform$RefsNotInDefinitions, transformDefinitionsToTypescript } from './definitions'
import { fetchSwaggerJSONSchema } from './fetchSwagger'
import { IUserConfig, JSONSchema } from './interface'
import { generateRequests } from './requests'
import prettierWrite from './prettierWrite'
import { initializeSchema, tsGearRoot } from './util'

const interceptorFilePath = resolve(tsGearRoot, 'src/interceptor.ts')

/** get user config
 * fetch schema
 * parse schema to ts template content
 * write ts file
 * */
export const run = async () => {
  const cwd = process.cwd()
  // console.log(join(cwd, 'ts-gear.ts'))

  const config = require(join(cwd, 'ts-gear.js')) as IUserConfig
  // 建立dest文件夹
  const dest = join(cwd, config.dest)
  if (!existsSync(dest)) {
    mkdirSync(dest)
  }
  for (const i in config.projects) {
    if (!config.projects.hasOwnProperty(i)) {
      continue
    }
    const project = config.projects[i]
    const projectPath = join(dest, project.name)
    // 在dest文件夹内建立项目文件夹
    if (!existsSync(projectPath)) {
      mkdirSync(projectPath)
    }

    // 获取swagger schema
    const schema = await fetchSwaggerJSONSchema(project, project.fetchOption)
    const { $refsNotInDefinitions, $refsInPaths } = await initializeSchema(schema)
    const $refsTypes = await transform$RefsNotInDefinitions($refsNotInDefinitions)
    // 生成definitions
    const definitions = await transformDefinitionsToTypescript(schema.definitions)
    const definitionsPath = join(projectPath, 'definitions.ts')
    await prettierWrite(definitionsPath, definitions + $refsTypes)

    // 生成request函数与mock request数据
    const { requestsContent, mockRequestsContent } = await generateRequests(
      schema as JSONSchema,
      $refsInPaths,
      project.pathMatcher,
    )
    const pathsPath = join(projectPath, 'request.ts')
    await prettierWrite(pathsPath, requestsContent)
    const mockResponsePath = join(projectPath, 'mockRequest.ts')
    await prettierWrite(mockResponsePath, mockRequestsContent)

    // 每个项目的拦截器文件只在第一次生成时copy一次
    // 这个文件可能会写入一些请求的配置
    // 不应该被覆盖
    const projectInterceptorFile = join(projectPath, 'interceptor.ts')
    if (!existsSync(projectInterceptorFile)) {
      copyFileSync(interceptorFilePath, projectInterceptorFile)
    }
  }
}
