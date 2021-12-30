/* eslint-disable camelcase  */
export interface ResponseSymbol {
  parts: {
    part?: string // 单词属性，例如 'n.'、'vi.' 等
    part_name?: string // 部分单词没有 part，只有 part_name，例如 “Referer”
    means: string[] // 此单词属性下单词的释义
  }[]
  ph_am: string // 美国音标
  ph_en: string // 英国音标
}
export interface Response {
  error?: number // 查询失败时会有这个属性。997 表示 token 有误，此时应该获取 BAIDUID 后重试
  dict_result: {
    // 针对英语单词会提供词典数据。若当前翻译没有词典数据，则这个属性是一个空数组
    simple_means?: {
      symbols: [ResponseSymbol] // 虽然这是一个数组，但是它一直都只有一个元素

      exchange: {
        // 单词的其他变形
        word_done: '' | string[] // 过去分词
        word_er: '' | string[]
        word_est: '' | string[]
        word_ing: '' | string[] // 现在分词
        word_past: '' | string[] // 过去式
        word_pl: '' | string[] // 复数
        word_proto?: string[] // 词根，偶尔没有
        word_third: '' | string[] // 第三人称单数
      }
    }
  }

  trans_result: {
    data: {
      src: string
      dst: string
    }[]
    from: string
    to: string
  }
}
