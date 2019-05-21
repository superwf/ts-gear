import { IUserConfig } from 'ts-gear/src/interface'

const config: IUserConfig = {
  dest: './service',
  projects: [
    {
      name: 'pet',
      source: '__tests__/fixture/pet.json',
    },
    {
      name: 'sample',
      source: '__tests__/fixture/sample.json',
    },
    {
      name: 'price',
      source: 'http://192.168.116.211/v2/api-docs',
    },
  ],
}

export default config
