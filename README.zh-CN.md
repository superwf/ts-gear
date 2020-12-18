# ts-gear

## [English doc](./README.md)

## 用途

自动从swagger生成ts类型与请求接口的函数

方便的感知后端接口定义的变化。

## 起源

inspired by [pont](https://github.com/alibaba/pont)

`ts-gear`命名：ts是typescript与swagger的组合，gear寓意通过这个工具像齿轮一样，将前后端紧密的结合在一起，构成一架严密运转的机器。

## 用法

### 安装

```bash
yarn add ts-gear -D
// or
npm install ts-gear -D
```

### 生成初始化配置

在项目`src`目录下生成配置文件`tsg.config.ts`。

```bash
tsg -i
```

💡 因为该配置文件与请求函数有关，会在生成的代码调用，因此放到`src`文件夹中。

### 运行tsg

```bash
npx tsg // default use `src/tsg.config.ts`
// or assign another config file
npx tsg -c other_dir/tsg.config.ts
// or if only need update one project, use -p for the project name
npx tsg -p pet
```

#### 查看`src/service`文件夹，结构如下

```bash
▾ src/
  tsg.config.ts
  ▾ service/
    ▾ pet/
        definition.ts
        request.ts
        index.ts
```

[more directory information](#目录结构)

#### 如何在代码中调用

例如：在`src/store/pet.ts`文件中

```javascript
import { getPetPetId } from '../../service/pet'

getPetPetId({
  path: {
    petId: 1
  }
}).then(pet => {
  console.log(pet)
  // pet will be the instance of Pet, it has Pet properties.
})
```

![type generated example](./doc/pet.gif)

## Version 3 新特性与更新

* `keepGeneric`尝试生成范型类型, 例如`ReplyVO<Data>`，如果生成的范型有错误应将该项目设置为false。

* 使用包 `swagger-schema-official`来规范openapi类型。

* 生成 `enum` 类型, 例如 `export type PetStatus = "available" | "pending" | "sold";`.

* 生成更完善的注释文档。

* 使用 `src/tsg.config.ts` 作为配置文件, to include all code generating process in typescript system.

* 使用`swagger-ui`生成mockData的方法，在`${requestFunctionName}MockData` 中给test环境使用.

* 每个project可单独配置.

  * 可配置的 `translationEngine`, 可用的引擎有"baidu" 或 "google".

  * 可配置的 `requester` , 默认提供 "fetch" 和 "axios" 两种，也可以自定义.

  * 可配置的 "dest" 目标文件夹.

  * 可配置的 `withHost` 与 `withBasePath`选项.

  * 使用`preferClass` 选项生成 `class`，默认为false，将基础数据结构生成`interface`。

  * `shouldMockResponseStatement`，默认为 `"process.env.NODE_ENV === 'test'"`，生成测试环境的mock数据。

  * `prettierConfig` 支持 `prettier` version 2 配置.

  * `useCache` 默认 false, 可设置为true，使用缓存。

## 测试覆盖约50%

### Statements

![Statements](./badges/badge-statements.svg)

### Branches

![Branches](./badges/badge-branches.svg)

### Functions

![Functions](./badges/badge-functions.svg)

### Lines

![Lines](./badges/badge-lines.svg)

### 运行步骤

* 读取配置文件。

* 读取命令行参数过滤需要解析的项目。

* 获取各个项目的openapi数据。

* 如果设置了翻译，调用翻印接口。

* 统一格式化所有特殊字符。

* 解析范型名称。

* 将所有请求与定义名称组装到内部的全局变量中.

* 准备好输出文件夹.

* 写入枚举与基础类型定义.

* 写入请求函数.

* 生成索引一个导出所有的`index.ts`.

## 其他类似工具

* [OpenAPI Generator](https://openapi-generator.tech/)

* [oazapfts](https://github.com/cellular/oazapfts)

### 本项目的特色

大多数其他类型的openapi生成工具对原始定义的要求较高，容错率低，而且没有做生成范型的处理。而这几个点是本项目所重点解决的问题。

支持 OpenAPI Specification v2 v3.

### 配置样例

`tsg.config.ts` example

```typescript
import { Project, fetchRequester, axiosRequester } from 'ts-gear'

const projects: Project[] = [
  { ... }
]

export default projects
```

使用axios请看[axios](#axios)

#### Config Options

| Option name | type | required | default | description |
|--------|------|---------|----------|-------------|
| name | string | true | | your project name |
| dest | string | true | | parent directory of project |
| source | string | true | | swagger doc url <br /> remote url or local json file |
| fetchSwaggerDocOption | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) | false | | swagger doc url<br />support remote or local json |
| pathMatcher | RegExp \| ((url: string, httpMethod?: HttpMethod) => boolean) | false | | regexp or function to filter<br />the request path should generate |
| requester | (url: string, param?: RequestParameter) => Promise<any> | false | | request func invoked in each request method, make sure provide `requester` or `importRequesterStatement` |
| importRequesterStatement | string | false | | like `import axios from "axios"`, make sure provide `requester` or `importRequesterStatement` |
| preferClass | boolean | false | false | generate class rather than class |
| withHost | boolean | false | false | request with swagger doc `host` in when invoke the `requester` func |
| withBasePath | boolean | false | false | request with swagger doc `basePath` in when invoke the `requester` func |
| keepGeneric | boolean | false | true | try parse available generic type |
| translationEngine | 'baidu' \| 'google' | false |  | translate special charators in swagger doc definitions |
| shouldMockResponseStatement | string | false | "process.env.NODE_ENV === 'test'" | boolean statement switcher for using mock data |
| prettierConfig | [Options](https://prettier.io/docs/en/options.html) | false | | prettier v2 options |
| transformJS | boolean | false | false | should generate js file |

### axios

`ts-gear`内置的`axiosRequester`接受一个`axios`的实例作为参数，如果没有则使用默认的`axios`。

对于`axios`的各种配置可自己首先创建一个`axios`实例，然后传入`axiosRequester`使用。

### 目录结构

* `definition.ts`由`definitions`部分生成，包含所有基础类型定义。

* `request.ts`由`paths`生成，请求函数的命名规则：`http request + api path`，例如:

```javascript
  "paths": {
    "/pet": {
      "post": { // will generate `postPet` function
      ...
      },
    },
    "/pet/findByTags": {
      "get": { // will generate 'getPetFindByTags' function
      ...
      },
    },
    "/pet/{petId}": {
      "get": { // will generate 'getPetPetId' function
      ...
      },
    },
```

* `index.ts`是`definition.ts`与`request.ts`的导出出口文件。

每个请求函数的入参与返回数据类型，都会生成确定的ts类型。

如果生成的请求函数不能满足需求，也可以只使用`definition.ts`中的数据类型定义。
