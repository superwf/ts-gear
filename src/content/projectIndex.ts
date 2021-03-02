/** use a index.ts file to export all */
export const projectIndex = (EOL: string) => ["export * from './request'", "export * from './definition'"].join(EOL)
