/* eslint-disable */
/* tslint:disable */
/** Do not modify manually.
content is generated automatically by `ts-gear`. */
import { requester as requester } from "../../requester";
import type {
  GetPetFindByStatusStatus,
  Pet,
  ApiResponse,
  Order,
  User,
} from "./definition";

/** @description request parameter type for putPet */
export interface PutPetOption {
  body: Pet;
}

/** @description response type for putPet */
export interface PutPetResponse {
  /**
   * @description
   *   Successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Pet not found
   */
  404: any;
  /**
   * @description
   *   Validation exception
   */
  405: any;
}

export type PutPetResponseSuccess = PutPetResponse[200];
/**
 * @description
 *   Update an existing pet by Id
 *   Update an existing pet
 * @tags pet
 */
export const putPet = /* #__PURE__ */ (() => {
  /** http method */
  const method = "put";
  /** request url */
  const url = "/pet";
  const mockData = {
    id: 10,
    name: "doggie",
    category: { id: 1, name: "Dogs" },
    photoUrls: ["string"],
    tags: [{ id: 0, name: "string" }],
    status: "available",
  } as unknown as PutPetResponseSuccess;
  const mockRequest = function (
    option: PutPetOption & RequestInit
  ): Promise<PutPetResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for postPet */
export interface PostPetOption {
  body: Pet;
}

/** @description response type for postPet */
export interface PostPetResponse {
  /**
   * @description
   *   Successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid input
   */
  405: any;
}

export type PostPetResponseSuccess = PostPetResponse[200];
/**
 * @description
 *   Add a new pet to the store
 *   Add a new pet to the store
 * @tags pet
 */
export const postPet = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/pet";
  const mockData = {
    id: 10,
    name: "doggie",
    category: { id: 1, name: "Dogs" },
    photoUrls: ["string"],
    tags: [{ id: 0, name: "string" }],
    status: "available",
  } as unknown as PostPetResponseSuccess;
  const mockRequest = function (
    option: PostPetOption & RequestInit
  ): Promise<PostPetResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for getPetFindByStatus */
export interface GetPetFindByStatusOption {
  /**
   * @description
   *   Status values that need to be considered for filter
   */
  query?: {
    /**
        @description
          Status values that need to be considered for filter */
    status?: GetPetFindByStatusStatus;
  };
}

/** @description response type for getPetFindByStatus */
export interface GetPetFindByStatusResponse {
  /**
   * @description
   *   successful operation
   */
  200: Array<Pet>;
  /**
   * @description
   *   Invalid status value
   */
  400: any;
}

export type GetPetFindByStatusResponseSuccess = GetPetFindByStatusResponse[200];
/**
 * @description
 *   Multiple status values can be provided with comma separated strings
 *   Finds Pets by status
 * @tags pet
 */
export const getPetFindByStatus = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/pet/findByStatus";
  const mockData = [
    {
      id: 10,
      name: "doggie",
      category: { id: 1, name: "Dogs" },
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available",
    },
  ] as unknown as GetPetFindByStatusResponseSuccess;
  const mockRequest = function (
    option?: GetPetFindByStatusOption & RequestInit
  ): Promise<GetPetFindByStatusResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for getPetFindByTags */
export interface GetPetFindByTagsOption {
  /**
   * @description
   *   Tags to filter by
   */
  query?: {
    /**
        @description
          Tags to filter by */
    tags?: Array<string>;
  };
}

/** @description response type for getPetFindByTags */
export interface GetPetFindByTagsResponse {
  /**
   * @description
   *   successful operation
   */
  200: Array<Pet>;
  /**
   * @description
   *   Invalid tag value
   */
  400: any;
}

export type GetPetFindByTagsResponseSuccess = GetPetFindByTagsResponse[200];
/**
 * @description
 *   Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 *   Finds Pets by tags
 * @tags pet
 */
export const getPetFindByTags = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/pet/findByTags";
  const mockData = [
    {
      id: 10,
      name: "doggie",
      category: { id: 1, name: "Dogs" },
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available",
    },
  ] as unknown as GetPetFindByTagsResponseSuccess;
  const mockRequest = function (
    option?: GetPetFindByTagsOption & RequestInit
  ): Promise<GetPetFindByTagsResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for getPetPetId */
export interface GetPetPetIdOption {
  /**
   * @description
   *   ID of pet to return
   */
  path: {
    /**
        @description
          ID of pet to return */
    petId: number;
  };
}

/** @description response type for getPetPetId */
export interface GetPetPetIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Pet;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Pet not found
   */
  404: any;
}

export type GetPetPetIdResponseSuccess = GetPetPetIdResponse[200];
/**
 * @description
 *   Returns a single pet
 *   Find pet by ID
 * @tags pet
 */
export const getPetPetId = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/pet/:petId";
  const mockData = {
    id: 10,
    name: "doggie",
    category: { id: 1, name: "Dogs" },
    photoUrls: ["string"],
    tags: [{ id: 0, name: "string" }],
    status: "available",
  } as unknown as GetPetPetIdResponseSuccess;
  const mockRequest = function (
    option: GetPetPetIdOption & RequestInit
  ): Promise<GetPetPetIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for postPetPetId */
export interface PostPetPetIdOption {
  /**
   * @description
   *   ID of pet that needs to be updated
   */
  path: {
    /**
        @description
          ID of pet that needs to be updated */
    petId: number;
  };
}

/** @description request parameter type for postPetPetId */
export interface PostPetPetIdOption {
  /**
   * @description
   *   Name of pet that needs to be updated
   */
  query?: {
    /**
        @description
          Name of pet that needs to be updated */
    name?: string;
    /**
        @description
          Status of pet that needs to be updated */
    status?: string;
  };
}

/** @description response type for postPetPetId */
export interface PostPetPetIdResponse {
  /**
   * @description
   *   Invalid input
   */
  405: any;
}

export type PostPetPetIdResponseSuccess = any;
/**
 * @description
 *   Updates a pet in the store with form data
 * @tags pet
 */
export const postPetPetId = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/pet/:petId";
  const mockData = "" as unknown as PostPetPetIdResponseSuccess;
  const mockRequest = function (
    option: PostPetPetIdOption & RequestInit
  ): Promise<PostPetPetIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for deletePetPetId */
export interface DeletePetPetIdOption {
  /** @description */
  header?: {
    /**
        @description */
    api_key?: string;
  };
}

/** @description request parameter type for deletePetPetId */
export interface DeletePetPetIdOption {
  /**
   * @description
   *   Pet id to delete
   */
  path: {
    /**
        @description
          Pet id to delete */
    petId: number;
  };
}

/** @description response type for deletePetPetId */
export interface DeletePetPetIdResponse {
  /**
   * @description
   *   Invalid pet value
   */
  400: any;
}

export type DeletePetPetIdResponseSuccess = any;
/**
 * @description
 *   Deletes a pet
 * @tags pet
 */
export const deletePetPetId = /* #__PURE__ */ (() => {
  /** http method */
  const method = "delete";
  /** request url */
  const url = "/pet/:petId";
  const mockData = "" as unknown as DeletePetPetIdResponseSuccess;
  const mockRequest = function (
    option: DeletePetPetIdOption & RequestInit
  ): Promise<DeletePetPetIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  /**
   * @description
   *   ID of pet to update
   */
  path: {
    /**
        @description
          ID of pet to update */
    petId: number;
  };
}

/** @description request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  /**
   * @description
   *   Additional Metadata
   */
  query?: {
    /**
        @description
          Additional Metadata */
    additionalMetadata?: string;
  };
}

/** @description request parameter type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageOption {
  body?: File;
}

/** @description response type for postPetPetIdUploadImage */
export interface PostPetPetIdUploadImageResponse {
  /**
   * @description
   *   successful operation
   */
  200: ApiResponse;
}

export type PostPetPetIdUploadImageResponseSuccess =
  PostPetPetIdUploadImageResponse[200];
/**
 * @description
 *   uploads an image
 * @tags pet
 */
export const postPetPetIdUploadImage = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/pet/:petId/uploadImage";
  const mockData = {
    code: 0,
    type: "string",
    message: "string",
  } as unknown as PostPetPetIdUploadImageResponseSuccess;
  const mockRequest = function (
    option: PostPetPetIdUploadImageOption & RequestInit
  ): Promise<PostPetPetIdUploadImageResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description response type for getStoreInventory */
export interface GetStoreInventoryResponse {
  /**
   * @description
   *   successful operation
   */
  200: {
    [propertyName: string]: number;
  };
}

export type GetStoreInventoryResponseSuccess = GetStoreInventoryResponse[200];
/**
 * @description
 *   Returns a map of status codes to quantities
 *   Returns pet inventories by status
 * @tags store
 */
export const getStoreInventory = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/store/inventory";
  const mockData = {
    additionalProp1: 0,
    additionalProp2: 0,
    additionalProp3: 0,
  } as unknown as GetStoreInventoryResponseSuccess;
  const mockRequest = function (
    option?: RequestInit
  ): Promise<GetStoreInventoryResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for postStoreOrder */
export interface PostStoreOrderOption {
  body?: Order;
}

/** @description response type for postStoreOrder */
export interface PostStoreOrderResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order;
  /**
   * @description
   *   Invalid input
   */
  405: any;
}

