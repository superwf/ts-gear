import traverse from 'traverse'

import { ITraverseSchemaNode } from '../interface'

/**
 * recursively invoked on every schema node
 * update operation will modify the param data
 * @param the json schema object data
 * @param the function will be called recursively on each schema node
 * */
export const traverseSchema = (obj: { [k: string]: any }, func: (v: ITraverseSchemaNode) => void): void => {
  traverse(obj).forEach(function(this: any, value: any) {
    // check circular
    if (this.circular || !this.key || this.key === 'required') {
      return
    }
    const node: ITraverseSchemaNode = {
      value,
      key: this.key,
      parent: (this.parent || {}).node,
      path: this.path,
    }
    func(node)
  })
}
