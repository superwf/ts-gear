import 'cross-fetch/polyfill'

export const fetchBaiduid = async () => {
  fetch('https://www.baidu.com/', {
    headers: {
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'zh-CN,zh;q=0.9',
      'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
    },
    referrerPolicy: 'strict-origin-when-cross-origin',
    body: null,
    method: 'GET',
  }).then(res => {
    const cookies = res.headers.get('set-cookie')
    const id = (cookies || '').split('; ').find(c => c.match('BAIDUID='))
    if (id) {
      return id.split(', ')[1]
    }
    return ''
  })
}
fetchBaiduid()
