import { renameImportStatementToRequester } from '../../src/tool/renameImportStatementToRequester'

it('rename import declaration name', () => {
  expect(renameImportStatementToRequester('import project from "../file"')).toBe('import requester from "../file"')
  expect(renameImportStatementToRequester('import { project } from "../file"')).toBe(
    'import { project as requester } from "../file"',
  )
})
