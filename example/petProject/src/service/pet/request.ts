/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { PropertyType } from 'ts-gear'
import projects from '../../tsg.config'
import type {
  GetPetFindByStatusItems,
  Pet,
  ApiResponse,
  Order,
  User,
} from './definition'
const project = projects.find((p) => p.name === 'pet')!
const requester = project.requester!
/** request parameter type for putPet */
export interface PutPetOption {
  /** Pet object that needs to be added to the store */
  body: Pet
}

export interface PutPetResponse {
  /** Invalid ID supplied */
  400: any
  /** Pet not found */
  404: any
  /** Validation exception */
  405: any
}

export type PutPetResponseSuccess = any
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function putPet(option: PutPetOption): Promise<PutPetResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(putPet.mockData as any)
  }
  return requester('/v2/pet', { method: 'put', ...option }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  putPet.mockData = '' as any
}
putPet.method = 'put'
putPet.url = '/v2/pet'

/** request parameter type for postPet */
export interface PostPetOption {
  /** Pet object that needs to be added to the store */
  body: Pet
}

export interface PostPetResponse {
  /** Invalid input */
  405: any
}

export type PostPetResponseSuccess = any
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function postPet(
  option: PostPetOption,
): Promise<PostPetResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postPet.mockData as any)
  }
  return requester('/v2/pet', { method: 'post', ...option }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  postPet.mockData = '' as any
}
postPet.method = 'post'
postPet.url = '/v2/pet'

/** request parameter type for getPetFindByStatus */
export interface GetPetFindByStatusOption {
  /** Status values that need to be considered for filter */
  query: {
    /**
        Status values that need to be considered for filter */
    status: Array<GetPetFindByStatusItems>
  }
}

export interface GetPetFindByStatusResponse {
  /** successful operation */
  200: Array<Pet>
  /** Invalid status value */
  400: any
}

export type GetPetFindByStatusResponseSuccess = PropertyType<
  GetPetFindByStatusResponse,
  200
>
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export function getPetFindByStatus(
  option: GetPetFindByStatusOption,
): Promise<GetPetFindByStatusResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getPetFindByStatus.mockData as any)
  }
  return requester('/v2/pet/findByStatus', {
    method: 'get',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  getPetFindByStatus.mockData = [
    {
      id: 0,
      category: { id: 0, pet: '', name: 'string' },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [{ id: 0, name: 'string' }],
      status: 'available',
    },
  ] as any
}
getPetFindByStatus.method = 'get'
getPetFindByStatus.url = '/v2/pet/findByStatus'

/** request parameter type for getPetPetId */
export interface GetPetPetIdOption {
  /**
   * ID of pet to return
   * format: int64
   */
  path: {
    /**
        ID of pet to return
        format: int64 */
    petId: number
  }
}

export interface GetPetPetIdResponse {
  /** successful operation */
  200: Pet
  /** Invalid ID supplied */
  400: any
  /** Pet not found */
  404: any
}

export type GetPetPetIdResponseSuccess = PropertyType<GetPetPetIdResponse, 200>
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export function getPetPetId(
  option: GetPetPetIdOption,
): Promise<GetPetPetIdResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getPetPetId.mockData as any)
  }
  return requester('/v2/pet/:petId', { method: 'get', ...option }) as Promise<
    any
  >
}

if (process.env.NODE_ENV === 'test') {
  getPetPetId.mockData = {
    id: 0,
    category: { id: 0, pet: '', name: 'string' },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [{ id: 0, name: 'string' }],
    status: 'available',
  } as any
}
getPetPetId.method = 'get'
getPetPetId.url = '/v2/pet/:petId'

/** request parameter type for postPetPetId */
export interface PostPetPetIdOption {
  /**
   * ID of pet that needs to be updated
   * format: int64
   */
  path: {
    /**
        ID of pet that needs to be updated
        format: int64 */
    petId: number
  }
  /** Updated name of the pet */
  formData?: {
    /**
        Updated name of the pet */
    name?: string
    /**
        Updated status of the pet */
    status?: string
  }
}

