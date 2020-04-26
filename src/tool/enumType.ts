import { Spec } from 'swagger-schema-official'
import { get, remove, upperFirst } from 'lodash'

import { httpMethods } from '../interface'

import { cleanName } from './cleanName'

const filterPaths = ['definitions', 'properties', 'parameters', 'responses', 'paths']

export const generateEnumName = (path: string[], spec: Spec) => {
  path = [...path]
  path.pop()
  if (path[0] === 'paths') {
    if (path.includes('parameters')) {
      const parameterNode = get(spec, path)
      if (parameterNode.name) {
        const parameterIndex = path.findIndex((p) => p === 'parameters')
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
  remove(path, (p) => {
    return filterPaths.includes(p)
  })
  return path.map((p) => upperFirst(cleanName(p, false))).join('')
}

export const generateEnumTypescriptContent = (value: any[]) => {
  return value
    .map((v) => {
      return typeof v === 'string' ? `'${v}'` : v
    })
    .join('|')
}
