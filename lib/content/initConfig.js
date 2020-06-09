"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initConfig = void 0;
exports.initConfig = `
/**
  * each project will use the "requester" function when request remote api
  * so this file would be included into your source file when compile
  * */
import { IProject, fetchRequester, axiosRequester } from 'ts-gear'

const projects: IProject[] = [
  {
    /** project name
     * will used to mkdir in "dest"
     * */
    name: 'pet',
    /** the api files will be generated to
     * @example 'service'
     * note: this directory is relative to this ts-gear config file
     * */
    dest: 'service',
    /** swagger doc path
     * could be remote or local json file
     * starts with "http" is remote
     * others are dealed local json file
     * note: if use local file, the directory is relative to this ts-gear config file
     * */
    source: 'http://petstore.swagger.io/v2/swagger.json',
    // source: './fixture/pet.json',

    /**
     * the param for fetch swagger doc
     * see https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters
     * */
      // fetchSwaggerDocOption: {
      //   headers: { Accept: 'application/json,*/*' },
      // },

    requester: fetchRequester(), // or axiosRequester if you prefer axios

    /** filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     * */
    // pathMatcher: /^/api/,

    /** filter api path
     * some project mix too mach useless api
     * use this option could avoid those to be written in your api file
     * */
    // preferClass: false,

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

    /** use swagger sample data mock response data
     * usually usage: process.env.NODE_ENV === 'test'
     * */
    // mockResponse: process.env.NODE_ENV === 'test',

    /** output content prettier config */
    // prettierConfig: { 
    //   semi: false,
    // }
  },
]

export default projects
`;
