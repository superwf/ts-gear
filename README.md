# ts-gear

[![NPM Version](http://img.shields.io/npm/v/ts-gear.svg?style=flat)](https://www.npmjs.org/package/ts-gear)

![logo](./logo.png)

- [ts-gear](#ts-gear)
  - [Overview](#overview)
    - [Killer features ☯](#killer-features-☯)
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
  - [Config](#config)
    - [Config Options](#config-options)
    - [Requester](#requester)
    - [Directory information](#directory-information)
  - [Errata And Feedback](#errata-and-feedback)

## Overview

Inspired by [pont](https://github.com/alibaba/pont).

When I first had the idea for automatically generate typescript from json schema, I found `pont`. But it was in an early unstable stage, and I do not like the output code style, and the worst is it can not process some bad defined openapi doc type.

So after some trying and compare some other tools, I deside to make a new wheel -- `ts-gear`.

Ts-gear parse openapi doc and then generate your service code by one command.

The service code includes request functions and data type definitions.

Ts-gear works with various kind of none standard openapi definition doc with high compatibility.

With this tool all openapi doc definition and request methods would be converted to typescript request functions automatically, and when the doc updates, just rerun `tsg`, typescript will report any type updates.

If you have tried `pont`, `OpenAPI Generator`, `swagger-codegen` or `oazapfts` and some other tools, but got errors, just try this.

### Killer features ☯

These features make `ts-gear` different with `pont`, `OpenAPI Generator`, `swagger-codegen` or `oazapfts` and some others, if you know some thing better, please let me know.

1. **high compatibility** with various kind of openapi doc definition.

Most other code generators depends on the standard openapi spec doc.

But in real world, especially in my case, all doc has some definition errors.

- Many `$ref` does not has corresponding `definition`.

- Many unregular charators occur in names and properties those can not be used as variable or type name, such as "输出参数".

- Too hard to parse generic types as `ReplyVO<PageVO<List>>`.

- Many javascript key word conflict such as `Map`, `Set`.

`ts-gear` try the best to solve all thses issues.

1. Each request is an independ function, best for **TREE SHAKE**.

1. Try the best to generate **generic types**, if fail, you can update config `keepGeneric: false` to generate your service that at least can work.

1. Use **prettier** to output service files, and the prettier format can be configured.

1. Use `ts-morph` for most **ast operation**, so most error occur in code generating step, not runtime step.

1. Automatically **Support OpenAPI Specification v2 and v3**, no need to configure.

## Example

A good example is a better doc.

Clone and run to see how `ts-gear` works.

See [https://github.com/superwf/ts-gear-example](https://github.com/superwf/ts-gear-example)

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
// default use "src/tsg.config.ts"
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

export const findPet = (petId: number) => {
  return getPetPetId({
    path: {
      petId,
    }
  }).then(pet => {
    console.log(pet)
    // pet will be the instance of Pet, it has Pet properties.
    return pet
  })
}

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

## Config

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
| dest | string | true | | parent directory of project, relative to `tsg.config.ts` <br /> example: 'service' |
| source | string | true | | swagger doc url <br /> remote url or local json file |
| fetchApiDocOption | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters) | false | | request remote openapi doc parameters for `fetch` |
| apiFilter | RegExp \| (({pathname: string, httpMethod: HttpMethod}) => boolean) | false | | some project mix too mach useless api<br />use this option could avoid those to be written in your api file |
| importRequesterStatement | string | true | | example: `import { requester } from "./myCustomRequester"`, make sure provide a `requester`, see [Requester](#requester) |
| preferClass | boolean | false | false | generate class rather than class |
| withHost | boolean | false | false | request with swagger doc `host` in when invoke the `requester` func |
| withBasePath | boolean | false | false | request with swagger doc `basePath` in when invoke the `requester` func |
| keepGeneric | boolean | false | true | try parse available generic type |
| translationEngine | 'baidu' \| 'google' | false |  | translate special charators in swagger doc definitions |
| translationSerial | boolean | false |  | translate words serially |
| translateIntervalPerWord | number | false |  | only works when translateSerial is true <br />when too much translate words will definitely result translate request error <br /> add interval time between translate <br />unit=milliseconds <br /> recommand > 2000
| shouldGenerateMock | boolean | false | generate mock data switch |
| shouldExportRequestOptionType | boolean | true | true | should export request function option types |
| shouldExportResponseType | boolean | true | true | should export request function response types |
| prettierConfig | [Options](https://prettier.io/docs/en/options.html) | false | | prettier v2 options |
| generateRequestFunctionName | (arg: GenerateRequestFunctionNameParameter) => string | false | |  generate request function name method |
| generateRequestFunction | (arg: GenerateRequestFunctionNameParameter & {
      parameterRequired: boolean
      parameterTypeName: string
      responseSuccessTypeName: string
      project: Project
      originSource: string
    }) => string | false | | use this option to generate your function all by your self |
| transformJS | boolean | false | false | should generate js file |
| useCache | boolean | false | false | use cache |
| EOL | string | false | false | custom EOF |

### Requester

`requester` is a request function made by your condition.

`ts-gear` has tow example, `fetch` and `axios`. Read the code in `ts-gear` for reference, copy and modify to compatible with your own project. **The example code is not out of box.**

- `fetch` example, write a file in `src/requester.ts`

```typescript
import generateRequester from 'ts-gear/lib/requester/fetch'
export const requester = generateRequester({
  ... // some general fetch init config use for each request
})
```

Use it in your `tsg.config.ts`

```typescript
{
importRequesterStatement: 'import { requester } from "../../requester"'
}
```

- `axios` example, write a file in `src/requester.ts`

```typescript
import generateRequester from 'ts-gear/lib/requester/axios'
const instance = axios.create({
  ... // some general axios config use for each request
})
export const requester = generateRequester(instance)
```

Use it in your `tsg.config.ts`, same as `fetch`.

```typescript
{
importRequesterStatement: 'import { requester } from "../../requester"'
}
```

Note: Important, the requester function must be an async function, or return a promise.

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

- The `index.ts` is entry file for `definition.ts` and `request.ts`.

Each request function parameter type and return type are mapped to the swagger definition.

If you prefer to use your owne request way, you can only use the `definition.ts` for data type.

## Errata And Feedback

This tool only has a few kind fixtures for dev and test. Issues are welcomed when you meet some errors, remember to provide your swagger doc for testing fixtures.
