import { requester as f } from 'src/requester/fetch'
import { requester as a } from 'src/requester/axios'
import { fetchRequester, axiosRequester, processProject } from 'src/index'
import { processProject as pP } from 'src/run'

it('export requesters', () => {
  expect(f).toBe(fetchRequester)
  expect(a).toBe(axiosRequester)
  expect(pP).toBe(processProject)
})
