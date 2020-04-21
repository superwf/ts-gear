/** Do not modify this file manually.
its content will be overwriten next time execute the `tsg` command. */
import { PropertyOf } from "ts-gear";
import projects from "../../ts-gear";
import { Pet, ApiResponse, Order, User } from "./definition";
const project = projects.find(p => p.name === "pet")!;
const { requester } = project;
/** request parameter type for putPet */
export interface IPutPetOption {
  /** Pet object that needs to be added to the store */
  body: Pet;
}

export interface IPutPetResponse {
  /** Invalid ID supplied */
  400: any;
  /** Pet not found */
  404: any;
  /** Validation exception */
  405: any;
}

export type IPutPetResponseSuccess = any;
/**
 * Update an existing pet
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function putPet(option: IPutPetOption): Promise<IPutPetResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/pet", { method: "put", ...option }) as Promise<any>;
}

/** request parameter type for postPet */
export interface IPostPetOption {
  /** Pet object that needs to be added to the store */
  body: Pet;
}

export interface IPostPetResponse {
  /** Invalid input */
  405: any;
}

export type IPostPetResponseSuccess = any;
/**
 * Add a new pet to the store
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／json,application/xml
 */
export function postPet(
  option: IPostPetOption
): Promise<IPostPetResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/pet", { method: "post", ...option }) as Promise<any>;
}

/** request parameter type for getPetFindByStatus */
export interface IGetPetFindByStatusOption {
  /** Status values that need to be considered for filter */
  query: {
    /**
        Status values that need to be considered for filter */
    status: Array<"available" | "pending" | "sold">;
  };
}

export interface IGetPetFindByStatusResponse {
  /** successful operation */
  200: Array<Pet>;
  /** Invalid status value */
  400: any;
}

export type IGetPetFindByStatusResponseSuccess = PropertyOf<
  IGetPetFindByStatusResponse,
  200
>;
/**
 * Multiple status values can be provided with comma separated strings
 * Finds Pets by status
 * tags: pet
 * produces: application／xml,application/json
 */
export function getPetFindByStatus(
  option: IGetPetFindByStatusOption
): Promise<IGetPetFindByStatusResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve([
      {
        id: 0,
        category: { id: 0, pet: "", name: "string" },
        name: "doggie",
        photoUrls: ["string"],
        tags: [{ id: 0, name: "string" }],
        status: "available"
      }
    ] as any);
  }
  return requester("/v2/pet/findByStatus", {
    method: "get",
    ...option
  }) as Promise<any>;
}

/** request parameter type for getPetPetId */
export interface IGetPetPetIdOption {
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

export interface IGetPetPetIdResponse {
  /** successful operation */
  200: Pet;
  /** Invalid ID supplied */
  400: any;
  /** Pet not found */
  404: any;
}

export type IGetPetPetIdResponseSuccess = PropertyOf<IGetPetPetIdResponse, 200>;
/**
 * Returns a single pet
 * Find pet by ID
 * tags: pet
 * produces: application／xml,application/json
 */
export function getPetPetId(
  option: IGetPetPetIdOption
): Promise<IGetPetPetIdResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({
      id: 0,
      category: { id: 0, pet: "", name: "string" },
      name: "doggie",
      photoUrls: ["string"],
      tags: [{ id: 0, name: "string" }],
      status: "available"
    } as any);
  }
  return requester("/v2/pet/:petId", { method: "get", ...option }) as Promise<
    any
  >;
}

/** request parameter type for postPetPetId */
export interface IPostPetPetIdOption {
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

export interface IPostPetPetIdResponse {
  /** Invalid input */
  405: any;
}

export type IPostPetPetIdResponseSuccess = any;
/**
 * Updates a pet in the store with form data
 * tags: pet
 * produces: application／xml,application/json
 * consumes: application／x-www-form-urlencoded
 */
export function postPetPetId(
  option: IPostPetPetIdOption
): Promise<IPostPetPetIdResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/pet/:petId", { method: "post", ...option }) as Promise<
    any
  >;
}

/** request parameter type for deletePetPetId */
export interface IDeletePetPetIdOption {
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

export interface IDeletePetPetIdResponse {
  /** Invalid ID supplied */
  400: any;
  /** Pet not found */
  404: any;
}

export type IDeletePetPetIdResponseSuccess = any;
/**
 * Deletes a pet
 * tags: pet
 * produces: application／xml,application/json
 */
export function deletePetPetId(
  option: IDeletePetPetIdOption
): Promise<IDeletePetPetIdResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/pet/:petId", {
    method: "delete",
    ...option
  }) as Promise<any>;
}

