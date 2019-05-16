import { compile } from '../src/source'

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
    console.log(tsTemplate)
  })

  it.only('function', async () => {
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
    console.log(tsTemplate)
  })
})
