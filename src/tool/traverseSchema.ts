import * as traverse from 'traverse'

import type { TraverseSchemaNode } from '../type'

/**
 * recursively invoked on every schema node
 * update operation will modify the param data
 * @param the json schema object data
 * @param the function will be called recursively on each schema node
 * */
export const traverseSchema = (obj: { [k: string]: any }, func: (v: TraverseSchemaNode) => void): void => {
  traverse(obj).forEach(function traverseSchemaNode(this: any, value: any) {
    // check circular
    if (this.circular || !this.key || this.key === 'required') {
      return
    }
    const node: TraverseSchemaNode = {
      value,
      key: this.key,
      parent: (this.parent || {}).node,
      path: this.path,
    }
    func(node)
  })
}

/** only travers "$ref" */
export const traverse$Ref = (obj: { [k: string]: any }, func: (v: string) => void): void => {
  traverseSchema(obj, ({ key, value }) => {
    if (key === '$ref' && typeof value === 'string') {
      func(value)
    }
  })
}
