/** default project config file name */
export const CONFIG_FILE = 'pont-config.json'

/** boolean: is the test env */
export const IS_TEST_ENV = process.env.NODE_ENV === 'test'

const cwd = process.cwd()

/** program running path */
export const PROJECT_ROOT = IS_TEST_ENV ? cwd : `${cwd}/fixture`
