/** Don`t modify this file manually, its content will be overwriten next time execute the `tsg` command. */
import projects from '../../ts-gear'
import { Pet, ApiResponse, Order, User } from './definitions'

const project = projects.find(p => p.name === 'pet')!
if (!project) {
  throw new Error(
    'project pet not found, check project name in your "ts-gear.ts"',
  )
}
const { requester } = project

export interface IPostPetParam {
  body: Pet
}

/** Add a new pet to the store */
export function postPet(option: IPostPetParam): Promise<any> {
  return requester('/v2/pet', { ...option, method: 'post' })
}

postPet.method = 'post'

export interface IPutPetParam {
  body: Pet
}

/** Update an existing pet */
export function putPet(option: IPutPetParam): Promise<any> {
  return requester('/v2/pet', { ...option, method: 'put' })
}

putPet.method = 'put'

export interface IGetPetFindByStatusParam {
  query: {
    status: Array<'available' | 'pending' | 'sold'>
  }
}

type GetPetFindByStatusResponse = Array<Pet>
/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 */
export function getPetFindByStatus(
  option: IGetPetFindByStatusParam,
): Promise<GetPetFindByStatusResponse> {
  return requester('/v2/pet/findByStatus', { ...option, method: 'get' })
}

getPetFindByStatus.method = 'get'

export interface IGetPetPetIdParam {
  path: {
    petId: number
  }
}

/**
 * Find pet by ID
 * Returns a single pet
 */
export function getPetPetId(option: IGetPetPetIdParam): Promise<Pet> {
  return requester('/v2/pet/:petId', { ...option, method: 'get' })
}

getPetPetId.method = 'get'

export interface IPostPetPetIdParam {
  path: {
    petId: number
  }
  formData?: {
    name?: string
    status?: string
  }
}

/** Updates a pet in the store with form data */
export function postPetPetId(option: IPostPetPetIdParam): Promise<any> {
  return requester('/v2/pet/:petId', { ...option, method: 'post' })
}

postPetPetId.method = 'post'

export interface IDeletePetPetIdParam {
  header?: {
    api_key?: string
  }
  path: {
    petId: number
  }
}

/** Deletes a pet */
export function deletePetPetId(option: IDeletePetPetIdParam): Promise<any> {
  return requester('/v2/pet/:petId', { ...option, method: 'delete' })
}

deletePetPetId.method = 'delete'

export interface IPostPetPetIdUploadImageParam {
  path: {
    petId: number
  }
  formData?: {
    additionalMetadata?: string
    file?: File
  }
}

/** uploads an image */
export function postPetPetIdUploadImage(
  option: IPostPetPetIdUploadImageParam,
): Promise<ApiResponse> {
  return requester('/v2/pet/:petId/uploadImage', { ...option, method: 'post' })
}

postPetPetIdUploadImage.method = 'post'

type GetStoreInventoryResponse = any
/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export function getStoreInventory(): Promise<GetStoreInventoryResponse> {
  return requester('/v2/store/inventory', { method: 'get' })
}

getStoreInventory.method = 'get'

export interface IPostStoreOrderParam {
  body: Order
}

/** Place an order for a pet */
export function postStoreOrder(option: IPostStoreOrderParam): Promise<Order> {
  return requester('/v2/store/order', { ...option, method: 'post' })
}

postStoreOrder.method = 'post'

export interface IGetStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
export function getStoreOrderOrderId(
  option: IGetStoreOrderOrderIdParam,
): Promise<Order> {
  return requester('/v2/store/order/:orderId', { ...option, method: 'get' })
}

getStoreOrderOrderId.method = 'get'

export interface IDeleteStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
export function deleteStoreOrderOrderId(
  option: IDeleteStoreOrderOrderIdParam,
): Promise<any> {
  return requester('/v2/store/order/:orderId', { ...option, method: 'delete' })
}

deleteStoreOrderOrderId.method = 'delete'

export interface IPostUserParam {
  body: User
}

/**
 * Create user
 * This can only be done by the logged in user.
 */
export function postUser(option: IPostUserParam): Promise<any> {
  return requester('/v2/user', { ...option, method: 'post' })
}

postUser.method = 'post'

export interface IPostUserCreateWithArrayParam {
  body: Array<User>
}

/** Creates list of users with given input array */
export function postUserCreateWithArray(
  option: IPostUserCreateWithArrayParam,
): Promise<any> {
  return requester('/v2/user/createWithArray', { ...option, method: 'post' })
}

postUserCreateWithArray.method = 'post'

export interface IPostUserCreateWithListParam {
  body: Array<User>
}

/** Creates list of users with given input array */
export function postUserCreateWithList(
  option: IPostUserCreateWithListParam,
): Promise<any> {
  return requester('/v2/user/createWithList', { ...option, method: 'post' })
}

postUserCreateWithList.method = 'post'

export interface IGetUserLoginParam {
  query: {
    username: string
    password: string
  }
}

type GetUserLoginResponse = string
/** Logs user into the system */
export function getUserLogin(
  option: IGetUserLoginParam,
): Promise<GetUserLoginResponse> {
  return requester('/v2/user/login', { ...option, method: 'get' })
}

getUserLogin.method = 'get'

/** Logs out current logged in user session */
export function getUserLogout(): Promise<any> {
  return requester('/v2/user/logout', { method: 'get' })
}

getUserLogout.method = 'get'

export interface IGetUserUsernameParam {
  path: {
    username: string
  }
}

/** Get user by user name */
export function getUserUsername(option: IGetUserUsernameParam): Promise<User> {
  return requester('/v2/user/:username', { ...option, method: 'get' })
}

getUserUsername.method = 'get'

export interface IPutUserUsernameParam {
  path: {
    username: string
  }
  body: User
}

/**
 * Updated user
 * This can only be done by the logged in user.
 */
export function putUserUsername(option: IPutUserUsernameParam): Promise<any> {
  return requester('/v2/user/:username', { ...option, method: 'put' })
}

putUserUsername.method = 'put'

export interface IDeleteUserUsernameParam {
  path: {
    username: string
  }
}

/**
 * Delete user
 * This can only be done by the logged in user.
 */
export function deleteUserUsername(
  option: IDeleteUserUsernameParam,
): Promise<any> {
  return requester('/v2/user/:username', { ...option, method: 'delete' })
}

deleteUserUsername.method = 'delete'
