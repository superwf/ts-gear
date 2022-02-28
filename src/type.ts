import type {
  Schema,
  Operation,
  Response,
  Reference,
  Parameter,
  BaseParameter,
  ParameterType,
  Spec,
  // Path,
} from 'swagger-schema-official'
import type { Options } from 'prettier'
import { tuple } from './tool/types'

/** baidu and google can handle different language automatically
 * youdao must assign the language type
 * */
export type TranslationEngine = 'baidu' | 'google'

export const httpMethods = tuple('get', 'put', 'post', 'delete', 'options', 'head', 'patch')

export type HttpMethod = typeof httpMethods[number]

export type RequestParameterPosition = BaseParameter['in']

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

export interface GenerateRequestFunctionNameParameter {
  httpMethod: HttpMethod
  pathname: string
  schema: Spec
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
  pathname: string
  httpMethod: HttpMethod
  schema: Operation
  typescriptContent?: string
  mockTypescriptContent?: string
  parameters?: Array<Parameter | Reference>
  responses: { [responseName: string]: Response | Reference }
}

export type ApiFilter = RegExp | ((req: SwaggerRequest) => boolean)

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

export interface Project {
  /**
   * project name
   * will used to mkdir in "dest"
   * 工程名，会在dest指定的文件夹中生成对应的工程名文件夹
   * */
  name: string

  /**
   * the api files will be generated to
   * note: this directory is relative to this ts-gear config file
   * @example './service'
   * 目标文件夹，相对路径以当前'tsg.config.ts'为基准
   * */
  dest: string

  /**
   * swagger doc path
   * could be remote or local json file
   * starts with "http" is remote
   * others are dealed local json file
   * @example 'http://petstore.swagger.io/v2/swagger.json'
   * @example './fixture/pet.json',
   * openapi数据对应的网址，可以是远程或本地
   * 如果是本地文件，则相对路径以当前tsg.config.ts为基准
   * */
  source: string

  /**
   * the param for fetch swagger doc
   * see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
   * 如果source参数访问的远程接口需要一些认证参数
   * 在这里添加这些需要的参数
   * */
  fetchApiDocOption?: RequestInit

  /**
   * filter api path
   * some project mix too mach useless api
   * use this option could avoid those to be written in your api file
   * 过滤仅需要生成的api规则正则或函数
   * */
  apiFilter?: ApiFilter

  /**
   * request function statement
   * @example "import { requester } from 'ts-gear/requester/fetch'"
   * @required
   * 引入自定义requester的模板字符串
   * */
  importRequesterStatement: string

  /**
   * @default false
   * by default, definiton will generate ts "interface"
   * "class" can keep the property default value
   * set this to "true" to generate "class" instead of "interface"
   * 默认将后端数据结构转为interface，设置为true则使用class
   * */
  preferClass?: boolean

  /**
   * @default false
   * when assigned true, the requester function will receive the "host"
   * defined in swagger
   * 每个请求函数中的请求url是否包括host，当项目明确需要跨域调用时候有用
   * */
  withHost?: boolean

  /**
   * @default false
   * when assigned true, the requester function will receive the "basePath" defined in swagger
   * 每个请求函数中的请求url是否包括openapi定义的basePath
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
   * 是否尝试生成范型，若报错则设置为false更保险一些
   * */
  keepGeneric?: boolean

  /**
   * if your swagger doc has some non english words in definitions keys or some $ref position,
   * choose an engine to transate those words to english
   * the translated results are not for human reading, but for program variable names.
   * because translation depends on internet, you may need to retry some times to get results successfuly.
   * once your api is generated, change to another engine and regenerate new api, the translate output will definitely be different, so the api content will be different too.
   *
   * most case you don`t need this option, try to persuade your teammate to correct the swagger doc to english is a better way.
   * if there are unregular charator, and you can not fix it,
   * try to use an engine provided by "translation.js"
   * "baidu" or "google"
   * 如果一些定义中有非英文字符，可以尝试添加翻译引擎
   * */
  translationEngine?: TranslationEngine

  /**
   * works with translationEngine assigned
   * serial processing translate words
   * when too many words should be translate, translate engine will eccor errors higher probability.
   * when you do not need this, set this to false, and try again.
   * @default true
   */
  translateSerial?: boolean

  /**
   * when too much translate words will definitely result translate request error
   * add interval time between translate
   * unit=milliseconds
   * recommand > 2000
   * @default 2000
   */
  translateIntervalPerWord?: number

  /**
   * show translate debug info
   */
  translateDebug?: boolean

  /**
   * generate mock data switch
   * @default false
   * 是否生成mock数据文件
   * */
  shouldGenerateMock?: boolean

  /**
   * should export request function option types
   * @default true
   * 是否export请求参数类型，推荐不导出，需要使用时通过Parameters类型工具提取
   * */
  shouldExportRequestOptionType?: boolean

  /**
   * should export request function response types
   * @default true
   * 是否export请求返回类型，推荐导出
   * 若不导出也可通过`ReturnType`类型工具提取
   * */
  shouldExportResponseType?: boolean

  /**
   * output content prettier config
   * 生成代码的`prettier`格式化配置
   * */
  prettierConfig?: Options

  /**
   * generate request function name method
   * 生成请求函数名的自定义方法
   * */
  generateRequestFunctionName?: (arg: GenerateRequestFunctionNameParameter) => string

  /**
   * if you need, use this option to generate your function all by your self
   * 生成请求函数体的自定义方法，返回字符串作为函数体模板
   * */
  generateRequestFunction?: (
    arg: GenerateRequestFunctionNameParameter & {
      parameterRequired: boolean
      parameterTypeName: string
      responseSuccessTypeName: string
      project: Project
      originSource: string // use reg or ast parse this string and modify as your will
    },
  ) => string

  /**
   * need js file? OK, change this to true
   * @default false
   * 如果是非ts项目，可使用该项将结果转为js
   * */
  transformJS?: boolean

  /**
   * use cache
   * @default false
   * 使用缓存，默认为false
   * */
  useCache?: boolean

  /**
   * @default '\n'
   * custom EOF
   * 定制换行符，之前的版本从当前运行的操作系统获取换行符的行为是错误的，会使不同的人生成的文件内容不一致
   * 推荐设置为\n
   * 如果有特殊原因，可设置为'auto'，则跟随系统，例如windows则为'\r\n'，mac为'\r'
   * */
  EOL?: '\n' | '\r' | '\r\n' | 'auto'

  /**
   * nullable是否等同于非必填
   * 在一些后端项目中所有字段都是有的，但是他们用nullable来表示此字段是否必填
   * 用来影响字段的?生成
   *
   * 参考: https://swagger.io/specification/?sbsearch=nullable
   * nullable 默认为 false
   *
   * 将该项置为 true 后，则所有没有 nullable 或 nullable: false 的字段都会按 required 处理，即属性类型后不带“?”
   *
   * @default false
   */
  nullableFalseAsRequired?: boolean
}
