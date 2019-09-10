import pet from '../example/fixture/pet.json'
// import projectA from '../example/fixture/projectA.json'
// import projectB from '../example/fixture/projectB.json'
// import projectC from '../example/fixture/projectC.json'
import { JSONSchema } from '../src/interface'

import { initializeSchema } from 'src/util'
import { generateRequests } from 'src/requests'

describe('generateRequests', () => {
  it('pet paths', async () => {
    const { $refsInPaths } = await initializeSchema(pet as JSONSchema)
    const { requestsContent, mockRequestsContent } = await generateRequests(pet as JSONSchema, $refsInPaths)
    expect(requestsContent).toMatchSnapshot()
    expect(mockRequestsContent).toMatchSnapshot()
  })

  // it('projectA paths', async () => {
  //   const { $refsInPaths } = await initializeSchema(projectA as JSONSchema)
  //   const { requestsContent, mockRequestsContent } = await generateRequests(projectA as JSONSchema, $refsInPaths)
  //   expect(requestsContent).toMatchSnapshot()
  //   expect(mockRequestsContent).toMatchSnapshot()
  // })

  // it('projectB paths', async () => {
  //   const { $refsInPaths } = await initializeSchema(projectB as JSONSchema)
  //   const { requestsContent, mockRequestsContent } = await generateRequests(projectB as JSONSchema, $refsInPaths)
  //   expect(requestsContent).toMatchSnapshot()
  //   expect(mockRequestsContent).toMatchSnapshot()
  // })

  // it('projectC paths', async () => {
  //   const { $refsInPaths } = await initializeSchema(projectC as JSONSchema)
  //   const { requestsContent, mockRequestsContent } = await generateRequests(projectC as JSONSchema, $refsInPaths)
  //   expect(requestsContent).toMatchSnapshot()
  //   expect(mockRequestsContent).toMatchSnapshot()
  // })
})
