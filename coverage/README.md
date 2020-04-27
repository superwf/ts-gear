yarn run v1.22.4
$ cross-env NODE_ENV=test jest --coverage && open-cli coverage/lcov-report/index.html -- google-chrome

=============================== Coverage summary ===============================
Statements   : 81.47% ( 576/707 )
Branches     : 72.27% ( 271/375 )
Functions    : 76.22% ( 109/143 )
Lines        : 81.69% ( 562/688 )
================================================================================
-------------------------------------------|----------|----------|----------|----------|-------------------|
File                                       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------------------|----------|----------|----------|----------|-------------------|
All files                                  |    81.47 |    72.27 |    76.22 |    81.69 |                   |
 src                                       |    94.34 |    83.33 |      100 |    94.34 |                   |
  index.ts                                 |        0 |        0 |        0 |        0 |                   |
  interface.ts                             |        0 |        0 |        0 |        0 |                   |
  main.ts                                  |        0 |      100 |      100 |        0 |              7,11 |
  projectGlobalVariable.ts                 |      100 |      100 |      100 |      100 |                   |
  run.ts                                   |    94.12 |       75 |      100 |    94.12 |                17 |
  source.ts                                |      100 |      100 |      100 |      100 |                   |
  typeHelper.d.ts                          |        0 |        0 |        0 |        0 |                   |
 src/content                               |      100 |      100 |      100 |      100 |                   |
  initConfig.ts                            |      100 |      100 |      100 |      100 |                   |
  projectIndex.ts                          |      100 |      100 |      100 |      100 |                   |
  propertyOfHelper.ts                      |      100 |      100 |      100 |      100 |                   |
  requester.ts                             |      100 |      100 |      100 |      100 |                   |
  warningComment.ts                        |      100 |      100 |      100 |      100 |                   |
 src/requester                             |    43.06 |    38.89 |    42.86 |    42.86 |                   |
  axios.ts                                 |    14.29 |        0 |    14.29 |    14.81 |... 50,52,54,60,61 |
  fetch.ts                                 |    61.36 |    58.33 |    71.43 |    60.47 |... 01,112,113,117 |
 src/step                                  |    80.19 |    66.04 |       80 |    80.29 |                   |
  assembleSchemaToGlobal.ts                |      100 |      100 |      100 |      100 |                   |
  cleanRefAndDefinitionName.ts             |      100 |      100 |      100 |      100 |                   |
  colletRefsInRequestAndPatchDefinition.ts |      100 |      100 |      100 |      100 |                   |
  fetchSwagger.ts                          |      100 |      100 |      100 |      100 |                   |
  generateDefinitionContent.ts             |    88.46 |    76.92 |      100 |    88.46 |          59,61,82 |
  importAllDefinition.ts                   |      100 |      100 |      100 |      100 |                   |
  index.ts                                 |        0 |        0 |        0 |        0 |                   |
  parseGenericType.ts                      |    96.88 |    86.11 |      100 |    96.72 |            31,125 |
  prepareProjectDirectory.ts               |       80 |       50 |      100 |       80 |                10 |
  translateSchema.ts                       |    14.29 |        0 |        0 |    14.63 |... 80,82,94,95,96 |
  writeProject.ts                          |      100 |      100 |      100 |      100 |                   |
 src/step/generateRequestContent           |    81.29 |    73.21 |    61.29 |    81.82 |                   |
  assembleRequestParam.ts                  |    92.31 |    93.75 |      100 |    92.31 |                18 |
  generateMockData.ts                      |    72.63 |    72.73 |    47.83 |    73.03 |... 31,135,143,149 |
  generateParameterType.ts                 |      100 |      100 |      100 |      100 |                   |
  generateResponseType.ts                  |      100 |     87.5 |      100 |      100 |                24 |
  index.ts                                 |    86.11 |    54.55 |      100 |    86.11 |    29,30,31,33,34 |
 src/step/getUserConfig                    |      100 |       80 |      100 |      100 |                   |
  cliOption.ts                             |      100 |       75 |      100 |      100 |                34 |
  index.ts                                 |      100 |    83.33 |      100 |      100 |                24 |
 src/tool                                  |    92.22 |    87.62 |    88.57 |    92.55 |                   |
  assembleDoc.ts                           |      100 |      100 |      100 |      100 |                   |
  camelCase.ts                             |      100 |      100 |      100 |      100 |                   |
  cleanName.ts                             |      100 |      100 |      100 |      100 |                   |
  clearObject.ts                           |      100 |      100 |      100 |      100 |                   |
  genericType.ts                           |    95.83 |       75 |     87.5 |    95.45 |             66,72 |
  getDefinition.ts                         |      100 |      100 |      100 |      100 |                   |
  isReference.ts                           |      100 |      100 |      100 |      100 |                   |
  log.ts                                   |       80 |      100 |    66.67 |       80 |                19 |
  patchGlobalDefinitionMap.ts              |      100 |      100 |      100 |      100 |                   |
  prettierWrite.ts                         |      100 |      100 |      100 |      100 |                   |
  schemaToTypescript.ts                    |    84.62 |    79.41 |       80 |    86.49 |    43,48,51,63,72 |
  transformSwaggerPathToRouterPath.ts      |      100 |      100 |      100 |      100 |                   |
  translate.ts                             |       20 |      100 |        0 |       20 |       14,15,20,22 |
  traverseSchema.ts                        |      100 |    90.91 |      100 |      100 |                20 |
-------------------------------------------|----------|----------|----------|----------|-------------------|
Done in 5.27s.
