import { IProjectMap } from 'ts-gear/src/interface'
import { requester as fetchRequester } from 'ts-gear/src/requester/fetch'
import { requester as axiosRequester } from 'ts-gear/src/requester/axios'

const projects: IProjectMap = {
  pet: {
    dest: './service',
    source: 'fixture/pet.json',
    requester: fetchRequester(),
    // source: 'http://petstore.swagger.io/v2/swagger.json',
  },
  projectE: {
    dest: './service',
    source: 'fixture/projectE.json',
    requester: axiosRequester(),
  },
  // {
  //   name: 'projectPont',
  //   source: 'fixture/pontFixture.json',
  // },
}

export default projects
