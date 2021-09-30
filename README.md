# ts-gear

[![NPM Version](http://img.shields.io/npm/v/ts-gear.svg?style=flat)](https://www.npmjs.org/package/ts-gear)

![logo](./logo.png)

- [ts-gear](#ts-gear)
  - [Overview](#overview)
    - [Key feature ☯](#key-feature-☯)
  - [Example](#example)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Initiate configuration file](#initiate-configuration-file)
    - [Run](#run)
    - [Check service directory](#check-service-directory)
    - [Use in your code](#use-in-your-code)
  - [Test coverage](#test-coverage)
  - [Diveinto source](#dive-into-source)
  - [Other similar tools](#other-similar-tools)

## Overview

Inspired by [pont](https://github.com/alibaba/pont).

When I first had the idea for automatically generate typescript from json schema, I found `pont`. But it was in an early unstable stage, and I do not like the output code style, and the worst is it can not process some bad defined swagger doc.

So after some trying I stopped using `pont`, and deside to make a new wheel.

Parse openapi prototal then generate your service code by one command.

This tool has high compatibility with various kind of not standard openapi definition doc.

Ts-gear can be used to generate typescript type files and request function from openapi spec doc.

With this tool all openapi doc definition and request methods would be converted to typescript request functions automatically, and when the doc updates, just rerun `tsg` typescript will report any type updates.

If you have tried `pont`, `OpenAPI Generator`, `swagger-codegen` or `oazapfts` and some other tools, but get errors, just try this.

### Key feature ☯

These features make this lib different with `pont`, `OpenAPI Generator`, `swagger-codegen` or `oazapfts` and some tools, if you know some thing better, please let me know.

1. **high compatibility** with various kind of openapi doc definition.

Most other code generators depends on the standard openapi spec doc.

But in real world, especially in my case, all doc has some definition errors.

- Many `$ref` does not has corresponding `definition`.

- Many unregular charators occur in names and properties those can not be used as variable or type name, such as "输出参数".

- Too hard to parse generic types as `ReplyVO<PageVO<List>>`.

- Many javascript key word conflict such as `Map`, `Set`.

`ts-gear` try most to resolve all thses issues.

1. Each request is an independ function, best for **TREE SHAKE**.

1. Try most to generate **generic types**, if fail, you can update config `keepGeneric: false` to generate your service that at least can work.

1. Use **prettier** to output service files, and the prettier config can be configured.

1. Use `ts-morph` for most **ast operation**, so most error occur in code generating step, not runtime step.

1. Automatically **Support OpenAPI Specification v2 and v3**, no need to appoint in config file.

## Example

A good example is a better doc.

Run it to see how ts-gear works.

TODO: prepare an example by create-react-app and ts-gear.

## Installation

```bash
npm install ts-gear -D
// or by yarn
yarn add ts-gear -D
```

## Usage

### Initiate configuration file

```bash
tsg -i
```

generate an initial configuration file `src/tsg.config.ts`.

🐾 Why in `src` directory ? 

Most cases `src` will be included in typescript system by `tsconfig.json`. Put it in src will confirm it will be automatically taken over by typescript.

Skip this step if there is already a configuration file.

### Run

```bash
npx tsg
// or assign another config file
npx tsg -c other_dir/tsg.config.ts
// or if only need update one project, use -p for the project name
npx tsg -p pet
```

### check service directory

The service directory structure should look like as below.

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

### Use in your code

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

## Test coverage

![Statements](./badge/badge-statements.svg)

![Branches](./badge/badge-branches.svg)

![Functions](./badge/badge-functions.svg)

![Lines](./badge/badge-lines.svg)

### Dive into source

process openapi doc steps as shown below.

- read user config file.

- filter projects by name if there are command line params.

- fetch each project swagger doc.

- translate if transate engine is assigned.

- format unregular charators in $ref and definitions.

- process generic type names.

- assemble requests and definitions to global map variables.

- prepare project dest directory.

- generate and write enum and definitions.

- generate and write request.

- write project directory "index.ts".

## Other similar tools

- [OpenAPI Generator](https://openapi-generator.tech/)

    Here are many languages support. If the swagger doc is defined generally standard, this tool is enough.

- [oazapfts](https://github.com/cellular/oazapfts)

    oazapfts use typescript native api to generate ts file, but non-standard swagge doc generated code could not work out of box.

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
| apiFilter | RegExp \| (({pathname: string, httpMethod: HttpMethod}) => boolean) | false | | regexp or function to filter<br />the request path should generate |
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

- The `definition.ts` is generated by the `definitions` part of `swagger spec`, includes all the base data structures.

- The `request.ts` is generated by the `paths` part of `swagger spec`，each request function naming rule is `http request + api path`，for example:

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
