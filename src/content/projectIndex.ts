import { EOL } from 'os'

/** use a index.ts file to export all */
export const projectIndex = ["export * from './request'", "export * from './definitions'"].join(EOL)
