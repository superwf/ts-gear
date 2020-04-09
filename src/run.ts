import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

import { transform$RefsNotInDefinitions, transformDefinitionsToTypescript } from './definitions'
import { fetchSwaggerJSONSchema } from './fetchSwagger'
import { IProjectMap, JSONSchema } from './interface'
import { generateRequestFileContent } from './generateRequestFileContent'
import { prettierWrite } from './prettierWrite'
import { initializeSchema, collectRefInSchema } from './tool/initializeSchema'
import { getProjectsFromCommmandLine } from './cliOption'
import { serviceIndexFileContent } from './serviceIndexFileContent'
import { warningComment } from './warningComment'

// const interceptorFilePath = resolve(tsGearRoot, 'src/interceptor.ts')

/**
 * step 1: get user config
 * step 2: fetch schema
 * step 3: initialize schema
 *  transform any unregular charator name to regular
 *  translation if the "translationEngine" is assigned
 * step 3: parse schema to ts template content
 * step 4: write ts file
 * */
export const run = async () => {
  const cwd = process.cwd()

  const tsGearConfigPath = join(cwd, 'ts-gear')
  /* eslint-disable @typescript-eslint/no-var-requires */
  const config = require(tsGearConfigPath)
  /* eslint-enable @typescript-eslint/no-var-requires */
  let projects = (config.default ? config.default : config) as IProjectMap
  const projectNamesFromCommandLine = getProjectsFromCommmandLine()
  for (const name in projects) {
    projects[name].name = name
  }
  if (projectNamesFromCommandLine.length > 0) {
    projects = projectNamesFromCommandLine.reduce<IProjectMap>((r, v) => {
      if (v in projects) {
        r[v] = projects[v]
      }
      return r
    }, {})
  }
  for (const name in projects) {
    const project = projects[name]
    // 建立dest文件夹
    const dest = join(cwd, project.dest)
    if (!existsSync(dest)) {
      mkdirSync(dest)
    }
    const projectPath = join(dest, name)
    // 在dest文件夹内建立项目文件夹
    if (!existsSync(projectPath)) {
      mkdirSync(projectPath)
    }

    // 获取swagger schema
    const schema = await fetchSwaggerJSONSchema(project, project.fetchSwaggerDocOption)
    await initializeSchema(schema, project)
    const { $refsNotInDefinitions, $refsInPaths } = collectRefInSchema(schema)
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
  }
}
