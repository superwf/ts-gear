export const initConfig = `
/**
  * each project will use the "requester" function when request remote api
  * so this file would be included into your source file when compile
  * */
import type { Project } from 'ts-gear'

const projects: Project[] = [
  {
    /**
     * project name
     * will used to mkdir in "dest"
     *
     * 工程名，会在dest指定的文件夹中生成对应的工程名文件夹
     * */
    name: 'pet',

    /**
     * the api files will be generated to
     * note: this directory is relative to this ts-gear config file
     * @example 'service'
     *
     * 目标文件夹，相对路径以当前'tsg.config.ts'为基准
     * */
    dest: 'service',

    /**
     * swagger doc path
     * could be remote or local json file
     * starts with "http" is remote
     * others are dealed local json file
     * note: if use local file, the directory is relative to this ts-gear config file
     *
     * openapi 文档地址，可以是远程的json文件，也可以是本地的json文件
     * 如果使用本地文件，相对路径以当前'tsg.config.ts'为基准
     * */
    source: 'https://petstore3.swagger.io/api/v3/openapi.json',
    // source: './fixture/pet.json',

    /**
      * request function statement
      * change this to import your request function
      * read
        * https://github.com/superwf/ts-gear/blob/master/src/requester/fetch.ts
        * or
        * https://github.com/superwf/ts-gear/blob/master/src/requester/axios.ts
      * for more details
      *
      * 加载自己的请求函数，函数内的处理逻辑需要自己定义
      * 有fetch与axios两种风格可参考
        * https://github.com/superwf/ts-gear/blob/master/src/requester/fetch.ts
        * https://github.com/superwf/ts-gear/blob/master/src/requester/axios.ts
      *
      * @required
     * */
    importRequesterStatement: 'import xxx from "xxx"',

    /**
     * filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     *
     * 过滤api路径，比如某些工程中，某些api路径是不需要的，可以通过这个选项过滤掉，也可使用函数
     * */
    // apiFilter: /^\\/api/,
    //  or use function
    // apiFilter: ({ pathname }) =>
    //   pathname.startsWith('/api') || pathname.startsWith('/server'),

    /**
     * filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     *
     * 是否优先使用 class 而不是 interface
     * */
    // preferClass: false,

    /**
     * @default false
     * when assigned true, the requester function will receive the "host"
     * defined in swagger
     *
     * 请求的url上是否带有host，跨域请求时需要
     * */
    // withHost: false,

    /**
     * @default false
     * when assigned true, the requester function will receive the "basePath" defined in swagger
     *
     * 请求的url上是否带有basePath
     * */
    // withBasePath: false,

    /**
     * @default true
     * ts-gear try to keep the generic type for all definition
     * but real world swagger doc has many bad definition
     * if generic type make some error
     * assign "false" to this option
     * ts-gear will not generate generic type
     * the process of generating typescript content will be more stable.
     *
     * 是否生成泛型，定义规范的文档推荐生成
     * 单有很多定义不规范的文档根本无法生成泛型，如果运行时报错，把这个改成false再试试
     * */
    // keepGeneric: true,

    /** if your swagger doc has some non english words in definitions keys or some $ref position,
     * choose an engine to transate those words to english
     * the translated results are not for human reading, but for program variable names.
     * because translation depends on internet, you may need to retry some times to get results successfuly.
     * once your api is generated, change to another engine and regenerate new api, the translate output will definitely be different, so the api content will be different too.
     *
     * most case you don not need this option, try to persuade your teammate to correct the swagger doc to english is a better way.
     * if there are unregular charator, and you can not fix it,
     * try to use an engine provided by "translation.js"
     * "baidu" or "google"
     *
     * 如果你的swagger文档中有一些非英文字符，或者有$ref的位置，可以选择一个翻译引擎
     * */
    // translationEngine: 'baidu',

    /**
     * should export request function option types
     *
     * 是否导出请求函数的参数类型
     * @default false
     * */
    // shouldExportRequestOptionType: false,

    /**
     * should export request function response types
     *
     * 是否导出请求函数的返回值类型
     * @default false
     * */
    // shouldExportResponseType: false,

    /**
      * generate mock data switch
      *
      * 是否生成mock请求函数，测试环境使用
      * @default false
      * */
    // shouldGenerateMock: false,

    /**
     * output content prettier config
     *
     * 输入内容的prettier配置
     * */
    // prettierConfig: {
    //   semi: false,
    // },

    /**
     * generate request function name method
     *
     * 输出函数的函数名自定义方法，如果指定将覆盖默认的生成规则
     * */
    // generateRequestFunctionName: (arg: GenerateRequestFunctionNameParameter) => string,

    /**
     * if you need, use this option to generate your function all by your self
     *
     * 自定义生成的请求函数内容，如果指定将覆盖默认的生成规则
     * 这个很少用到，除非有非常特殊的定制需求
     * */
    // generateRequestFunction?: (arg: GenerateRequestFunctionNameParameter) => string,

    /**
     * need js file? OK, change this to true
     *
     * 如果需要输出js而非ts文件，请将这个选项设置为true
     * @default false
     * */
    // transformJS: false,

    /**
     * use cache
     *
     * 是否使用缓存，远程文档地址失效需要重新生成时用得到
     * @default false
     * */
    // useCache: false,

    /**
     * costom the "end of line" character
     *
     * 定制换行符，之前的版本从当前运行的操作系统获取换行符的行为是错误的，会使不同的人生成的文件内容不一致
     * 推荐设置为\\n
     * 如果有特殊原因，可设置为'auto'，则跟随系统，例如windows则为'\\r\\n'，mac为'\\r'
     * @default '\\n'
     * */
    // EOL?: '\\n' | '\\r' | '\\r\\n' | 'auto',

    /**
     * treat all nullable fields as optional
     * reference: https://swagger.io/specification/?sbsearch=nullable
     * when set true, all fields those do not include "nullable: true" property will be treated as required
     *
     * nullable为false时是否等同于非必填
     * 在一些后端项目中所有字段都是有的，但是他们用nullable来表示此字段是否必填
     * 用来影响字段的?生成
     * 如果指定为true，则所有没有nullable: true的字段都会被认为是必须的
     * @default false
     */
    // nullableFalseAsRequired?: boolean
  },
]

export default projects
`
