import { Spec } from 'swagger-schema-official'

import * as petSpec from 'example/fixture/pet.json'
import { generateEnumName, generateEnumTypescriptContent } from 'src/tool/enumType'

it('name', () => {
  expect(
    generateEnumName(['paths', '/pet/findByStatus', 'get', 'parameters', '0', 'items', 'enum'], petSpec as Spec),
  ).toBe('GetPetFindByStatusItems')
})

it('content', () => {
  expect(generateEnumTypescriptContent([1, 2, 3, 'n'])).toBe("1|2|3|'n'")
})