export type PostStoreOrderResponseSuccess = PostStoreOrderResponse[200];
/**
 * @description
 *   Place a new order in the store
 *   Place an order for a pet
 * @tags store
 */
export const postStoreOrder = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/store/order";
  const mockData = {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: "2019-09-03T00:00:00.000Z",
    status: "approved",
    complete: true,
  } as unknown as PostStoreOrderResponseSuccess;
  const mockRequest = function (
    option?: PostStoreOrderOption & RequestInit
  ): Promise<PostStoreOrderResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for getStoreOrderOrderId */
export interface GetStoreOrderOrderIdOption {
  /**
   * @description
   *   ID of order that needs to be fetched
   */
  path: {
    /**
        @description
          ID of order that needs to be fetched */
    orderId: number;
  };
}

/** @description response type for getStoreOrderOrderId */
export interface GetStoreOrderOrderIdResponse {
  /**
   * @description
   *   successful operation
   */
  200: Order;
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Order not found
   */
  404: any;
}

export type GetStoreOrderOrderIdResponseSuccess =
  GetStoreOrderOrderIdResponse[200];
/**
 * @description
 *   For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
 *   Find purchase order by ID
 * @tags store
 */
export const getStoreOrderOrderId = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/store/order/:orderId";
  const mockData = {
    id: 10,
    petId: 198772,
    quantity: 7,
    shipDate: "2019-09-03T00:00:00.000Z",
    status: "approved",
    complete: true,
  } as unknown as GetStoreOrderOrderIdResponseSuccess;
  const mockRequest = function (
    option: GetStoreOrderOrderIdOption & RequestInit
  ): Promise<GetStoreOrderOrderIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for deleteStoreOrderOrderId */
