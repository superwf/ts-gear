import { interceptRequest, interceptResponse } from './interceptor'
import { Pet, ApiResponse, Order, User } from './definitions'

export interface IPostPetParam {
  body: Pet
}

/**
 * Add a new pet to the store
 */
export function postPet(param: IPostPetParam) {
  const [url, option] = interceptRequest('/v2/pet', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPutPetParam {
  body: Pet
}

/**
 * Update an existing pet
 */
export function putPet(param: IPutPetParam) {
  const [url, option] = interceptRequest('/v2/pet', param)
  console.info('mock fetch: ', url)
  option.method = 'put'
  Promise.resolve(new Response())
}

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
export function getPetFindByStatus(param: IGetPetFindByStatusParam) {
  const [url, option] = interceptRequest('/v2/pet/findByStatus', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve([
    {
      id: 0,
      category: { id: 0, name: 'string' },
      name: 'doggie',
      photoUrls: ['string'],
      tags: [{ id: 0, name: 'string' }],
      status: 'available',
    },
  ]) as Promise<GetPetFindByStatusResponse>
}

export interface IGetPetPetIdParam {
  path: {
    petId: number
  }
}

/**
 * Find pet by ID
 * Returns a single pet
 */
export function getPetPetId(param: IGetPetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

export interface IPostPetPetIdParam {
  path: {
    petId: number
  }
  formData?: {
    name?: string
    status?: string
  }
}

/**
 * Updates a pet in the store with form data
 */
export function postPetPetId(param: IPostPetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IDeletePetPetIdParam {
  header?: {
    api_key?: string
  }
  path: {
    petId: number
  }
}

/**
 * Deletes a pet
 */
export function deletePetPetId(param: IDeletePetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}

export interface IPostPetPetIdUploadImageParam {
  path: {
    petId: number
  }
  formData?: {
    additionalMetadata?: string
    file?: File
  }
}

/**
 * uploads an image
 */
export function postPetPetIdUploadImage(param: IPostPetPetIdUploadImageParam) {
  const [url, option] = interceptRequest('/v2/pet/:petId/uploadImage', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve({
    code: 0,
    type: 'string',
    message: 'string',
  }) as Promise<ApiResponse>
}

type GetStoreInventoryResponse = any
/**
 * Returns pet inventories by status
 * Returns a map of status codes to quantities
 */
export function getStoreInventory() {
  const [url, option] = interceptRequest('/v2/store/inventory')
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    additionalProp1: 0,
    additionalProp2: 0,
    additionalProp3: 0,
  }) as Promise<GetStoreInventoryResponse>
}

export interface IPostStoreOrderParam {
  body: Order
}

/**
 * Place an order for a pet
 */
export function postStoreOrder(param: IPostStoreOrderParam) {
  const [url, option] = interceptRequest('/v2/store/order', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  return Promise.resolve({
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: '2019-09-03T02:01:16.316Z',
    status: 'placed',
    complete: false,
  }) as Promise<Order>
}

export interface IGetStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

/**
 * Find purchase order by ID
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 */
export function getStoreOrderOrderId(param: IGetStoreOrderOrderIdParam) {
  const [url, option] = interceptRequest('/v2/store/order/:orderId', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

export interface IDeleteStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

/**
 * Delete purchase order by ID
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 */
export function deleteStoreOrderOrderId(param: IDeleteStoreOrderOrderIdParam) {
  const [url, option] = interceptRequest('/v2/store/order/:orderId', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}

export interface IPostUserParam {
  body: User
}

/**
 * Create user
 * This can only be done by the logged in user.
 */
export function postUser(param: IPostUserParam) {
  const [url, option] = interceptRequest('/v2/user', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostUserCreateWithArrayParam {
  body: Array<User>
}

/**
 * Creates list of users with given input array
 */
export function postUserCreateWithArray(param: IPostUserCreateWithArrayParam) {
  const [url, option] = interceptRequest('/v2/user/createWithArray', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IPostUserCreateWithListParam {
  body: Array<User>
}

/**
 * Creates list of users with given input array
 */
export function postUserCreateWithList(param: IPostUserCreateWithListParam) {
  const [url, option] = interceptRequest('/v2/user/createWithList', param)
  console.info('mock fetch: ', url)
  option.method = 'post'
  Promise.resolve(new Response())
}

export interface IGetUserLoginParam {
  query: {
    username: string
    password: string
  }
}

type GetUserLoginResponse = string
/**
 * Logs user into the system
 */
export function getUserLogin(param: IGetUserLoginParam) {
  const [url, option] = interceptRequest('/v2/user/login', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve('string') as Promise<GetUserLoginResponse>
}

/**
 * Logs out current logged in user session
 */
export function getUserLogout() {
  const [url, option] = interceptRequest('/v2/user/logout')
  console.info('mock fetch: ', url)
  option.method = 'get'
  Promise.resolve(new Response())
}

export interface IGetUserUsernameParam {
  path: {
    username: string
  }
}

/**
 * Get user by user name
 */
export function getUserUsername(param: IGetUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/:username', param)
  console.info('mock fetch: ', url)
  option.method = 'get'
  return Promise.resolve({
    id: 0,
    username: 'string',
    firstName: 'string',
    lastName: 'string',
    email: 'string',
    password: 'string',
    phone: 'string',
    userStatus: 0,
  }) as Promise<User>
}

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
export function putUserUsername(param: IPutUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/:username', param)
  console.info('mock fetch: ', url)
  option.method = 'put'
  Promise.resolve(new Response())
}

export interface IDeleteUserUsernameParam {
  path: {
    username: string
  }
}

/**
 * Delete user
 * This can only be done by the logged in user.
 */
export function deleteUserUsername(param: IDeleteUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/:username', param)
  console.info('mock fetch: ', url)
  option.method = 'delete'
  Promise.resolve(new Response())
}
