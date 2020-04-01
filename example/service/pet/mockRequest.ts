/** Don`t modify this file manually, its content will be overwriten next time execute the `tsg` command. */
import { Pet, ApiResponse, Order, User } from './definitions'

const { info } = console
if (process && process.env && process.env.NODE_ENV === 'production') {
  throw new Error('mockRequest only used in dev mode')
}

export interface IPostPetParam {
  body: Pet
}

/** Add a new pet to the store */
export function postPet(param: IPostPetParam): Promise<any> {
  info('mock fetch: /v2/pet with post http method', 'fetch param:', param)
  return Promise.resolve({})
}

postPet.method = 'post'

export interface IPutPetParam {
  body: Pet
}

/** Update an existing pet */
export function putPet(param: IPutPetParam): Promise<any> {
  info('mock fetch: /v2/pet with put http method', 'fetch param:', param)
  return Promise.resolve({})
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
  param: IGetPetFindByStatusParam,
): Promise<GetPetFindByStatusResponse> {
  info(
    'mock fetch: /v2/pet/findByStatus with get http method',
    'fetch param:',
    param,
  )
  return Promise.resolve([
    {
      id: 0,
      category: { id: 0, name: 'string' },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [{ id: 0, name: 'string' }],
      status: 'available',
    },
  ])
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
export function getPetPetId(param: IGetPetPetIdParam): Promise<Pet> {
  info('mock fetch: /v2/pet/:petId with get http method', 'fetch param:', param)
  return Promise.resolve({
    id: 0,
    category: { id: 0, name: 'string' },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [{ id: 0, name: 'string' }],
    status: 'available',
  })
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
export function postPetPetId(param: IPostPetPetIdParam): Promise<any> {
  info(
    'mock fetch: /v2/pet/:petId with post http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
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
export function deletePetPetId(param: IDeletePetPetIdParam): Promise<any> {
  info(
    'mock fetch: /v2/pet/:petId with delete http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
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
  param: IPostPetPetIdUploadImageParam,
): Promise<ApiResponse> {
  info(
    'mock fetch: /v2/pet/:petId/uploadImage with post http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({ code: 0, type: 'string', message: 'string' })
}

postPetPetIdUploadImage.method = 'post'

type GetStoreInventoryResponse = any
/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export function getStoreInventory(): Promise<GetStoreInventoryResponse> {
  info('mock fetch: /v2/store/inventory with get http method')
  return Promise.resolve({
    additionalProp1: 0,
    additionalProp2: 0,
    additionalProp3: 0,
  })
}

getStoreInventory.method = 'get'

export interface IPostStoreOrderParam {
  body: Order
}

/** Place an order for a pet */
export function postStoreOrder(param: IPostStoreOrderParam): Promise<Order> {
  info(
    'mock fetch: /v2/store/order with post http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T00:00:00.000Z',
    status: 'placed',
    complete: false,
  })
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
  param: IGetStoreOrderOrderIdParam,
): Promise<Order> {
  info(
    'mock fetch: /v2/store/order/:orderId with get http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T00:00:00.000Z',
    status: 'placed',
    complete: false,
  })
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
  param: IDeleteStoreOrderOrderIdParam,
): Promise<any> {
  info(
    'mock fetch: /v2/store/order/:orderId with delete http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
}

deleteStoreOrderOrderId.method = 'delete'

export interface IPostUserParam {
  body: User
}

/**
 * Create user
 * This can only be done by the logged in user.
 */
export function postUser(param: IPostUserParam): Promise<any> {
  info('mock fetch: /v2/user with post http method', 'fetch param:', param)
  return Promise.resolve({})
}

postUser.method = 'post'

export interface IPostUserCreateWithArrayParam {
  body: Array<User>
}

/** Creates list of users with given input array */
export function postUserCreateWithArray(
  param: IPostUserCreateWithArrayParam,
): Promise<any> {
  info(
    'mock fetch: /v2/user/createWithArray with post http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
}

postUserCreateWithArray.method = 'post'

export interface IPostUserCreateWithListParam {
  body: Array<User>
}

/** Creates list of users with given input array */
export function postUserCreateWithList(
  param: IPostUserCreateWithListParam,
): Promise<any> {
  info(
    'mock fetch: /v2/user/createWithList with post http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
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
  param: IGetUserLoginParam,
): Promise<GetUserLoginResponse> {
  info('mock fetch: /v2/user/login with get http method', 'fetch param:', param)
  return Promise.resolve('string')
}

getUserLogin.method = 'get'

/** Logs out current logged in user session */
export function getUserLogout(): Promise<any> {
  info('mock fetch: /v2/user/logout with get http method')
  return Promise.resolve({})
}

getUserLogout.method = 'get'

export interface IGetUserUsernameParam {
  path: {
    username: string
  }
}

/** Get user by user name */
export function getUserUsername(param: IGetUserUsernameParam): Promise<User> {
  info(
    'mock fetch: /v2/user/:username with get http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({
    id: 0,
    username: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    phone: 'string',
    userStatus: 0,
  })
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
export function putUserUsername(param: IPutUserUsernameParam): Promise<any> {
  info(
    'mock fetch: /v2/user/:username with put http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
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
  param: IDeleteUserUsernameParam,
): Promise<any> {
  info(
    'mock fetch: /v2/user/:username with delete http method',
    'fetch param:',
    param,
  )
  return Promise.resolve({})
}

deleteUserUsername.method = 'delete'
