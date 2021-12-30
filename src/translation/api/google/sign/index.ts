/**
 * 代码来自 https://github.com/matheuss/google-translate-token
 * 做了一些修改以适应本项目
 */

import request from '../../../utils/make-request'
import { getRoot } from '../state'
import { sM, window } from './encryption'

async function updateTKK(com: boolean) {
  const now = Math.floor(Date.now() / 3600000)

  if (Number(window.TKK.split('.')[0]) === now) {
    return
  }

  const html = await request({
    url: getRoot(com),
    responseType: 'text'
  })
  const code = html.match(/tkk:'(\d+\.\d+)'/)
  if (code) {
    window.TKK = code[1]
  }
}

export default async function(text: string, com: boolean) {
  await updateTKK(com)
  return sM(text)
}
