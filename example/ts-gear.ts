import { IProject } from 'ts-gear/src/interface'
import { requester as fetchRequester } from 'ts-gear/src/requester/fetch'
import { requester as axiosRequester } from 'ts-gear/src/requester/axios'

const projects: IProject[] = [
  {
    dest: './service',
    name: 'pet',
    source: 'fixture/pet.json',
    requester: fetchRequester(),
    // source: 'http://petstore.swagger.io/v2/swagger.json',
  },
  {
    dest: './service',
    name: 'projectE',
    source: 'fixture/projectE.json',
    requester: axiosRequester(),
  },
  // {
  //   name: 'projectPont',
  //   source: 'fixture/pontFixture.json',
  // },
]

export default projects
