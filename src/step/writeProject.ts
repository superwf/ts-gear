import { prettierWrite } from '../tool/prettierWrite'
import type { Project, PrepareToWrite } from '../type'

/**
 * write to project dir
 */
export const writeProject = (project: Project, option: PrepareToWrite) => {
  prettierWrite({ data: option.definitionFileContent, file: option.definitionFile, option: project.prettierConfig })

  prettierWrite({ data: option.requestFileContent, file: option.requestFile, option: project.prettierConfig })
  if (project.shouldGenerateMock) {
    prettierWrite({ data: option.mockRequestFileContent, file: option.mockRequestFile, option: project.prettierConfig })
  }

  prettierWrite({ data: option.indexFileContent, file: option.indexFile, option: project.prettierConfig })
}
