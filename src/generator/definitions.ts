import { compile } from 'json-schema-to-typescript'
// import { camelCase, upperFirst } from 'lodash'
import { IDefinition, JSONSchema } from '../interface'
import {
  getDefinitionRef,
  getDefinitionTitle,
  getGenericTypeName,
} from '../util'

/** parse and generate the definition with $ref
 * */
export const generateDefinitionWithRef = async (definition: JSONSchema) => {
  const [hasRef, properties] = getDefinitionRef(definition)
  console.log(properties)
}

export const generateDefinitions = async (definitions: {
  [k: string]: IDefinition
}) => {
  const result: string[] = []

  const compositedTypes: string[] = []
  const genericTypes: Set<string> = new Set()
  const primitiveTypes: string[] = []

  for (const title in definitions) {
    if (definitions.hasOwnProperty(title)) {
      const definition = definitions[title]
      // '[]' 为结尾的类型是其他类型的数组类型，不生成
      // if (title.endsWith('[]')) {
      //   continue
      // }
      const [typeName, compositedTitle] = getDefinitionTitle(title)
      // console.log(typeName, compositedTitle)
      if (getDefinitionRef(definition)[0]) {
        compositedTypes.push(`export type ${typeName} = ${compositedTitle}\n`)

        const gTypes = getGenericTypeName(compositedTitle)
        gTypes.forEach(t => genericTypes.add(t))
        // genericTypes.push()
        continue
      } else {
        primitiveTypes.push(title)
      }

      const schema: any = await compile(
        {
          ...definition,
          // definitions,
          // 当有title属性时，以title命名
          // 否则compile的第二个参数才会有用
          title,
        },
        '',
        {
          bannerComment: `/* tslint:disable */
          /** ${definition.description || definition.title} */`,

          // 因为所有的definition都会直接生成，间接的声明会造成重复声明
          // 所以关闭
          declareExternallyReferenced: false,
        },
      )
      result.push(schema)
    }
  }

  for (const title in definitions) {
    if (definitions.hasOwnProperty(title)) {
      if (genericTypes.has(title)) {
        const definition = definitions[title]
        console.log(definition)
      }
    }
  }

  result.push(...compositedTypes)
  return result
}
