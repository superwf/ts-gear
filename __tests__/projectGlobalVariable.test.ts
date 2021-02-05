import { restore, getGlobal } from 'src/projectGlobalVariable'
import type { Project } from 'src/type'

describe('src/global', () => {
  const project: Project = {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    importRequesterStatement: 'import { requester } from "ts-gear/requester/fetch"',
  }
  it('restore', () => {
    const { definitionMap, requestMap, requestRefSet } = getGlobal(project)
    expect(definitionMap).toEqual({})
    expect(requestMap).toEqual({})
    expect(requestRefSet.size).toBe(0)

    definitionMap.aaa = {
      typeName: 'AAA',
    }
    requestMap.aaa = {
      pathname: 'aaa',
      httpMethod: 'get',
      responses: [] as any,
      schema: {} as any,
    }
    requestRefSet.add('a')
    restore(project)
    expect(requestRefSet.size).toBe(0)
    expect(definitionMap).toEqual({})
    expect(requestMap).toEqual({})
  })
})
