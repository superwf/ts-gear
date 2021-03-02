/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../requester";
import type {
  GetPetFindByStatusItems,
  Pet,
  ApiResponse,
  Order,
  User,
} from "./definition";

/** request parameter type for putPet */
export interface PutPetOption {
  /** Pet object that needs to be added to the store */
  body: Pet;
}

export interface PutPetResponse {
  /** Invalid ID supplied */
  400: any;
  /** Pet not found */
  404: any;
  /** Validation exception */
  405: any;
}

export type PutPetResponseSuccess = any;
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const putPet = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/v2/pet";
  const mockData = ("" as unknown) as PutPetResponseSuccess;
  const mockRequest = function (
    option: PutPetOption
  ): Promise<PutPetResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for postPet */
export interface PostPetOption {
  /** Pet object that needs to be added to the store */
  body: Pet;
}

export interface PostPetResponse {
  /** Invalid input */
  405: any;
}

export type PostPetResponseSuccess = any;
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export const postPet = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/pet";
  const mockData = ("" as unknown) as PostPetResponseSuccess;
  const mockRequest = function (
    option: PostPetOption
  ): Promise<PostPetResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for getPetFindByStatus */
export interface GetPetFindByStatusOption {
  /** Status values that need to be considered for filter */
  query: {
    /**
        Status values that need to be considered for filter */
    status: Array<GetPetFindByStatusItems>;
  };
}

export interface GetPetFindByStatusResponse {
  /** successful operation */
  200: Array<Pet>;
  /** Invalid status value */
  400: any;
}

export type GetPetFindByStatusResponseSuccess = GetPetFindByStatusResponse[200];
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/pet/findByStatus";
  const mockData = ([
    {
      id: 0,
      category: { id: 0, pet: "", name: "string" },
      name: "doggie",
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available",
    },
  ] as unknown) as GetPetFindByStatusResponseSuccess;
  const mockRequest = function (
    option: GetPetFindByStatusOption
  ): Promise<GetPetFindByStatusResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

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
    petId: number;
  };
}

export interface GetPetPetIdResponse {
  /** successful operation */
  200: Pet;
  /** Invalid ID supplied */
  400: any;
  /** Pet not found */
  404: any;
}

export type GetPetPetIdResponseSuccess = GetPetPetIdResponse[200];
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export const getPetPetId = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/pet/:petId";
  const mockData = ({
    id: 0,
    category: { id: 0, pet: "", name: "string" },
    name: "doggie",
    photoUrls: ["string"],
    tags: [{ id: 0, name: "string" }],
    status: "available",
  } as unknown) as GetPetPetIdResponseSuccess;
  const mockRequest = function (
    option: GetPetPetIdOption
  ): Promise<GetPetPetIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

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
    petId: number;
  };
  /** Updated name of the pet */
  formData?: {
    /**
        Updated name of the pet */
    name?: string;
    /**
        Updated status of the pet */
    status?: string;
  };
}

export interface PostPetPetIdResponse {
  /** Invalid input */
  405: any;
}

export type PostPetPetIdResponseSuccess = any;
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export const postPetPetId = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/pet/:petId";
  const mockData = ("" as unknown) as PostPetPetIdResponseSuccess;
  const mockRequest = function (
    option: PostPetPetIdOption
  ): Promise<PostPetPetIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for deletePetPetId */
export interface DeletePetPetIdOption {
  header?: {
    api_key?: string;
  };
  /**
   * Pet id to delete
   * format: int64
   */
  path: {
    /**
        Pet id to delete
        format: int64 */
    petId: number;
  };
}

export interface DeletePetPetIdResponse {
  /** Invalid ID supplied */
  400: any;
  /** Pet not found */
  404: any;
}

export type DeletePetPetIdResponseSuccess = any;
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/v2/pet/:petId";
  const mockData = ("" as unknown) as DeletePetPetIdResponseSuccess;
  const mockRequest = function (
    option: DeletePetPetIdOption
  ): Promise<DeletePetPetIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

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
    petId: number;
  };
  /** Additional data to pass to server */
  formData?: {
    /**
        Additional data to pass to server */
    additionalMetadata?: string;
    /**
        file to upload */
    file?: File;
  };
}

