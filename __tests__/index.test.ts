import { requester as f } from 'src/requester/fetch'
import { requester as a } from 'src/requester/axios'
import { fetchRequester, axiosRequester } from 'src/index'

it('export requesters', () => {
  expect(f).toBe(fetchRequester)
  expect(a).toBe(axiosRequester)
})
