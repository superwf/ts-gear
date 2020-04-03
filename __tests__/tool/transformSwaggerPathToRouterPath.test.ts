import { transformSwaggerPathToRouterPath } from 'src/tool/transformSwaggerPathToRouterPath'

describe('transformSwaggerPathToRouterPath', () => {
  it('path', () => {
    expect(transformSwaggerPathToRouterPath('/abc/{id}')).toBe('/abc/:id')
    expect(transformSwaggerPathToRouterPath('/{name}/{id}')).toBe('/:name/:id')

    expect(transformSwaggerPathToRouterPath('/def/{id}/edit')).toBe('/def/:id/edit')
  })
})
