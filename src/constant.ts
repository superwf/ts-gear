import type { Project } from './type'

export const configFileName = 'tsg.config'

export const defaultUseMockResponseStatement = 'process.env.NODE_ENV === "test"'

export const targetFileNames = {
  index: 'index.ts',
  definition: 'definition.ts',
  request: 'request.ts',
  mockRequest: 'mockRequest.ts',
}

export const config: {
  EOL: Required<Project['EOL']>
} = {
  EOL: '\n',
}

export const MIME_JSON = 'application/json'
export const MIME_TEXT = 'text/plain'