export interface PostPetPetIdResponse {
  /** Invalid input */
  405: any
}

export type PostPetPetIdResponseSuccess = any
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export function postPetPetId(
  option: PostPetPetIdOption,
): Promise<PostPetPetIdResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postPetPetId.mockData as any)
  }
  return requester('/v2/pet/:petId', { method: 'post', ...option }) as Promise<
    any
  >
}

if (process.env.NODE_ENV === 'test') {
  postPetPetId.mockData = '' as any
}
postPetPetId.method = 'post'
postPetPetId.url = '/v2/pet/:petId'

/** request parameter type for deletePetPetId */
export interface DeletePetPetIdOption {
  header?: {
    api_key?: string
  }
  /**
   * Pet id to delete
   * format: int64
   */
  path: {
    /**
        Pet id to delete
        format: int64 */
    petId: number
  }
}

export interface DeletePetPetIdResponse {
  /** Invalid ID supplied */
  400: any
  /** Pet not found */
  404: any
}

export type DeletePetPetIdResponseSuccess = any
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export function deletePetPetId(
  option: DeletePetPetIdOption,
): Promise<DeletePetPetIdResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(deletePetPetId.mockData as any)
  }
  return requester('/v2/pet/:petId', {
    method: 'delete',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  deletePetPetId.mockData = '' as any
}
deletePetPetId.method = 'delete'
deletePetPetId.url = '/v2/pet/:petId'

/** request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  /**
   * ID of pet to update
   * format: int64
   */
  path: {
    /**
        ID of pet to update
        format: int64 */
    petId: number
  }
  /** Additional data to pass to server */
  formData?: {
    /**
        Additional data to pass to server */
    additionalMetadata?: string
    /**
        file to upload */
    file?: File
  }
}

export interface PostPetPetIdUploadImageResponse {
  /** successful operation */
  200: ApiResponse
}

export type PostPetPetIdUploadImageResponseSuccess = PropertyType<
  PostPetPetIdUploadImageResponse,
  200
>
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export function postPetPetIdUploadImage(
  option: PostPetPetIdUploadImageOption,
): Promise<PostPetPetIdUploadImageResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postPetPetIdUploadImage.mockData as any)
  }
  return requester('/v2/pet/:petId/uploadImage', {
    method: 'post',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  postPetPetIdUploadImage.mockData = {
    code: 0,
    type: 'string',
    message: 'string',
  } as any
}
postPetPetIdUploadImage.method = 'post'
postPetPetIdUploadImage.url = '/v2/pet/:petId/uploadImage'

export interface GetStoreInventoryResponse {
  /** successful operation */
  200: {
    [propertyName: string]: number
  }
}

export type GetStoreInventoryResponseSuccess = PropertyType<
  GetStoreInventoryResponse,
  200
>
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export function getStoreInventory(): Promise<GetStoreInventoryResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getStoreInventory.mockData as any)
  }
  return requester('/v2/store/inventory', { method: 'get' }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  getStoreInventory.mockData = {
    additionalProp1: 0,
    additionalProp2: 0,
    additionalProp3: 0,
  } as any
}
getStoreInventory.method = 'get'
getStoreInventory.url = '/v2/store/inventory'

/** request parameter type for postStoreOrder */
export interface PostStoreOrderOption {
  /** order placed for purchasing the pet */
  body: Order
}

export interface PostStoreOrderResponse {
  /** successful operation */
  200: Order
  /** Invalid Order */
  400: any
}

export type PostStoreOrderResponseSuccess = PropertyType<
  PostStoreOrderResponse,
  200
>
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export function postStoreOrder(
  option: PostStoreOrderOption,
): Promise<PostStoreOrderResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postStoreOrder.mockData as any)
  }
  return requester('/v2/store/order', { method: 'post', ...option }) as Promise<
    any
  >
}

if (process.env.NODE_ENV === 'test') {
  postStoreOrder.mockData = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T00:00:00.000Z',
    status: 'placed',
    complete: false,
  } as any
}
postStoreOrder.method = 'post'
postStoreOrder.url = '/v2/store/order'

