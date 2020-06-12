import { sow, harvest, readImportStatement } from 'src/source'

describe('source', () => {
  it('start and harvest', () => {
    const s = sow()
    s.addClass({
      name: 'MyClass',
      isExported: true,
      properties: [
        {
          name: 'name',
          type: 'string',
        },
      ],
    })
    const content = harvest(s)
    expect(content).toMatchSnapshot()
  })

  it('start and harvest again', () => {
    const s = sow()
    const s1 = sow()
    s.addClass({
      name: 'MyClass',
      isExported: true,
      properties: [
        {
          name: 'name',
          type: 'string',
        },
      ],
    })
    harvest(s1)
    const content = harvest(s)
    expect(content).toMatchSnapshot()
  })
})
