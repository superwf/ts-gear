import { camelCase, upperFirst } from 'lodash'

import type { GenerateRequestFunctionNameParameter } from '../type'

/** default generate request function method */
export const generateRequestFunctionName = ({ httpMethod, pathName }: GenerateRequestFunctionNameParameter) => {
  return `${httpMethod}${upperFirst(camelCase(pathName))}`
}