/** request parameter type for getStoreOrderOrderId */
export interface GetStoreOrderOrderIdOption {
  /**
   * ID of pet that needs to be fetched
   * format: int64
   */
  path: {
    /**
        ID of pet that needs to be fetched
        format: int64 */
    orderId: number
  }
}

export interface GetStoreOrderOrderIdResponse {
  /** successful operation */
  200: Order
  /** Invalid ID supplied */
  400: any
  /** Order not found */
  404: any
}

export type GetStoreOrderOrderIdResponseSuccess = PropertyType<
  GetStoreOrderOrderIdResponse,
  200
>
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function getStoreOrderOrderId(
  option: GetStoreOrderOrderIdOption,
): Promise<GetStoreOrderOrderIdResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getStoreOrderOrderId.mockData as any)
  }
  return requester('/v2/store/order/:orderId', {
    method: 'get',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  getStoreOrderOrderId.mockData = {
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T00:00:00.000Z',
    status: 'placed',
    complete: false,
  } as any
}
getStoreOrderOrderId.method = 'get'
getStoreOrderOrderId.url = '/v2/store/order/:orderId'

/** request parameter type for deleteStoreOrderOrderId */
export interface DeleteStoreOrderOrderIdOption {
  /**
   * ID of the order that needs to be deleted
   * format: int64
   */
  path: {
    /**
        ID of the order that needs to be deleted
        format: int64 */
    orderId: number
  }
}

export interface DeleteStoreOrderOrderIdResponse {
  /** Invalid ID supplied */
  400: any
  /** Order not found */
  404: any
}

export type DeleteStoreOrderOrderIdResponseSuccess = any
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function deleteStoreOrderOrderId(
  option: DeleteStoreOrderOrderIdOption,
): Promise<DeleteStoreOrderOrderIdResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(deleteStoreOrderOrderId.mockData as any)
  }
  return requester('/v2/store/order/:orderId', {
    method: 'delete',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  deleteStoreOrderOrderId.mockData = '' as any
}
deleteStoreOrderOrderId.method = 'delete'
deleteStoreOrderOrderId.url = '/v2/store/order/:orderId'

/** request parameter type for postUser */
export interface PostUserOption {
  /** Created user object */
  body: User
}

export interface PostUserResponse {
  /** successful operation */
  default: any
}

export type PostUserResponseSuccess = PropertyType<PostUserResponse, 'default'>
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export function postUser(
  option: PostUserOption,
): Promise<PostUserResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postUser.mockData as any)
  }
  return requester('/v2/user', { method: 'post', ...option }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  postUser.mockData = '' as any
}
postUser.method = 'post'
postUser.url = '/v2/user'

/** request parameter type for postUserCreateWithArray */
export interface PostUserCreateWithArrayOption {
  /** List of user object */
  body: Array<User>
}

export interface PostUserCreateWithArrayResponse {
  /** successful operation */
  default: any
}

export type PostUserCreateWithArrayResponseSuccess = PropertyType<
  PostUserCreateWithArrayResponse,
  'default'
>
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithArray(
  option: PostUserCreateWithArrayOption,
): Promise<PostUserCreateWithArrayResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postUserCreateWithArray.mockData as any)
  }
  return requester('/v2/user/createWithArray', {
    method: 'post',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  postUserCreateWithArray.mockData = '' as any
}
postUserCreateWithArray.method = 'post'
postUserCreateWithArray.url = '/v2/user/createWithArray'

/** request parameter type for postUserCreateWithList */
export interface PostUserCreateWithListOption {
  /** List of user object */
  body: Array<User>
}

export interface PostUserCreateWithListResponse {
  /** successful operation */
  default: any
}

export type PostUserCreateWithListResponseSuccess = PropertyType<
  PostUserCreateWithListResponse,
  'default'
>
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithList(
  option: PostUserCreateWithListOption,
): Promise<PostUserCreateWithListResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(postUserCreateWithList.mockData as any)
  }
  return requester('/v2/user/createWithList', {
    method: 'post',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  postUserCreateWithList.mockData = '' as any
}
postUserCreateWithList.method = 'post'
postUserCreateWithList.url = '/v2/user/createWithList'

/** request parameter type for getUserLogin */
export interface GetUserLoginOption {
  /** The user name for login */
  query: {
    /**
        The user name for login */
    username: string
    /**
        The password for login in clear text */
    password: string
  }
}

export interface GetUserLoginResponse {
  /** successful operation */
  200: string
  /** Invalid username／password supplied */
  400: any
}

export type GetUserLoginResponseSuccess = PropertyType<
  GetUserLoginResponse,
  200
>
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogin(
  option: GetUserLoginOption,
): Promise<GetUserLoginResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getUserLogin.mockData as any)
  }
  return requester('/v2/user/login', { method: 'get', ...option }) as Promise<
    any
  >
}

