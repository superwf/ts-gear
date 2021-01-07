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
export const putPetMockData = ('' as unknown) as PutPetResponseSuccess
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const putPet = /* #__PURE__ */ (() => {
  const method = 'put'
  const url = '/v2/pet'
  function putPet(option: PutPetOption): Promise<PutPetResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(putPetMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PutPetResponseSuccess
    >
  }

  putPet.method = method
  putPet.url = url
  return putPet
})()

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
export const postPetMockData = ('' as unknown) as PostPetResponseSuccess
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const postPet = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/pet'
  function postPet(option: PostPetOption): Promise<PostPetResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postPetMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostPetResponseSuccess
    >
  }

  postPet.method = method
  postPet.url = url
  return postPet
})()

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
export const getPetFindByStatusMockData = ([
  {
    id: 0,
    category: { id: 0, pet: '', name: 'string' },
    name: 'doggie',
    photoUrls: ['string'],
    tags: [{ id: 0, name: 'string' }],
    status: 'available',
  },
] as unknown) as GetPetFindByStatusResponseSuccess
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/pet/findByStatus'
  function getPetFindByStatus(
    option: GetPetFindByStatusOption,
  ): Promise<GetPetFindByStatusResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getPetFindByStatusMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      GetPetFindByStatusResponseSuccess
    >
  }

  getPetFindByStatus.method = method
  getPetFindByStatus.url = url
  return getPetFindByStatus
})()

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
export const getPetPetIdMockData = ({
  id: 0,
  category: { id: 0, pet: '', name: 'string' },
  name: 'doggie',
  photoUrls: ['string'],
  tags: [{ id: 0, name: 'string' }],
  status: 'available',
} as unknown) as GetPetPetIdResponseSuccess
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetPetId = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/pet/:petId'
  function getPetPetId(
    option: GetPetPetIdOption,
  ): Promise<GetPetPetIdResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getPetPetIdMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      GetPetPetIdResponseSuccess
    >
  }

  getPetPetId.method = method
  getPetPetId.url = url
  return getPetPetId
})()

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
export const postPetPetIdMockData = ('' as unknown) as PostPetPetIdResponseSuccess
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export const postPetPetId = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/pet/:petId'
  function postPetPetId(
    option: PostPetPetIdOption,
  ): Promise<PostPetPetIdResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postPetPetIdMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostPetPetIdResponseSuccess
    >
  }

  postPetPetId.method = method
  postPetPetId.url = url
  return postPetPetId
})()

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
export const deletePetPetIdMockData = ('' as unknown) as DeletePetPetIdResponseSuccess
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
  const method = 'delete'
  const url = '/v2/pet/:petId'
  function deletePetPetId(
    option: DeletePetPetIdOption,
  ): Promise<DeletePetPetIdResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(deletePetPetIdMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      DeletePetPetIdResponseSuccess
    >
  }

  deletePetPetId.method = method
  deletePetPetId.url = url
  return deletePetPetId
})()

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
export const postPetPetIdUploadImageMockData = ({
  code: 0,
  type: 'string',
  message: 'string',
} as unknown) as PostPetPetIdUploadImageResponseSuccess
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/pet/:petId/uploadImage'
  function postPetPetIdUploadImage(
    option: PostPetPetIdUploadImageOption,
  ): Promise<PostPetPetIdUploadImageResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postPetPetIdUploadImageMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostPetPetIdUploadImageResponseSuccess
    >
  }

  postPetPetIdUploadImage.method = method
  postPetPetIdUploadImage.url = url
  return postPetPetIdUploadImage
})()

export interface GetStoreInventoryResponse {
  /** successful operation */
  200: {
    [propertyName: string]: number
  }
}

