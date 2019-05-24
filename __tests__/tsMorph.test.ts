import { compile } from '../src/source'
// import { PropertyDeclarationStructure } from 'ts-morph'

describe('compile', () => {
  it('interface', async () => {
    const tsTemplate = await compile(source => {
      const inter = source.addInterface({ name: 'ITest' })
      inter.addProperty({
        name: 'a',
        type: `{
          name: string
          age: number
      }`,
      })
    })
    expect(tsTemplate).toMatchSnapshot()
  })

  it('class', async () => {
    const tsTemplate = await compile(source => {
      const inter = source.addClass({ name: 'MyClass' })
      inter.addProperty({
        name: 'a',
        leadingTrivia: 'public ',
        type: `{
          name: string
          age: number
      }`,
      })
    })
    expect(tsTemplate).toMatchSnapshot()
  })

  it('function', async () => {
    const tsTemplate = await compile(source => {
      source.addFunction({
        name: 'myFunc',
        parameters: [
          {
            name: 'param',
            type: 'number',
          },
        ],
        isExported: true,
        statements: `
      const [ url, option ] = interceptRequest(param)
      option.method = 'get'
      return fetch(url, option).then<Reply>(interceptResponse)
        `,
      })
    })
    expect(tsTemplate).toMatchSnapshot()
  })
})
