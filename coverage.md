##Statements   : 83.07% ( 589/709 )

##Branches     : 75.6% ( 285/377 )

##Functions    : 78.32% ( 112/143 )

##Lines        : 83.16% ( 573/689 )

File                                       |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------------------------|----------|----------|----------|----------|-------------------|
All files                                  |    83.07 |     75.6 |    78.32 |    83.16 |                   |
 src                                       |    94.34 |    83.33 |      100 |    94.34 |                   |
  index.ts                                 |        0 |        0 |        0 |        0 |                   |
  interface.ts                             |        0 |        0 |        0 |        0 |                   |
  main.ts                                  |        0 |      100 |      100 |        0 |              7,11 |
  projectGlobalVariable.ts                 |      100 |      100 |      100 |      100 |                   |
  run.ts                                   |    94.12 |       75 |      100 |    94.12 |                16 |
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
  parseGenericType.ts                      |    96.88 |    86.11 |      100 |    96.72 |            30,124 |
  prepareProjectDirectory.ts               |       80 |       50 |      100 |       80 |                10 |
  translateSchema.ts                       |    14.29 |        0 |        0 |    14.63 |... 79,81,93,94,95 |
  writeProject.ts                          |      100 |      100 |      100 |      100 |                   |
 src/step/generateRequestContent           |    81.29 |    73.21 |    61.29 |    81.82 |                   |
  assembleRequestParam.ts                  |    92.31 |    93.75 |      100 |    92.31 |                18 |
  generateMockData.ts                      |    72.63 |    72.73 |    47.83 |    73.03 |... 31,135,143,149 |
  generateParameterType.ts                 |      100 |      100 |      100 |      100 |                   |
  generateResponseType.ts                  |      100 |     87.5 |      100 |      100 |                24 |
  index.ts                                 |    86.11 |    54.55 |      100 |    86.11 |    28,29,30,32,33 |
 src/step/getUserConfig                    |      100 |       80 |      100 |      100 |                   |
  cliOption.ts                             |      100 |       75 |      100 |      100 |                34 |
  index.ts                                 |      100 |    83.33 |      100 |      100 |                24 |
 src/tool                                  |    98.82 |    99.07 |    97.14 |    98.77 |                   |
  assembleDoc.ts                           |      100 |      100 |      100 |      100 |                   |
  camelCase.ts                             |      100 |      100 |      100 |      100 |                   |
  cleanName.ts                             |      100 |      100 |      100 |      100 |                   |
  clearObject.ts                           |      100 |      100 |      100 |      100 |                   |
  genericType.ts                           |      100 |      100 |      100 |      100 |                   |
  getDefinition.ts                         |      100 |      100 |      100 |      100 |                   |
  isReference.ts                           |      100 |      100 |      100 |      100 |                   |
  log.ts                                   |       80 |      100 |    66.67 |       80 |                19 |
  patchGlobalDefinitionMap.ts              |      100 |      100 |      100 |      100 |                   |
  prettierWrite.ts                         |      100 |      100 |      100 |      100 |                   |
  schemaToTypescript.ts                    |      100 |      100 |      100 |      100 |                   |
  transformSwaggerPathToRouterPath.ts      |      100 |      100 |      100 |      100 |                   |
  translate.ts                             |       80 |      100 |      100 |       80 |                22 |
  traverseSchema.ts                        |      100 |    90.91 |      100 |      100 |                20 |