export interface PostPetPetIdUploadImageResponse {
  /** successful operation */
  200: ApiResponse;
}

export type PostPetPetIdUploadImageResponseSuccess = PostPetPetIdUploadImageResponse[200];
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/pet/:petId/uploadImage";
  const mockData = ({
    code: 0,
    type: "string",
    message: "string",
  } as unknown) as PostPetPetIdUploadImageResponseSuccess;
  const mockRequest = function (
    option: PostPetPetIdUploadImageOption
  ): Promise<PostPetPetIdUploadImageResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

export interface GetStoreInventoryResponse {
  /** successful operation */
  200: {
    [propertyName: string]: number;
  };
}

export type GetStoreInventoryResponseSuccess = GetStoreInventoryResponse[200];
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/store/inventory";
  const mockData = ({
    additionalProp1: 0,
    additionalProp2: 0,
    additionalProp3: 0,
  } as unknown) as GetStoreInventoryResponseSuccess;
  const mockRequest = function (): Promise<GetStoreInventoryResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for postStoreOrder */
export interface PostStoreOrderOption {
  /** order placed for purchasing the pet */
  body: Order;
}

export interface PostStoreOrderResponse {
  /** successful operation */
  200: Order;
  /** Invalid Order */
  400: any;
}

export type PostStoreOrderResponseSuccess = PostStoreOrderResponse[200];
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/store/order";
  const mockData = ({
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2019-09-03T00:00:00.000Z",
    status: "placed",
    complete: false,
  } as unknown) as PostStoreOrderResponseSuccess;
  const mockRequest = function (
    option: PostStoreOrderOption
  ): Promise<PostStoreOrderResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

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
    orderId: number;
  };
}

export interface GetStoreOrderOrderIdResponse {
  /** successful operation */
  200: Order;
  /** Invalid ID supplied */
  400: any;
  /** Order not found */
  404: any;
}

export type GetStoreOrderOrderIdResponseSuccess = GetStoreOrderOrderIdResponse[200];
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/store/order/:orderId";
  const mockData = ({
    id: 0,
    petId: 0,
    quantity: 0,
    shipDate: "2019-09-03T00:00:00.000Z",
    status: "placed",
    complete: false,
  } as unknown) as GetStoreOrderOrderIdResponseSuccess;
  const mockRequest = function (
    option: GetStoreOrderOrderIdOption
  ): Promise<GetStoreOrderOrderIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

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
    orderId: number;
  };
}

export interface DeleteStoreOrderOrderIdResponse {
  /** Invalid ID supplied */
  400: any;
  /** Order not found */
  404: any;
}

export type DeleteStoreOrderOrderIdResponseSuccess = any;
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/v2/store/order/:orderId";
  const mockData = ("" as unknown) as DeleteStoreOrderOrderIdResponseSuccess;
  const mockRequest = function (
    option: DeleteStoreOrderOrderIdOption
  ): Promise<DeleteStoreOrderOrderIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for postUser */
export interface PostUserOption {
  /** Created user object */
  body: User;
}

export interface PostUserResponse {
  /** successful operation */
  default: any;
}

export type PostUserResponseSuccess = PostUserResponse["default"];
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export const postUser = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/user";
  const mockData = ("" as unknown) as PostUserResponseSuccess;
  const mockRequest = function (
    option: PostUserOption
  ): Promise<PostUserResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for postUserCreateWithArray */
export interface PostUserCreateWithArrayOption {
  /** List of user object */
  body: Array<User>;
}

export interface PostUserCreateWithArrayResponse {
  /** successful operation */
  default: any;
}

export type PostUserCreateWithArrayResponseSuccess = PostUserCreateWithArrayResponse["default"];
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithArray = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/user/createWithArray";
  const mockData = ("" as unknown) as PostUserCreateWithArrayResponseSuccess;
  const mockRequest = function (
    option: PostUserCreateWithArrayOption
  ): Promise<PostUserCreateWithArrayResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for postUserCreateWithList */
