import { config } from '../constant'

/** use a index.ts file to export all */
export const projectIndex = () => ["export * from './request'", "export * from './definition'"].join(config.EOL)
