import * as _ from 'lodash'
import { getDuplicateById } from './utils'

// primitive type
export enum PrimitiveType {
  number = 'number',
  string = 'string',
  boolean = 'boolean',
}

class Constructable {
  constructor(arg = {}) {
    _.forEach(arg, (value, key) => {
      if (value !== undefined) {
        this[key] = value
      }
    })
  }
}

// all the data type here
export class DataType {
  public primitiveType: PrimitiveType
  public isArr: boolean = false

  public customType: string = ''

  // reference may have generic like Pagination<BaseBO>
  public reference: string = ''

  public enum: Array<string | number> = []

  public isTemplateRef = false

  constructor(inter: Partial<DataType>) {
    if (inter.enum) {
      this.enum = inter.enum
    }
    if (inter.reference) {
      this.reference = inter.reference
    }
    if (inter.customType) {
      this.customType = inter.customType
    }
    if (inter.isArr) {
      this.isArr = inter.isArr
    }
    if (inter.primitiveType) {
      this.primitiveType = inter.primitiveType
    }

    if (inter.isTemplateRef) {
      this.isTemplateRef = inter.isTemplateRef
    }
  }

  public getReference() {
    return this.reference
  }

  public getEnumType() {
    // NOTE: fix the swagger can only export number bug in swagger transform programe
    if (!this.enum.length) {
      return 'string'
    }

    return this.enum
      .map(numOrStr => {
        if (typeof numOrStr === 'string') {
          return `'${numOrStr}'`
        }

        return numOrStr
      })
      .join(' | ')
  }

  get initialValue() {
    if (this.isArr) {
      return '[]'
    }

    if (this.reference) {
      if (this.reference.match(/<.+>/)) {
        const noTemplateRef = this.reference.replace(/<.+>/, '')

        return `new ${noTemplateRef}()`
      }

      if (this.isTemplateRef) {
        return 'undefined'
      }

      return `new ${this.reference}()`
    }

    if (this.enum && this.enum.length) {
      const str = this.enum[0]

      if (typeof str === 'string') {
        return `'${str}'`
      }

      return str + ''
    }

    if (this.primitiveType) {
      if (this.primitiveType === PrimitiveType.string) {
        return "''"
      }
      if (this.primitiveType === PrimitiveType.number) {
        return '0'
      }

      if (this.primitiveType === PrimitiveType.boolean) {
        return 'false'
      }
    }

    return 'undefined'
  }

  get type() {
    if (this.reference === 'Array') {
      this.reference = 'any[]'
    }

    if (this.reference) {
      if (this.isArr) {
        return `${this.reference}[]`
      }

      // todo
      return this.reference
    }

    if (this.customType) {
      return `Array<${this.customType}>`
    }

    if (this.isArr) {
      if (this.enum && this.enum.length) {
        return `Array<${this.getEnumType()}>`
      }

      if (this.primitiveType) {
        return `${this.primitiveType}[]`
      }

      return 'any[]'
    }

    if (this.enum && this.enum.length) {
      return this.getEnumType()
    }

    return this.primitiveType || 'any'
  }
}

// property both in params and response
export class Property extends Constructable {
  public dataType: DataType
  public description?: string
  public name: string
  public required: boolean

  public in: 'query' | 'body' | 'path'

  constructor(prop: Partial<Property>) {
    super(prop)

    // FIXME: name 可能不合法，这里暂时只判断是否包含 . 。
    if (this.name.includes('.')) {
      this.name = this.name.slice(this.name.lastIndexOf('.') + 1)
    }
  }

  public toPropertyCode(hasRequired = false, optional = false) {
    const dataType = this.dataType
    let optionalSignal = hasRequired && optional ? '?' : ''

    if (hasRequired && !this.required) {
      optionalSignal = '?'
    }

    return `
      /** ${this.description || this.name} */
      ${this.name}${optionalSignal}: ${this.dataType.type};`
  }

  public toPropertyCodeWithInitValue(baseName = '') {
    const dataType = this.dataType
    let typeWithValue = `= ${this.dataType.initialValue}`

    if (
      dataType.type !== 'any' &&
      dataType.type !== 'any[]' &&
      !dataType.isArr
    ) {
      typeWithValue = `= ${dataType.initialValue}`

      if (!this.dataType.initialValue) {
        return ''
      }
    }

    if (!this.dataType.initialValue) {
      typeWithValue = `: ${this.dataType.type}`
    }

    if (typeWithValue.includes('defs.')) {
      typeWithValue = typeWithValue.replace(/defs.*\./g, '')
    }

    if (this.dataType.reference.includes(baseName)) {
      typeWithValue = `= {}`
    }

    return `
      /** ${this.description || this.name} */
      ${this.name} ${typeWithValue}
      `
  }