export interface PostUserCreateWithListOption {
  /** List of user object */
  body: Array<User>;
}

export interface PostUserCreateWithListResponse {
  /** successful operation */
  default: any;
}

export type PostUserCreateWithListResponseSuccess = PostUserCreateWithListResponse["default"];
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
  const method = "post";
  const url = "/v2/user/createWithList";
  const mockData = ("" as unknown) as PostUserCreateWithListResponseSuccess;
  const mockRequest = function (
    option: PostUserCreateWithListOption
  ): Promise<PostUserCreateWithListResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for getUserLogin */
export interface GetUserLoginOption {
  /** The user name for login */
  query: {
    /**
        The user name for login */
    username: string;
    /**
        The password for login in clear text */
    password: string;
  };
}

export interface GetUserLoginResponse {
  /** successful operation */
  200: string;
  /** Invalid username／password supplied */
  400: any;
}

export type GetUserLoginResponseSuccess = GetUserLoginResponse[200];
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogin = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/user/login";
  const mockData = ("string" as unknown) as GetUserLoginResponseSuccess;
  const mockRequest = function (
    option: GetUserLoginOption
  ): Promise<GetUserLoginResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

export interface GetUserLogoutResponse {
  /** successful operation */
  default: any;
}

export type GetUserLogoutResponseSuccess = GetUserLogoutResponse["default"];
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserLogout = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/user/logout";
  const mockData = ("" as unknown) as GetUserLogoutResponseSuccess;
  const mockRequest = function (): Promise<GetUserLogoutResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for getUserUsername */
export interface GetUserUsernameOption {
  /** The name that needs to be fetched. Use user1 for testing. */
  path: {
    /**
        The name that needs to be fetched. Use user1 for testing.  */
    username: string;
  };
}

export interface GetUserUsernameResponse {
  /** successful operation */
  200: User;
  /** Invalid username supplied */
  400: any;
  /** User not found */
  404: any;
}

export type GetUserUsernameResponseSuccess = GetUserUsernameResponse[200];
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export const getUserUsername = /* #__PURE__ */ (() => {
  const method = "get";
  const url = "/v2/user/:username";
  const mockData = ({
    id: 0,
    username: "string",
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string",
    phone: "string",
    userStatus: 0,
  } as unknown) as GetUserUsernameResponseSuccess;
  const mockRequest = function (
    option: GetUserUsernameOption
  ): Promise<GetUserUsernameResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for putUserUsername */
export interface PutUserUsernameOption {
  /** name that need to be updated */
  path: {
    /**
        name that need to be updated */
    username: string;
  };
  /** Updated user object */
  body: User;
}

export interface PutUserUsernameResponse {
  /** Invalid user supplied */
  400: any;
  /** User not found */
  404: any;
}

export type PutUserUsernameResponseSuccess = any;
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export const putUserUsername = /* #__PURE__ */ (() => {
  const method = "put";
  const url = "/v2/user/:username";
  const mockData = ("" as unknown) as PutUserUsernameResponseSuccess;
  const mockRequest = function (
    option: PutUserUsernameOption
  ): Promise<PutUserUsernameResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** request parameter type for deleteUserUsername */
export interface DeleteUserUsernameOption {
  /** The name that needs to be deleted */
  path: {
    /**
        The name that needs to be deleted */
    username: string;
  };
}

export interface DeleteUserUsernameResponse {
  /** Invalid username supplied */
  400: any;
  /** User not found */
  404: any;
}

export type DeleteUserUsernameResponseSuccess = any;
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
  const method = "delete";
  const url = "/v2/user/:username";
  const mockData = ("" as unknown) as DeleteUserUsernameResponseSuccess;
  const mockRequest = function (
    option: DeleteUserUsernameOption
  ): Promise<DeleteUserUsernameResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();
