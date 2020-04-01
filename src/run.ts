import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

import { transform$RefsNotInDefinitions, transformDefinitionsToTypescript } from './definitions'
import { fetchSwaggerJSONSchema } from './fetchSwagger'
import { IProject, JSONSchema } from './interface'
import { generateRequestFileContent } from './generateRequestFileContent'
import { prettierWrite } from './prettierWrite'
import { initializeSchema } from './util'
import { getProjectsFromCommmandLine } from './cliOption'
import { serviceIndexFileContent } from './serviceIndexFileContent'
import { warningComment } from './warningComment'

// const interceptorFilePath = resolve(tsGearRoot, 'src/interceptor.ts')

/**
 * step 1: get user config
 * step 2: fetch schema
 * step 3: parse schema to ts template content
 * step 4: write ts file
 * */
export const run = async () => {
  const cwd = process.cwd()

  const tsGearConfigPath = join(cwd, 'ts-gear')
  /* eslint-disable @typescript-eslint/no-var-requires */
  const config = require(tsGearConfigPath)
  /* eslint-enable @typescript-eslint/no-var-requires */
  let projects = (config.default ? config.default : config) as IProject[]
  const projectNamesFromCommandLine = getProjectsFromCommmandLine()
  if (projectNamesFromCommandLine.length > 0) {
    projects = projectNamesFromCommandLine
      .map(name => {
        return projects.find(p => p.name === name)!
      })
      .filter(Boolean)
  }
  for (const i in projects) {
    if (!projects.hasOwnProperty(i)) {
      continue
    }
    const project = projects[i]
    // 建立dest文件夹
    const dest = join(cwd, project.dest)
    if (!existsSync(dest)) {
      mkdirSync(dest)
    }
    const projectPath = join(dest, project.name)
    // 在dest文件夹内建立项目文件夹
    if (!existsSync(projectPath)) {
      mkdirSync(projectPath)
    }

    // 获取swagger schema
    const schema = await fetchSwaggerJSONSchema(project, project.fetchSwaggerDocOption)
    const { $refsNotInDefinitions, $refsInPaths } = await initializeSchema(schema)
    const $refsTypes = await transform$RefsNotInDefinitions($refsNotInDefinitions)
    // 生成definitions
    const definitions = await transformDefinitionsToTypescript(schema.definitions)
    const definitionsPath = join(projectPath, 'definitions.ts')
    await prettierWrite(definitionsPath, warningComment + definitions + $refsTypes)

    // 生成request函数与mock request数据
    const { requestsContent, mockRequestsContent } = await generateRequestFileContent(
      schema as JSONSchema,
      $refsInPaths,
      project,
    )
    const requestFilePath = join(projectPath, 'request.ts')
    // await prettierWrite(requestFilePath, warningComment + fetcherContent.import + requestsContent)
    await prettierWrite(requestFilePath, warningComment + requestsContent)
    const mockResponsePath = join(projectPath, 'mockRequest.ts')
    await prettierWrite(mockResponsePath, warningComment + mockRequestsContent)
    const indexFilePath = join(projectPath, 'index.ts')
    await prettierWrite(indexFilePath, warningComment + serviceIndexFileContent)

    // 每个项目的拦截器文件只在第一次生成时copy一次
    // 这个文件可能会写入一些请求的配置
    // 不应该被覆盖
    // const projectInterceptorFile = join(projectPath, 'interceptor.ts')
    // if (!existsSync(projectInterceptorFile)) {
    //   copyFileSync(interceptorFilePath, projectInterceptorFile)
    // }
  }
}
