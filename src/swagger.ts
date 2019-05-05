// import { SwaggerSchema } from './interface'
import { compile } from 'json-schema-to-typescript'
import { forEach } from 'lodash'
import $RefParser from 'json-schema-ref-parser'
import sample from '../fixture/sample.json'

/** parse swagger json schema data
 * store each part in this class instance
 * */
export class Swagger {
  constructor(schema: any) {
    console.log(compile(schema, 'MySSS'))
  }
}

const parser = new $RefParser()

const { log } = console

parser.dereference(sample).then(s => {
  // log(s.paths['/api/competition/opponent'].get.responses['200'].schema)
  // compile(
  //   s.paths['/api/competition/opponent'].get.responses['200'].schema,
  //   'MyGet',
  // ).then(log)
  forEach(s.definitions, d => {
    compile(d, 'MyGet').then(log)
  })
})
