/* eslint-disable */
/* tslint:disable */
/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
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
const putPetMockData = '' as any

/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function putPet(option: PutPetOption): Promise<PutPetResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(putPetMockData as PutPetResponseSuccess)
  }
  return requester('/v2/pet', { method: 'put', ...option }) as Promise<
    PutPetResponseSuccess
  >
}

export const putPetMethod = 'put'
export const putPetUrl = '/v2/pet'

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
const postPetMockData = '' as any

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
    return Promise.resolve(postPetMockData as PostPetResponseSuccess)
  }
  return requester('/v2/pet', { method: 'post', ...option }) as Promise<
    PostPetResponseSuccess
  >
}

export const postPetMethod = 'post'
export const postPetUrl = '/v2/pet'

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

export type GetPetFindByStatusResponseSuccess = GetPetFindByStatusResponse[200]
const getPetFindByStatusMockData = [
  {
    id: 0,
    category: { id: 0, pet: '', name: 'string' },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [{ id: 0, name: 'string' }],
    status: 'available',
  },
] as any

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
    return Promise.resolve(
      getPetFindByStatusMockData as GetPetFindByStatusResponseSuccess,
    )
  }
  return requester('/v2/pet/findByStatus', {
    method: 'get',
    ...option,
  }) as Promise<GetPetFindByStatusResponseSuccess>
}

export const getPetFindByStatusMethod = 'get'
export const getPetFindByStatusUrl = '/v2/pet/findByStatus'

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

export type GetPetPetIdResponseSuccess = GetPetPetIdResponse[200]
const getPetPetIdMockData = {
  id: 0,
  category: { id: 0, pet: '', name: 'string' },
  name: 'doggie',
  photoUrls: ['string'],
  tags: [{ id: 0, name: 'string' }],
  status: 'available',
} as any

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
    return Promise.resolve(getPetPetIdMockData as GetPetPetIdResponseSuccess)
  }
  return requester('/v2/pet/:petId', { method: 'get', ...option }) as Promise<
    GetPetPetIdResponseSuccess
  >
}

export const getPetPetIdMethod = 'get'
export const getPetPetIdUrl = '/v2/pet/:petId'

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
const postPetPetIdMockData = '' as any

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
    return Promise.resolve(postPetPetIdMockData as PostPetPetIdResponseSuccess)
  }
  return requester('/v2/pet/:petId', { method: 'post', ...option }) as Promise<
    PostPetPetIdResponseSuccess
  >
}

export const postPetPetIdMethod = 'post'
export const postPetPetIdUrl = '/v2/pet/:petId'

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
const deletePetPetIdMockData = '' as any

/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export function deletePetPetId(
  option: DeletePetPetIdOption,
): Promise<DeletePetPetIdResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      deletePetPetIdMockData as DeletePetPetIdResponseSuccess,
    )
  }
  return requester('/v2/pet/:petId', {
    method: 'delete',
    ...option,
  }) as Promise<DeletePetPetIdResponseSuccess>
}

export const deletePetPetIdMethod = 'delete'
export const deletePetPetIdUrl = '/v2/pet/:petId'

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

export type PostPetPetIdUploadImageResponseSuccess = PostPetPetIdUploadImageResponse[200]
const postPetPetIdUploadImageMockData = {
  code: 0,
  type: 'string',
  message: 'string',
} as any

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
    return Promise.resolve(
      postPetPetIdUploadImageMockData as PostPetPetIdUploadImageResponseSuccess,
    )
  }
  return requester('/v2/pet/:petId/uploadImage', {
    method: 'post',
    ...option,
  }) as Promise<PostPetPetIdUploadImageResponseSuccess>
}

export const postPetPetIdUploadImageMethod = 'post'
export const postPetPetIdUploadImageUrl = '/v2/pet/:petId/uploadImage'

export interface GetStoreInventoryResponse {
  /** successful operation */
  200: {
    [propertyName: string]: number
  }
}

