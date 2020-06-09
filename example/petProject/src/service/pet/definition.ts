/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
export type GetPetFindByStatusItems = 'available' | 'pending' | 'sold'
export type OrderStatus = 'placed' | 'approved' | 'delivered'
export type PetStatus = 'available' | 'pending' | 'sold'
export interface Order {
  /** format: int64 */
  id?: number
  /** format: int64 */
  petId?: number
  /** format: int32 */
  quantity?: number
  /** format: date-time */
  shipDate?: string
  /** Order Status */
  status?: OrderStatus
  /** default: false */
  complete?: boolean
}

export interface User {
  /** format: int64 */
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phone?: string
  /**
   * User Status
   * format: int32
   */
  userStatus?: number
}

export interface Category {
  /** format: int64 */
  id?: number
  pet?: Pet
  name?: string
}

export interface Tag {
  /** format: int64 */
  id?: number
  name?: string
}

export interface Pet {
  /** format: int64 */
  id?: number
  category?: Category
  /** example: doggie */
  name: string
  photoUrls: Array<string>
  tags?: Array<Tag>
  /** pet status in the store */
  status?: PetStatus
}

export interface ApiResponse {
  /** format: int32 */
  code?: number
  type?: string
  message?: string
}