export interface DeleteStoreOrderOrderIdOption {
  /**
   * @description
   *   ID of the order that needs to be deleted
   */
  path: {
    /**
        @description
          ID of the order that needs to be deleted */
    orderId: number;
  };
}

/** @description response type for deleteStoreOrderOrderId */
export interface DeleteStoreOrderOrderIdResponse {
  /**
   * @description
   *   Invalid ID supplied
   */
  400: any;
  /**
   * @description
   *   Order not found
   */
  404: any;
}

export type DeleteStoreOrderOrderIdResponseSuccess = any;
/**
 * @description
 *   For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
 *   Delete purchase order by ID
 * @tags store
 */
export const deleteStoreOrderOrderId = /* #__PURE__ */ (() => {
  /** http method */
  const method = "delete";
  /** request url */
  const url = "/store/order/:orderId";
  const mockData = "" as unknown as DeleteStoreOrderOrderIdResponseSuccess;
  const mockRequest = function (
    option: DeleteStoreOrderOrderIdOption & RequestInit
  ): Promise<DeleteStoreOrderOrderIdResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for postUser */
export interface PostUserOption {
  body?: User;
}

/** @description response type for postUser */
export interface PostUserResponse {
  /**
   * @description
   *   successful operation
   */
  default: User;
}

export type PostUserResponseSuccess = PostUserResponse["default"];
/**
 * @description
 *   This can only be done by the logged in user.
 *   Create user
 * @tags user
 */
export const postUser = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/user";
  const mockData = {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  } as unknown as PostUserResponseSuccess;
  const mockRequest = function (
    option?: PostUserOption & RequestInit
  ): Promise<PostUserResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for postUserCreateWithList */
export interface PostUserCreateWithListOption {
  body?: Array<User>;
}

/** @description response type for postUserCreateWithList */
export interface PostUserCreateWithListResponse {
  /**
   * @description
   *   Successful operation
   */
  200: User;
  /**
   * @description
   *   successful operation
   */
  default: any;
}

export type PostUserCreateWithListResponseSuccess =
  PostUserCreateWithListResponse[200];
/**
 * @description
 *   Creates list of users with given input array
 *   Creates list of users with given input array
 * @tags user
 */
export const postUserCreateWithList = /* #__PURE__ */ (() => {
  /** http method */
  const method = "post";
  /** request url */
  const url = "/user/createWithList";
  const mockData = {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  } as unknown as PostUserCreateWithListResponseSuccess;
  const mockRequest = function (
    option?: PostUserCreateWithListOption & RequestInit
  ): Promise<PostUserCreateWithListResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for getUserLogin */
export interface GetUserLoginOption {
  /**
   * @description
   *   The user name for login
   */
  query?: {
    /**
        @description
          The user name for login */
    username?: string;
    /**
        @description
          The password for login in clear text */
    password?: string;
  };
}

/** @description response type for getUserLogin */
export interface GetUserLoginResponse {
  /**
   * @description
   *   successful operation
   */
  200: string;
  /**
   * @description
   *   Invalid username/password supplied
   */
  400: any;
}

export type GetUserLoginResponseSuccess = GetUserLoginResponse[200];
/**
 * @description
 *   Logs user into the system
 * @tags user
 */
export const getUserLogin = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/user/login";
  const mockData = "string" as unknown as GetUserLoginResponseSuccess;
  const mockRequest = function (
    option?: GetUserLoginOption & RequestInit
  ): Promise<GetUserLoginResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description response type for getUserLogout */
export interface GetUserLogoutResponse {
  /**
   * @description
   *   successful operation
   */
  default: any;
}

export type GetUserLogoutResponseSuccess = GetUserLogoutResponse["default"];
/**
 * @description
 *   Logs out current logged in user session
 * @tags user
 */
export const getUserLogout = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/user/logout";
  const mockData = "" as unknown as GetUserLogoutResponseSuccess;
  const mockRequest = function (
    option?: RequestInit
  ): Promise<GetUserLogoutResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for getUserUsername */
export interface GetUserUsernameOption {
  /**
   * @description
   *   The name that needs to be fetched. Use user1 for testing.
   */
  path: {
    /**
        @description
          The name that needs to be fetched. Use user1 for testing.  */
    username: string;
  };
}

/** @description response type for getUserUsername */
export interface GetUserUsernameResponse {
  /**
   * @description
   *   successful operation
   */
  200: User;
  /**
   * @description
   *   Invalid username supplied
   */
  400: any;
  /**
   * @description
   *   User not found
   */
  404: any;
}

export type GetUserUsernameResponseSuccess = GetUserUsernameResponse[200];
/**
 * @description
 *   Get user by user name
 * @tags user
 */
export const getUserUsername = /* #__PURE__ */ (() => {
  /** http method */
  const method = "get";
  /** request url */
  const url = "/user/:username";
  const mockData = {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  } as unknown as GetUserUsernameResponseSuccess;
  const mockRequest = function (
    option: GetUserUsernameOption & RequestInit
  ): Promise<GetUserUsernameResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for putUserUsername */
export interface PutUserUsernameOption {
  /**
   * @description
   *   name that needs to be updated
   */
  path: {
    /**
        @description
          name that needs to be updated */
    username: string;
  };
}

/** @description request parameter type for putUserUsername */
export interface PutUserUsernameOption {
  body?: User;
}

/** @description response type for putUserUsername */
export interface PutUserUsernameResponse {
  /**
   * @description
   *   successful operation
   */
  default: any;
}

export type PutUserUsernameResponseSuccess = PutUserUsernameResponse["default"];
/**
 * @description
 *   This can only be done by the logged in user.
 *   Update user
 * @tags user
 */
export const putUserUsername = /* #__PURE__ */ (() => {
  /** http method */
  const method = "put";
  /** request url */
  const url = "/user/:username";
  const mockData = "" as unknown as PutUserUsernameResponseSuccess;
  const mockRequest = function (
    option: PutUserUsernameOption & RequestInit
  ): Promise<PutUserUsernameResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();

/** @description request parameter type for deleteUserUsername */
export interface DeleteUserUsernameOption {
  /**
   * @description
   *   The name that needs to be deleted
   */
  path: {
    /**
        @description
          The name that needs to be deleted */
    username: string;
  };
}

/** @description response type for deleteUserUsername */
export interface DeleteUserUsernameResponse {
  /**
   * @description
   *   Invalid username supplied
   */
  400: any;
  /**
   * @description
   *   User not found
   */
  404: any;
}

export type DeleteUserUsernameResponseSuccess = any;
/**
 * @description
 *   This can only be done by the logged in user.
 *   Delete user
 * @tags user
 */
export const deleteUserUsername = /* #__PURE__ */ (() => {
  /** http method */
  const method = "delete";
  /** request url */
  const url = "/user/:username";
  const mockData = "" as unknown as DeleteUserUsernameResponseSuccess;
  const mockRequest = function (
    option: DeleteUserUsernameOption & RequestInit
  ): Promise<DeleteUserUsernameResponseSuccess> {
    return Promise.resolve(mockData);
  };
  mockRequest.method = method;
  mockRequest.url = url;
  mockRequest.mockData = mockData;
  return mockRequest;
})();