  public toBody() {
    return this.dataType.type
  }
}

export class Interface extends Constructable {
  get responseType() {
    return this.response.type
  }
  public consumes: string[]
  public parameters: Property[]
  public description: string
  public response: DataType
  public method: string
  public name: string
  public varName: string
  public path: string

  constructor(inter: Partial<Interface>) {
    super(inter)
  }

  public getParamsCode(className = 'Params') {
    return `
      class ${className} {
        ${this.parameters
          .filter(param => param.in !== 'body')
          .map(param => param.toPropertyCode(true))
          .join('')}
      }
    `
  }

  public getBodyParamsCode() {
    const bodyParam = this.parameters.find(param => param.in === 'body')

    return (bodyParam && bodyParam.dataType.type) || ''
  }
}

export class Mod extends Constructable {
  public description: string
  public interfaces: Interface[]
  public name: string

  constructor(mod: Partial<Mod>) {
    super(mod)

    this.interfaces = _.orderBy(this.interfaces, 'path')
  }
}

export class BaseClass extends Constructable {
  public name: string
  public description: string
  public properties: Property[]

  get justName() {
    return this.name.replace(/(.+)<.+/, '$1')
  }

  constructor(base: Partial<BaseClass>) {
    super(base)

    this.properties = _.orderBy(this.properties, 'name')
  }
}

export class StandardDataSource {
  public static constructorFromLock(localDataObject: StandardDataSource) {
    try {
      const baseClasses = localDataObject.baseClasses.map(base => {
        const props = base.properties.map(prop => {
          const dataType = new DataType(prop.dataType)

          return new Property({
            ...prop,
            dataType,
          })
        })

        return new BaseClass({
          description: base.description,
          name: base.name,
          properties: _.unionBy(props, 'name'),
        })
      })
      const mods = localDataObject.mods.map(mod => {
        const interfaces = mod.interfaces.map(inter => {
          const response = new DataType(inter.response)
          const parameters = inter.parameters
            .map(param => {
              const dataType = new DataType(param.dataType)

              if (param.in === 'body') {
                const dataType = param.dataType.reference
                const ref = dataType.includes('defs.')
                  ? dataType.slice(dataType.lastIndexOf('.') + 1)
                  : dataType

                if (
                  ref &&
                  !baseClasses.find(
                    base => base.name === ref || base.justName === ref,
                  )
                ) {
                  return
                }
              }

              return new Property({
                ...param,
                dataType,
              })
            })
            .filter(_.identity)

          return new Interface({
            ...inter,
            parameters,
            response,
          })
        })

        return new Mod({
          description: mod.description,
          name: mod.name,
          interfaces,
        })
      })

      return new StandardDataSource({
        baseClasses,
        mods,
        name: localDataObject.name,
      })
    } catch (e) {
      throw new Error(e)
    }
  }
  public name: string
  public baseClasses: BaseClass[]
  public mods: Mod[]

  constructor(standard: {
    mods: Mod[]
    name: string
    baseClasses: BaseClass[]
  }) {
    this.mods = standard.mods
    if (standard.name) {
      this.name = standard.name
    }
    this.baseClasses = standard.baseClasses

    this.reOrder()
  }

  public reOrder() {
    this.baseClasses = _.orderBy(this.baseClasses, 'name')
    this.mods = _.orderBy(this.mods, 'name')
  }

  // validate the if the dataSource is valid
  public validate() {
    const errors = [] as string[]

    this.mods.forEach(mod => {
      if (!mod.name) {
        errors.push(`lock 文件不合法，发现没有 name 属性的模块;`)
      }
    })

    this.baseClasses.forEach(base => {
      if (!base.name) {
        errors.push(`lock 文件不合法，发现没有 name 属性的基类;`)
      }
    })

    const dupMod = getDuplicateById(this.mods, 'name')
    const dupBase = getDuplicateById(this.baseClasses, 'name')

    if (dupMod) {
      errors.push(`模块 ${dupMod.name} 重复了。`)
    }
    if (dupBase) {
      errors.push(`基类 ${dupBase.name} 重复了。`)
    }

    if (errors && errors.length) {
      throw new Error(errors.join('\n'))
    }

    return errors
  }

  public serialize() {
    return JSON.stringify(
      {
        mods: this.mods,
        baseClasses: this.baseClasses,
      },
      null,
      2,
    )
  }
}
