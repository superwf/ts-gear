// import { JSONSchema4TypeName } from 'json-schema'
import { camelCase, forEach, upperFirst } from 'lodash'
import { join } from 'path'
import { FunctionDeclarationStructure, OptionalKind } from 'ts-morph'
import assembleRequestParam from './assembleRequestParam'
import { interceptRequest, interceptResponse } from './interceptor'
// import { generateDefinition } from './definitions'
// import { format } from 'prettier'
import { IPaths, JSONSchema } from './interface'
import { compile } from './source'
// import { generateResponseSchema } from './responseSchema'
import { getAllRef, transformProperty } from './util'

/** 将paths里的各种请求参数组装成IProperty的数据结构 */
// const assembleRequestParam = () => {}

export const generatePaths = async (schema: JSONSchema) => {
  const paths = schema.paths as IPaths
  const { basePath } = schema

  let url: keyof IPaths
  // const interfaces: string[] = []
  // const requestFunctions: string[] = []
  // console.log(paths)
  const tsContent: string[] = []
  for (url in paths) {
    if (!paths.hasOwnProperty(url)) {
      continue
    }
    const path = paths[url]
    // action is http method, like get, post ...
    for (const action in path) {
      if (!path.hasOwnProperty(action) || path[action].deprecated) {
        continue
      }

      const request = path[action]

      // console.log(getInterfaceName(request.responses[200].schema.title))
      // let paramString = ''
      const functionName = `${action}${upperFirst(camelCase(url))}`
      let paramInterfaceName = ''
      if (request.parameters) {
        const parameterSchema = assembleRequestParam(request.parameters)
        // console.log(JSON.stringify(parameterSchema))
        paramInterfaceName = `I${upperFirst(functionName)}Param`
        const paramDefTsContent = await compile(source => {
          const inter = source.addInterface({
            name: paramInterfaceName,
          })
          forEach<JSONSchema>(parameterSchema, (property, name) => {
            // if (name === 'IGetApiPricingBlackListParam') {
            inter.addProperty({
              name,
              type: transformProperty(property),
              hasQuestionToken: property.required.length === 0,
            })
            // }
          })
        })
        // console.log(paramDefTsContent)
        tsContent.push(paramDefTsContent)
      }
      const response200Schema = request.responses[200]
      let responseInterfaceName = ''
      if (response200Schema) {
        responseInterfaceName = `I${upperFirst(functionName)}Response`
        const responseTsContent = `type ${responseInterfaceName} = ${transformProperty(
          response200Schema,
        )}`
        tsContent.push(responseTsContent)
      }

      const functTsContent = await compile(source => {
        const functionData: OptionalKind<FunctionDeclarationStructure> = {
          name: functionName,
          isExported: true,
          statements: `
            const [ url, option ] = ${interceptRequest.name}('${join(
            basePath,
            String(url),
          )}'${paramInterfaceName ? ', param' : ''})
            option.method = '${action}'
            return fetch(url, option).then${
              responseInterfaceName ? '<' + responseInterfaceName + '>' : ''
            }(${interceptResponse.name})
          `,
        }
        if (paramInterfaceName) {
          functionData.parameters = [
            {
              name: 'param',
              type: paramInterfaceName,
            },
          ]
        }
        source.addFunction(functionData)
      })
      // `
      // /** ${request.summary} */
      // export const ${functionName} = (${paramString}) => {
      //   const [ url, option ] = interceptRequest('${transformPathParameters(
      //     url,
      //   )}'${paramString ? ', param' : ''})
      //   option.method = '${action}'
      //   return fetch(url, option).then${responseSchema}(interceptResponse)
      // }`

      tsContent.push(functTsContent)
    }

    // let responseSchema = await generateResponseSchema(request.responses)
    // if (responseSchema) {
    //   responseSchema = `<${responseSchema}>`
    // }

    // requestFunctions.push(tsFunction)
  }

  // 生成paths文件需要的一些依赖
  const dependents: string[] = getAllRef(schema)
  // 引依赖
  const importTsContent = await compile(source => {
    source.addImportDeclarations([
      {
        namedImports: [
          {
            name: interceptRequest.name,
          },
          {
            name: interceptResponse.name,
          },
        ],
        moduleSpecifier: './interceptor',
      },
    ])
    source.addImportDeclarations([
      {
        namedImports: dependents.map(name => ({
          name,
        })),
        moduleSpecifier: './definitions',
      },
    ])
  })
  tsContent.unshift(importTsContent)
  return tsContent

  // console.log(tsFunction)
  // const definitionKeys = Object.keys(
  //   schema.definitions ? schema.definitions : {},
  // )
  // const definitionImports = definitionKeys.map(d => {
  //   if (d.endsWith('[]')) {
  //     return ''
  //   }
  //   return upperFirst(camelCase(d))
  // })

  // return `
  // import { ${definitionImports.join(',')} } from './definitions'
  // import { interceptRequest, interceptResponse } from './fetchInterceptor'

  // ${interfaces.join('')}${requestFunctions.join('')}`
}
