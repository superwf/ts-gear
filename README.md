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
// or
yarn add ts-gear -D
```

### Usage

#### initial tsg config

generate an initial configuration file `tsg.config.ts`.

skip it if there is already a configuration file.

[more configuration document](#Config)

```bash
tsg -i
```

#### Run `tsg`

```bash
npx tsg
// or if only need update one project, use -p for the project name
npx tsg -p pet
```

#### check `service` directory.

The generate directory structure should look like below.

```bash
▾ service/
  ▾ pet/
      definitions.ts
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

## Version 2 new features and changes.

* Try the best to parse and generate `generic type` names, as `ReplyVO<Data>`.

* Use `swagger-schema-official` for openapi type definition.

* Generate `enum` types, like `export type PetStatus = "available" | "pending" | "sold";`.

* More detailed information for every type and properties document.

* Use `tsg.config.ts` file for configuration file, to include all code generating process in typescript system.

* Most part use `ts-morph` typescript syntax parser to generate code.

* Use `swagger-ui` mock methods to provide `mockData` for each request function for test env.

* Every project configureable features.

  * Configureable `translationEngine`, "baidu" or "google" are available.

  * Configureable `requester` option, default "fetch" and "axios" requester is provided out of box, also self custom requester is also accepted.

  * Configureable "dest" directory.

  * Identical `withHost` and `withBasePath` option.

  * `preferInterface` option to generate `interface` instead of `class`, default `false`.

  * `keepGeneric` default true, but if there are some errors occuring when try to generate generic types, this option could be set "false" to generate more stable code.

  * `shouldMockResponseStatement` default `"process.env.NODE_ENV === 'test'"` to generate mock response for test env. use this statement could make the mock response code removed when production optimized.

  * `prettierConfig` for output code prettier style, use `prettier` version 2 config option.

## test coverage

real coverage more than 50%.

### Statements

![Statements](./coverage/badge-statements.svg)

### Branches

![Branches](./coverage/badge-branches.svg)

### Functions

![Functions](./coverage/badge-functions.svg)

### Lines

![Lines](./coverage/badge-lines.svg)

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

inspired by [pont](https://github.com/alibaba/pont)，pont means bridge in franch. I name this tool to `ts-gear`，means the gear between typescript and swagger，hope it can merge front and server better.

## Similar packages

* [pont](https://github.com/alibaba/pont)

* [OpenAPI Generator](https://openapi-generator.tech/)

    Here are many languages support. I try to run it and check the generated ts files and found it need more compatibility efferts for non-standard swagger doc support.

* [oazapfts](https://github.com/cellular/oazapfts)

    oazapfts use typescript native api to generate ts file, but non-standard swagge doc generated code could not work out of box.

### What is this one different to other similar ones?

Most other code generators depends on the standard swagger spec doc.

But in real world, especially in my case, most swagger doc has many definition errors. There are many `$ref` does not has corresponding `definition`, many unregular charators occur in names and properties, also the generic parse problems as `ReplyVO<PageVO<List>>`.

`ts-gear` try most to resolve all thses issues.

## Note

Support OpenAPI Specification v2.

your swagger doc should has this field.

```json
{
  "swagger": "2.0",
  ...
}
```

### Config

`tsg.config.ts` example

```typescript
import { IProject, fetchRequester, axiosRequester } from 'ts-gear'

export default config
```

### Directory information

* The `definition.ts` is generated by the `definitions` part of `swagger spec`, includes all the base data structures.

* The `request.ts` is generated by the `paths` part of `swagger spec`，each request function naming rule is `http request + api path`，for example

* The `index.ts` is entry file for `definition.ts` and `request.ts`.

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

Each request function parameter type and return type will map to the swagger definition.

If you prefer to use your faverite request tool, like `axios`, you can only use the `definition.ts` to check data interface.

## Errata And Feedback

This tool only has the `swagger ui` pet fixture and my projects swagger spec docs for dev fixtures. If you encounter some problems, issues are welcomed and remember to provide your swagger doc for fixtures, not whole part, just some problem part definitions are enough.
