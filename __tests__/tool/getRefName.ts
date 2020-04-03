import { getRefName } from '../../src/tool/getRefName'

describe('getPredefinedTypeName', () => {
  it('remove prefix like "#/definitions/"', () => {
    expect(getRefName('#/definitions/ApiResponse')).toBe('ApiResponse')
  })
})