if (process.env.NODE_ENV === 'test') {
  getUserLogin.mockData = 'string' as any
}
getUserLogin.method = 'get'
getUserLogin.url = '/v2/user/login'

export interface GetUserLogoutResponse {
  /** successful operation */
  default: any
}

export type GetUserLogoutResponseSuccess = PropertyType<
  GetUserLogoutResponse,
  'default'
>
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogout(): Promise<GetUserLogoutResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getUserLogout.mockData as any)
  }
  return requester('/v2/user/logout', { method: 'get' }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  getUserLogout.mockData = '' as any
}
getUserLogout.method = 'get'
getUserLogout.url = '/v2/user/logout'

/** request parameter type for getUserUsername */
export interface GetUserUsernameOption {
  /** The name that needs to be fetched. Use user1 for testing. */
  path: {
    /**
        The name that needs to be fetched. Use user1 for testing.  */
    username: string
  }
}

export interface GetUserUsernameResponse {
  /** successful operation */
  200: User
  /** Invalid username supplied */
  400: any
  /** User not found */
  404: any
}

export type GetUserUsernameResponseSuccess = PropertyType<
  GetUserUsernameResponse,
  200
>
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserUsername(
  option: GetUserUsernameOption,
): Promise<GetUserUsernameResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getUserUsername.mockData as any)
  }
  return requester('/v2/user/:username', {
    method: 'get',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  getUserUsername.mockData = {
    id: 0,
    username: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    phone: 'string',
    userStatus: 0,
  } as any
}
getUserUsername.method = 'get'
getUserUsername.url = '/v2/user/:username'

/** request parameter type for putUserUsername */
export interface PutUserUsernameOption {
  /** name that need to be updated */
  path: {
    /**
        name that need to be updated */
    username: string
  }
  /** Updated user object */
  body: User
}

export interface PutUserUsernameResponse {
  /** Invalid user supplied */
  400: any
  /** User not found */
  404: any
}

export type PutUserUsernameResponseSuccess = any
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export function putUserUsername(
  option: PutUserUsernameOption,
): Promise<PutUserUsernameResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(putUserUsername.mockData as any)
  }
  return requester('/v2/user/:username', {
    method: 'put',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  putUserUsername.mockData = '' as any
}
putUserUsername.method = 'put'
putUserUsername.url = '/v2/user/:username'

/** request parameter type for deleteUserUsername */
export interface DeleteUserUsernameOption {
  /** The name that needs to be deleted */
  path: {
    /**
        The name that needs to be deleted */
    username: string
  }
}

export interface DeleteUserUsernameResponse {
  /** Invalid username supplied */
  400: any
  /** User not found */
  404: any
}

export type DeleteUserUsernameResponseSuccess = any
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export function deleteUserUsername(
  option: DeleteUserUsernameOption,
): Promise<DeleteUserUsernameResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(deleteUserUsername.mockData as any)
  }
  return requester('/v2/user/:username', {
    method: 'delete',
    ...option,
  }) as Promise<any>
}

if (process.env.NODE_ENV === 'test') {
  deleteUserUsername.mockData = '' as any
}
deleteUserUsername.method = 'delete'
deleteUserUsername.url = '/v2/user/:username'
