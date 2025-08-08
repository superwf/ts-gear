import * as ts from 'typescript'
import type { Spec } from 'swagger-schema-official'
import { get, remove, upperFirst } from 'lodash'
import { httpMethods } from '../type'
import { cleanName } from './cleanName'
import { tsNodeToString } from './tsNodeToString'

const filterPaths = ['definitions', 'properties', 'parameters', 'responses', 'paths']

/** use traverse spec path to generate an available enum type name */
export const generateEnumName = (traversePath: string[], spec: Spec): string => {
  const path = [...traversePath]
  /** 最后一层是'enum'，该层没用，所以弹出一层 */
  path.pop()
  if (path[0] === 'paths') {
    /** 如果最后一层是schema，还需要弹出一层 */
    if (path[path.length - 1] === 'schema') {
      path.pop()
    }
    if (path.includes('parameters')) {
      const parameterNode = get(spec, path)
      if (parameterNode.name) {
        const parameterIndex = path.findIndex(p => p === 'parameters')
        path[parameterIndex] = parameterNode.name
      }
    }
    path.find((p, index) => {
      if (httpMethods.includes(p as any)) {
        const requestPath = path[index - 1]
        path[index - 1] = p
        path[index] = requestPath
        return true
      }
      return false
    })
  }
  remove(path, p => filterPaths.includes(p))
  return path.map(p => upperFirst(cleanName(p, false))).join('')
}

/** convert enum member to enum type
 * @example
 *   `[1,2,3]` => `1 | 2 | 3`
 *   `['a', 'b', 'c']` => `'a' | 'b' | 'c'`
 * */
export const generateEnumTypescriptContent = (name: string, value: any[]) => {
  value = value.filter(v => v !== null)
  if (value.length === 0) {
    return 'any'
  }
  const { factory } = ts
  const contentNode = factory.createUnionTypeNode(
    value
      .filter(v => v !== null)
      .map(v =>
        typeof v === 'number'
          ? factory.createLiteralTypeNode(
              v < 0
                ? factory.createPrefixUnaryExpression(
                    ts.SyntaxKind.MinusToken,
                    ts.factory.createNumericLiteral(Math.abs(v)),
                  )
                : factory.createNumericLiteral(v),
            )
          : factory.createLiteralTypeNode(factory.createStringLiteral(v)),
      ),
  )
  const node = factory.createTypeAliasDeclaration(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    name,
    undefined,
    contentNode,
  )
  return tsNodeToString(node)
}