export type GetStoreInventoryResponseSuccess = GetStoreInventoryResponse[200]
const getStoreInventoryMockData = {
  additionalProp1: 0,
  additionalProp2: 0,
  additionalProp3: 0,
} as any

/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export function getStoreInventory(): Promise<GetStoreInventoryResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      getStoreInventoryMockData as GetStoreInventoryResponseSuccess,
    )
  }
  return requester('/v2/store/inventory', { method: 'get' }) as Promise<
    GetStoreInventoryResponseSuccess
  >
}

export const getStoreInventoryMethod = 'get'
export const getStoreInventoryUrl = '/v2/store/inventory'

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

export type PostStoreOrderResponseSuccess = PostStoreOrderResponse[200]
const postStoreOrderMockData = {
  id: 0,
  petId: 0,
  quantity: 0,
  shipDate: '2019-09-03T00:00:00.000Z',
  status: 'placed',
  complete: false,
} as any

/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export function postStoreOrder(
  option: PostStoreOrderOption,
): Promise<PostStoreOrderResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      postStoreOrderMockData as PostStoreOrderResponseSuccess,
    )
  }
  return requester('/v2/store/order', { method: 'post', ...option }) as Promise<
    PostStoreOrderResponseSuccess
  >
}

export const postStoreOrderMethod = 'post'
export const postStoreOrderUrl = '/v2/store/order'

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

export type GetStoreOrderOrderIdResponseSuccess = GetStoreOrderOrderIdResponse[200]
const getStoreOrderOrderIdMockData = {
  id: 0,
  petId: 0,
  quantity: 0,
  shipDate: '2019-09-03T00:00:00.000Z',
  status: 'placed',
  complete: false,
} as any

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
    return Promise.resolve(
      getStoreOrderOrderIdMockData as GetStoreOrderOrderIdResponseSuccess,
    )
  }
  return requester('/v2/store/order/:orderId', {
    method: 'get',
    ...option,
  }) as Promise<GetStoreOrderOrderIdResponseSuccess>
}

export const getStoreOrderOrderIdMethod = 'get'
export const getStoreOrderOrderIdUrl = '/v2/store/order/:orderId'

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
const deleteStoreOrderOrderIdMockData = '' as any

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
    return Promise.resolve(
      deleteStoreOrderOrderIdMockData as DeleteStoreOrderOrderIdResponseSuccess,
    )
  }
  return requester('/v2/store/order/:orderId', {
    method: 'delete',
    ...option,
  }) as Promise<DeleteStoreOrderOrderIdResponseSuccess>
}

export const deleteStoreOrderOrderIdMethod = 'delete'
export const deleteStoreOrderOrderIdUrl = '/v2/store/order/:orderId'

/** request parameter type for postUser */
export interface PostUserOption {
  /** Created user object */
  body: User
}

export interface PostUserResponse {
  /** successful operation */
  default: any
}

export type PostUserResponseSuccess = PostUserResponse['default']
const postUserMockData = '' as any

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
    return Promise.resolve(postUserMockData as PostUserResponseSuccess)
  }
  return requester('/v2/user', { method: 'post', ...option }) as Promise<
    PostUserResponseSuccess
  >
}

export const postUserMethod = 'post'
export const postUserUrl = '/v2/user'

/** request parameter type for postUserCreateWithArray */
export interface PostUserCreateWithArrayOption {
  /** List of user object */
  body: Array<User>
}

export interface PostUserCreateWithArrayResponse {
  /** successful operation */
  default: any
}

export type PostUserCreateWithArrayResponseSuccess = PostUserCreateWithArrayResponse['default']
const postUserCreateWithArrayMockData = '' as any

/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithArray(
  option: PostUserCreateWithArrayOption,
): Promise<PostUserCreateWithArrayResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      postUserCreateWithArrayMockData as PostUserCreateWithArrayResponseSuccess,
    )
  }
  return requester('/v2/user/createWithArray', {
    method: 'post',
    ...option,
  }) as Promise<PostUserCreateWithArrayResponseSuccess>
}

