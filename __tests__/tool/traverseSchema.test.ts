import petSchema from 'example/fixture/pet.json'
import { traverseSchema } from 'src/tool/traverseSchema'

it('traverseSchema', () => {
  const fn = jest.fn()
  const obj1 = { a: 1 }
  traverseSchema(obj1, fn)
  expect(fn).toHaveBeenCalledTimes(1)
  expect(fn).toHaveBeenLastCalledWith({
    value: 1,
    parent: obj1,
    key: 'a',
    path: ['a'],
  })

  fn.mockReset()
  const obj2 = { a: { b: 2 } }
  traverseSchema(obj2, fn)
  expect(fn).toHaveBeenCalledTimes(2)
  expect(fn).toHaveBeenLastCalledWith({
    value: 2,
    parent: obj2.a,
    key: 'b',
    path: ['a', 'b'],
  })
})

it('update node value in traverseSchema', () => {
  // const fn = jest.fn()
  traverseSchema(petSchema, node => {
    if (node.key === 'definitions') {
      node.value.Order = 111
    }
  })
  expect(petSchema.definitions.Order).toBe(111)
})
