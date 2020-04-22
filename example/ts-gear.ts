import { IProject } from 'ts-gear/src/interface'
import { requester as fetchRequester } from 'ts-gear/lib/requester/fetch'
import { requester as axiosRequester } from 'ts-gear/lib/requester/axios'

const projects: IProject[] = [
  {
    name: 'pet',
    dest: './service',
    source: 'fixture/pet.json',
    requester: fetchRequester(),
    // source: 'http://petstore.swagger.io/v2/swagger.json',
  },
  {
    name: 'projectE',
    dest: './service',
    source: 'fixture/projectE.json',
    keepGeneric: true,
    requester: axiosRequester(),
  },
  // {
  //   name: 'ignore',
  //   dest: './service',
  //   source: 'fixture/ignore.json',
  //   keepGeneric: true,
  //   preferInterface: true,
  //   requester: fetchRequester(),
  // },
  // {
  //   name: 'projectPont',
  //   source: 'fixture/pontFixture.json',
  //   dest: './service',
  //   keepGeneric: true,
  //   translationEngine: 'baidu',
  //   requester: axiosRequester(),
  // },
]

export default projects
