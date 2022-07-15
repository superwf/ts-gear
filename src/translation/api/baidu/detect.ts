import type { StringOrTranslateOptions } from '../types'
import request from '../../utils/make-request'
import getError, { ERROR_CODE } from '../../utils/error'
import { root, custom2standard, fetchCookie, Cookie } from './state'

interface DetectResult {
  error: number
  message: string
  lan: string
}

export default async function (options: StringOrTranslateOptions) {
  if (!Cookie.value) {
    await fetchCookie()
  }
  const query = (typeof options === 'string' ? options : options.text).slice(0, 73)
  const body: DetectResult = await request({
    method: 'post',
    url: `${root}/langdetect`,
    body: {
      query,
    },
    type: 'form',
    headers: {
      Cookie: Cookie.value,
    },
  })

  if (body.error === 0) {
    const iso689lang = custom2standard[body.lan]
    if (iso689lang) return iso689lang
  }

  throw getError(ERROR_CODE.UNSUPPORTED_LANG)
}