/** request parameter type for postPetPetIdUploadImage */
export interface IPostPetPetIdUploadImageOption {
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

export interface IPostPetPetIdUploadImageResponse {
  /** successful operation */
  200: ApiResponse;
}

export type IPostPetPetIdUploadImageResponseSuccess = PropertyOf<
  IPostPetPetIdUploadImageResponse,
  200
>;
/**
 * uploads an image
 * tags: pet
 * produces: application／json
 * consumes: multipart／form-data
 */
export function postPetPetIdUploadImage(
  option: IPostPetPetIdUploadImageOption
): Promise<IPostPetPetIdUploadImageResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({
      code: 0,
      type: "string",
      message: "string"
    } as any);
  }
  return requester("/v2/pet/:petId/uploadImage", {
    method: "post",
    ...option
  }) as Promise<any>;
}

export interface IGetStoreInventoryResponse {
  /** successful operation */
  200: {
    [propertyName: string]: number;
  };
}

export type IGetStoreInventoryResponseSuccess = PropertyOf<
  IGetStoreInventoryResponse,
  200
>;
/**
 * Returns a map of status codes to quantities
 * Returns pet inventories by status
 * tags: store
 * produces: application／json
 */
export function getStoreInventory(): Promise<
  IGetStoreInventoryResponseSuccess
> {
  if (project.mockResponse) {
    return Promise.resolve({
      additionalProp1: 0,
      additionalProp2: 0,
      additionalProp3: 0
    } as any);
  }
  return requester("/v2/store/inventory", { method: "get" }) as Promise<any>;
}

/** request parameter type for postStoreOrder */
export interface IPostStoreOrderOption {
  /** order placed for purchasing the pet */
  body: Order;
}

export interface IPostStoreOrderResponse {
  /** successful operation */
  200: Order;
  /** Invalid Order */
  400: any;
}

export type IPostStoreOrderResponseSuccess = PropertyOf<
  IPostStoreOrderResponse,
  200
>;
/**
 * Place an order for a pet
 * tags: store
 * produces: application／xml,application/json
 */
export function postStoreOrder(
  option: IPostStoreOrderOption
): Promise<IPostStoreOrderResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: "2019-09-03T00:00:00.000Z",
      status: "placed",
      complete: false
    } as any);
  }
  return requester("/v2/store/order", { method: "post", ...option }) as Promise<
    any
  >;
}

/** request parameter type for getStoreOrderOrderId */
export interface IGetStoreOrderOrderIdOption {
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

export interface IGetStoreOrderOrderIdResponse {
  /** successful operation */
  200: Order;
  /** Invalid ID supplied */
  400: any;
  /** Order not found */
  404: any;
}

export type IGetStoreOrderOrderIdResponseSuccess = PropertyOf<
  IGetStoreOrderOrderIdResponse,
  200
>;
/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * Find purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function getStoreOrderOrderId(
  option: IGetStoreOrderOrderIdOption
): Promise<IGetStoreOrderOrderIdResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({
      id: 0,
      petId: 0,
      quantity: 0,
      shipDate: "2019-09-03T00:00:00.000Z",
      status: "placed",
      complete: false
    } as any);
  }
  return requester("/v2/store/order/:orderId", {
    method: "get",
    ...option
  }) as Promise<any>;
}

/** request parameter type for deleteStoreOrderOrderId */
export interface IDeleteStoreOrderOrderIdOption {
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

export interface IDeleteStoreOrderOrderIdResponse {
  /** Invalid ID supplied */
  400: any;
  /** Order not found */
  404: any;
}

export type IDeleteStoreOrderOrderIdResponseSuccess = any;
/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * Delete purchase order by ID
 * tags: store
 * produces: application／xml,application/json
 */
export function deleteStoreOrderOrderId(
  option: IDeleteStoreOrderOrderIdOption
): Promise<IDeleteStoreOrderOrderIdResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/store/order/:orderId", {
    method: "delete",
    ...option
  }) as Promise<any>;
}

/** request parameter type for postUser */
export interface IPostUserOption {
  /** Created user object */
  body: User;
}

export interface IPostUserResponse {
  /** successful operation */
  default: any;
}

export type IPostUserResponseSuccess = PropertyOf<IPostUserResponse, "default">;
/**
 * This can only be done by the logged in user.
 * Create user
 * tags: user
 * produces: application／xml,application/json
 */
export function postUser(
  option: IPostUserOption
): Promise<IPostUserResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/user", { method: "post", ...option }) as Promise<any>;
}

/** request parameter type for postUserCreateWithArray */
export interface IPostUserCreateWithArrayOption {
  /** List of user object */
  body: Array<User>;
}

