/** copy from swagger-ui https://github.com/swagger-api/swagger-ui/blob/master/src/core/plugins/samples/fn.js
 * modify the js to ts */

import { isObject, isFunction, castArray, memoize } from 'lodash'

import { JSONSchema } from 'src/interface'

// Deeply strips a specific key from an object.
//
// `predicate` can be used to discriminate the stripping further,
// by preserving the key's place in the object based on its value.
export function deeplyStripKey(input: any, keyToStrip: string, predicate: (...args: any) => boolean) {
  if (typeof input !== 'object' || Array.isArray(input) || input === null || !keyToStrip) {
    return input
  }

  const obj = Object.assign({}, input)

  Object.keys(obj).forEach(k => {
    if (k === keyToStrip && predicate(obj[k], k)) {
      delete obj[k]
      return
    }
    obj[k] = deeplyStripKey(obj[k], keyToStrip, predicate)
  })

  return obj
}

function objectify<T>(thing: T): T {
  if (!isObject(thing)) return ({} as unknown) as T
  return thing
}

/* eslint-disable @typescript-eslint/camelcase */
const primitives = {
  string: () => 'string',
  string_email: () => 'user@example.com',
  'string_date-time': () => new Date('2019-09-03').toISOString(),
  string_date: () => new Date('2019-09-03').toISOString().substring(0, 10),
  string_uuid: () => '3fa85f64-5717-4562-b3fc-2c963f66afa6',
  string_hostname: () => 'example.com',
  string_ipv4: () => '198.51.100.42',
  string_ipv6: () => '2001:0db8:5b96:0000:0000:426f:8e17:642a',
  number: () => 0,
  number_float: () => 0.0,
  integer: () => 0,
  boolean: (schema: any) => (typeof schema.default === 'boolean' ? schema.default : true),
}
/* eslint-enable @typescript-eslint/camelcase */

type PrimitivesKeys = keyof typeof primitives

const primitive = (schema: JSONSchema): object => {
  schema = objectify(schema)
  const { type, format } = schema
  const key = `${type}_${format}` as PrimitivesKeys

  const fn = primitives[key] || primitives[type as PrimitivesKeys]

  if (isFunction(fn)) return fn(schema)

  throw new Error('Unknown Type: ' + schema.type)
}

/** schema的$ref会有互相包含的情况，需要检查循环引用 */
const schemaSet = new Set()

export const sampleFromSchema: (schema: JSONSchema, definitions?: JSONSchema) => any = (
  schema: JSONSchema,
  definitions?: JSONSchema,
) => {
  if (schemaSet.has(schema)) {
    return
  }
  schemaSet.add(schema)
  let { type } = objectify(schema) as any
  const { example, properties, additionalProperties, items, $ref, schema: schemaSchema } = objectify(schema) as any

  if (example !== undefined) {
    return deeplyStripKey(example, '$$ref', (val: any) => {
      // do a couple of quick sanity tests to ensure the value
      // looks like a $$ref that swagger-client generates.
      return typeof val === 'string' && val.indexOf('#') > -1
    })
  }

  if (!type) {
    if (properties) {
      type = 'object'
    } else if (items) {
      type = 'array'
    } else if (definitions && $ref) {
      const definition = definitions[$ref]
      if (definition) {
        return sampleFromSchema(definition, definitions)
      }
      return
    } else if (schemaSchema) {
      return sampleFromSchema(schemaSchema, definitions)
    } else {
      return
    }
  }

  if (type === 'object') {
    const props = objectify(properties)
    const obj: any = {}
    for (const name in props) {
      if (props[name] && props[name].deprecated) {
        continue
      }
      obj[name] = sampleFromSchema(props[name], definitions)
    }

    if (additionalProperties === true) {
      obj.additionalProp1 = {}
    } else if (additionalProperties) {
      const additionalProps = objectify(additionalProperties)
      const additionalPropVal = sampleFromSchema(additionalProps, definitions)

      for (let i = 1; i < 4; i++) {
        obj['additionalProp' + i] = additionalPropVal
      }
    }
    return obj
  }

  if (type === 'array') {
    if (Array.isArray(items.anyOf)) {
      return items.anyOf.map((i: JSONSchema) => sampleFromSchema(i, definitions))
    }

    if (Array.isArray(items.oneOf)) {
      return items.oneOf.map((i: JSONSchema) => sampleFromSchema(i, definitions))
    }

    return [sampleFromSchema(items, definitions)]
  }

  if (schema['enum']) {
    if (schema['default']) return schema['default']
    return castArray(schema['enum'])[0]
  }

  if (type === 'file') {
    return
  }

  return primitive(schema)
}

export const generateMockData = memoize((schema: JSONSchema, definitions?: JSONSchema) => {
  schemaSet.clear()
  return sampleFromSchema(schema, definitions)
})
