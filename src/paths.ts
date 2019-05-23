// import { JSONSchema4TypeName } from 'json-schema'
import { camelCase, forEach, get, remove, upperFirst } from 'lodash'
import { join } from 'path'
import { FunctionDeclarationStructure, OptionalKind } from 'ts-morph'
import { assembleRequestParam } from './assembleRequestParam'
import { interceptRequest, interceptResponse } from './interceptor'
// import { generateDefinition } from './definitions'
// import { format } from 'prettier'
import { IPaths, JSONSchema } from './interface'
import { compile } from './source'
import { getAllRef, transformPathParameters, transformProperty } from './util'

/** 将paths里的各种请求参数组装成IProperty的数据结构 */
// const assembleRequestParam = () => {}

export const generatePaths = async (schema: JSONSchema) => {
  const paths = schema.paths as IPaths
  const { basePath } = schema

  let url: keyof IPaths
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
      if (request.parameters && request.parameters.length > 0) {
        const parameterSchema = assembleRequestParam(request.parameters)
        // console.log(JSON.stringify(parameterSchema))
        paramInterfaceName = `I${upperFirst(functionName)}Param`
        const paramDefTsContent = await compile(source => {
          const inter = source.addInterface({
            name: paramInterfaceName,
          })
          forEach<JSONSchema>(parameterSchema, (property, name) => {
            inter.addProperty({
              name,
              type: transformProperty(property),
              hasQuestionToken:
                !property.required || property.required.length === 0,
            })
          })
        })
        tsContent.push(paramDefTsContent)
      }

      let responseType = ''

      // 如果有200存在的$ref定义，则直接返回该$ref对应的type
      const response200Schema = get(request.responses, '200.schema.$ref', null)
      if (response200Schema) {
        responseType = transformProperty(request.responses[200]!)
        // 否则可能是response中行内定义的数据结构
        // 再单独生成一个type
      } else {
        const response200 = get(request.responses, '200', null)
        if (response200) {
          responseType = `${upperFirst(functionName)}Response`
          const responseTsContent = `type ${responseType} = ${transformProperty(
            response200,
          )}`
          tsContent.push(responseTsContent)
        }
      }

      const functTsContent = await compile(source => {
        const functionData: OptionalKind<FunctionDeclarationStructure> = {
          name: functionName,
          isExported: true,
          statements: `
            const [ url, option ] = ${interceptRequest.name}('${join(
            basePath,
            transformPathParameters(String(url)),
          )}'${paramInterfaceName ? ', param' : ''})
            option.method = '${action}'
            return fetch(url, option).then${
              responseType ? '<' + responseType + '>' : ''
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
        if (request.summary || request.description) {
          functionData.docs = [
            remove<string>(
              [request.summary || '', request.description || ''],
              s => !!s,
            ).join('\n'),
          ]
        }
        source.addFunction(functionData)
      })

      tsContent.push(functTsContent)
    }
  }

  // 生成paths文件需要的一些依赖
  const dependents: { [k: string]: string } = getAllRef(schema.paths)
  const importTsContent = await compile(source => {
    // 添加interptor拦截器依赖
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
    // 是否存在在definitions中没定义的$ref
    const depententsNotInDefinitions: string[] = []
    source.addImportDeclarations([
      {
        namedImports: Object.keys(dependents).reduce<Array<{ name: string }>>(
          (r, $ref) => {
            if (schema.definitions && $ref in schema.definitions) {
              r.push({
                name: dependents[$ref],
              })
            } else {
              depententsNotInDefinitions.push(dependents[$ref])
            }
            return r
          },
          [],
        ),
        moduleSpecifier: './definitions',
      },
    ])
    // 如果存在在definitions中没定义的$ref
    // 全都定义成any的别名
    if (depententsNotInDefinitions.length > 0) {
      source.addTypeAliases(
        depententsNotInDefinitions.map(def => ({
          name: def,
          type: 'any',
        })),
      )
    }
  })
  tsContent.unshift(importTsContent)
  return tsContent.join('\n')
}
