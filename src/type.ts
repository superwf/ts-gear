// import { JSONSchema4 } from 'json-schema'
import {
  Schema,
  Operation,
  Response,
  Reference,
  Parameter,
  BaseParameter,
  ParameterType,
  Path,
} from 'swagger-schema-official'
import { Options } from 'prettier'

import { tuple } from './tool/types'

/** interface A { n: number }
 * type B = PropertyType<A, 'n'> === type B = number
 * */
export type PropertyType<T extends any, K extends keyof T> = T[K]

/** baidu and google can handle different language automatically
 * youdao must assign the language type
 * */
export type TranslationEngine = 'baidu' | 'google'

export const httpMethods = tuple('get', 'put', 'post', 'delete', 'options', 'head', 'patch')

export type HttpMethod = typeof httpMethods[number]

export type RequestParameterPosition = PropertyType<BaseParameter, 'in'>

/** request parameter option */
export type RequestParameter = {
  method?: HttpMethod
  basePath?: string
  host?: string
} & {
  [position in RequestParameterPosition]?: any
}

/** requester function signature */
export type Requester = (url: string, param?: RequestParameter) => Promise<any>

// export interface IRequestFunction<T1, T2> {
//   (option: T1): Promise<T2>
//   mockData?: T2
// }

/** json schema traverse datatype */
export interface TraverseSchemaNode {
  value: any
  key: string
  parent: any
  path: string[]
}

/**
 * general request parameters defined in json schema
 * */
export type ParameterPositionMap = {
  [key in RequestParameterPosition]?: {
    type: ParameterType // always 'object'
    name: RequestParameterPosition
    required: string[]
    properties?: { [propertyName: string]: Omit<Parameter, 'required'> | Reference }
    schema?: Schema
    docs?: string[]
  }
}

export type TPathMatcherFunction = RegExp | ((url: string, httpMethod?: HttpMethod) => boolean)

export interface GenerateRequestFunctionNameParameter {
  httpMethod: HttpMethod
  pathName: string
  schema: Path
}

export interface Project {
  /** project name
   * will used to mkdir in "dest"
   * */
  name: string

  /** the api files will be generated to
   * @example './service'
   * */
  dest: string

  /** swagger doc path
   * could be remote or local json file
   * starts with "http" is remote
   * others are dealed local json file
   * */
  source: string

  /**
   * the param for fetch swagger doc
   * see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
   * */
  fetchSwaggerDocOption?: RequestInit

  /** filter api path
   * some project mix too mach useless api
   * use this option could avoid those to be written in your api file
   * */
  pathMatcher?: TPathMatcherFunction

  /** request function statement
   * some times requester will import too many code
   * and cause some resolve errors
   * use requesterImportStatement is a safer way
   * and this will override `requester` option
   * */
  importRequesterStatement?: string

  /** request function
   * ts-gear provide two available requesters out of box, `fetchRequester` and `axiosRequester`.
   * or else use your own function as requester is definitily ok,
   * request function signiture as below
   *   (url: string, param: RequestParameter) => Promise<any>
   * */
  requester?: Requester

  /**
   * @default false
   * by default, definiton will generate ts "interface"
   * "class" can keep the property default value
   * set this to "true" to generate "class" instead of "interface"
   * */
  preferClass?: boolean

  /**
   * @default false
   * when assigned true, the requester function will receive the "host"
   * defined in swagger
   * */
  withHost?: boolean
  /**
   * @default false
   * when assigned true, the requester function will receive the "basePath" defined in swagger
   * */
  withBasePath?: boolean

  /**
   * @default true
   * ts-gear try to keep the generic type for all definition
   * but real world swagger doc has many bad definition
   * if generic type make some error
   * assign "false" to this option
   * ts-gear will not generate generic type
   * the process of generating typescript content will be more stable.
   * */
  keepGeneric?: boolean

  /** if your swagger doc has some non english words in definitions keys or some $ref position,
   * choose an engine to transate those words to english
   * the translated results are not for human reading, but for program variable names.
   * because translation depends on internet, you may need to retry some times to get results successfuly.
   * once your api is generated, change to another engine and regenerate new api, the translate output will definitely be different, so the api content will be different too.
   *
   * most case you don`t need this option, try to persuade your teammate to correct the swagger doc to english is a better way.
   * if there are unregular charator, and you can not fix it,
   * try to use an engine provided by "translation.js"
   * "baidu" or "google"
   * */
  translationEngine?: TranslationEngine

  /**
   * a string statement to tell use swagger sample data mock response data
   * used in decide whether request function should return mockData
   * @default "process.env.NODE_ENV === 'test'"
   * this statement must return boolean,
   * and should return false to be removed when optimize code in production mode.
   * */
  shouldMockResponseStatement?: string

  /** output content prettier config */
  prettierConfig?: Options

  /** default generate request function method */
  generateRequestFunctionName?: (arg: GenerateRequestFunctionNameParameter) => string

  /**
   * need js file? OK, change this to true
   * @default false
   * */
  transformJS?: boolean
  /**
   * force skip cache
   * @default false
   * */
  skipCache?: boolean
}

export interface AssembleResponse {
  responseTypeContent: string
  successTypeContent: string
  responseTypeName: string
  successTypeName: string
}

export interface SwaggerDefinition {
  // no generic simbol type name
  originalName?: string
  typeName: string
  schema?: Schema
  typescriptContent?: string
  typeParameters?: string[]
}

export interface SwaggerRequest {
  pathName: string
  httpMethod: HttpMethod
  schema: Operation
  typescriptContent?: string
  parameters?: Array<Parameter | Reference>
  responses: { [responseName: string]: Response | Reference }
}

export interface GenericNameNode {
  name: string
  level?: number
  children?: GenericNameNode[]
  parent?: GenericNameNode
}

/** definition name may be changed when parsing generic type
 * then the ref name can not find the map in definition
 * use this map to link the changed definition and ref name.
 * */
export interface RefMap {
  /** key: maybe generic, as "A<B>", value: trimed generic symbol, as "AB" */
  [origin: string]: SwaggerDefinition
}
export interface DefinitionMap {
  // key: cleaned name, may be generic as A<B>
  [definitionName: string]: SwaggerDefinition
}
export interface RequestMap {
  [requestFunctionName: string]: SwaggerRequest
}

export interface EnumMap {
  [enumTypeName: string]: {
    typescriptContent: string
    originalContent: string
  }
}

/** key: origin word, value: translated english word */
export interface WordsMap {
  [k: string]: string
}

/** global variables per project */
export interface ProjectGlobal {
  definitionMap: DefinitionMap
  /** all Reference $ref name use this map
   * key is original ref name
   * value is definition
   * */
  requestMap: RequestMap
  requestRefSet: Set<string>
  requestEnumSet: Set<string>
  enumMap: EnumMap
}
export interface ProjectGlobalMap {
  [projectName: string]: ProjectGlobal
}
