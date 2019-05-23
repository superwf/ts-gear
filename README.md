# 自动从swagger生成ts类，与请求接口的函数

## 起源 Origin

inspired by [pont](https://github.com/alibaba/pont)
pont是法语，桥。
编程语言也不用法语，觉得还是改个名比较舒服。
于是起了个ts-gear的名字，ts是typescript与swagger的组合，gear寓意通过这个工具像齿轮一样，将前后端紧密的结合在一起，构成一架严密运转的机器。

经常使用该工具，可以很方便的感知后端接口定义的变化。
## install

```sh
yarn install ts-gear
npm install ts-gear
```

## 使用

先在项目根目录下生成配置文件`ts-gear.ts`，配置文件使用ts，所以配置是带类型校验的。
```
import { IUserConfig } from 'ts-gear/src/interface'

const config: IUserConfig = {
  // 生成swagger配置ts文件的目录
  dest: './service',
  // projects是项目的数组
  projects: [
    {
      name: 'pet',
      source: '__tests__/fixture/pet.json',
    },
    {
      name: 'sample',
      source: 'http://192.168.1.111/v2/api-docs',
			// fetchOption 是可选项，如果swagger接口有一些验证需求，
      // 可以按原生fetch可接收的参数配置
      // 如果验证很麻烦最好还是在浏览器上把swagger文档copy到一个本地json文件方便，只是做不到即时更新了。
      fetchOption: {
        header: {
					Authorization: 'your token ...',
					...
        }
				...
      }
    },
  ],
}

export default config

```

执行

```sh
npx tsg // 如果tsg名称被占用，用npx ts-gear
```

以上面的配置文件为例子
会生成如下文件结构

```sh
▾ service/
  ▾ pet/
      definitions.ts
      fetchInterceptor.ts
      paths.ts
  ▾ sample/
      definitions.ts
      fetchInterceptor.ts
      paths.ts
```

## 开发过程 develop steps

* 从pont获得了从swagger的schema生成ts文件的想法。

* 最开始想增强pont拿来就用，在看pont源码的过程中感觉有些pont里的源码理解不了，应该是没有遇到pont作者当时遇到的schema结构大概是理解不了的，就全重写了。

* 使用[ts-morph](https://dsherret.github.io/ts-morph)简单的解析了一下ts语法。

* [更多](./DEV.md)

## 修订与反馈 Errata And Feedback

我只是将我遇到的几个项目的swagger文档、swagger ui官方的pet例子，还有参考了一些swagger schema官方文档做为样例开发了这个程序。肯定有一些没有考虑到的情况。如果有可以改进或解析错误的情况，欢迎将不能解析的schema提issue。

## TODO

* 将`ReplyVO«ConfigVO»`转换成泛型的格式`ReplyVO<ConfigVO>`，是一个优化点，可以使数据结构更优雅更有关联性，但暂时没有也可以用。

* 处理`oneOf, allOf, anyOf, not`里可能有的`discriminator`情况。

* 添加`responses`中200之外的其它类型，添加到`fetch.then<T1, T2>，T2`的位置上。
