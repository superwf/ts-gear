/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type GetPetFindByStatusItems = 'available' | 'pending' | 'sold'
export type OrderStatus = 'placed' | 'approved' | 'delivered'
export type PetStatus = 'available' | 'pending' | 'sold'
export class Order {
  /** format: int64 */
  public id?: number
  /** format: int64 */
  public petId?: number
  /** format: int32 */
  public quantity?: number
  /** format: date-time */
  public shipDate?: string
  /** Order Status */
  public status?: OrderStatus
  /** default: false */
  public complete?: boolean = false
}

export class User {
  /** format: int64 */
  public id?: number
  public username?: string
  public firstName?: string
  public lastName?: string
  public email?: string
  public password?: string
  public phone?: string
  /**
   * User Status
   * format: int32
   */
  public userStatus?: number
}

export class Category {
  /** format: int64 */
  public id?: number
  public pet?: Pet
  public name?: string
}

export class Tag {
  /** format: int64 */
  public id?: number
  public name?: string
}

export class Pet {
  /** format: int64 */
  public id?: number
  public category?: Category
  /** example: doggie */
  public name: string
  public photoUrls: Array<string>
  public tags?: Array<Tag>
  /** pet status in the store */
  public status?: PetStatus
}

export class ApiResponse {
  /** format: int32 */
  public code?: number
  public type?: string
  public message?: string
}
