import fetch = require('isomorphic-fetch')
import { error, info } from './log'

/**
 * 按url是否以http开头
 * 调用fetch，或直接require本地文件
 * 远程接口的swagger如果有验证限制不能直接访问，
 * 自己copy成json文件本地加载最方便
 * 如果需要自动化，参照fetch文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch
 * 在配置文件的fetchOption按RequestInit接口格式添加验证参数
 * */
export const fetchSwaggerJSONSchema = async (url: string, init?: RequestInit) => {
  if (url.startsWith('http')) {
    info(`start fetching ${url}`)
    const res = await fetch(url, init)
    const swaggerSchema = await res.json()
    info(`fetching ${url} done`)
    return swaggerSchema
  }
  // json文件直接require
  if (!url.endsWith('.json')) {
    error('user config file should ends with `.json`')
  }
  return require(url)
}
