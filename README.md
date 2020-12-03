# ts-gear

![logo](./logo.png)

## [中文文档](./README.zh-CN.md)

## Overview

### Purpose

Ts-gear can be used to generate typescript type files and request function from swagger spec doc.

With this tool all swagger doc definition and request method would be converted to typescript automatically, and when the spec updates, just by run ts-gear again you will know any changes, typescrpt type checking will tell any type incompatible case.

### Install

```bash
npm install ts-gear -D
// or with yarn
yarn add ts-gear -D
```

### Usage

#### initial tsg config

generate an initial configuration file `src/tsg.config.ts`.

[more configuration option_document](#Config)

```bash
tsg -i
```

💡 Why in `src` directory ? This config file will be part of the source file, put it in `src` because it is default included by `tsconfig.json` `include` option. The default `tsg` output `service` locate in `src` directory is the same reason.

skip this step if there is already a configuration file.

#### Run `tsg`

```bash
npx tsg // default use `src/tsg.config.ts`
// or assign another config file
npx tsg -c other_dir/tsg.config.ts
// or if only need update one project, use -p for the project name
npx tsg -p pet
```

#### check `service` directory.

The generate directory structure should look like below.

```bash
▾ src/
  tsg.config.ts
  ▾ service/
    ▾ pet/
        definition.ts
        request.ts
        index.ts
```

[more directory information](#Directory information)

#### Use in your code

After the command line operation, use the generated file in `service` directory.

For example, in `src/store/pet.ts`

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

## Version 3 new features and changes.

* Try the most to parse and generate `generic type` names, as `ReplyVO<Data>`.

* Use `swagger-schema-official` for openapi type definition.

* Generate `enum` types, like `export type PetStatus = "available" | "pending" | "sold";`.

* More detailed information for every type and properties document.

* Use `tsg.config.ts` file in `src` directory for configuration file, to include all code generating process in typescript system.

* Most part use `ts-morph` typescript syntax parser to generate code.

* Use `swagger-ui` mock methods to provide `${requestFunctionName}MockData` for each request function for test env.

* Every project configureable features.

  * Configureable `translationEngine`, "baidu" or "google" are available.

  * Configureable `requester` option, a "fetch" and an "axios" requester are provided out of box by `ts-gear`, self custom requester is also accepted.

  * Configureable "dest" directory.

  * add configuration option `withHost` and `withBasePath`.

  * `preferClass` option to generate `class` instead of `interface`, default `false`. When set to true, but most properties do not has default value, so you need to set your `tsconfig.json` as below.

    ```typescript
      "strictPropertyInitialization": false,
    ```

  * `keepGeneric` default true, but if there are some errors occuring when running `tsg`, this option could be set to `false` to generate more stable code.

  * `shouldMockResponseStatement` default `"process.env.NODE_ENV === 'test'"` to generate mock response for test env. use this statement could make the mock response code removeable when production optimized.

  * `prettierConfig` for output code prettier style, only support `prettier` version 2 configuration.

  * `useCache` default false, set true to enable cache.

## test coverage

real coverage more than 50%.

### Statements

![Statements](./badges/badge-statements.svg)

### Branches

![Branches](./badges/badge-branches.svg)

### Functions

![Functions](./badges/badge-functions.svg)

### Lines

![Lines](./badges/badge-lines.svg)

### process swagger spec doc steps(or check `src/run.ts`).

* read user config file.

* filter projects by name if there are command line params.

* fetch each project swagger doc.

* translate if transate engine is assigned.

* format unregular charators in $ref and definitions.

* process generic type names.

* assemble requests and definitions to global map variables.

* prepare project dest directory.

* generate and write enum and definitions.

* generate and write request.

* write project directory "index.ts".

## Origin

Inspired by [pont](https://github.com/alibaba/pont).

When I first had the idea for automatically generate typescript from json schema, I found `pont`. But it was in an early unstable stage, so after some trying I stopped using it, and write this one for more compatible to the swagger doc style of my own team.

## Other similar tools

* [OpenAPI Generator](https://openapi-generator.tech/)

    Here are many languages support. If the swagger doc is defined generally standard, this tool is enough.

* [oazapfts](https://github.com/cellular/oazapfts)

    oazapfts use typescript native api to generate ts file, but non-standard swagge doc generated code could not work out of box.

### What is this one different to other similar ones?

Most other code generators depends on the standard swagger spec doc.

But in real world, especially in my case, most swagger doc has many definition errors. There are many `$ref` does not has corresponding `definition`, many unregular charators occur in names and properties, also the generic parse problems as `ReplyVO<PageVO<List>>`.

`ts-gear` try most to resolve all thses issues.

Support OpenAPI Specification v2 and v3.

### Config

`tsg.config.ts` example

```typescript
import { Project, fetchRequester, axiosRequester } from 'ts-gear'

const projects: Project[] = [
  { ... }
]

export default projects
```

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


### Directory information

* The `definition.ts` is generated by the `definitions` part of `swagger spec`, includes all the base data structures.

* The `request.ts` is generated by the `paths` part of `swagger spec`，each request function naming rule is `http request + api path`，for example:

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

* The `index.ts` is entry file for `definition.ts` and `request.ts`.

Each request function parameter type and return type are mapped to the swagger definition.

If you prefer to use your owne request way, you can only use the `definition.ts` for data type.

## Errata And Feedback

This tool only has the `swagger ui` pet fixture and my projects swagger spec docs for dev fixtures. Issues are welcomed when you errors occurand remember to provide your swagger doc for fixtures, just some problem part definitions are enough.
