import { ApiResponse, Order, Pet, User } from './definitions'
import { interceptRequest, interceptResponse } from './fetchInterceptor'

interface IPostPetParam {
  body: {
    body: Pet
  }
}

export function postPet(param: IPostPetParam) {
  const [url, option] = interceptRequest('/v2/pet', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

interface IPutPetParam {
  body: {
    body: Pet
  }
}

export function putPet(param: IPutPetParam) {
  const [url, option] = interceptRequest('/v2/pet', param)
  option.method = 'put'
  return fetch(url, option).then(interceptResponse)
}

interface IGetPetFindByStatusParam {
  query: {
    status: Array<'available' | 'pending' | 'sold'>
  }
}

type IGetPetFindByStatusResponse = Pet[]
export function getPetFindByStatus(param: IGetPetFindByStatusParam) {
  const [url, option] = interceptRequest('/v2/pet/findByStatus', param)
  option.method = 'get'
  return fetch(url, option).then<IGetPetFindByStatusResponse>(interceptResponse)
}

interface IGetPetPetIdParam {
  path: {
    petId: number
  }
}

type IGetPetPetIdResponse = Pet
export function getPetPetId(param: IGetPetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/{petId}', param)
  option.method = 'get'
  return fetch(url, option).then<IGetPetPetIdResponse>(interceptResponse)
}

interface IPostPetPetIdParam {
  path: {
    petId: number
  }
  formData?: {
    name?: string
    status?: string
  }
}

export function postPetPetId(param: IPostPetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/{petId}', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

interface IDeletePetPetIdParam {
  header?: {
    api_key?: string
  }
  path: {
    petId: number
  }
}

export function deletePetPetId(param: IDeletePetPetIdParam) {
  const [url, option] = interceptRequest('/v2/pet/{petId}', param)
  option.method = 'delete'
  return fetch(url, option).then(interceptResponse)
}

interface IPostPetPetIdUploadImageParam {
  path: {
    petId: number
  }
  formData?: {
    additionalMetadata?: string
    file?: File
  }
}

type IPostPetPetIdUploadImageResponse = ApiResponse
export function postPetPetIdUploadImage(param: IPostPetPetIdUploadImageParam) {
  const [url, option] = interceptRequest('/v2/pet/{petId}/uploadImage', param)
  option.method = 'post'
  return fetch(url, option).then<IPostPetPetIdUploadImageResponse>(
    interceptResponse,
  )
}

type IGetStoreInventoryResponse = any
export function getStoreInventory() {
  const [url, option] = interceptRequest('/v2/store/inventory')
  option.method = 'get'
  return fetch(url, option).then<IGetStoreInventoryResponse>(interceptResponse)
}

interface IPostStoreOrderParam {
  body: {
    body: Order
  }
}

type IPostStoreOrderResponse = Order
export function postStoreOrder(param: IPostStoreOrderParam) {
  const [url, option] = interceptRequest('/v2/store/order', param)
  option.method = 'post'
  return fetch(url, option).then<IPostStoreOrderResponse>(interceptResponse)
}

interface IGetStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

type IGetStoreOrderOrderIdResponse = Order
export function getStoreOrderOrderId(param: IGetStoreOrderOrderIdParam) {
  const [url, option] = interceptRequest('/v2/store/order/{orderId}', param)
  option.method = 'get'
  return fetch(url, option).then<IGetStoreOrderOrderIdResponse>(
    interceptResponse,
  )
}

interface IDeleteStoreOrderOrderIdParam {
  path: {
    orderId: number
  }
}

export function deleteStoreOrderOrderId(param: IDeleteStoreOrderOrderIdParam) {
  const [url, option] = interceptRequest('/v2/store/order/{orderId}', param)
  option.method = 'delete'
  return fetch(url, option).then(interceptResponse)
}

interface IPostUserParam {
  body: {
    body: User
  }
}

export function postUser(param: IPostUserParam) {
  const [url, option] = interceptRequest('/v2/user', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

interface IPostUserCreateWithArrayParam {
  body: {
    body: User[]
  }
}

export function postUserCreateWithArray(param: IPostUserCreateWithArrayParam) {
  const [url, option] = interceptRequest('/v2/user/createWithArray', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

interface IPostUserCreateWithListParam {
  body: {
    body: User[]
  }
}

export function postUserCreateWithList(param: IPostUserCreateWithListParam) {
  const [url, option] = interceptRequest('/v2/user/createWithList', param)
  option.method = 'post'
  return fetch(url, option).then(interceptResponse)
}

interface IGetUserLoginParam {
  query: {
    username: string
    password: string
  }
}

type IGetUserLoginResponse = string
export function getUserLogin(param: IGetUserLoginParam) {
  const [url, option] = interceptRequest('/v2/user/login', param)
  option.method = 'get'
  return fetch(url, option).then<IGetUserLoginResponse>(interceptResponse)
}

export function getUserLogout() {
  const [url, option] = interceptRequest('/v2/user/logout')
  option.method = 'get'
  return fetch(url, option).then(interceptResponse)
}

interface IGetUserUsernameParam {
  path: {
    username: string
  }
}

type IGetUserUsernameResponse = User
export function getUserUsername(param: IGetUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/{username}', param)
  option.method = 'get'
  return fetch(url, option).then<IGetUserUsernameResponse>(interceptResponse)
}

interface IPutUserUsernameParam {
  path: {
    username: string
  }
  body: {
    body: User
  }
}

export function putUserUsername(param: IPutUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/{username}', param)
  option.method = 'put'
  return fetch(url, option).then(interceptResponse)
}

interface IDeleteUserUsernameParam {
  path: {
    username: string
  }
}

export function deleteUserUsername(param: IDeleteUserUsernameParam) {
  const [url, option] = interceptRequest('/v2/user/{username}', param)
  option.method = 'delete'
  return fetch(url, option).then(interceptResponse)
}
