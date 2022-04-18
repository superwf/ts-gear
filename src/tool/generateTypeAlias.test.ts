import { generateTypeAlias } from './generateTypeAlias'

it('generateTypeAlias', () => {
  expect(generateTypeAlias('A', 'B')).toBe('export type A = B;')
})
