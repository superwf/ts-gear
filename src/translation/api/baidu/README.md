# 百度网页翻译接口

## 翻译接口

```
路径：https://fanyi.baidu.com/v2transapi
方法：POST
请求头：
  Content-Type: application/x-www-form-urlencoded; charset=UTF-8
  X-Requested-With: XMLHttpRequest
  Cookie: BAIDUID=<在无 Cookie 或清空了 Cookie 之后，访问 https://fanyi.baidu.com 会使用 Set-Cookie 响应头返回>;
请求体：query=<要翻译的文本>&from=<文本语种>&to=<目标语种>&transtype=translang&simple_means_flag=3&token=<见后文>&sign=<见后文>
响应体：<见 ./index.ts 中的 IResponse>
```

### 如何计算翻译接口中的 token 和 sign

`token` 可以从 https://fanyi.baidu.com 的 HTML 里提取出来，提取方法见 ./sign/seed.ts。注意：如果请求时没有带上 `BAIDUID` Cookie，那么得到的 token 是无效的！

为了解决这个问题，在 Node.js 端应该先请求一次网页，保存得到的 `BAIDUID`，然后后续再使用这个 Cookie 提取 token 和 seed；在浏览器端只需要提前请求一次网页就好，浏览器会自动设置 Cookie 并在后续的请求中带上 Cookie。

目前我的解决方案是在代码中硬编码了一个从浏览器中得到的 BAIDUID，不过最好的办法是在请求翻译接口得到 997 的 error 时自动获取一次 Cookie（在浏览器端就是自动请求一次网页）然后重试。

另外，`token` 似乎是根据 BAIDUID 来的，只要 BAIDUID 不变，token 就不会变；用户登录或者退出百度账号不会造成 BAIDUID 改变，另外这个 BAIDUID 的过期时间被设置成了一年，所以我估计直接在代码中硬编码一个 Cookie 应该没问题，但浏览器端无法得知用户什么时候会清空 Cookie，所以最好还是每次运行前都先请求一次。

`sign` 需要先通过请求 https://fanyi.baidu.com 后从 HTML 中提取出来一个种子，然后用方法根据待翻译的文本和种子计算出来。种子应该是会在一定时间后刷新的，但不太清楚具体是多长时间。提取种子的方法见 ./sign/seed.ts，计算 sign 的方法见 ./sign/sign.ts。

## 检测语种接口

```
路径：https://fanyi.baidu.com/langdetect
方法：POST
请求头：
  Content-Type: application/x-www-form-urlencoded; charset=UTF-8
请求体：query=<要检测语种的文本，最长 73 个字符>
响应体：<见 ./index.ts 中的 IDetectResult>
```