export const postUserCreateWithArrayMethod = 'post'
export const postUserCreateWithArrayUrl = '/v2/user/createWithArray'

/** request parameter type for postUserCreateWithList */
export interface PostUserCreateWithListOption {
  /** List of user object */
  body: Array<User>
}

export interface PostUserCreateWithListResponse {
  /** successful operation */
  default: any
}

export type PostUserCreateWithListResponseSuccess = PostUserCreateWithListResponse['default']
const postUserCreateWithListMockData = '' as any

/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithList(
  option: PostUserCreateWithListOption,
): Promise<PostUserCreateWithListResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      postUserCreateWithListMockData as PostUserCreateWithListResponseSuccess,
    )
  }
  return requester('/v2/user/createWithList', {
    method: 'post',
    ...option,
  }) as Promise<PostUserCreateWithListResponseSuccess>
}

export const postUserCreateWithListMethod = 'post'
export const postUserCreateWithListUrl = '/v2/user/createWithList'

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

export type GetUserLoginResponseSuccess = GetUserLoginResponse[200]
const getUserLoginMockData = 'string' as any

/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogin(
  option: GetUserLoginOption,
): Promise<GetUserLoginResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(getUserLoginMockData as GetUserLoginResponseSuccess)
  }
  return requester('/v2/user/login', { method: 'get', ...option }) as Promise<
    GetUserLoginResponseSuccess
  >
}

export const getUserLoginMethod = 'get'
export const getUserLoginUrl = '/v2/user/login'

export interface GetUserLogoutResponse {
  /** successful operation */
  default: any
}

export type GetUserLogoutResponseSuccess = GetUserLogoutResponse['default']
const getUserLogoutMockData = '' as any

/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogout(): Promise<GetUserLogoutResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      getUserLogoutMockData as GetUserLogoutResponseSuccess,
    )
  }
  return requester('/v2/user/logout', { method: 'get' }) as Promise<
    GetUserLogoutResponseSuccess
  >
}

export const getUserLogoutMethod = 'get'
export const getUserLogoutUrl = '/v2/user/logout'

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

export type GetUserUsernameResponseSuccess = GetUserUsernameResponse[200]
const getUserUsernameMockData = {
  id: 0,
  username: 'string',
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  password: 'string',
  phone: 'string',
  userStatus: 0,
} as any

/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserUsername(
  option: GetUserUsernameOption,
): Promise<GetUserUsernameResponseSuccess> {
  if (process.env.NODE_ENV === 'test') {
    return Promise.resolve(
      getUserUsernameMockData as GetUserUsernameResponseSuccess,
    )
  }
  return requester('/v2/user/:username', {
    method: 'get',
    ...option,
  }) as Promise<GetUserUsernameResponseSuccess>
}

export const getUserUsernameMethod = 'get'
export const getUserUsernameUrl = '/v2/user/:username'

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
const putUserUsernameMockData = '' as any

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
    return Promise.resolve(
      putUserUsernameMockData as PutUserUsernameResponseSuccess,
    )
  }
  return requester('/v2/user/:username', {
    method: 'put',
    ...option,
  }) as Promise<PutUserUsernameResponseSuccess>
}

export const putUserUsernameMethod = 'put'
export const putUserUsernameUrl = '/v2/user/:username'

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
const deleteUserUsernameMockData = '' as any

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
    return Promise.resolve(
      deleteUserUsernameMockData as DeleteUserUsernameResponseSuccess,
    )
  }
  return requester('/v2/user/:username', {
    method: 'delete',
    ...option,
  }) as Promise<DeleteUserUsernameResponseSuccess>
}

export const deleteUserUsernameMethod = 'delete'
export const deleteUserUsernameUrl = '/v2/user/:username'
