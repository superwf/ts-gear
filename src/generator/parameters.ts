import { JSONSchema } from '../interface'

// type requestPath = string

interface IRequestMethod {
  parameters: Array<{
    name: string
    in: 'query' | 'body' | 'path'
    description: string
    required: boolean
    type: string
    format?: string
  }>
  summary: string
  operationId?: string
  produces: string[]
  tags: string[]
  responses: {
    200: {
      description: string
      schema?: JSONSchema
    }
    [key: string]: {
      description: string
      schema?: JSONSchema
    }
  }
  security?: any
  deprecated: boolean
}

/** the swagger "paths" interface */
interface IPath {
  /** api url path */
  [k: string]: {
    /** http method */
    get?: IRequestMethod
    post?: IRequestMethod
    delete?: IRequestMethod
    put?: IRequestMethod
  }
}

export const generateParameters = (schema: JSONSchema) => {
  schema.paths as IPath
}