export type GetStoreInventoryResponseSuccess = GetStoreInventoryResponse[200]
export const getStoreInventoryMockData = ({
  additionalProp1: 0,
  additionalProp2: 0,
  additionalProp3: 0,
} as unknown) as GetStoreInventoryResponseSuccess
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/store/inventory'
  function getStoreInventory(): Promise<GetStoreInventoryResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getStoreInventoryMockData)
    }
    return requester(url, { method }) as Promise<
      GetStoreInventoryResponseSuccess
    >
  }

  getStoreInventory.method = method
  getStoreInventory.url = url
  return getStoreInventory
})()

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
export const postStoreOrderMockData = ({
  id: 0,
  petId: 0,
  quantity: 0,
  shipDate: '2019-09-03T00:00:00.000Z',
  status: 'placed',
  complete: false,
} as unknown) as PostStoreOrderResponseSuccess
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/store/order'
  function postStoreOrder(
    option: PostStoreOrderOption,
  ): Promise<PostStoreOrderResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postStoreOrderMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostStoreOrderResponseSuccess
    >
  }

  postStoreOrder.method = method
  postStoreOrder.url = url
  return postStoreOrder
})()

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
export const getStoreOrderOrderIdMockData = ({
  id: 0,
  petId: 0,
  quantity: 0,
  shipDate: '2019-09-03T00:00:00.000Z',
  status: 'placed',
  complete: false,
} as unknown) as GetStoreOrderOrderIdResponseSuccess
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/store/order/:orderId'
  function getStoreOrderOrderId(
    option: GetStoreOrderOrderIdOption,
  ): Promise<GetStoreOrderOrderIdResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getStoreOrderOrderIdMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      GetStoreOrderOrderIdResponseSuccess
    >
  }

  getStoreOrderOrderId.method = method
  getStoreOrderOrderId.url = url
  return getStoreOrderOrderId
})()

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
export const deleteStoreOrderOrderIdMockData = ('' as unknown) as DeleteStoreOrderOrderIdResponseSuccess
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = 'delete'
  const url = '/v2/store/order/:orderId'
  function deleteStoreOrderOrderId(
    option: DeleteStoreOrderOrderIdOption,
  ): Promise<DeleteStoreOrderOrderIdResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(deleteStoreOrderOrderIdMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      DeleteStoreOrderOrderIdResponseSuccess
    >
  }

  deleteStoreOrderOrderId.method = method
  deleteStoreOrderOrderId.url = url
  return deleteStoreOrderOrderId
})()

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
export const postUserMockData = ('' as unknown) as PostUserResponseSuccess
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export const postUser = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/user'
  function postUser(option: PostUserOption): Promise<PostUserResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postUserMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostUserResponseSuccess
    >
  }

  postUser.method = method
  postUser.url = url
  return postUser
})()

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
export const postUserCreateWithArrayMockData = ('' as unknown) as PostUserCreateWithArrayResponseSuccess
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithArray = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/user/createWithArray'
  function postUserCreateWithArray(
    option: PostUserCreateWithArrayOption,
  ): Promise<PostUserCreateWithArrayResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postUserCreateWithArrayMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostUserCreateWithArrayResponseSuccess
    >
  }

  postUserCreateWithArray.method = method
  postUserCreateWithArray.url = url
  return postUserCreateWithArray
})()

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
export const postUserCreateWithListMockData = ('' as unknown) as PostUserCreateWithListResponseSuccess
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
  const method = 'post'
  const url = '/v2/user/createWithList'
  function postUserCreateWithList(
    option: PostUserCreateWithListOption,
  ): Promise<PostUserCreateWithListResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(postUserCreateWithListMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PostUserCreateWithListResponseSuccess
    >
  }

  postUserCreateWithList.method = method
  postUserCreateWithList.url = url
  return postUserCreateWithList
})()

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
export const getUserLoginMockData = ('string' as unknown) as GetUserLoginResponseSuccess
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogin = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/user/login'
  function getUserLogin(
    option: GetUserLoginOption,
  ): Promise<GetUserLoginResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getUserLoginMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      GetUserLoginResponseSuccess
    >
  }

  getUserLogin.method = method
  getUserLogin.url = url
  return getUserLogin
})()

export interface GetUserLogoutResponse {
  /** successful operation */
  default: any
}

export type GetUserLogoutResponseSuccess = GetUserLogoutResponse['default']
export const getUserLogoutMockData = ('' as unknown) as GetUserLogoutResponseSuccess
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogout = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/user/logout'
  function getUserLogout(): Promise<GetUserLogoutResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getUserLogoutMockData)
    }
    return requester(url, { method }) as Promise<GetUserLogoutResponseSuccess>
  }

  getUserLogout.method = method
  getUserLogout.url = url
  return getUserLogout
})()

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
export const getUserUsernameMockData = ({
  id: 0,
  username: 'string',
  firstName: 'string',
  lastName: 'string',
  email: 'string',
  password: 'string',
  phone: 'string',
  userStatus: 0,
} as unknown) as GetUserUsernameResponseSuccess
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserUsername = /* #__PURE__ */ (() => {
  const method = 'get'
  const url = '/v2/user/:username'
  function getUserUsername(
    option: GetUserUsernameOption,
  ): Promise<GetUserUsernameResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(getUserUsernameMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      GetUserUsernameResponseSuccess
    >
  }

  getUserUsername.method = method
  getUserUsername.url = url
  return getUserUsername
})()

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
export const putUserUsernameMockData = ('' as unknown) as PutUserUsernameResponseSuccess
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export const putUserUsername = /* #__PURE__ */ (() => {
  const method = 'put'
  const url = '/v2/user/:username'
  function putUserUsername(
    option: PutUserUsernameOption,
  ): Promise<PutUserUsernameResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(putUserUsernameMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      PutUserUsernameResponseSuccess
    >
  }

  putUserUsername.method = method
  putUserUsername.url = url
  return putUserUsername
})()

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
export const deleteUserUsernameMockData = ('' as unknown) as DeleteUserUsernameResponseSuccess
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
  const method = 'delete'
  const url = '/v2/user/:username'
  function deleteUserUsername(
    option: DeleteUserUsernameOption,
  ): Promise<DeleteUserUsernameResponseSuccess> {
    if (process.env.NODE_ENV === 'test') {
      return Promise.resolve(deleteUserUsernameMockData)
    }
    return requester(url, { method, ...option }) as Promise<
      DeleteUserUsernameResponseSuccess
    >
  }

  deleteUserUsername.method = method
  deleteUserUsername.url = url
  return deleteUserUsername
})()
