export const initConfig = `
/**
  * each project will use the "requester" function when request remote api
  * so this file would be included into your source file when compile
  * */
import type { Project } from 'ts-gear'
import { fetchRequester, axiosRequester } from 'ts-gear'

const projects: Project[] = [
  {
    /**
     * project name
     * will used to mkdir in "dest"
     * 工程名，会在dest指定的文件夹中生成对应的工程名文件夹
     * */
    name: 'pet',

    /**
     * the api files will be generated to
     * note: this directory is relative to this ts-gear config file
     * @example 'service'
     * 目标文件夹，相对路径以当前'tsg.config.ts'为基准
     * */
    dest: 'service',

    /**
     * swagger doc path
     * could be remote or local json file
     * starts with "http" is remote
     * others are dealed local json file
     * note: if use local file, the directory is relative to this ts-gear config file
     * */
    source: 'http://petstore.swagger.io/v2/swagger.json',
    // source: './fixture/pet.json',

    /**
      * request function statement
      * @required
     * */
    importRequesterStatement: 'import xxx from "xxx"'

    /**
     * filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     * */
    // apiFilter: /^\\/api/,

    /**
     * filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     * */
    // preferClass: false,

    /**
     * @default false
     * when assigned true, the requester function will receive the "host"
     * defined in swagger
     * */
    // withHost: false

    /**
     * @default false
     * when assigned true, the requester function will receive the "basePath" defined in swagger
     * */
    // withBasePath: false

    /**
     * @default true
     * ts-gear try to keep the generic type for all definition
     * but real world swagger doc has many bad definition
     * if generic type make some error
     * assign "false" to this option
     * ts-gear will not generate generic type
     * the process of generating typescript content will be more stable.
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
     * */
    // translationEngine: 'baidu',

    /**
     * should export request function option types
     * @default false
     * */
    // shouldExportRequestOptionType: false

    /**
     * should export request function response types
     * @default false
     * */
    // shouldExportResponseType: false

    /**
      * generate mock data switch
      * @default false
      * */
    // shouldGenerateMock: false

    /**
     * output content prettier config
     * */
    // prettierConfig: { 
    //   semi: false,
    // }

    /**
     * generate request function name method
     * */
    // generateRequestFunctionName: (arg: GenerateRequestFunctionNameParameter) => string

    /**
     * if you need, use this option to generate your function all by your self
     * */
    // generateRequestFunction?: (arg: GenerateRequestFunctionNameParameter) => string

    /**
     * need js file? OK, change this to true
     * @default false
     * */
    // transformJS: false

    /**
     * use cache
     * @default false
     * */
    // useCache: false

    /**
     * 定制换行符，之前的版本从当前运行的操作系统获取换行符的行为是错误的，会使不同的人生成的文件内容不一致
     * 推荐设置为\n
     * 如果有特殊原因，可设置为'auto'，则跟随系统，例如windows则为'\r\n'，mac为'\r'
     * @default '\n'
     * */
    // EOL?: '\n' | '\r' | '\r\n' | 'auto'
  },
]

export default projects
`