export interface IPostUserCreateWithArrayResponse {
  /** successful operation */
  default: any;
}

export type IPostUserCreateWithArrayResponseSuccess = PropertyOf<
  IPostUserCreateWithArrayResponse,
  "default"
>;
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithArray(
  option: IPostUserCreateWithArrayOption
): Promise<IPostUserCreateWithArrayResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/user/createWithArray", {
    method: "post",
    ...option
  }) as Promise<any>;
}

/** request parameter type for postUserCreateWithList */
export interface IPostUserCreateWithListOption {
  /** List of user object */
  body: Array<User>;
}

export interface IPostUserCreateWithListResponse {
  /** successful operation */
  default: any;
}

export type IPostUserCreateWithListResponseSuccess = PropertyOf<
  IPostUserCreateWithListResponse,
  "default"
>;
/**
 * Creates list of users with given input array
 * tags: user
 * produces: application／xml,application/json
 */
export function postUserCreateWithList(
  option: IPostUserCreateWithListOption
): Promise<IPostUserCreateWithListResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/user/createWithList", {
    method: "post",
    ...option
  }) as Promise<any>;
}

/** request parameter type for getUserLogin */
export interface IGetUserLoginOption {
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

export interface IGetUserLoginResponse {
  /** successful operation */
  200: string;
  /** Invalid username／password supplied */
  400: any;
}

export type IGetUserLoginResponseSuccess = PropertyOf<
  IGetUserLoginResponse,
  200
>;
/**
 * Logs user into the system
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogin(
  option: IGetUserLoginOption
): Promise<IGetUserLoginResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("string" as any);
  }
  return requester("/v2/user/login", { method: "get", ...option }) as Promise<
    any
  >;
}

export interface IGetUserLogoutResponse {
  /** successful operation */
  default: any;
}

export type IGetUserLogoutResponseSuccess = PropertyOf<
  IGetUserLogoutResponse,
  "default"
>;
/**
 * Logs out current logged in user session
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserLogout(): Promise<IGetUserLogoutResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/user/logout", { method: "get" }) as Promise<any>;
}

/** request parameter type for getUserUsername */
export interface IGetUserUsernameOption {
  /** The name that needs to be fetched. Use user1 for testing. */
  path: {
    /**
        The name that needs to be fetched. Use user1 for testing.  */
    username: string;
  };
}

export interface IGetUserUsernameResponse {
  /** successful operation */
  200: User;
  /** Invalid username supplied */
  400: any;
  /** User not found */
  404: any;
}

export type IGetUserUsernameResponseSuccess = PropertyOf<
  IGetUserUsernameResponse,
  200
>;
/**
 * Get user by user name
 * tags: user
 * produces: application／xml,application/json
 */
export function getUserUsername(
  option: IGetUserUsernameOption
): Promise<IGetUserUsernameResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve({
      id: 0,
      username: "string",
      firstName: "string",
      lastName: "string",
      email: "string",
      password: "string",
      phone: "string",
      userStatus: 0
    } as any);
  }
  return requester("/v2/user/:username", {
    method: "get",
    ...option
  }) as Promise<any>;
}

/** request parameter type for putUserUsername */
export interface IPutUserUsernameOption {
  /** name that need to be updated */
  path: {
    /**
        name that need to be updated */
    username: string;
  };
  /** Updated user object */
  body: User;
}

export interface IPutUserUsernameResponse {
  /** Invalid user supplied */
  400: any;
  /** User not found */
  404: any;
}

export type IPutUserUsernameResponseSuccess = any;
/**
 * This can only be done by the logged in user.
 * Updated user
 * tags: user
 * produces: application／xml,application/json
 */
export function putUserUsername(
  option: IPutUserUsernameOption
): Promise<IPutUserUsernameResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/user/:username", {
    method: "put",
    ...option
  }) as Promise<any>;
}

/** request parameter type for deleteUserUsername */
export interface IDeleteUserUsernameOption {
  /** The name that needs to be deleted */
  path: {
    /**
        The name that needs to be deleted */
    username: string;
  };
}

export interface IDeleteUserUsernameResponse {
  /** Invalid username supplied */
  400: any;
  /** User not found */
  404: any;
}

export type IDeleteUserUsernameResponseSuccess = any;
/**
 * This can only be done by the logged in user.
 * Delete user
 * tags: user
 * produces: application／xml,application/json
 */
export function deleteUserUsername(
  option: IDeleteUserUsernameOption
): Promise<IDeleteUserUsernameResponseSuccess> {
  if (project.mockResponse) {
    return Promise.resolve("" as any);
  }
  return requester("/v2/user/:username", {
    method: "delete",
    ...option
  }) as Promise<any>;
}
