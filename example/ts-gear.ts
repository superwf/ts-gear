import { IUserConfig } from 'src/interface'

const config: IUserConfig = {
  dest: './service',
  projects: [
    {
      name: 'pet',
      source: 'fixture/pet.json',
    },
    {
      name: 'projectA',
      source: 'fixture/projectA.json',
    },
    {
      name: 'projectB',
      source: 'fixture/projectB.json',
    },
    {
      name: 'projectC',
      source: 'fixture/projectC.json',
    },
  ],
}

export default config