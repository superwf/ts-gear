import { camelCase, upperFirst } from 'lodash'

import { IGenerateRequestFunctionNameParameter } from '../interface'

/** default generate request function method */
export const generateRequestFunctionName = ({ httpMethod, pathName }: IGenerateRequestFunctionNameParameter) => {
  return `${httpMethod}${upperFirst(camelCase(pathName))}`
}
