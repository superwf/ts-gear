import 'cross-fetch/polyfill'
import type { StringObject } from '../../types'
import invert from '../../utils/invert'

export const root = 'https://fanyi.baidu.com'
// fetch a new baiduid
export const Cookie = {
  value: '',
}

export const fetchCookie = async () => {
  if (Cookie.value) {
    return Cookie.value
  }
  return fetch('https://www.baidu.com/', {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Accept-Encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      Host: 'www.baidu.com',
      'sec-ch-ua': '.Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': 'Windows',
      'Sec-Fetch-Dest': 'document',
      'Sec-Fetch-Mode': 'navigate',
      'Sec-Fetch-Site': 'none',
      'Sec-Fetch-User': '?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
    },
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
  }).then(res => {
    const cookies = res.headers.get('set-cookie')
    const id = (cookies || '').split('; ').find(c => c.match('BAIDUID='))
    if (id) {
      const arr = id.split(', ')
      if (arr.length > 1) {
        ;[, Cookie.value] = id.split(', ')
      } else {
        Cookie.value = id
      }
    }
    return Cookie.value
  })
}

/**
 * 百度支持的语种到百度自定义的语种名的映射，去掉了文言文。
 * @see http://api.fanyi.baidu.com/api/trans/product/apidoc#languageList
 */
export const standard2custom: StringObject = {
  en: 'en',
  th: 'th',
  ru: 'ru',
  pt: 'pt',
  el: 'el',
  nl: 'nl',
  pl: 'pl',
  bg: 'bul',
  et: 'est',
  da: 'dan',
  fi: 'fin',
  cs: 'cs',
  ro: 'rom',
  sl: 'slo',
  sv: 'swe',
  hu: 'hu',
  de: 'de',
  it: 'it',
  'zh-CN': 'zh',
  'zh-TW': 'cht',
  // 'zh-HK': 'yue',
  ja: 'jp',
  ko: 'kor',
  es: 'spa',
  fr: 'fra',
  ar: 'ara',
}

/** 百度自定义的语种名到标准语种名的映射 */
export const custom2standard = invert(standard2custom)
