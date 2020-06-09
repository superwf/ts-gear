import { IProject, fetchRequester, processProject } from 'ts-gear'

const project: IProject = {
  name: 'pet',
  dest: './service',
  source: '../fixture/pet.json',
  requester: fetchRequester(),
  // source: 'http://petstore.swagger.io/v2/swagger.json',
}

processProject(project)
