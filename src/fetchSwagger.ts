// import fetch from 'node-fetch'
import { info, error } from './log'

export const fetchSwaggerJSONSchema = async (url: string) => {
  try {
    info('start fetching')
    const res = await fetch(url)
    const schema = await res.json()
  } catch (e) {
    error(e)
  }
}

fetchSwaggerJSONSchema('aaa')
