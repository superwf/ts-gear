import type { Project } from 'ts-gear'
import { processProject } from 'ts-gear'

const project: Project = {
  name: 'pet',
  dest: './service',
  source: '../fixture/pet.json',
  importRequesterStatement: 'import { requester } from "ts-gear/requester/fetch"',
  // source: 'http://petstore.swagger.io/v2/swagger.json',
}

processProject(project)
